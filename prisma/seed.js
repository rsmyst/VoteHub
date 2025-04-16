const { PrismaClient } = require("../src/generated/prisma/index.js");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

// Helper function to process arrays in batches
async function processInBatches(array, batchSize, processFn) {
  const results = [];
  for (let i = 0; i < array.length; i += batchSize) {
    const batch = array.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processFn));
    results.push(...batchResults);
  }
  return results;
}

async function main() {
  try {
    // Create categories first
    const usedNames = new Set();
    const categories = await processInBatches(
      Array(50).fill(null),
      10,
      async () => {
        let name;
        do {
          name = faker.word.noun();
        } while (usedNames.has(name));
        usedNames.add(name);

        return prisma.category.create({
          data: { name },
        });
      }
    );
    console.log(`✅ Created ${categories.length} categories`);

    // Create users
    const users = await processInBatches(Array(50).fill(null), 10, async () => {
      return prisma.user.create({
        data: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          name: faker.person.fullName(),
          role: faker.helpers.arrayElement(["USER", "ADMIN"]),
        },
      });
    });
    console.log(`✅ Created ${users.length} users`);

    // Create polls with options and categories
    const polls = await processInBatches(Array(50).fill(null), 5, async () => {
      const creator = faker.helpers.arrayElement(users);
      const poll = await prisma.poll.create({
        data: {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          creatorId: creator.id,
          isPublic: faker.datatype.boolean(),
          roomCode: faker.string.alphanumeric(6),
          status: faker.helpers.arrayElement(["ACTIVE", "CLOSED"]),
          options: {
            create: Array(faker.number.int({ min: 2, max: 5 }))
              .fill(null)
              .map(() => ({
                text: faker.lorem.word(),
              })),
          },
          categories: {
            create: faker.helpers
              .arrayElements(categories, faker.number.int({ min: 1, max: 3 }))
              .map((category) => ({
                categoryId: category.id,
              })),
          },
        },
        include: {
          options: true,
        },
      });

      // Create votes for each poll
      await processInBatches(poll.options, 5, async (option) => {
        const voters = faker.helpers.arrayElements(
          users,
          faker.number.int({ min: 0, max: 5 })
        );
        await processInBatches(voters, 5, async (user) => {
          return prisma.vote.create({
            data: {
              pollId: poll.id,
              optionId: option.id,
              userId: user.id,
            },
          });
        });
      });

      // Create comments for each poll
      const commentCount = faker.number.int({ min: 0, max: 5 });
      await processInBatches(Array(commentCount).fill(null), 5, async () => {
        const commenter = faker.helpers.arrayElement(users);
        return prisma.comment.create({
          data: {
            content: faker.lorem.paragraph(),
            pollId: poll.id,
            userId: commenter.id,
          },
        });
      });

      // Create activity logs
      const activityCount = faker.number.int({ min: 1, max: 3 });
      await processInBatches(Array(activityCount).fill(null), 5, async () => {
        const user = faker.helpers.arrayElement(users);
        return prisma.activityLog.create({
          data: {
            userId: user.id,
            pollId: poll.id,
            action: faker.helpers.arrayElement(["VIEW", "VOTE", "COMMENT"]),
          },
        });
      });

      // Create poll participants
      const participantCount = faker.number.int({ min: 0, max: 5 });
      await processInBatches(
        Array(participantCount).fill(null),
        5,
        async () => {
          return prisma.pollParticipant.create({
            data: {
              pollId: poll.id,
              email: faker.internet.email(),
              status: faker.helpers.arrayElement([
                "PENDING",
                "ACCEPTED",
                "DECLINED",
              ]),
              respondedAt: faker.date.recent(),
            },
          });
        }
      );

      return poll;
    });
    console.log(`✅ Created ${polls.length} polls with related data`);

    // Create sessions with votes
    await processInBatches(Array(50).fill(null), 10, async () => {
      const session = await prisma.session.create({
        data: {
          expiresAt: faker.date.future(),
        },
      });

      const poll = faker.helpers.arrayElement(polls);
      const option = faker.helpers.arrayElement(poll.options);

      await prisma.vote.create({
        data: {
          pollId: poll.id,
          optionId: option.id,
          sessionId: session.id,
        },
      });
    });
    console.log(`✅ Created 50 sessions with votes`);

    console.log(`\n✨ Seeding completed successfully!`);
  } catch (error) {
    console.error(`\n❌ Error during seeding:`, error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
