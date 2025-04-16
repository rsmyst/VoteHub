import { Prisma } from "@/generated/prisma/index.js";

export type PollWithRelations = Prisma.PollGetPayload<{
  include: {
    options: {
      include: {
        votes: true;
      };
    };
    categories: {
      include: {
        category: true;
      };
    };
    creator: {
      select: {
        name: true;
      };
    };
  };
}>;
