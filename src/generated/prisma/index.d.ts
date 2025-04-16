
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Poll
 * 
 */
export type Poll = $Result.DefaultSelection<Prisma.$PollPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model PollCategory
 * 
 */
export type PollCategory = $Result.DefaultSelection<Prisma.$PollCategoryPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model PollParticipant
 * 
 */
export type PollParticipant = $Result.DefaultSelection<Prisma.$PollParticipantPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PollStatus: {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED'
};

export type PollStatus = (typeof PollStatus)[keyof typeof PollStatus]


export const ParticipantStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PollStatus = $Enums.PollStatus

export const PollStatus: typeof $Enums.PollStatus

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poll`: Exposes CRUD operations for the **Poll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polls
    * const polls = await prisma.poll.findMany()
    * ```
    */
  get poll(): Prisma.PollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollCategory`: Exposes CRUD operations for the **PollCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollCategories
    * const pollCategories = await prisma.pollCategory.findMany()
    * ```
    */
  get pollCategory(): Prisma.PollCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollParticipant`: Exposes CRUD operations for the **PollParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollParticipants
    * const pollParticipants = await prisma.pollParticipant.findMany()
    * ```
    */
  get pollParticipant(): Prisma.PollParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Poll: 'Poll',
    Option: 'Option',
    Vote: 'Vote',
    Comment: 'Comment',
    Category: 'Category',
    PollCategory: 'PollCategory',
    ActivityLog: 'ActivityLog',
    PollParticipant: 'PollParticipant',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "poll" | "option" | "vote" | "comment" | "category" | "pollCategory" | "activityLog" | "pollParticipant" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Poll: {
        payload: Prisma.$PollPayload<ExtArgs>
        fields: Prisma.PollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findFirst: {
            args: Prisma.PollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findMany: {
            args: Prisma.PollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          create: {
            args: Prisma.PollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          createMany: {
            args: Prisma.PollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          delete: {
            args: Prisma.PollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          update: {
            args: Prisma.PollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          deleteMany: {
            args: Prisma.PollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          upsert: {
            args: Prisma.PollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          aggregate: {
            args: Prisma.PollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoll>
          }
          groupBy: {
            args: Prisma.PollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollCountArgs<ExtArgs>
            result: $Utils.Optional<PollCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      PollCategory: {
        payload: Prisma.$PollCategoryPayload<ExtArgs>
        fields: Prisma.PollCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          findFirst: {
            args: Prisma.PollCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          findMany: {
            args: Prisma.PollCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>[]
          }
          create: {
            args: Prisma.PollCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          createMany: {
            args: Prisma.PollCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>[]
          }
          delete: {
            args: Prisma.PollCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          update: {
            args: Prisma.PollCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PollCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PollCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollCategoryPayload>
          }
          aggregate: {
            args: Prisma.PollCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollCategory>
          }
          groupBy: {
            args: Prisma.PollCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PollCategoryCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      PollParticipant: {
        payload: Prisma.$PollParticipantPayload<ExtArgs>
        fields: Prisma.PollParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          findFirst: {
            args: Prisma.PollParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          findMany: {
            args: Prisma.PollParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>[]
          }
          create: {
            args: Prisma.PollParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          createMany: {
            args: Prisma.PollParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>[]
          }
          delete: {
            args: Prisma.PollParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          update: {
            args: Prisma.PollParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          deleteMany: {
            args: Prisma.PollParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>[]
          }
          upsert: {
            args: Prisma.PollParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollParticipantPayload>
          }
          aggregate: {
            args: Prisma.PollParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollParticipant>
          }
          groupBy: {
            args: Prisma.PollParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<PollParticipantCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    poll?: PollOmit
    option?: OptionOmit
    vote?: VoteOmit
    comment?: CommentOmit
    category?: CategoryOmit
    pollCategory?: PollCategoryOmit
    activityLog?: ActivityLogOmit
    pollParticipant?: PollParticipantOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    polls: number
    comments: number
    votes: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polls?: boolean | UserCountOutputTypeCountPollsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type PollCountOutputType
   */

  export type PollCountOutputType = {
    options: number
    votes: number
    comments: number
    categories: number
    participants: number
    activityLogs: number
  }

  export type PollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | PollCountOutputTypeCountOptionsArgs
    votes?: boolean | PollCountOutputTypeCountVotesArgs
    comments?: boolean | PollCountOutputTypeCountCommentsArgs
    categories?: boolean | PollCountOutputTypeCountCategoriesArgs
    participants?: boolean | PollCountOutputTypeCountParticipantsArgs
    activityLogs?: boolean | PollCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCountOutputType
     */
    select?: PollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollCategoryWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollParticipantWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    votes: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | OptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    polls: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polls?: boolean | CategoryCountOutputTypeCountPollsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollCategoryWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    votes: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | SessionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    polls?: boolean | User$pollsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polls?: boolean | User$pollsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      polls: Prisma.$PollPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    polls<T extends User$pollsArgs<ExtArgs> = {}>(args?: Subset<T, User$pollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.polls
   */
  export type User$pollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    where?: PollWhereInput
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    cursor?: PollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Poll
   */

  export type AggregatePoll = {
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  export type PollMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    creatorId: string | null
    isPublic: boolean | null
    roomCode: string | null
    status: $Enums.PollStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PollMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    creatorId: string | null
    isPublic: boolean | null
    roomCode: string | null
    status: $Enums.PollStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PollCountAggregateOutputType = {
    id: number
    title: number
    description: number
    creatorId: number
    isPublic: number
    roomCode: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PollMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creatorId?: true
    isPublic?: true
    roomCode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PollMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creatorId?: true
    isPublic?: true
    roomCode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PollCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creatorId?: true
    isPublic?: true
    roomCode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poll to aggregate.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Polls
    **/
    _count?: true | PollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollMaxAggregateInputType
  }

  export type GetPollAggregateType<T extends PollAggregateArgs> = {
        [P in keyof T & keyof AggregatePoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoll[P]>
      : GetScalarType<T[P], AggregatePoll[P]>
  }




  export type PollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
    orderBy?: PollOrderByWithAggregationInput | PollOrderByWithAggregationInput[]
    by: PollScalarFieldEnum[] | PollScalarFieldEnum
    having?: PollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCountAggregateInputType | true
    _min?: PollMinAggregateInputType
    _max?: PollMaxAggregateInputType
  }

  export type PollGroupByOutputType = {
    id: string
    title: string
    description: string | null
    creatorId: string
    isPublic: boolean
    roomCode: string | null
    status: $Enums.PollStatus
    createdAt: Date
    updatedAt: Date
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  type GetPollGroupByPayload<T extends PollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollGroupByOutputType[P]>
            : GetScalarType<T[P], PollGroupByOutputType[P]>
        }
      >
    >


  export type PollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    isPublic?: boolean
    roomCode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    votes?: boolean | Poll$votesArgs<ExtArgs>
    comments?: boolean | Poll$commentsArgs<ExtArgs>
    categories?: boolean | Poll$categoriesArgs<ExtArgs>
    participants?: boolean | Poll$participantsArgs<ExtArgs>
    activityLogs?: boolean | Poll$activityLogsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    isPublic?: boolean
    roomCode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    isPublic?: boolean
    roomCode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    isPublic?: boolean
    roomCode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "creatorId" | "isPublic" | "roomCode" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["poll"]>
  export type PollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    votes?: boolean | Poll$votesArgs<ExtArgs>
    comments?: boolean | Poll$commentsArgs<ExtArgs>
    categories?: boolean | Poll$categoriesArgs<ExtArgs>
    participants?: boolean | Poll$participantsArgs<ExtArgs>
    activityLogs?: boolean | Poll$activityLogsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poll"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      categories: Prisma.$PollCategoryPayload<ExtArgs>[]
      participants: Prisma.$PollParticipantPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      creatorId: string
      isPublic: boolean
      roomCode: string | null
      status: $Enums.PollStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["poll"]>
    composites: {}
  }

  type PollGetPayload<S extends boolean | null | undefined | PollDefaultArgs> = $Result.GetResult<Prisma.$PollPayload, S>

  type PollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCountAggregateInputType | true
    }

  export interface PollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poll'], meta: { name: 'Poll' } }
    /**
     * Find zero or one Poll that matches the filter.
     * @param {PollFindUniqueArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollFindUniqueArgs>(args: SelectSubset<T, PollFindUniqueArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollFindUniqueOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollFindUniqueOrThrowArgs>(args: SelectSubset<T, PollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollFindFirstArgs>(args?: SelectSubset<T, PollFindFirstArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollFindFirstOrThrowArgs>(args?: SelectSubset<T, PollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polls
     * const polls = await prisma.poll.findMany()
     * 
     * // Get first 10 Polls
     * const polls = await prisma.poll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollWithIdOnly = await prisma.poll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollFindManyArgs>(args?: SelectSubset<T, PollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poll.
     * @param {PollCreateArgs} args - Arguments to create a Poll.
     * @example
     * // Create one Poll
     * const Poll = await prisma.poll.create({
     *   data: {
     *     // ... data to create a Poll
     *   }
     * })
     * 
     */
    create<T extends PollCreateArgs>(args: SelectSubset<T, PollCreateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polls.
     * @param {PollCreateManyArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollCreateManyArgs>(args?: SelectSubset<T, PollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polls and returns the data saved in the database.
     * @param {PollCreateManyAndReturnArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollCreateManyAndReturnArgs>(args?: SelectSubset<T, PollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poll.
     * @param {PollDeleteArgs} args - Arguments to delete one Poll.
     * @example
     * // Delete one Poll
     * const Poll = await prisma.poll.delete({
     *   where: {
     *     // ... filter to delete one Poll
     *   }
     * })
     * 
     */
    delete<T extends PollDeleteArgs>(args: SelectSubset<T, PollDeleteArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poll.
     * @param {PollUpdateArgs} args - Arguments to update one Poll.
     * @example
     * // Update one Poll
     * const poll = await prisma.poll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollUpdateArgs>(args: SelectSubset<T, PollUpdateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polls.
     * @param {PollDeleteManyArgs} args - Arguments to filter Polls to delete.
     * @example
     * // Delete a few Polls
     * const { count } = await prisma.poll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollDeleteManyArgs>(args?: SelectSubset<T, PollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollUpdateManyArgs>(args: SelectSubset<T, PollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls and returns the data updated in the database.
     * @param {PollUpdateManyAndReturnArgs} args - Arguments to update many Polls.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PollUpdateManyAndReturnArgs>(args: SelectSubset<T, PollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poll.
     * @param {PollUpsertArgs} args - Arguments to update or create a Poll.
     * @example
     * // Update or create a Poll
     * const poll = await prisma.poll.upsert({
     *   create: {
     *     // ... data to create a Poll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poll we want to update
     *   }
     * })
     */
    upsert<T extends PollUpsertArgs>(args: SelectSubset<T, PollUpsertArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCountArgs} args - Arguments to filter Polls to count.
     * @example
     * // Count the number of Polls
     * const count = await prisma.poll.count({
     *   where: {
     *     // ... the filter for the Polls we want to count
     *   }
     * })
    **/
    count<T extends PollCountArgs>(
      args?: Subset<T, PollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PollAggregateArgs>(args: Subset<T, PollAggregateArgs>): Prisma.PrismaPromise<GetPollAggregateType<T>>

    /**
     * Group by Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollGroupByArgs['orderBy'] }
        : { orderBy?: PollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poll model
   */
  readonly fields: PollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Poll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Poll$votesArgs<ExtArgs> = {}>(args?: Subset<T, Poll$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Poll$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Poll$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Poll$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Poll$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends Poll$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poll model
   */
  interface PollFieldRefs {
    readonly id: FieldRef<"Poll", 'String'>
    readonly title: FieldRef<"Poll", 'String'>
    readonly description: FieldRef<"Poll", 'String'>
    readonly creatorId: FieldRef<"Poll", 'String'>
    readonly isPublic: FieldRef<"Poll", 'Boolean'>
    readonly roomCode: FieldRef<"Poll", 'String'>
    readonly status: FieldRef<"Poll", 'PollStatus'>
    readonly createdAt: FieldRef<"Poll", 'DateTime'>
    readonly updatedAt: FieldRef<"Poll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Poll findUnique
   */
  export type PollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findUniqueOrThrow
   */
  export type PollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findFirst
   */
  export type PollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findFirstOrThrow
   */
  export type PollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findMany
   */
  export type PollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Polls to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll create
   */
  export type PollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to create a Poll.
     */
    data: XOR<PollCreateInput, PollUncheckedCreateInput>
  }

  /**
   * Poll createMany
   */
  export type PollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poll createManyAndReturn
   */
  export type PollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll update
   */
  export type PollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to update a Poll.
     */
    data: XOR<PollUpdateInput, PollUncheckedUpdateInput>
    /**
     * Choose, which Poll to update.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll updateMany
   */
  export type PollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
  }

  /**
   * Poll updateManyAndReturn
   */
  export type PollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll upsert
   */
  export type PollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The filter to search for the Poll to update in case it exists.
     */
    where: PollWhereUniqueInput
    /**
     * In case the Poll found by the `where` argument doesn't exist, create a new Poll with this data.
     */
    create: XOR<PollCreateInput, PollUncheckedCreateInput>
    /**
     * In case the Poll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollUpdateInput, PollUncheckedUpdateInput>
  }

  /**
   * Poll delete
   */
  export type PollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter which Poll to delete.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll deleteMany
   */
  export type PollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polls to delete
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to delete.
     */
    limit?: number
  }

  /**
   * Poll.options
   */
  export type Poll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Poll.votes
   */
  export type Poll$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Poll.comments
   */
  export type Poll$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Poll.categories
   */
  export type Poll$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    where?: PollCategoryWhereInput
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    cursor?: PollCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollCategoryScalarFieldEnum | PollCategoryScalarFieldEnum[]
  }

  /**
   * Poll.participants
   */
  export type Poll$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    where?: PollParticipantWhereInput
    orderBy?: PollParticipantOrderByWithRelationInput | PollParticipantOrderByWithRelationInput[]
    cursor?: PollParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollParticipantScalarFieldEnum | PollParticipantScalarFieldEnum[]
  }

  /**
   * Poll.activityLogs
   */
  export type Poll$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Poll without action
   */
  export type PollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    pollId: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    pollId: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    text: number
    pollId: number
    _all: number
  }


  export type OptionMinAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    text: string
    pollId: string
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | Option$votesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    text?: boolean
    pollId?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "pollId", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | Option$votesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      pollId: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Option$votesArgs<ExtArgs> = {}>(args?: Subset<T, Option$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly text: FieldRef<"Option", 'String'>
    readonly pollId: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.votes
   */
  export type Option$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    pollId: string | null
    optionId: string | null
    userId: string | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    pollId: string | null
    optionId: string | null
    userId: string | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    pollId: number
    optionId: number
    userId: number
    sessionId: number
    createdAt: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    userId?: true
    sessionId?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    userId?: true
    sessionId?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    userId?: true
    sessionId?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    pollId: string
    optionId: string
    userId: string | null
    sessionId: string | null
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    userId?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pollId" | "optionId" | "userId" | "sessionId" | "createdAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    user?: boolean | Vote$userArgs<ExtArgs>
    session?: boolean | Vote$sessionArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      option: Prisma.$OptionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pollId: string
      optionId: string
      userId: string | null
      sessionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Vote$userArgs<ExtArgs> = {}>(args?: Subset<T, Vote$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends Vote$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Vote$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly pollId: FieldRef<"Vote", 'String'>
    readonly optionId: FieldRef<"Vote", 'String'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly sessionId: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote.user
   */
  export type Vote$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Vote.session
   */
  export type Vote$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    pollId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    pollId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    pollId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    pollId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    pollId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    pollId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    pollId: string
    userId: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pollId?: boolean
    userId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pollId?: boolean
    userId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pollId?: boolean
    userId?: boolean
    createdAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    pollId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "pollId" | "userId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      pollId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly pollId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    polls?: boolean | Category$pollsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polls?: boolean | Category$pollsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      polls: Prisma.$PollCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    polls<T extends Category$pollsArgs<ExtArgs> = {}>(args?: Subset<T, Category$pollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.polls
   */
  export type Category$pollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    where?: PollCategoryWhereInput
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    cursor?: PollCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollCategoryScalarFieldEnum | PollCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model PollCategory
   */

  export type AggregatePollCategory = {
    _count: PollCategoryCountAggregateOutputType | null
    _min: PollCategoryMinAggregateOutputType | null
    _max: PollCategoryMaxAggregateOutputType | null
  }

  export type PollCategoryMinAggregateOutputType = {
    pollId: string | null
    categoryId: string | null
  }

  export type PollCategoryMaxAggregateOutputType = {
    pollId: string | null
    categoryId: string | null
  }

  export type PollCategoryCountAggregateOutputType = {
    pollId: number
    categoryId: number
    _all: number
  }


  export type PollCategoryMinAggregateInputType = {
    pollId?: true
    categoryId?: true
  }

  export type PollCategoryMaxAggregateInputType = {
    pollId?: true
    categoryId?: true
  }

  export type PollCategoryCountAggregateInputType = {
    pollId?: true
    categoryId?: true
    _all?: true
  }

  export type PollCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollCategory to aggregate.
     */
    where?: PollCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollCategories to fetch.
     */
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PollCategories
    **/
    _count?: true | PollCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollCategoryMaxAggregateInputType
  }

  export type GetPollCategoryAggregateType<T extends PollCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePollCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollCategory[P]>
      : GetScalarType<T[P], AggregatePollCategory[P]>
  }




  export type PollCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollCategoryWhereInput
    orderBy?: PollCategoryOrderByWithAggregationInput | PollCategoryOrderByWithAggregationInput[]
    by: PollCategoryScalarFieldEnum[] | PollCategoryScalarFieldEnum
    having?: PollCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCategoryCountAggregateInputType | true
    _min?: PollCategoryMinAggregateInputType
    _max?: PollCategoryMaxAggregateInputType
  }

  export type PollCategoryGroupByOutputType = {
    pollId: string
    categoryId: string
    _count: PollCategoryCountAggregateOutputType | null
    _min: PollCategoryMinAggregateOutputType | null
    _max: PollCategoryMaxAggregateOutputType | null
  }

  type GetPollCategoryGroupByPayload<T extends PollCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PollCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PollCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollId?: boolean
    categoryId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollCategory"]>

  export type PollCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollId?: boolean
    categoryId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollCategory"]>

  export type PollCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollId?: boolean
    categoryId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollCategory"]>

  export type PollCategorySelectScalar = {
    pollId?: boolean
    categoryId?: boolean
  }

  export type PollCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pollId" | "categoryId", ExtArgs["result"]["pollCategory"]>
  export type PollCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PollCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PollCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PollCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PollCategory"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pollId: string
      categoryId: string
    }, ExtArgs["result"]["pollCategory"]>
    composites: {}
  }

  type PollCategoryGetPayload<S extends boolean | null | undefined | PollCategoryDefaultArgs> = $Result.GetResult<Prisma.$PollCategoryPayload, S>

  type PollCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCategoryCountAggregateInputType | true
    }

  export interface PollCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PollCategory'], meta: { name: 'PollCategory' } }
    /**
     * Find zero or one PollCategory that matches the filter.
     * @param {PollCategoryFindUniqueArgs} args - Arguments to find a PollCategory
     * @example
     * // Get one PollCategory
     * const pollCategory = await prisma.pollCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollCategoryFindUniqueArgs>(args: SelectSubset<T, PollCategoryFindUniqueArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollCategoryFindUniqueOrThrowArgs} args - Arguments to find a PollCategory
     * @example
     * // Get one PollCategory
     * const pollCategory = await prisma.pollCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PollCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryFindFirstArgs} args - Arguments to find a PollCategory
     * @example
     * // Get one PollCategory
     * const pollCategory = await prisma.pollCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollCategoryFindFirstArgs>(args?: SelectSubset<T, PollCategoryFindFirstArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryFindFirstOrThrowArgs} args - Arguments to find a PollCategory
     * @example
     * // Get one PollCategory
     * const pollCategory = await prisma.pollCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PollCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollCategories
     * const pollCategories = await prisma.pollCategory.findMany()
     * 
     * // Get first 10 PollCategories
     * const pollCategories = await prisma.pollCategory.findMany({ take: 10 })
     * 
     * // Only select the `pollId`
     * const pollCategoryWithPollIdOnly = await prisma.pollCategory.findMany({ select: { pollId: true } })
     * 
     */
    findMany<T extends PollCategoryFindManyArgs>(args?: SelectSubset<T, PollCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollCategory.
     * @param {PollCategoryCreateArgs} args - Arguments to create a PollCategory.
     * @example
     * // Create one PollCategory
     * const PollCategory = await prisma.pollCategory.create({
     *   data: {
     *     // ... data to create a PollCategory
     *   }
     * })
     * 
     */
    create<T extends PollCategoryCreateArgs>(args: SelectSubset<T, PollCategoryCreateArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollCategories.
     * @param {PollCategoryCreateManyArgs} args - Arguments to create many PollCategories.
     * @example
     * // Create many PollCategories
     * const pollCategory = await prisma.pollCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollCategoryCreateManyArgs>(args?: SelectSubset<T, PollCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollCategories and returns the data saved in the database.
     * @param {PollCategoryCreateManyAndReturnArgs} args - Arguments to create many PollCategories.
     * @example
     * // Create many PollCategories
     * const pollCategory = await prisma.pollCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollCategories and only return the `pollId`
     * const pollCategoryWithPollIdOnly = await prisma.pollCategory.createManyAndReturn({
     *   select: { pollId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PollCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollCategory.
     * @param {PollCategoryDeleteArgs} args - Arguments to delete one PollCategory.
     * @example
     * // Delete one PollCategory
     * const PollCategory = await prisma.pollCategory.delete({
     *   where: {
     *     // ... filter to delete one PollCategory
     *   }
     * })
     * 
     */
    delete<T extends PollCategoryDeleteArgs>(args: SelectSubset<T, PollCategoryDeleteArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollCategory.
     * @param {PollCategoryUpdateArgs} args - Arguments to update one PollCategory.
     * @example
     * // Update one PollCategory
     * const pollCategory = await prisma.pollCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollCategoryUpdateArgs>(args: SelectSubset<T, PollCategoryUpdateArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollCategories.
     * @param {PollCategoryDeleteManyArgs} args - Arguments to filter PollCategories to delete.
     * @example
     * // Delete a few PollCategories
     * const { count } = await prisma.pollCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollCategoryDeleteManyArgs>(args?: SelectSubset<T, PollCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollCategories
     * const pollCategory = await prisma.pollCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollCategoryUpdateManyArgs>(args: SelectSubset<T, PollCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollCategories and returns the data updated in the database.
     * @param {PollCategoryUpdateManyAndReturnArgs} args - Arguments to update many PollCategories.
     * @example
     * // Update many PollCategories
     * const pollCategory = await prisma.pollCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollCategories and only return the `pollId`
     * const pollCategoryWithPollIdOnly = await prisma.pollCategory.updateManyAndReturn({
     *   select: { pollId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PollCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PollCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollCategory.
     * @param {PollCategoryUpsertArgs} args - Arguments to update or create a PollCategory.
     * @example
     * // Update or create a PollCategory
     * const pollCategory = await prisma.pollCategory.upsert({
     *   create: {
     *     // ... data to create a PollCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollCategory we want to update
     *   }
     * })
     */
    upsert<T extends PollCategoryUpsertArgs>(args: SelectSubset<T, PollCategoryUpsertArgs<ExtArgs>>): Prisma__PollCategoryClient<$Result.GetResult<Prisma.$PollCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryCountArgs} args - Arguments to filter PollCategories to count.
     * @example
     * // Count the number of PollCategories
     * const count = await prisma.pollCategory.count({
     *   where: {
     *     // ... the filter for the PollCategories we want to count
     *   }
     * })
    **/
    count<T extends PollCategoryCountArgs>(
      args?: Subset<T, PollCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PollCategoryAggregateArgs>(args: Subset<T, PollCategoryAggregateArgs>): Prisma.PrismaPromise<GetPollCategoryAggregateType<T>>

    /**
     * Group by PollCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PollCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PollCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PollCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PollCategory model
   */
  readonly fields: PollCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PollCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PollCategory model
   */
  interface PollCategoryFieldRefs {
    readonly pollId: FieldRef<"PollCategory", 'String'>
    readonly categoryId: FieldRef<"PollCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PollCategory findUnique
   */
  export type PollCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PollCategory to fetch.
     */
    where: PollCategoryWhereUniqueInput
  }

  /**
   * PollCategory findUniqueOrThrow
   */
  export type PollCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PollCategory to fetch.
     */
    where: PollCategoryWhereUniqueInput
  }

  /**
   * PollCategory findFirst
   */
  export type PollCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PollCategory to fetch.
     */
    where?: PollCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollCategories to fetch.
     */
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollCategories.
     */
    cursor?: PollCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollCategories.
     */
    distinct?: PollCategoryScalarFieldEnum | PollCategoryScalarFieldEnum[]
  }

  /**
   * PollCategory findFirstOrThrow
   */
  export type PollCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PollCategory to fetch.
     */
    where?: PollCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollCategories to fetch.
     */
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollCategories.
     */
    cursor?: PollCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollCategories.
     */
    distinct?: PollCategoryScalarFieldEnum | PollCategoryScalarFieldEnum[]
  }

  /**
   * PollCategory findMany
   */
  export type PollCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PollCategories to fetch.
     */
    where?: PollCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollCategories to fetch.
     */
    orderBy?: PollCategoryOrderByWithRelationInput | PollCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PollCategories.
     */
    cursor?: PollCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollCategories.
     */
    skip?: number
    distinct?: PollCategoryScalarFieldEnum | PollCategoryScalarFieldEnum[]
  }

  /**
   * PollCategory create
   */
  export type PollCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PollCategory.
     */
    data: XOR<PollCategoryCreateInput, PollCategoryUncheckedCreateInput>
  }

  /**
   * PollCategory createMany
   */
  export type PollCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PollCategories.
     */
    data: PollCategoryCreateManyInput | PollCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PollCategory createManyAndReturn
   */
  export type PollCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PollCategories.
     */
    data: PollCategoryCreateManyInput | PollCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollCategory update
   */
  export type PollCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PollCategory.
     */
    data: XOR<PollCategoryUpdateInput, PollCategoryUncheckedUpdateInput>
    /**
     * Choose, which PollCategory to update.
     */
    where: PollCategoryWhereUniqueInput
  }

  /**
   * PollCategory updateMany
   */
  export type PollCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PollCategories.
     */
    data: XOR<PollCategoryUpdateManyMutationInput, PollCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PollCategories to update
     */
    where?: PollCategoryWhereInput
    /**
     * Limit how many PollCategories to update.
     */
    limit?: number
  }

  /**
   * PollCategory updateManyAndReturn
   */
  export type PollCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PollCategories.
     */
    data: XOR<PollCategoryUpdateManyMutationInput, PollCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PollCategories to update
     */
    where?: PollCategoryWhereInput
    /**
     * Limit how many PollCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollCategory upsert
   */
  export type PollCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PollCategory to update in case it exists.
     */
    where: PollCategoryWhereUniqueInput
    /**
     * In case the PollCategory found by the `where` argument doesn't exist, create a new PollCategory with this data.
     */
    create: XOR<PollCategoryCreateInput, PollCategoryUncheckedCreateInput>
    /**
     * In case the PollCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollCategoryUpdateInput, PollCategoryUncheckedUpdateInput>
  }

  /**
   * PollCategory delete
   */
  export type PollCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
    /**
     * Filter which PollCategory to delete.
     */
    where: PollCategoryWhereUniqueInput
  }

  /**
   * PollCategory deleteMany
   */
  export type PollCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollCategories to delete
     */
    where?: PollCategoryWhereInput
    /**
     * Limit how many PollCategories to delete.
     */
    limit?: number
  }

  /**
   * PollCategory without action
   */
  export type PollCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCategory
     */
    select?: PollCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollCategory
     */
    omit?: PollCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pollId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pollId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    pollId: number
    action: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    pollId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    pollId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    pollId?: true
    action?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string | null
    pollId: string | null
    action: string
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pollId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pollId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pollId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    pollId?: boolean
    action?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pollId" | "action" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    poll?: boolean | ActivityLog$pollArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      poll: Prisma.$PollPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      pollId: string | null
      action: string
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    poll<T extends ActivityLog$pollArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$pollArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly pollId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog.poll
   */
  export type ActivityLog$pollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    where?: PollWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model PollParticipant
   */

  export type AggregatePollParticipant = {
    _count: PollParticipantCountAggregateOutputType | null
    _min: PollParticipantMinAggregateOutputType | null
    _max: PollParticipantMaxAggregateOutputType | null
  }

  export type PollParticipantMinAggregateOutputType = {
    id: string | null
    pollId: string | null
    email: string | null
    status: $Enums.ParticipantStatus | null
    invitedAt: Date | null
    respondedAt: Date | null
  }

  export type PollParticipantMaxAggregateOutputType = {
    id: string | null
    pollId: string | null
    email: string | null
    status: $Enums.ParticipantStatus | null
    invitedAt: Date | null
    respondedAt: Date | null
  }

  export type PollParticipantCountAggregateOutputType = {
    id: number
    pollId: number
    email: number
    status: number
    invitedAt: number
    respondedAt: number
    _all: number
  }


  export type PollParticipantMinAggregateInputType = {
    id?: true
    pollId?: true
    email?: true
    status?: true
    invitedAt?: true
    respondedAt?: true
  }

  export type PollParticipantMaxAggregateInputType = {
    id?: true
    pollId?: true
    email?: true
    status?: true
    invitedAt?: true
    respondedAt?: true
  }

  export type PollParticipantCountAggregateInputType = {
    id?: true
    pollId?: true
    email?: true
    status?: true
    invitedAt?: true
    respondedAt?: true
    _all?: true
  }

  export type PollParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollParticipant to aggregate.
     */
    where?: PollParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollParticipants to fetch.
     */
    orderBy?: PollParticipantOrderByWithRelationInput | PollParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PollParticipants
    **/
    _count?: true | PollParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollParticipantMaxAggregateInputType
  }

  export type GetPollParticipantAggregateType<T extends PollParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregatePollParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollParticipant[P]>
      : GetScalarType<T[P], AggregatePollParticipant[P]>
  }




  export type PollParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollParticipantWhereInput
    orderBy?: PollParticipantOrderByWithAggregationInput | PollParticipantOrderByWithAggregationInput[]
    by: PollParticipantScalarFieldEnum[] | PollParticipantScalarFieldEnum
    having?: PollParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollParticipantCountAggregateInputType | true
    _min?: PollParticipantMinAggregateInputType
    _max?: PollParticipantMaxAggregateInputType
  }

  export type PollParticipantGroupByOutputType = {
    id: string
    pollId: string
    email: string
    status: $Enums.ParticipantStatus
    invitedAt: Date
    respondedAt: Date | null
    _count: PollParticipantCountAggregateOutputType | null
    _min: PollParticipantMinAggregateOutputType | null
    _max: PollParticipantMaxAggregateOutputType | null
  }

  type GetPollParticipantGroupByPayload<T extends PollParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], PollParticipantGroupByOutputType[P]>
        }
      >
    >


  export type PollParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    email?: boolean
    status?: boolean
    invitedAt?: boolean
    respondedAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollParticipant"]>

  export type PollParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    email?: boolean
    status?: boolean
    invitedAt?: boolean
    respondedAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollParticipant"]>

  export type PollParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    email?: boolean
    status?: boolean
    invitedAt?: boolean
    respondedAt?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollParticipant"]>

  export type PollParticipantSelectScalar = {
    id?: boolean
    pollId?: boolean
    email?: boolean
    status?: boolean
    invitedAt?: boolean
    respondedAt?: boolean
  }

  export type PollParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pollId" | "email" | "status" | "invitedAt" | "respondedAt", ExtArgs["result"]["pollParticipant"]>
  export type PollParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }

  export type $PollParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PollParticipant"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pollId: string
      email: string
      status: $Enums.ParticipantStatus
      invitedAt: Date
      respondedAt: Date | null
    }, ExtArgs["result"]["pollParticipant"]>
    composites: {}
  }

  type PollParticipantGetPayload<S extends boolean | null | undefined | PollParticipantDefaultArgs> = $Result.GetResult<Prisma.$PollParticipantPayload, S>

  type PollParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollParticipantCountAggregateInputType | true
    }

  export interface PollParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PollParticipant'], meta: { name: 'PollParticipant' } }
    /**
     * Find zero or one PollParticipant that matches the filter.
     * @param {PollParticipantFindUniqueArgs} args - Arguments to find a PollParticipant
     * @example
     * // Get one PollParticipant
     * const pollParticipant = await prisma.pollParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollParticipantFindUniqueArgs>(args: SelectSubset<T, PollParticipantFindUniqueArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollParticipantFindUniqueOrThrowArgs} args - Arguments to find a PollParticipant
     * @example
     * // Get one PollParticipant
     * const pollParticipant = await prisma.pollParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, PollParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantFindFirstArgs} args - Arguments to find a PollParticipant
     * @example
     * // Get one PollParticipant
     * const pollParticipant = await prisma.pollParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollParticipantFindFirstArgs>(args?: SelectSubset<T, PollParticipantFindFirstArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantFindFirstOrThrowArgs} args - Arguments to find a PollParticipant
     * @example
     * // Get one PollParticipant
     * const pollParticipant = await prisma.pollParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, PollParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollParticipants
     * const pollParticipants = await prisma.pollParticipant.findMany()
     * 
     * // Get first 10 PollParticipants
     * const pollParticipants = await prisma.pollParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollParticipantWithIdOnly = await prisma.pollParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollParticipantFindManyArgs>(args?: SelectSubset<T, PollParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollParticipant.
     * @param {PollParticipantCreateArgs} args - Arguments to create a PollParticipant.
     * @example
     * // Create one PollParticipant
     * const PollParticipant = await prisma.pollParticipant.create({
     *   data: {
     *     // ... data to create a PollParticipant
     *   }
     * })
     * 
     */
    create<T extends PollParticipantCreateArgs>(args: SelectSubset<T, PollParticipantCreateArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollParticipants.
     * @param {PollParticipantCreateManyArgs} args - Arguments to create many PollParticipants.
     * @example
     * // Create many PollParticipants
     * const pollParticipant = await prisma.pollParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollParticipantCreateManyArgs>(args?: SelectSubset<T, PollParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollParticipants and returns the data saved in the database.
     * @param {PollParticipantCreateManyAndReturnArgs} args - Arguments to create many PollParticipants.
     * @example
     * // Create many PollParticipants
     * const pollParticipant = await prisma.pollParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollParticipants and only return the `id`
     * const pollParticipantWithIdOnly = await prisma.pollParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, PollParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollParticipant.
     * @param {PollParticipantDeleteArgs} args - Arguments to delete one PollParticipant.
     * @example
     * // Delete one PollParticipant
     * const PollParticipant = await prisma.pollParticipant.delete({
     *   where: {
     *     // ... filter to delete one PollParticipant
     *   }
     * })
     * 
     */
    delete<T extends PollParticipantDeleteArgs>(args: SelectSubset<T, PollParticipantDeleteArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollParticipant.
     * @param {PollParticipantUpdateArgs} args - Arguments to update one PollParticipant.
     * @example
     * // Update one PollParticipant
     * const pollParticipant = await prisma.pollParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollParticipantUpdateArgs>(args: SelectSubset<T, PollParticipantUpdateArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollParticipants.
     * @param {PollParticipantDeleteManyArgs} args - Arguments to filter PollParticipants to delete.
     * @example
     * // Delete a few PollParticipants
     * const { count } = await prisma.pollParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollParticipantDeleteManyArgs>(args?: SelectSubset<T, PollParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollParticipants
     * const pollParticipant = await prisma.pollParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollParticipantUpdateManyArgs>(args: SelectSubset<T, PollParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollParticipants and returns the data updated in the database.
     * @param {PollParticipantUpdateManyAndReturnArgs} args - Arguments to update many PollParticipants.
     * @example
     * // Update many PollParticipants
     * const pollParticipant = await prisma.pollParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollParticipants and only return the `id`
     * const pollParticipantWithIdOnly = await prisma.pollParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PollParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, PollParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollParticipant.
     * @param {PollParticipantUpsertArgs} args - Arguments to update or create a PollParticipant.
     * @example
     * // Update or create a PollParticipant
     * const pollParticipant = await prisma.pollParticipant.upsert({
     *   create: {
     *     // ... data to create a PollParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollParticipant we want to update
     *   }
     * })
     */
    upsert<T extends PollParticipantUpsertArgs>(args: SelectSubset<T, PollParticipantUpsertArgs<ExtArgs>>): Prisma__PollParticipantClient<$Result.GetResult<Prisma.$PollParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantCountArgs} args - Arguments to filter PollParticipants to count.
     * @example
     * // Count the number of PollParticipants
     * const count = await prisma.pollParticipant.count({
     *   where: {
     *     // ... the filter for the PollParticipants we want to count
     *   }
     * })
    **/
    count<T extends PollParticipantCountArgs>(
      args?: Subset<T, PollParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PollParticipantAggregateArgs>(args: Subset<T, PollParticipantAggregateArgs>): Prisma.PrismaPromise<GetPollParticipantAggregateType<T>>

    /**
     * Group by PollParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PollParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollParticipantGroupByArgs['orderBy'] }
        : { orderBy?: PollParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PollParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PollParticipant model
   */
  readonly fields: PollParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PollParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PollParticipant model
   */
  interface PollParticipantFieldRefs {
    readonly id: FieldRef<"PollParticipant", 'String'>
    readonly pollId: FieldRef<"PollParticipant", 'String'>
    readonly email: FieldRef<"PollParticipant", 'String'>
    readonly status: FieldRef<"PollParticipant", 'ParticipantStatus'>
    readonly invitedAt: FieldRef<"PollParticipant", 'DateTime'>
    readonly respondedAt: FieldRef<"PollParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PollParticipant findUnique
   */
  export type PollParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PollParticipant to fetch.
     */
    where: PollParticipantWhereUniqueInput
  }

  /**
   * PollParticipant findUniqueOrThrow
   */
  export type PollParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PollParticipant to fetch.
     */
    where: PollParticipantWhereUniqueInput
  }

  /**
   * PollParticipant findFirst
   */
  export type PollParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PollParticipant to fetch.
     */
    where?: PollParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollParticipants to fetch.
     */
    orderBy?: PollParticipantOrderByWithRelationInput | PollParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollParticipants.
     */
    cursor?: PollParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollParticipants.
     */
    distinct?: PollParticipantScalarFieldEnum | PollParticipantScalarFieldEnum[]
  }

  /**
   * PollParticipant findFirstOrThrow
   */
  export type PollParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PollParticipant to fetch.
     */
    where?: PollParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollParticipants to fetch.
     */
    orderBy?: PollParticipantOrderByWithRelationInput | PollParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollParticipants.
     */
    cursor?: PollParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollParticipants.
     */
    distinct?: PollParticipantScalarFieldEnum | PollParticipantScalarFieldEnum[]
  }

  /**
   * PollParticipant findMany
   */
  export type PollParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PollParticipants to fetch.
     */
    where?: PollParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollParticipants to fetch.
     */
    orderBy?: PollParticipantOrderByWithRelationInput | PollParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PollParticipants.
     */
    cursor?: PollParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollParticipants.
     */
    skip?: number
    distinct?: PollParticipantScalarFieldEnum | PollParticipantScalarFieldEnum[]
  }

  /**
   * PollParticipant create
   */
  export type PollParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a PollParticipant.
     */
    data: XOR<PollParticipantCreateInput, PollParticipantUncheckedCreateInput>
  }

  /**
   * PollParticipant createMany
   */
  export type PollParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PollParticipants.
     */
    data: PollParticipantCreateManyInput | PollParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PollParticipant createManyAndReturn
   */
  export type PollParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many PollParticipants.
     */
    data: PollParticipantCreateManyInput | PollParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollParticipant update
   */
  export type PollParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a PollParticipant.
     */
    data: XOR<PollParticipantUpdateInput, PollParticipantUncheckedUpdateInput>
    /**
     * Choose, which PollParticipant to update.
     */
    where: PollParticipantWhereUniqueInput
  }

  /**
   * PollParticipant updateMany
   */
  export type PollParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PollParticipants.
     */
    data: XOR<PollParticipantUpdateManyMutationInput, PollParticipantUncheckedUpdateManyInput>
    /**
     * Filter which PollParticipants to update
     */
    where?: PollParticipantWhereInput
    /**
     * Limit how many PollParticipants to update.
     */
    limit?: number
  }

  /**
   * PollParticipant updateManyAndReturn
   */
  export type PollParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * The data used to update PollParticipants.
     */
    data: XOR<PollParticipantUpdateManyMutationInput, PollParticipantUncheckedUpdateManyInput>
    /**
     * Filter which PollParticipants to update
     */
    where?: PollParticipantWhereInput
    /**
     * Limit how many PollParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollParticipant upsert
   */
  export type PollParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the PollParticipant to update in case it exists.
     */
    where: PollParticipantWhereUniqueInput
    /**
     * In case the PollParticipant found by the `where` argument doesn't exist, create a new PollParticipant with this data.
     */
    create: XOR<PollParticipantCreateInput, PollParticipantUncheckedCreateInput>
    /**
     * In case the PollParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollParticipantUpdateInput, PollParticipantUncheckedUpdateInput>
  }

  /**
   * PollParticipant delete
   */
  export type PollParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
    /**
     * Filter which PollParticipant to delete.
     */
    where: PollParticipantWhereUniqueInput
  }

  /**
   * PollParticipant deleteMany
   */
  export type PollParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollParticipants to delete
     */
    where?: PollParticipantWhereInput
    /**
     * Limit how many PollParticipants to delete.
     */
    limit?: number
  }

  /**
   * PollParticipant without action
   */
  export type PollParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollParticipant
     */
    select?: PollParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollParticipant
     */
    omit?: PollParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    createdAt: Date
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    votes?: boolean | Session$votesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | Session$votesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends Session$votesArgs<ExtArgs> = {}>(args?: Subset<T, Session$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.votes
   */
  export type Session$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PollScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    creatorId: 'creatorId',
    isPublic: 'isPublic',
    roomCode: 'roomCode',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    pollId: 'pollId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    pollId: 'pollId',
    optionId: 'optionId',
    userId: 'userId',
    sessionId: 'sessionId',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    pollId: 'pollId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PollCategoryScalarFieldEnum: {
    pollId: 'pollId',
    categoryId: 'categoryId'
  };

  export type PollCategoryScalarFieldEnum = (typeof PollCategoryScalarFieldEnum)[keyof typeof PollCategoryScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pollId: 'pollId',
    action: 'action',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const PollParticipantScalarFieldEnum: {
    id: 'id',
    pollId: 'pollId',
    email: 'email',
    status: 'status',
    invitedAt: 'invitedAt',
    respondedAt: 'respondedAt'
  };

  export type PollParticipantScalarFieldEnum = (typeof PollParticipantScalarFieldEnum)[keyof typeof PollParticipantScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PollStatus'
   */
  export type EnumPollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PollStatus'>
    


  /**
   * Reference to a field of type 'PollStatus[]'
   */
  export type ListEnumPollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PollStatus[]'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'ParticipantStatus[]'
   */
  export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    polls?: PollListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    polls?: PollOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    polls?: PollListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PollWhereInput = {
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    id?: StringFilter<"Poll"> | string
    title?: StringFilter<"Poll"> | string
    description?: StringNullableFilter<"Poll"> | string | null
    creatorId?: StringFilter<"Poll"> | string
    isPublic?: BoolFilter<"Poll"> | boolean
    roomCode?: StringNullableFilter<"Poll"> | string | null
    status?: EnumPollStatusFilter<"Poll"> | $Enums.PollStatus
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    updatedAt?: DateTimeFilter<"Poll"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    options?: OptionListRelationFilter
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
    categories?: PollCategoryListRelationFilter
    participants?: PollParticipantListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type PollOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    roomCode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    categories?: PollCategoryOrderByRelationAggregateInput
    participants?: PollParticipantOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type PollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomCode?: string
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    title?: StringFilter<"Poll"> | string
    description?: StringNullableFilter<"Poll"> | string | null
    creatorId?: StringFilter<"Poll"> | string
    isPublic?: BoolFilter<"Poll"> | boolean
    status?: EnumPollStatusFilter<"Poll"> | $Enums.PollStatus
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    updatedAt?: DateTimeFilter<"Poll"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    options?: OptionListRelationFilter
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
    categories?: PollCategoryListRelationFilter
    participants?: PollParticipantListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "roomCode">

  export type PollOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    roomCode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PollCountOrderByAggregateInput
    _max?: PollMaxOrderByAggregateInput
    _min?: PollMinOrderByAggregateInput
  }

  export type PollScalarWhereWithAggregatesInput = {
    AND?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    OR?: PollScalarWhereWithAggregatesInput[]
    NOT?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Poll"> | string
    title?: StringWithAggregatesFilter<"Poll"> | string
    description?: StringNullableWithAggregatesFilter<"Poll"> | string | null
    creatorId?: StringWithAggregatesFilter<"Poll"> | string
    isPublic?: BoolWithAggregatesFilter<"Poll"> | boolean
    roomCode?: StringNullableWithAggregatesFilter<"Poll"> | string | null
    status?: EnumPollStatusWithAggregatesFilter<"Poll"> | $Enums.PollStatus
    createdAt?: DateTimeWithAggregatesFilter<"Poll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Poll"> | Date | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    pollId?: StringFilter<"Option"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: VoteListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
    poll?: PollOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    pollId?: StringFilter<"Option"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Option"> | string
    text?: StringWithAggregatesFilter<"Option"> | string
    pollId?: StringWithAggregatesFilter<"Option"> | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    pollId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    userId?: StringNullableFilter<"Vote"> | string | null
    sessionId?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    poll?: PollOrderByWithRelationInput
    option?: OptionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    pollId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    userId?: StringNullableFilter<"Vote"> | string | null
    sessionId?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    pollId?: StringWithAggregatesFilter<"Vote"> | string
    optionId?: StringWithAggregatesFilter<"Vote"> | string
    userId?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    pollId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    pollId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    poll?: PollOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    pollId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    pollId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    pollId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    polls?: PollCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    polls?: PollCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    polls?: PollCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type PollCategoryWhereInput = {
    AND?: PollCategoryWhereInput | PollCategoryWhereInput[]
    OR?: PollCategoryWhereInput[]
    NOT?: PollCategoryWhereInput | PollCategoryWhereInput[]
    pollId?: StringFilter<"PollCategory"> | string
    categoryId?: StringFilter<"PollCategory"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type PollCategoryOrderByWithRelationInput = {
    pollId?: SortOrder
    categoryId?: SortOrder
    poll?: PollOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type PollCategoryWhereUniqueInput = Prisma.AtLeast<{
    pollId_categoryId?: PollCategoryPollIdCategoryIdCompoundUniqueInput
    AND?: PollCategoryWhereInput | PollCategoryWhereInput[]
    OR?: PollCategoryWhereInput[]
    NOT?: PollCategoryWhereInput | PollCategoryWhereInput[]
    pollId?: StringFilter<"PollCategory"> | string
    categoryId?: StringFilter<"PollCategory"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "pollId_categoryId">

  export type PollCategoryOrderByWithAggregationInput = {
    pollId?: SortOrder
    categoryId?: SortOrder
    _count?: PollCategoryCountOrderByAggregateInput
    _max?: PollCategoryMaxOrderByAggregateInput
    _min?: PollCategoryMinOrderByAggregateInput
  }

  export type PollCategoryScalarWhereWithAggregatesInput = {
    AND?: PollCategoryScalarWhereWithAggregatesInput | PollCategoryScalarWhereWithAggregatesInput[]
    OR?: PollCategoryScalarWhereWithAggregatesInput[]
    NOT?: PollCategoryScalarWhereWithAggregatesInput | PollCategoryScalarWhereWithAggregatesInput[]
    pollId?: StringWithAggregatesFilter<"PollCategory"> | string
    categoryId?: StringWithAggregatesFilter<"PollCategory"> | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    pollId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poll?: XOR<PollNullableScalarRelationFilter, PollWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    pollId?: SortOrderInput | SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    poll?: PollOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    pollId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poll?: XOR<PollNullableScalarRelationFilter, PollWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    pollId?: SortOrderInput | SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    pollId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type PollParticipantWhereInput = {
    AND?: PollParticipantWhereInput | PollParticipantWhereInput[]
    OR?: PollParticipantWhereInput[]
    NOT?: PollParticipantWhereInput | PollParticipantWhereInput[]
    id?: StringFilter<"PollParticipant"> | string
    pollId?: StringFilter<"PollParticipant"> | string
    email?: StringFilter<"PollParticipant"> | string
    status?: EnumParticipantStatusFilter<"PollParticipant"> | $Enums.ParticipantStatus
    invitedAt?: DateTimeFilter<"PollParticipant"> | Date | string
    respondedAt?: DateTimeNullableFilter<"PollParticipant"> | Date | string | null
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
  }

  export type PollParticipantOrderByWithRelationInput = {
    id?: SortOrder
    pollId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    invitedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    poll?: PollOrderByWithRelationInput
  }

  export type PollParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PollParticipantWhereInput | PollParticipantWhereInput[]
    OR?: PollParticipantWhereInput[]
    NOT?: PollParticipantWhereInput | PollParticipantWhereInput[]
    pollId?: StringFilter<"PollParticipant"> | string
    email?: StringFilter<"PollParticipant"> | string
    status?: EnumParticipantStatusFilter<"PollParticipant"> | $Enums.ParticipantStatus
    invitedAt?: DateTimeFilter<"PollParticipant"> | Date | string
    respondedAt?: DateTimeNullableFilter<"PollParticipant"> | Date | string | null
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
  }, "id">

  export type PollParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    pollId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    invitedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    _count?: PollParticipantCountOrderByAggregateInput
    _max?: PollParticipantMaxOrderByAggregateInput
    _min?: PollParticipantMinOrderByAggregateInput
  }

  export type PollParticipantScalarWhereWithAggregatesInput = {
    AND?: PollParticipantScalarWhereWithAggregatesInput | PollParticipantScalarWhereWithAggregatesInput[]
    OR?: PollParticipantScalarWhereWithAggregatesInput[]
    NOT?: PollParticipantScalarWhereWithAggregatesInput | PollParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PollParticipant"> | string
    pollId?: StringWithAggregatesFilter<"PollParticipant"> | string
    email?: StringWithAggregatesFilter<"PollParticipant"> | string
    status?: EnumParticipantStatusWithAggregatesFilter<"PollParticipant"> | $Enums.ParticipantStatus
    invitedAt?: DateTimeWithAggregatesFilter<"PollParticipant"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"PollParticipant"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    votes?: VoteListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    votes?: VoteOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    votes?: VoteListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollCreateInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateInput = {
    id?: string
    text: string
    poll: PollCreateNestedOneWithoutOptionsInput
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    text: string
    pollId: string
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: string
    text: string
    pollId: string
  }

  export type OptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateInput = {
    id?: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutVotesInput
    option: OptionCreateNestedOneWithoutVotesInput
    user?: UserCreateNestedOneWithoutVotesInput
    session?: SessionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    pollId: string
    optionId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
    option?: OptionUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneWithoutVotesNestedInput
    session?: SessionUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    pollId: string
    optionId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    pollId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    pollId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    polls?: PollCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    polls?: PollCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    polls?: PollCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    polls?: PollCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PollCategoryCreateInput = {
    poll: PollCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutPollsInput
  }

  export type PollCategoryUncheckedCreateInput = {
    pollId: string
    categoryId: string
  }

  export type PollCategoryUpdateInput = {
    poll?: PollUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPollsNestedInput
  }

  export type PollCategoryUncheckedUpdateInput = {
    pollId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PollCategoryCreateManyInput = {
    pollId: string
    categoryId: string
  }

  export type PollCategoryUpdateManyMutationInput = {

  }

  export type PollCategoryUncheckedUpdateManyInput = {
    pollId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
    poll?: PollCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    pollId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
    poll?: PollUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pollId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId?: string | null
    pollId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pollId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollParticipantCreateInput = {
    id?: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
    poll: PollCreateNestedOneWithoutParticipantsInput
  }

  export type PollParticipantUncheckedCreateInput = {
    id?: string
    pollId: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type PollParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poll?: PollUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type PollParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PollParticipantCreateManyInput = {
    id?: string
    pollId: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type PollParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PollParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    votes?: VoteCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PollListRelationFilter = {
    every?: PollWhereInput
    some?: PollWhereInput
    none?: PollWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PollStatus | EnumPollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPollStatusFilter<$PrismaModel> | $Enums.PollStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type PollCategoryListRelationFilter = {
    every?: PollCategoryWhereInput
    some?: PollCategoryWhereInput
    none?: PollCategoryWhereInput
  }

  export type PollParticipantListRelationFilter = {
    every?: PollParticipantWhereInput
    some?: PollParticipantWhereInput
    none?: PollParticipantWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    roomCode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PollMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    roomCode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PollMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    roomCode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PollStatus | EnumPollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPollStatusFilter<$PrismaModel>
    _max?: NestedEnumPollStatusFilter<$PrismaModel>
  }

  export type PollScalarRelationFilter = {
    is?: PollWhereInput
    isNot?: PollWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type OptionScalarRelationFilter = {
    is?: OptionWhereInput
    isNot?: OptionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pollId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pollId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pollId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PollCategoryPollIdCategoryIdCompoundUniqueInput = {
    pollId: string
    categoryId: string
  }

  export type PollCategoryCountOrderByAggregateInput = {
    pollId?: SortOrder
    categoryId?: SortOrder
  }

  export type PollCategoryMaxOrderByAggregateInput = {
    pollId?: SortOrder
    categoryId?: SortOrder
  }

  export type PollCategoryMinOrderByAggregateInput = {
    pollId?: SortOrder
    categoryId?: SortOrder
  }

  export type PollNullableScalarRelationFilter = {
    is?: PollWhereInput | null
    isNot?: PollWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pollId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pollId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pollId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PollParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    invitedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type PollParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    invitedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type PollParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    invitedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type PollCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput> | PollCreateWithoutCreatorInput[] | PollUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PollCreateOrConnectWithoutCreatorInput | PollCreateOrConnectWithoutCreatorInput[]
    createMany?: PollCreateManyCreatorInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type PollUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput> | PollCreateWithoutCreatorInput[] | PollUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PollCreateOrConnectWithoutCreatorInput | PollCreateOrConnectWithoutCreatorInput[]
    createMany?: PollCreateManyCreatorInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PollUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput> | PollCreateWithoutCreatorInput[] | PollUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PollCreateOrConnectWithoutCreatorInput | PollCreateOrConnectWithoutCreatorInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutCreatorInput | PollUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PollCreateManyCreatorInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutCreatorInput | PollUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PollUpdateManyWithWhereWithoutCreatorInput | PollUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type PollUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput> | PollCreateWithoutCreatorInput[] | PollUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PollCreateOrConnectWithoutCreatorInput | PollCreateOrConnectWithoutCreatorInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutCreatorInput | PollUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PollCreateManyCreatorInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutCreatorInput | PollUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PollUpdateManyWithWhereWithoutCreatorInput | PollUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPollsInput = {
    create?: XOR<UserCreateWithoutPollsInput, UserUncheckedCreateWithoutPollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPollsInput
    connect?: UserWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutPollInput = {
    create?: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput> | OptionCreateWithoutPollInput[] | OptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutPollInput | OptionCreateOrConnectWithoutPollInput[]
    createMany?: OptionCreateManyPollInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutPollInput = {
    create?: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput> | VoteCreateWithoutPollInput[] | VoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPollInput | VoteCreateOrConnectWithoutPollInput[]
    createMany?: VoteCreateManyPollInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPollInput = {
    create?: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput> | CommentCreateWithoutPollInput[] | CommentUncheckedCreateWithoutPollInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPollInput | CommentCreateOrConnectWithoutPollInput[]
    createMany?: CommentCreateManyPollInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PollCategoryCreateNestedManyWithoutPollInput = {
    create?: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput> | PollCategoryCreateWithoutPollInput[] | PollCategoryUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutPollInput | PollCategoryCreateOrConnectWithoutPollInput[]
    createMany?: PollCategoryCreateManyPollInputEnvelope
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
  }

  export type PollParticipantCreateNestedManyWithoutPollInput = {
    create?: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput> | PollParticipantCreateWithoutPollInput[] | PollParticipantUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollParticipantCreateOrConnectWithoutPollInput | PollParticipantCreateOrConnectWithoutPollInput[]
    createMany?: PollParticipantCreateManyPollInputEnvelope
    connect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutPollInput = {
    create?: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput> | ActivityLogCreateWithoutPollInput[] | ActivityLogUncheckedCreateWithoutPollInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPollInput | ActivityLogCreateOrConnectWithoutPollInput[]
    createMany?: ActivityLogCreateManyPollInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput> | OptionCreateWithoutPollInput[] | OptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutPollInput | OptionCreateOrConnectWithoutPollInput[]
    createMany?: OptionCreateManyPollInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput> | VoteCreateWithoutPollInput[] | VoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPollInput | VoteCreateOrConnectWithoutPollInput[]
    createMany?: VoteCreateManyPollInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput> | CommentCreateWithoutPollInput[] | CommentUncheckedCreateWithoutPollInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPollInput | CommentCreateOrConnectWithoutPollInput[]
    createMany?: CommentCreateManyPollInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PollCategoryUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput> | PollCategoryCreateWithoutPollInput[] | PollCategoryUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutPollInput | PollCategoryCreateOrConnectWithoutPollInput[]
    createMany?: PollCategoryCreateManyPollInputEnvelope
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
  }

  export type PollParticipantUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput> | PollParticipantCreateWithoutPollInput[] | PollParticipantUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollParticipantCreateOrConnectWithoutPollInput | PollParticipantCreateOrConnectWithoutPollInput[]
    createMany?: PollParticipantCreateManyPollInputEnvelope
    connect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput> | ActivityLogCreateWithoutPollInput[] | ActivityLogUncheckedCreateWithoutPollInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPollInput | ActivityLogCreateOrConnectWithoutPollInput[]
    createMany?: ActivityLogCreateManyPollInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPollStatusFieldUpdateOperationsInput = {
    set?: $Enums.PollStatus
  }

  export type UserUpdateOneRequiredWithoutPollsNestedInput = {
    create?: XOR<UserCreateWithoutPollsInput, UserUncheckedCreateWithoutPollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPollsInput
    upsert?: UserUpsertWithoutPollsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPollsInput, UserUpdateWithoutPollsInput>, UserUncheckedUpdateWithoutPollsInput>
  }

  export type OptionUpdateManyWithoutPollNestedInput = {
    create?: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput> | OptionCreateWithoutPollInput[] | OptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutPollInput | OptionCreateOrConnectWithoutPollInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutPollInput | OptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: OptionCreateManyPollInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutPollInput | OptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutPollInput | OptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutPollNestedInput = {
    create?: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput> | VoteCreateWithoutPollInput[] | VoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPollInput | VoteCreateOrConnectWithoutPollInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPollInput | VoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: VoteCreateManyPollInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPollInput | VoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPollInput | VoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPollNestedInput = {
    create?: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput> | CommentCreateWithoutPollInput[] | CommentUncheckedCreateWithoutPollInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPollInput | CommentCreateOrConnectWithoutPollInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPollInput | CommentUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: CommentCreateManyPollInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPollInput | CommentUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPollInput | CommentUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PollCategoryUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput> | PollCategoryCreateWithoutPollInput[] | PollCategoryUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutPollInput | PollCategoryCreateOrConnectWithoutPollInput[]
    upsert?: PollCategoryUpsertWithWhereUniqueWithoutPollInput | PollCategoryUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollCategoryCreateManyPollInputEnvelope
    set?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    disconnect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    delete?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    update?: PollCategoryUpdateWithWhereUniqueWithoutPollInput | PollCategoryUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollCategoryUpdateManyWithWhereWithoutPollInput | PollCategoryUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
  }

  export type PollParticipantUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput> | PollParticipantCreateWithoutPollInput[] | PollParticipantUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollParticipantCreateOrConnectWithoutPollInput | PollParticipantCreateOrConnectWithoutPollInput[]
    upsert?: PollParticipantUpsertWithWhereUniqueWithoutPollInput | PollParticipantUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollParticipantCreateManyPollInputEnvelope
    set?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    disconnect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    delete?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    connect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    update?: PollParticipantUpdateWithWhereUniqueWithoutPollInput | PollParticipantUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollParticipantUpdateManyWithWhereWithoutPollInput | PollParticipantUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollParticipantScalarWhereInput | PollParticipantScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutPollNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput> | ActivityLogCreateWithoutPollInput[] | ActivityLogUncheckedCreateWithoutPollInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPollInput | ActivityLogCreateOrConnectWithoutPollInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPollInput | ActivityLogUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: ActivityLogCreateManyPollInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPollInput | ActivityLogUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPollInput | ActivityLogUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput> | OptionCreateWithoutPollInput[] | OptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutPollInput | OptionCreateOrConnectWithoutPollInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutPollInput | OptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: OptionCreateManyPollInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutPollInput | OptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutPollInput | OptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput> | VoteCreateWithoutPollInput[] | VoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPollInput | VoteCreateOrConnectWithoutPollInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPollInput | VoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: VoteCreateManyPollInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPollInput | VoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPollInput | VoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput> | CommentCreateWithoutPollInput[] | CommentUncheckedCreateWithoutPollInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPollInput | CommentCreateOrConnectWithoutPollInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPollInput | CommentUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: CommentCreateManyPollInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPollInput | CommentUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPollInput | CommentUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PollCategoryUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput> | PollCategoryCreateWithoutPollInput[] | PollCategoryUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutPollInput | PollCategoryCreateOrConnectWithoutPollInput[]
    upsert?: PollCategoryUpsertWithWhereUniqueWithoutPollInput | PollCategoryUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollCategoryCreateManyPollInputEnvelope
    set?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    disconnect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    delete?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    update?: PollCategoryUpdateWithWhereUniqueWithoutPollInput | PollCategoryUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollCategoryUpdateManyWithWhereWithoutPollInput | PollCategoryUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
  }

  export type PollParticipantUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput> | PollParticipantCreateWithoutPollInput[] | PollParticipantUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollParticipantCreateOrConnectWithoutPollInput | PollParticipantCreateOrConnectWithoutPollInput[]
    upsert?: PollParticipantUpsertWithWhereUniqueWithoutPollInput | PollParticipantUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollParticipantCreateManyPollInputEnvelope
    set?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    disconnect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    delete?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    connect?: PollParticipantWhereUniqueInput | PollParticipantWhereUniqueInput[]
    update?: PollParticipantUpdateWithWhereUniqueWithoutPollInput | PollParticipantUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollParticipantUpdateManyWithWhereWithoutPollInput | PollParticipantUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollParticipantScalarWhereInput | PollParticipantScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput> | ActivityLogCreateWithoutPollInput[] | ActivityLogUncheckedCreateWithoutPollInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPollInput | ActivityLogCreateOrConnectWithoutPollInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPollInput | ActivityLogUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: ActivityLogCreateManyPollInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPollInput | ActivityLogUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPollInput | ActivityLogUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type PollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    connect?: PollWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type PollUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    upsert?: PollUpsertWithoutOptionsInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutOptionsInput, PollUpdateWithoutOptionsInput>, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type VoteUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type PollCreateNestedOneWithoutVotesInput = {
    create?: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollCreateOrConnectWithoutVotesInput
    connect?: PollWhereUniqueInput
  }

  export type OptionCreateNestedOneWithoutVotesInput = {
    create?: XOR<OptionCreateWithoutVotesInput, OptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: OptionCreateOrConnectWithoutVotesInput
    connect?: OptionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutVotesInput = {
    create?: XOR<SessionCreateWithoutVotesInput, SessionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutVotesInput
    connect?: SessionWhereUniqueInput
  }

  export type PollUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollCreateOrConnectWithoutVotesInput
    upsert?: PollUpsertWithoutVotesInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutVotesInput, PollUpdateWithoutVotesInput>, PollUncheckedUpdateWithoutVotesInput>
  }

  export type OptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<OptionCreateWithoutVotesInput, OptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: OptionCreateOrConnectWithoutVotesInput
    upsert?: OptionUpsertWithoutVotesInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutVotesInput, OptionUpdateWithoutVotesInput>, OptionUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type SessionUpdateOneWithoutVotesNestedInput = {
    create?: XOR<SessionCreateWithoutVotesInput, SessionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutVotesInput
    upsert?: SessionUpsertWithoutVotesInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutVotesInput, SessionUpdateWithoutVotesInput>, SessionUncheckedUpdateWithoutVotesInput>
  }

  export type PollCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PollCreateWithoutCommentsInput, PollUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PollCreateOrConnectWithoutCommentsInput
    connect?: PollWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PollUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PollCreateWithoutCommentsInput, PollUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PollCreateOrConnectWithoutCommentsInput
    upsert?: PollUpsertWithoutCommentsInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutCommentsInput, PollUpdateWithoutCommentsInput>, PollUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PollCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput> | PollCategoryCreateWithoutCategoryInput[] | PollCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutCategoryInput | PollCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: PollCategoryCreateManyCategoryInputEnvelope
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
  }

  export type PollCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput> | PollCategoryCreateWithoutCategoryInput[] | PollCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutCategoryInput | PollCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: PollCategoryCreateManyCategoryInputEnvelope
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
  }

  export type PollCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput> | PollCategoryCreateWithoutCategoryInput[] | PollCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutCategoryInput | PollCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: PollCategoryUpsertWithWhereUniqueWithoutCategoryInput | PollCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PollCategoryCreateManyCategoryInputEnvelope
    set?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    disconnect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    delete?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    update?: PollCategoryUpdateWithWhereUniqueWithoutCategoryInput | PollCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PollCategoryUpdateManyWithWhereWithoutCategoryInput | PollCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
  }

  export type PollCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput> | PollCategoryCreateWithoutCategoryInput[] | PollCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PollCategoryCreateOrConnectWithoutCategoryInput | PollCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: PollCategoryUpsertWithWhereUniqueWithoutCategoryInput | PollCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PollCategoryCreateManyCategoryInputEnvelope
    set?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    disconnect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    delete?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    connect?: PollCategoryWhereUniqueInput | PollCategoryWhereUniqueInput[]
    update?: PollCategoryUpdateWithWhereUniqueWithoutCategoryInput | PollCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PollCategoryUpdateManyWithWhereWithoutCategoryInput | PollCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
  }

  export type PollCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<PollCreateWithoutCategoriesInput, PollUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PollCreateOrConnectWithoutCategoriesInput
    connect?: PollWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPollsInput = {
    create?: XOR<CategoryCreateWithoutPollsInput, CategoryUncheckedCreateWithoutPollsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPollsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PollUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<PollCreateWithoutCategoriesInput, PollUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PollCreateOrConnectWithoutCategoriesInput
    upsert?: PollUpsertWithoutCategoriesInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutCategoriesInput, PollUpdateWithoutCategoriesInput>, PollUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPollsNestedInput = {
    create?: XOR<CategoryCreateWithoutPollsInput, CategoryUncheckedCreateWithoutPollsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPollsInput
    upsert?: CategoryUpsertWithoutPollsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPollsInput, CategoryUpdateWithoutPollsInput>, CategoryUncheckedUpdateWithoutPollsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type PollCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<PollCreateWithoutActivityLogsInput, PollUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: PollCreateOrConnectWithoutActivityLogsInput
    connect?: PollWhereUniqueInput
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type PollUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<PollCreateWithoutActivityLogsInput, PollUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: PollCreateOrConnectWithoutActivityLogsInput
    upsert?: PollUpsertWithoutActivityLogsInput
    disconnect?: PollWhereInput | boolean
    delete?: PollWhereInput | boolean
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutActivityLogsInput, PollUpdateWithoutActivityLogsInput>, PollUncheckedUpdateWithoutActivityLogsInput>
  }

  export type PollCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<PollCreateWithoutParticipantsInput, PollUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PollCreateOrConnectWithoutParticipantsInput
    connect?: PollWhereUniqueInput
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PollUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<PollCreateWithoutParticipantsInput, PollUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PollCreateOrConnectWithoutParticipantsInput
    upsert?: PollUpsertWithoutParticipantsInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutParticipantsInput, PollUpdateWithoutParticipantsInput>, PollUncheckedUpdateWithoutParticipantsInput>
  }

  export type VoteCreateNestedManyWithoutSessionInput = {
    create?: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput> | VoteCreateWithoutSessionInput[] | VoteUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSessionInput | VoteCreateOrConnectWithoutSessionInput[]
    createMany?: VoteCreateManySessionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput> | VoteCreateWithoutSessionInput[] | VoteUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSessionInput | VoteCreateOrConnectWithoutSessionInput[]
    createMany?: VoteCreateManySessionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUpdateManyWithoutSessionNestedInput = {
    create?: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput> | VoteCreateWithoutSessionInput[] | VoteUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSessionInput | VoteCreateOrConnectWithoutSessionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSessionInput | VoteUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: VoteCreateManySessionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSessionInput | VoteUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSessionInput | VoteUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput> | VoteCreateWithoutSessionInput[] | VoteUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSessionInput | VoteCreateOrConnectWithoutSessionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSessionInput | VoteUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: VoteCreateManySessionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSessionInput | VoteUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSessionInput | VoteUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PollStatus | EnumPollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPollStatusFilter<$PrismaModel> | $Enums.PollStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PollStatus | EnumPollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PollStatus[] | ListEnumPollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPollStatusFilter<$PrismaModel>
    _max?: NestedEnumPollStatusFilter<$PrismaModel>
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PollCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutCreatorInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput>
  }

  export type PollCreateManyCreatorInputEnvelope = {
    data: PollCreateManyCreatorInput | PollCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    pollId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutVotesInput
    option: OptionCreateNestedOneWithoutVotesInput
    session?: SessionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    pollId: string
    optionId: string
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    createdAt?: Date | string
    poll?: PollCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    pollId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PollUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PollWhereUniqueInput
    update: XOR<PollUpdateWithoutCreatorInput, PollUncheckedUpdateWithoutCreatorInput>
    create: XOR<PollCreateWithoutCreatorInput, PollUncheckedCreateWithoutCreatorInput>
  }

  export type PollUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PollWhereUniqueInput
    data: XOR<PollUpdateWithoutCreatorInput, PollUncheckedUpdateWithoutCreatorInput>
  }

  export type PollUpdateManyWithWhereWithoutCreatorInput = {
    where: PollScalarWhereInput
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PollScalarWhereInput = {
    AND?: PollScalarWhereInput | PollScalarWhereInput[]
    OR?: PollScalarWhereInput[]
    NOT?: PollScalarWhereInput | PollScalarWhereInput[]
    id?: StringFilter<"Poll"> | string
    title?: StringFilter<"Poll"> | string
    description?: StringNullableFilter<"Poll"> | string | null
    creatorId?: StringFilter<"Poll"> | string
    isPublic?: BoolFilter<"Poll"> | boolean
    roomCode?: StringNullableFilter<"Poll"> | string | null
    status?: EnumPollStatusFilter<"Poll"> | $Enums.PollStatus
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    updatedAt?: DateTimeFilter<"Poll"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    pollId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    pollId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    userId?: StringNullableFilter<"Vote"> | string | null
    sessionId?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    pollId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateWithoutPollsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPollsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPollsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPollsInput, UserUncheckedCreateWithoutPollsInput>
  }

  export type OptionCreateWithoutPollInput = {
    id?: string
    text: string
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutPollInput = {
    id?: string
    text: string
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutPollInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput>
  }

  export type OptionCreateManyPollInputEnvelope = {
    data: OptionCreateManyPollInput | OptionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutPollInput = {
    id?: string
    createdAt?: Date | string
    option: OptionCreateNestedOneWithoutVotesInput
    user?: UserCreateNestedOneWithoutVotesInput
    session?: SessionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutPollInput = {
    id?: string
    optionId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutPollInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput>
  }

  export type VoteCreateManyPollInputEnvelope = {
    data: VoteCreateManyPollInput | VoteCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutPollInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPollInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPollInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput>
  }

  export type CommentCreateManyPollInputEnvelope = {
    data: CommentCreateManyPollInput | CommentCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type PollCategoryCreateWithoutPollInput = {
    category: CategoryCreateNestedOneWithoutPollsInput
  }

  export type PollCategoryUncheckedCreateWithoutPollInput = {
    categoryId: string
  }

  export type PollCategoryCreateOrConnectWithoutPollInput = {
    where: PollCategoryWhereUniqueInput
    create: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput>
  }

  export type PollCategoryCreateManyPollInputEnvelope = {
    data: PollCategoryCreateManyPollInput | PollCategoryCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type PollParticipantCreateWithoutPollInput = {
    id?: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type PollParticipantUncheckedCreateWithoutPollInput = {
    id?: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type PollParticipantCreateOrConnectWithoutPollInput = {
    where: PollParticipantWhereUniqueInput
    create: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput>
  }

  export type PollParticipantCreateManyPollInputEnvelope = {
    data: PollParticipantCreateManyPollInput | PollParticipantCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutPollInput = {
    id?: string
    action: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutPollInput = {
    id?: string
    userId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutPollInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput>
  }

  export type ActivityLogCreateManyPollInputEnvelope = {
    data: ActivityLogCreateManyPollInput | ActivityLogCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPollsInput = {
    update: XOR<UserUpdateWithoutPollsInput, UserUncheckedUpdateWithoutPollsInput>
    create: XOR<UserCreateWithoutPollsInput, UserUncheckedCreateWithoutPollsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPollsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPollsInput, UserUncheckedUpdateWithoutPollsInput>
  }

  export type UserUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutPollInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutPollInput, OptionUncheckedUpdateWithoutPollInput>
    create: XOR<OptionCreateWithoutPollInput, OptionUncheckedCreateWithoutPollInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutPollInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutPollInput, OptionUncheckedUpdateWithoutPollInput>
  }

  export type OptionUpdateManyWithWhereWithoutPollInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutPollInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    pollId?: StringFilter<"Option"> | string
  }

  export type VoteUpsertWithWhereUniqueWithoutPollInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutPollInput, VoteUncheckedUpdateWithoutPollInput>
    create: XOR<VoteCreateWithoutPollInput, VoteUncheckedCreateWithoutPollInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutPollInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutPollInput, VoteUncheckedUpdateWithoutPollInput>
  }

  export type VoteUpdateManyWithWhereWithoutPollInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutPollInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPollInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPollInput, CommentUncheckedUpdateWithoutPollInput>
    create: XOR<CommentCreateWithoutPollInput, CommentUncheckedCreateWithoutPollInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPollInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPollInput, CommentUncheckedUpdateWithoutPollInput>
  }

  export type CommentUpdateManyWithWhereWithoutPollInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPollInput>
  }

  export type PollCategoryUpsertWithWhereUniqueWithoutPollInput = {
    where: PollCategoryWhereUniqueInput
    update: XOR<PollCategoryUpdateWithoutPollInput, PollCategoryUncheckedUpdateWithoutPollInput>
    create: XOR<PollCategoryCreateWithoutPollInput, PollCategoryUncheckedCreateWithoutPollInput>
  }

  export type PollCategoryUpdateWithWhereUniqueWithoutPollInput = {
    where: PollCategoryWhereUniqueInput
    data: XOR<PollCategoryUpdateWithoutPollInput, PollCategoryUncheckedUpdateWithoutPollInput>
  }

  export type PollCategoryUpdateManyWithWhereWithoutPollInput = {
    where: PollCategoryScalarWhereInput
    data: XOR<PollCategoryUpdateManyMutationInput, PollCategoryUncheckedUpdateManyWithoutPollInput>
  }

  export type PollCategoryScalarWhereInput = {
    AND?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
    OR?: PollCategoryScalarWhereInput[]
    NOT?: PollCategoryScalarWhereInput | PollCategoryScalarWhereInput[]
    pollId?: StringFilter<"PollCategory"> | string
    categoryId?: StringFilter<"PollCategory"> | string
  }

  export type PollParticipantUpsertWithWhereUniqueWithoutPollInput = {
    where: PollParticipantWhereUniqueInput
    update: XOR<PollParticipantUpdateWithoutPollInput, PollParticipantUncheckedUpdateWithoutPollInput>
    create: XOR<PollParticipantCreateWithoutPollInput, PollParticipantUncheckedCreateWithoutPollInput>
  }

  export type PollParticipantUpdateWithWhereUniqueWithoutPollInput = {
    where: PollParticipantWhereUniqueInput
    data: XOR<PollParticipantUpdateWithoutPollInput, PollParticipantUncheckedUpdateWithoutPollInput>
  }

  export type PollParticipantUpdateManyWithWhereWithoutPollInput = {
    where: PollParticipantScalarWhereInput
    data: XOR<PollParticipantUpdateManyMutationInput, PollParticipantUncheckedUpdateManyWithoutPollInput>
  }

  export type PollParticipantScalarWhereInput = {
    AND?: PollParticipantScalarWhereInput | PollParticipantScalarWhereInput[]
    OR?: PollParticipantScalarWhereInput[]
    NOT?: PollParticipantScalarWhereInput | PollParticipantScalarWhereInput[]
    id?: StringFilter<"PollParticipant"> | string
    pollId?: StringFilter<"PollParticipant"> | string
    email?: StringFilter<"PollParticipant"> | string
    status?: EnumParticipantStatusFilter<"PollParticipant"> | $Enums.ParticipantStatus
    invitedAt?: DateTimeFilter<"PollParticipant"> | Date | string
    respondedAt?: DateTimeNullableFilter<"PollParticipant"> | Date | string | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutPollInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutPollInput, ActivityLogUncheckedUpdateWithoutPollInput>
    create: XOR<ActivityLogCreateWithoutPollInput, ActivityLogUncheckedCreateWithoutPollInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutPollInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutPollInput, ActivityLogUncheckedUpdateWithoutPollInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutPollInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutPollInput>
  }

  export type PollCreateWithoutOptionsInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutOptionsInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutOptionsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
  }

  export type VoteCreateWithoutOptionInput = {
    id?: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutVotesInput
    user?: UserCreateNestedOneWithoutVotesInput
    session?: SessionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutOptionInput = {
    id?: string
    pollId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutOptionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteCreateManyOptionInputEnvelope = {
    data: VoteCreateManyOptionInput | VoteCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type PollUpsertWithoutOptionsInput = {
    update: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type PollUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
  }

  export type VoteUpdateManyWithWhereWithoutOptionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutOptionInput>
  }

  export type PollCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutVotesInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
  }

  export type OptionCreateWithoutVotesInput = {
    id?: string
    text: string
    poll: PollCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutVotesInput = {
    id?: string
    text: string
    pollId: string
  }

  export type OptionCreateOrConnectWithoutVotesInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutVotesInput, OptionUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type SessionCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutVotesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutVotesInput, SessionUncheckedCreateWithoutVotesInput>
  }

  export type PollUpsertWithoutVotesInput = {
    update: XOR<PollUpdateWithoutVotesInput, PollUncheckedUpdateWithoutVotesInput>
    create: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutVotesInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutVotesInput, PollUncheckedUpdateWithoutVotesInput>
  }

  export type PollUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type OptionUpsertWithoutVotesInput = {
    update: XOR<OptionUpdateWithoutVotesInput, OptionUncheckedUpdateWithoutVotesInput>
    create: XOR<OptionCreateWithoutVotesInput, OptionUncheckedCreateWithoutVotesInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutVotesInput, OptionUncheckedUpdateWithoutVotesInput>
  }

  export type OptionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionUpsertWithoutVotesInput = {
    update: XOR<SessionUpdateWithoutVotesInput, SessionUncheckedUpdateWithoutVotesInput>
    create: XOR<SessionCreateWithoutVotesInput, SessionUncheckedCreateWithoutVotesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutVotesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutVotesInput, SessionUncheckedUpdateWithoutVotesInput>
  }

  export type SessionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutCommentsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutCommentsInput, PollUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollCreateNestedManyWithoutCreatorInput
    votes?: VoteCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollUncheckedCreateNestedManyWithoutCreatorInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PollUpsertWithoutCommentsInput = {
    update: XOR<PollUpdateWithoutCommentsInput, PollUncheckedUpdateWithoutCommentsInput>
    create: XOR<PollCreateWithoutCommentsInput, PollUncheckedCreateWithoutCommentsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutCommentsInput, PollUncheckedUpdateWithoutCommentsInput>
  }

  export type PollUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUpdateManyWithoutCreatorNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUncheckedUpdateManyWithoutCreatorNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PollCategoryCreateWithoutCategoryInput = {
    poll: PollCreateNestedOneWithoutCategoriesInput
  }

  export type PollCategoryUncheckedCreateWithoutCategoryInput = {
    pollId: string
  }

  export type PollCategoryCreateOrConnectWithoutCategoryInput = {
    where: PollCategoryWhereUniqueInput
    create: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type PollCategoryCreateManyCategoryInputEnvelope = {
    data: PollCategoryCreateManyCategoryInput | PollCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PollCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PollCategoryWhereUniqueInput
    update: XOR<PollCategoryUpdateWithoutCategoryInput, PollCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<PollCategoryCreateWithoutCategoryInput, PollCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type PollCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PollCategoryWhereUniqueInput
    data: XOR<PollCategoryUpdateWithoutCategoryInput, PollCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type PollCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: PollCategoryScalarWhereInput
    data: XOR<PollCategoryUpdateManyMutationInput, PollCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PollCreateWithoutCategoriesInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutCategoriesInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutCategoriesInput, PollUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutPollsInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutPollsInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutPollsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPollsInput, CategoryUncheckedCreateWithoutPollsInput>
  }

  export type PollUpsertWithoutCategoriesInput = {
    update: XOR<PollUpdateWithoutCategoriesInput, PollUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PollCreateWithoutCategoriesInput, PollUncheckedCreateWithoutCategoriesInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutCategoriesInput, PollUncheckedUpdateWithoutCategoriesInput>
  }

  export type PollUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type CategoryUpsertWithoutPollsInput = {
    update: XOR<CategoryUpdateWithoutPollsInput, CategoryUncheckedUpdateWithoutPollsInput>
    create: XOR<CategoryCreateWithoutPollsInput, CategoryUncheckedCreateWithoutPollsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPollsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPollsInput, CategoryUncheckedUpdateWithoutPollsInput>
  }

  export type CategoryUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    polls?: PollUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type PollCreateWithoutActivityLogsInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    participants?: PollParticipantCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    participants?: PollParticipantUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutActivityLogsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutActivityLogsInput, PollUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: PollUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PollUpsertWithoutActivityLogsInput = {
    update: XOR<PollUpdateWithoutActivityLogsInput, PollUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<PollCreateWithoutActivityLogsInput, PollUncheckedCreateWithoutActivityLogsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutActivityLogsInput, PollUncheckedUpdateWithoutActivityLogsInput>
  }

  export type PollUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPollsInput
    options?: OptionCreateNestedManyWithoutPollInput
    votes?: VoteCreateNestedManyWithoutPollInput
    comments?: CommentCreateNestedManyWithoutPollInput
    categories?: PollCategoryCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutPollInput
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput
    comments?: CommentUncheckedCreateNestedManyWithoutPollInput
    categories?: PollCategoryUncheckedCreateNestedManyWithoutPollInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutParticipantsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutParticipantsInput, PollUncheckedCreateWithoutParticipantsInput>
  }

  export type PollUpsertWithoutParticipantsInput = {
    update: XOR<PollUpdateWithoutParticipantsInput, PollUncheckedUpdateWithoutParticipantsInput>
    create: XOR<PollCreateWithoutParticipantsInput, PollUncheckedCreateWithoutParticipantsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutParticipantsInput, PollUncheckedUpdateWithoutParticipantsInput>
  }

  export type PollUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPollsNestedInput
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type VoteCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    poll: PollCreateNestedOneWithoutVotesInput
    option: OptionCreateNestedOneWithoutVotesInput
    user?: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutSessionInput = {
    id?: string
    pollId: string
    optionId: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutSessionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput>
  }

  export type VoteCreateManySessionInputEnvelope = {
    data: VoteCreateManySessionInput | VoteCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type VoteUpsertWithWhereUniqueWithoutSessionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutSessionInput, VoteUncheckedUpdateWithoutSessionInput>
    create: XOR<VoteCreateWithoutSessionInput, VoteUncheckedCreateWithoutSessionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutSessionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutSessionInput, VoteUncheckedUpdateWithoutSessionInput>
  }

  export type VoteUpdateManyWithWhereWithoutSessionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutSessionInput>
  }

  export type PollCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    isPublic?: boolean
    roomCode?: string | null
    status?: $Enums.PollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    pollId: string
    createdAt?: Date | string
  }

  export type VoteCreateManyUserInput = {
    id?: string
    pollId: string
    optionId: string
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    pollId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type PollUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUpdateManyWithoutPollNestedInput
    votes?: VoteUpdateManyWithoutPollNestedInput
    comments?: CommentUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPollNestedInput
    categories?: PollCategoryUncheckedUpdateManyWithoutPollNestedInput
    participants?: PollParticipantUncheckedUpdateManyWithoutPollNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    roomCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPollStatusFieldUpdateOperationsInput | $Enums.PollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
    option?: OptionUpdateOneRequiredWithoutVotesNestedInput
    session?: SessionUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateManyPollInput = {
    id?: string
    text: string
  }

  export type VoteCreateManyPollInput = {
    id?: string
    optionId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyPollInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type PollCategoryCreateManyPollInput = {
    categoryId: string
  }

  export type PollParticipantCreateManyPollInput = {
    id?: string
    email: string
    status?: $Enums.ParticipantStatus
    invitedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type ActivityLogCreateManyPollInput = {
    id?: string
    userId?: string | null
    action: string
    createdAt?: Date | string
  }

  export type OptionUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    option?: OptionUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneWithoutVotesNestedInput
    session?: SessionUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollCategoryUpdateWithoutPollInput = {
    category?: CategoryUpdateOneRequiredWithoutPollsNestedInput
  }

  export type PollCategoryUncheckedUpdateWithoutPollInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PollCategoryUncheckedUpdateManyWithoutPollInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PollParticipantUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PollParticipantUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PollParticipantUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyOptionInput = {
    id?: string
    pollId: string
    userId?: string | null
    sessionId?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneWithoutVotesNestedInput
    session?: SessionUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollCategoryCreateManyCategoryInput = {
    pollId: string
  }

  export type PollCategoryUpdateWithoutCategoryInput = {
    poll?: PollUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type PollCategoryUncheckedUpdateWithoutCategoryInput = {
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollCategoryUncheckedUpdateManyWithoutCategoryInput = {
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManySessionInput = {
    id?: string
    pollId: string
    optionId: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
    option?: OptionUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}