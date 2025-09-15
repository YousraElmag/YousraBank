
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
 * Model idempotency_keys
 * 
 */
export type idempotency_keys = $Result.DefaultSelection<Prisma.$idempotency_keysPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Idempotency_keys
 * const idempotency_keys = await prisma.idempotency_keys.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Idempotency_keys
   * const idempotency_keys = await prisma.idempotency_keys.findMany()
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
   * `prisma.idempotency_keys`: Exposes CRUD operations for the **idempotency_keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idempotency_keys
    * const idempotency_keys = await prisma.idempotency_keys.findMany()
    * ```
    */
  get idempotency_keys(): Prisma.idempotency_keysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    idempotency_keys: 'idempotency_keys',
    payments: 'payments',
    users: 'users'
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
      modelProps: "idempotency_keys" | "payments" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      idempotency_keys: {
        payload: Prisma.$idempotency_keysPayload<ExtArgs>
        fields: Prisma.idempotency_keysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idempotency_keysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idempotency_keysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          findFirst: {
            args: Prisma.idempotency_keysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idempotency_keysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          findMany: {
            args: Prisma.idempotency_keysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>[]
          }
          create: {
            args: Prisma.idempotency_keysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          createMany: {
            args: Prisma.idempotency_keysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idempotency_keysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>[]
          }
          delete: {
            args: Prisma.idempotency_keysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          update: {
            args: Prisma.idempotency_keysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          deleteMany: {
            args: Prisma.idempotency_keysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idempotency_keysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idempotency_keysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>[]
          }
          upsert: {
            args: Prisma.idempotency_keysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idempotency_keysPayload>
          }
          aggregate: {
            args: Prisma.Idempotency_keysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotency_keys>
          }
          groupBy: {
            args: Prisma.idempotency_keysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idempotency_keysGroupByOutputType>[]
          }
          count: {
            args: Prisma.idempotency_keysCountArgs<ExtArgs>
            result: $Utils.Optional<Idempotency_keysCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    idempotency_keys?: idempotency_keysOmit
    payments?: paymentsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    payments_payments_recipient_idTousers: number
    payments_payments_sender_idTousers: number
    payments_payments_user_idTousers: number
    other_users: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments_payments_recipient_idTousers?: boolean | UsersCountOutputTypeCountPayments_payments_recipient_idTousersArgs
    payments_payments_sender_idTousers?: boolean | UsersCountOutputTypeCountPayments_payments_sender_idTousersArgs
    payments_payments_user_idTousers?: boolean | UsersCountOutputTypeCountPayments_payments_user_idTousersArgs
    other_users?: boolean | UsersCountOutputTypeCountOther_usersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayments_payments_recipient_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayments_payments_sender_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayments_payments_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOther_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model idempotency_keys
   */

  export type AggregateIdempotency_keys = {
    _count: Idempotency_keysCountAggregateOutputType | null
    _avg: Idempotency_keysAvgAggregateOutputType | null
    _sum: Idempotency_keysSumAggregateOutputType | null
    _min: Idempotency_keysMinAggregateOutputType | null
    _max: Idempotency_keysMaxAggregateOutputType | null
  }

  export type Idempotency_keysAvgAggregateOutputType = {
    id: number | null
  }

  export type Idempotency_keysSumAggregateOutputType = {
    id: bigint | null
  }

  export type Idempotency_keysMinAggregateOutputType = {
    id: bigint | null
    key: string | null
    created_at: Date | null
  }

  export type Idempotency_keysMaxAggregateOutputType = {
    id: bigint | null
    key: string | null
    created_at: Date | null
  }

  export type Idempotency_keysCountAggregateOutputType = {
    id: number
    key: number
    response: number
    created_at: number
    _all: number
  }


  export type Idempotency_keysAvgAggregateInputType = {
    id?: true
  }

  export type Idempotency_keysSumAggregateInputType = {
    id?: true
  }

  export type Idempotency_keysMinAggregateInputType = {
    id?: true
    key?: true
    created_at?: true
  }

  export type Idempotency_keysMaxAggregateInputType = {
    id?: true
    key?: true
    created_at?: true
  }

  export type Idempotency_keysCountAggregateInputType = {
    id?: true
    key?: true
    response?: true
    created_at?: true
    _all?: true
  }

  export type Idempotency_keysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idempotency_keys to aggregate.
     */
    where?: idempotency_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idempotency_keys to fetch.
     */
    orderBy?: idempotency_keysOrderByWithRelationInput | idempotency_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idempotency_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idempotency_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idempotency_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idempotency_keys
    **/
    _count?: true | Idempotency_keysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Idempotency_keysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Idempotency_keysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idempotency_keysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idempotency_keysMaxAggregateInputType
  }

  export type GetIdempotency_keysAggregateType<T extends Idempotency_keysAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotency_keys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotency_keys[P]>
      : GetScalarType<T[P], AggregateIdempotency_keys[P]>
  }




  export type idempotency_keysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idempotency_keysWhereInput
    orderBy?: idempotency_keysOrderByWithAggregationInput | idempotency_keysOrderByWithAggregationInput[]
    by: Idempotency_keysScalarFieldEnum[] | Idempotency_keysScalarFieldEnum
    having?: idempotency_keysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idempotency_keysCountAggregateInputType | true
    _avg?: Idempotency_keysAvgAggregateInputType
    _sum?: Idempotency_keysSumAggregateInputType
    _min?: Idempotency_keysMinAggregateInputType
    _max?: Idempotency_keysMaxAggregateInputType
  }

  export type Idempotency_keysGroupByOutputType = {
    id: bigint
    key: string
    response: JsonValue
    created_at: Date | null
    _count: Idempotency_keysCountAggregateOutputType | null
    _avg: Idempotency_keysAvgAggregateOutputType | null
    _sum: Idempotency_keysSumAggregateOutputType | null
    _min: Idempotency_keysMinAggregateOutputType | null
    _max: Idempotency_keysMaxAggregateOutputType | null
  }

  type GetIdempotency_keysGroupByPayload<T extends idempotency_keysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idempotency_keysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idempotency_keysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idempotency_keysGroupByOutputType[P]>
            : GetScalarType<T[P], Idempotency_keysGroupByOutputType[P]>
        }
      >
    >


  export type idempotency_keysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    response?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["idempotency_keys"]>

  export type idempotency_keysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    response?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["idempotency_keys"]>

  export type idempotency_keysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    response?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["idempotency_keys"]>

  export type idempotency_keysSelectScalar = {
    id?: boolean
    key?: boolean
    response?: boolean
    created_at?: boolean
  }

  export type idempotency_keysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "response" | "created_at", ExtArgs["result"]["idempotency_keys"]>

  export type $idempotency_keysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idempotency_keys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      key: string
      response: Prisma.JsonValue
      created_at: Date | null
    }, ExtArgs["result"]["idempotency_keys"]>
    composites: {}
  }

  type idempotency_keysGetPayload<S extends boolean | null | undefined | idempotency_keysDefaultArgs> = $Result.GetResult<Prisma.$idempotency_keysPayload, S>

  type idempotency_keysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idempotency_keysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idempotency_keysCountAggregateInputType | true
    }

  export interface idempotency_keysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idempotency_keys'], meta: { name: 'idempotency_keys' } }
    /**
     * Find zero or one Idempotency_keys that matches the filter.
     * @param {idempotency_keysFindUniqueArgs} args - Arguments to find a Idempotency_keys
     * @example
     * // Get one Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idempotency_keysFindUniqueArgs>(args: SelectSubset<T, idempotency_keysFindUniqueArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idempotency_keys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idempotency_keysFindUniqueOrThrowArgs} args - Arguments to find a Idempotency_keys
     * @example
     * // Get one Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idempotency_keysFindUniqueOrThrowArgs>(args: SelectSubset<T, idempotency_keysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idempotency_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysFindFirstArgs} args - Arguments to find a Idempotency_keys
     * @example
     * // Get one Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idempotency_keysFindFirstArgs>(args?: SelectSubset<T, idempotency_keysFindFirstArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idempotency_keys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysFindFirstOrThrowArgs} args - Arguments to find a Idempotency_keys
     * @example
     * // Get one Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idempotency_keysFindFirstOrThrowArgs>(args?: SelectSubset<T, idempotency_keysFindFirstOrThrowArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idempotency_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findMany()
     * 
     * // Get first 10 Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idempotency_keysWithIdOnly = await prisma.idempotency_keys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idempotency_keysFindManyArgs>(args?: SelectSubset<T, idempotency_keysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idempotency_keys.
     * @param {idempotency_keysCreateArgs} args - Arguments to create a Idempotency_keys.
     * @example
     * // Create one Idempotency_keys
     * const Idempotency_keys = await prisma.idempotency_keys.create({
     *   data: {
     *     // ... data to create a Idempotency_keys
     *   }
     * })
     * 
     */
    create<T extends idempotency_keysCreateArgs>(args: SelectSubset<T, idempotency_keysCreateArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idempotency_keys.
     * @param {idempotency_keysCreateManyArgs} args - Arguments to create many Idempotency_keys.
     * @example
     * // Create many Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idempotency_keysCreateManyArgs>(args?: SelectSubset<T, idempotency_keysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idempotency_keys and returns the data saved in the database.
     * @param {idempotency_keysCreateManyAndReturnArgs} args - Arguments to create many Idempotency_keys.
     * @example
     * // Create many Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idempotency_keys and only return the `id`
     * const idempotency_keysWithIdOnly = await prisma.idempotency_keys.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idempotency_keysCreateManyAndReturnArgs>(args?: SelectSubset<T, idempotency_keysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idempotency_keys.
     * @param {idempotency_keysDeleteArgs} args - Arguments to delete one Idempotency_keys.
     * @example
     * // Delete one Idempotency_keys
     * const Idempotency_keys = await prisma.idempotency_keys.delete({
     *   where: {
     *     // ... filter to delete one Idempotency_keys
     *   }
     * })
     * 
     */
    delete<T extends idempotency_keysDeleteArgs>(args: SelectSubset<T, idempotency_keysDeleteArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idempotency_keys.
     * @param {idempotency_keysUpdateArgs} args - Arguments to update one Idempotency_keys.
     * @example
     * // Update one Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idempotency_keysUpdateArgs>(args: SelectSubset<T, idempotency_keysUpdateArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idempotency_keys.
     * @param {idempotency_keysDeleteManyArgs} args - Arguments to filter Idempotency_keys to delete.
     * @example
     * // Delete a few Idempotency_keys
     * const { count } = await prisma.idempotency_keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idempotency_keysDeleteManyArgs>(args?: SelectSubset<T, idempotency_keysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idempotency_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idempotency_keysUpdateManyArgs>(args: SelectSubset<T, idempotency_keysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idempotency_keys and returns the data updated in the database.
     * @param {idempotency_keysUpdateManyAndReturnArgs} args - Arguments to update many Idempotency_keys.
     * @example
     * // Update many Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idempotency_keys and only return the `id`
     * const idempotency_keysWithIdOnly = await prisma.idempotency_keys.updateManyAndReturn({
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
    updateManyAndReturn<T extends idempotency_keysUpdateManyAndReturnArgs>(args: SelectSubset<T, idempotency_keysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idempotency_keys.
     * @param {idempotency_keysUpsertArgs} args - Arguments to update or create a Idempotency_keys.
     * @example
     * // Update or create a Idempotency_keys
     * const idempotency_keys = await prisma.idempotency_keys.upsert({
     *   create: {
     *     // ... data to create a Idempotency_keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idempotency_keys we want to update
     *   }
     * })
     */
    upsert<T extends idempotency_keysUpsertArgs>(args: SelectSubset<T, idempotency_keysUpsertArgs<ExtArgs>>): Prisma__idempotency_keysClient<$Result.GetResult<Prisma.$idempotency_keysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idempotency_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysCountArgs} args - Arguments to filter Idempotency_keys to count.
     * @example
     * // Count the number of Idempotency_keys
     * const count = await prisma.idempotency_keys.count({
     *   where: {
     *     // ... the filter for the Idempotency_keys we want to count
     *   }
     * })
    **/
    count<T extends idempotency_keysCountArgs>(
      args?: Subset<T, idempotency_keysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idempotency_keysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idempotency_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idempotency_keysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idempotency_keysAggregateArgs>(args: Subset<T, Idempotency_keysAggregateArgs>): Prisma.PrismaPromise<GetIdempotency_keysAggregateType<T>>

    /**
     * Group by Idempotency_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idempotency_keysGroupByArgs} args - Group by arguments.
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
      T extends idempotency_keysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idempotency_keysGroupByArgs['orderBy'] }
        : { orderBy?: idempotency_keysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idempotency_keysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotency_keysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idempotency_keys model
   */
  readonly fields: idempotency_keysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idempotency_keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idempotency_keysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the idempotency_keys model
   */
  interface idempotency_keysFieldRefs {
    readonly id: FieldRef<"idempotency_keys", 'BigInt'>
    readonly key: FieldRef<"idempotency_keys", 'String'>
    readonly response: FieldRef<"idempotency_keys", 'Json'>
    readonly created_at: FieldRef<"idempotency_keys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idempotency_keys findUnique
   */
  export type idempotency_keysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter, which idempotency_keys to fetch.
     */
    where: idempotency_keysWhereUniqueInput
  }

  /**
   * idempotency_keys findUniqueOrThrow
   */
  export type idempotency_keysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter, which idempotency_keys to fetch.
     */
    where: idempotency_keysWhereUniqueInput
  }

  /**
   * idempotency_keys findFirst
   */
  export type idempotency_keysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter, which idempotency_keys to fetch.
     */
    where?: idempotency_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idempotency_keys to fetch.
     */
    orderBy?: idempotency_keysOrderByWithRelationInput | idempotency_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idempotency_keys.
     */
    cursor?: idempotency_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idempotency_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idempotency_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idempotency_keys.
     */
    distinct?: Idempotency_keysScalarFieldEnum | Idempotency_keysScalarFieldEnum[]
  }

  /**
   * idempotency_keys findFirstOrThrow
   */
  export type idempotency_keysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter, which idempotency_keys to fetch.
     */
    where?: idempotency_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idempotency_keys to fetch.
     */
    orderBy?: idempotency_keysOrderByWithRelationInput | idempotency_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idempotency_keys.
     */
    cursor?: idempotency_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idempotency_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idempotency_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idempotency_keys.
     */
    distinct?: Idempotency_keysScalarFieldEnum | Idempotency_keysScalarFieldEnum[]
  }

  /**
   * idempotency_keys findMany
   */
  export type idempotency_keysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter, which idempotency_keys to fetch.
     */
    where?: idempotency_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idempotency_keys to fetch.
     */
    orderBy?: idempotency_keysOrderByWithRelationInput | idempotency_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idempotency_keys.
     */
    cursor?: idempotency_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idempotency_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idempotency_keys.
     */
    skip?: number
    distinct?: Idempotency_keysScalarFieldEnum | Idempotency_keysScalarFieldEnum[]
  }

  /**
   * idempotency_keys create
   */
  export type idempotency_keysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * The data needed to create a idempotency_keys.
     */
    data: XOR<idempotency_keysCreateInput, idempotency_keysUncheckedCreateInput>
  }

  /**
   * idempotency_keys createMany
   */
  export type idempotency_keysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idempotency_keys.
     */
    data: idempotency_keysCreateManyInput | idempotency_keysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idempotency_keys createManyAndReturn
   */
  export type idempotency_keysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * The data used to create many idempotency_keys.
     */
    data: idempotency_keysCreateManyInput | idempotency_keysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idempotency_keys update
   */
  export type idempotency_keysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * The data needed to update a idempotency_keys.
     */
    data: XOR<idempotency_keysUpdateInput, idempotency_keysUncheckedUpdateInput>
    /**
     * Choose, which idempotency_keys to update.
     */
    where: idempotency_keysWhereUniqueInput
  }

  /**
   * idempotency_keys updateMany
   */
  export type idempotency_keysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idempotency_keys.
     */
    data: XOR<idempotency_keysUpdateManyMutationInput, idempotency_keysUncheckedUpdateManyInput>
    /**
     * Filter which idempotency_keys to update
     */
    where?: idempotency_keysWhereInput
    /**
     * Limit how many idempotency_keys to update.
     */
    limit?: number
  }

  /**
   * idempotency_keys updateManyAndReturn
   */
  export type idempotency_keysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * The data used to update idempotency_keys.
     */
    data: XOR<idempotency_keysUpdateManyMutationInput, idempotency_keysUncheckedUpdateManyInput>
    /**
     * Filter which idempotency_keys to update
     */
    where?: idempotency_keysWhereInput
    /**
     * Limit how many idempotency_keys to update.
     */
    limit?: number
  }

  /**
   * idempotency_keys upsert
   */
  export type idempotency_keysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * The filter to search for the idempotency_keys to update in case it exists.
     */
    where: idempotency_keysWhereUniqueInput
    /**
     * In case the idempotency_keys found by the `where` argument doesn't exist, create a new idempotency_keys with this data.
     */
    create: XOR<idempotency_keysCreateInput, idempotency_keysUncheckedCreateInput>
    /**
     * In case the idempotency_keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idempotency_keysUpdateInput, idempotency_keysUncheckedUpdateInput>
  }

  /**
   * idempotency_keys delete
   */
  export type idempotency_keysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
    /**
     * Filter which idempotency_keys to delete.
     */
    where: idempotency_keysWhereUniqueInput
  }

  /**
   * idempotency_keys deleteMany
   */
  export type idempotency_keysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idempotency_keys to delete
     */
    where?: idempotency_keysWhereInput
    /**
     * Limit how many idempotency_keys to delete.
     */
    limit?: number
  }

  /**
   * idempotency_keys without action
   */
  export type idempotency_keysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idempotency_keys
     */
    select?: idempotency_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idempotency_keys
     */
    omit?: idempotency_keysOmit<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    sender_id: string | null
    recipient_id: string | null
    amount: Decimal | null
    currency: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    recipient_name: string | null
    sender_name: string | null
    sender_email: string | null
    recipient_email: string | null
    transaction_id: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    sender_id: string | null
    recipient_id: string | null
    amount: Decimal | null
    currency: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    recipient_name: string | null
    sender_name: string | null
    sender_email: string | null
    recipient_email: string | null
    transaction_id: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    sender_id: number
    recipient_id: number
    amount: number
    currency: number
    status: number
    created_at: number
    updated_at: number
    user_id: number
    recipient_name: number
    sender_name: number
    sender_email: number
    recipient_email: number
    transaction_id: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    sender_id?: true
    recipient_id?: true
    amount?: true
    currency?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    recipient_name?: true
    sender_name?: true
    sender_email?: true
    recipient_email?: true
    transaction_id?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    sender_id?: true
    recipient_id?: true
    amount?: true
    currency?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    recipient_name?: true
    sender_name?: true
    sender_email?: true
    recipient_email?: true
    transaction_id?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    sender_id?: true
    recipient_id?: true
    amount?: true
    currency?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    recipient_name?: true
    sender_name?: true
    sender_email?: true
    recipient_email?: true
    transaction_id?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    sender_id: string | null
    recipient_id: string
    amount: Decimal
    currency: string
    status: string
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    recipient_name: string | null
    sender_name: string | null
    sender_email: string | null
    recipient_email: string | null
    transaction_id: string | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    recipient_name?: boolean
    sender_name?: boolean
    sender_email?: boolean
    recipient_email?: boolean
    transaction_id?: boolean
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    recipient_name?: boolean
    sender_name?: boolean
    sender_email?: boolean
    recipient_email?: boolean
    transaction_id?: boolean
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    recipient_name?: boolean
    sender_name?: boolean
    sender_email?: boolean
    recipient_email?: boolean
    transaction_id?: boolean
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    recipient_name?: boolean
    sender_name?: boolean
    sender_email?: boolean
    recipient_email?: boolean
    transaction_id?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_id" | "recipient_id" | "amount" | "currency" | "status" | "created_at" | "updated_at" | "user_id" | "recipient_name" | "sender_name" | "sender_email" | "recipient_email" | "transaction_id", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_payments_recipient_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_payments_sender_idTousers?: boolean | payments$users_payments_sender_idTousersArgs<ExtArgs>
    users_payments_user_idTousers?: boolean | payments$users_payments_user_idTousersArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      users_payments_recipient_idTousers: Prisma.$usersPayload<ExtArgs>
      users_payments_sender_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_payments_user_idTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sender_id: string | null
      recipient_id: string
      amount: Prisma.Decimal
      currency: string
      status: string
      created_at: Date | null
      updated_at: Date | null
      user_id: string | null
      recipient_name: string | null
      sender_name: string | null
      sender_email: string | null
      recipient_email: string | null
      transaction_id: string | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_payments_recipient_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_payments_sender_idTousers<T extends payments$users_payments_sender_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, payments$users_payments_sender_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_payments_user_idTousers<T extends payments$users_payments_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, payments$users_payments_user_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'String'>
    readonly sender_id: FieldRef<"payments", 'String'>
    readonly recipient_id: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly currency: FieldRef<"payments", 'String'>
    readonly status: FieldRef<"payments", 'String'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
    readonly user_id: FieldRef<"payments", 'String'>
    readonly recipient_name: FieldRef<"payments", 'String'>
    readonly sender_name: FieldRef<"payments", 'String'>
    readonly sender_email: FieldRef<"payments", 'String'>
    readonly recipient_email: FieldRef<"payments", 'String'>
    readonly transaction_id: FieldRef<"payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.users_payments_sender_idTousers
   */
  export type payments$users_payments_sender_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * payments.users_payments_user_idTousers
   */
  export type payments$users_payments_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    created_at: Date | null
    last_name: string | null
    bank_account: string | null
    user_id: string | null
    balance: Decimal | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    created_at: Date | null
    last_name: string | null
    bank_account: string | null
    user_id: string | null
    balance: Decimal | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    created_at: number
    last_name: number
    bank_account: number
    user_id: number
    balance: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    balance?: true
  }

  export type UsersSumAggregateInputType = {
    balance?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    created_at?: true
    last_name?: true
    bank_account?: true
    user_id?: true
    balance?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    created_at?: true
    last_name?: true
    bank_account?: true
    user_id?: true
    balance?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    created_at?: true
    last_name?: true
    bank_account?: true
    user_id?: true
    balance?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    first_name: string | null
    created_at: Date | null
    last_name: string | null
    bank_account: string | null
    user_id: string | null
    balance: Decimal | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    created_at?: boolean
    last_name?: boolean
    bank_account?: boolean
    user_id?: boolean
    balance?: boolean
    payments_payments_recipient_idTousers?: boolean | users$payments_payments_recipient_idTousersArgs<ExtArgs>
    payments_payments_sender_idTousers?: boolean | users$payments_payments_sender_idTousersArgs<ExtArgs>
    payments_payments_user_idTousers?: boolean | users$payments_payments_user_idTousersArgs<ExtArgs>
    users?: boolean | users$usersArgs<ExtArgs>
    other_users?: boolean | users$other_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    created_at?: boolean
    last_name?: boolean
    bank_account?: boolean
    user_id?: boolean
    balance?: boolean
    users?: boolean | users$usersArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    created_at?: boolean
    last_name?: boolean
    bank_account?: boolean
    user_id?: boolean
    balance?: boolean
    users?: boolean | users$usersArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    created_at?: boolean
    last_name?: boolean
    bank_account?: boolean
    user_id?: boolean
    balance?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "created_at" | "last_name" | "bank_account" | "user_id" | "balance", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments_payments_recipient_idTousers?: boolean | users$payments_payments_recipient_idTousersArgs<ExtArgs>
    payments_payments_sender_idTousers?: boolean | users$payments_payments_sender_idTousersArgs<ExtArgs>
    payments_payments_user_idTousers?: boolean | users$payments_payments_user_idTousersArgs<ExtArgs>
    users?: boolean | users$usersArgs<ExtArgs>
    other_users?: boolean | users$other_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | users$usersArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | users$usersArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      payments_payments_recipient_idTousers: Prisma.$paymentsPayload<ExtArgs>[]
      payments_payments_sender_idTousers: Prisma.$paymentsPayload<ExtArgs>[]
      payments_payments_user_idTousers: Prisma.$paymentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      other_users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      first_name: string | null
      created_at: Date | null
      last_name: string | null
      bank_account: string | null
      user_id: string | null
      balance: Prisma.Decimal | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments_payments_recipient_idTousers<T extends users$payments_payments_recipient_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$payments_payments_recipient_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments_payments_sender_idTousers<T extends users$payments_payments_sender_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$payments_payments_sender_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments_payments_user_idTousers<T extends users$payments_payments_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$payments_payments_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends users$usersArgs<ExtArgs> = {}>(args?: Subset<T, users$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_users<T extends users$other_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$other_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly bank_account: FieldRef<"users", 'String'>
    readonly user_id: FieldRef<"users", 'String'>
    readonly balance: FieldRef<"users", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.payments_payments_recipient_idTousers
   */
  export type users$payments_payments_recipient_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * users.payments_payments_sender_idTousers
   */
  export type users$payments_payments_sender_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * users.payments_payments_user_idTousers
   */
  export type users$payments_payments_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * users.users
   */
  export type users$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * users.other_users
   */
  export type users$other_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Idempotency_keysScalarFieldEnum: {
    id: 'id',
    key: 'key',
    response: 'response',
    created_at: 'created_at'
  };

  export type Idempotency_keysScalarFieldEnum = (typeof Idempotency_keysScalarFieldEnum)[keyof typeof Idempotency_keysScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    recipient_id: 'recipient_id',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    recipient_name: 'recipient_name',
    sender_name: 'sender_name',
    sender_email: 'sender_email',
    recipient_email: 'recipient_email',
    transaction_id: 'transaction_id'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    created_at: 'created_at',
    last_name: 'last_name',
    bank_account: 'bank_account',
    user_id: 'user_id',
    balance: 'balance'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type idempotency_keysWhereInput = {
    AND?: idempotency_keysWhereInput | idempotency_keysWhereInput[]
    OR?: idempotency_keysWhereInput[]
    NOT?: idempotency_keysWhereInput | idempotency_keysWhereInput[]
    id?: BigIntFilter<"idempotency_keys"> | bigint | number
    key?: StringFilter<"idempotency_keys"> | string
    response?: JsonFilter<"idempotency_keys">
    created_at?: DateTimeNullableFilter<"idempotency_keys"> | Date | string | null
  }

  export type idempotency_keysOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    response?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type idempotency_keysWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    key?: string
    AND?: idempotency_keysWhereInput | idempotency_keysWhereInput[]
    OR?: idempotency_keysWhereInput[]
    NOT?: idempotency_keysWhereInput | idempotency_keysWhereInput[]
    response?: JsonFilter<"idempotency_keys">
    created_at?: DateTimeNullableFilter<"idempotency_keys"> | Date | string | null
  }, "id" | "key">

  export type idempotency_keysOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    response?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: idempotency_keysCountOrderByAggregateInput
    _avg?: idempotency_keysAvgOrderByAggregateInput
    _max?: idempotency_keysMaxOrderByAggregateInput
    _min?: idempotency_keysMinOrderByAggregateInput
    _sum?: idempotency_keysSumOrderByAggregateInput
  }

  export type idempotency_keysScalarWhereWithAggregatesInput = {
    AND?: idempotency_keysScalarWhereWithAggregatesInput | idempotency_keysScalarWhereWithAggregatesInput[]
    OR?: idempotency_keysScalarWhereWithAggregatesInput[]
    NOT?: idempotency_keysScalarWhereWithAggregatesInput | idempotency_keysScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"idempotency_keys"> | bigint | number
    key?: StringWithAggregatesFilter<"idempotency_keys"> | string
    response?: JsonWithAggregatesFilter<"idempotency_keys">
    created_at?: DateTimeNullableWithAggregatesFilter<"idempotency_keys"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: UuidFilter<"payments"> | string
    sender_id?: UuidNullableFilter<"payments"> | string | null
    recipient_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    user_id?: UuidNullableFilter<"payments"> | string | null
    recipient_name?: StringNullableFilter<"payments"> | string | null
    sender_name?: StringNullableFilter<"payments"> | string | null
    sender_email?: StringNullableFilter<"payments"> | string | null
    recipient_email?: StringNullableFilter<"payments"> | string | null
    transaction_id?: UuidNullableFilter<"payments"> | string | null
    users_payments_recipient_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_payments_sender_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_payments_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    recipient_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    recipient_name?: SortOrderInput | SortOrder
    sender_name?: SortOrderInput | SortOrder
    sender_email?: SortOrderInput | SortOrder
    recipient_email?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    users_payments_recipient_idTousers?: usersOrderByWithRelationInput
    users_payments_sender_idTousers?: usersOrderByWithRelationInput
    users_payments_user_idTousers?: usersOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    sender_id?: UuidNullableFilter<"payments"> | string | null
    recipient_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    user_id?: UuidNullableFilter<"payments"> | string | null
    recipient_name?: StringNullableFilter<"payments"> | string | null
    sender_name?: StringNullableFilter<"payments"> | string | null
    sender_email?: StringNullableFilter<"payments"> | string | null
    recipient_email?: StringNullableFilter<"payments"> | string | null
    users_payments_recipient_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_payments_sender_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_payments_user_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "transaction_id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    recipient_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    recipient_name?: SortOrderInput | SortOrder
    sender_name?: SortOrderInput | SortOrder
    sender_email?: SortOrderInput | SortOrder
    recipient_email?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payments"> | string
    sender_id?: UuidNullableWithAggregatesFilter<"payments"> | string | null
    recipient_id?: UuidWithAggregatesFilter<"payments"> | string
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"payments"> | string
    status?: StringWithAggregatesFilter<"payments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    user_id?: UuidNullableWithAggregatesFilter<"payments"> | string | null
    recipient_name?: StringNullableWithAggregatesFilter<"payments"> | string | null
    sender_name?: StringNullableWithAggregatesFilter<"payments"> | string | null
    sender_email?: StringNullableWithAggregatesFilter<"payments"> | string | null
    recipient_email?: StringNullableWithAggregatesFilter<"payments"> | string | null
    transaction_id?: UuidNullableWithAggregatesFilter<"payments"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    bank_account?: StringNullableFilter<"users"> | string | null
    user_id?: UuidNullableFilter<"users"> | string | null
    balance?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: PaymentsListRelationFilter
    payments_payments_sender_idTousers?: PaymentsListRelationFilter
    payments_payments_user_idTousers?: PaymentsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    other_users?: UsersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    bank_account?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    payments_payments_recipient_idTousers?: paymentsOrderByRelationAggregateInput
    payments_payments_sender_idTousers?: paymentsOrderByRelationAggregateInput
    payments_payments_user_idTousers?: paymentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    other_users?: usersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    bank_account?: StringNullableFilter<"users"> | string | null
    user_id?: UuidNullableFilter<"users"> | string | null
    balance?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: PaymentsListRelationFilter
    payments_payments_sender_idTousers?: PaymentsListRelationFilter
    payments_payments_user_idTousers?: PaymentsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    other_users?: UsersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    bank_account?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    bank_account?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_id?: UuidNullableWithAggregatesFilter<"users"> | string | null
    balance?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
  }

  export type idempotency_keysCreateInput = {
    id?: bigint | number
    key: string
    response: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type idempotency_keysUncheckedCreateInput = {
    id?: bigint | number
    key: string
    response: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type idempotency_keysUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idempotency_keysUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idempotency_keysCreateManyInput = {
    id?: bigint | number
    key: string
    response: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type idempotency_keysUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idempotency_keysUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
    users_payments_recipient_idTousers: usersCreateNestedOneWithoutPayments_payments_recipient_idTousersInput
    users_payments_sender_idTousers?: usersCreateNestedOneWithoutPayments_payments_sender_idTousersInput
    users_payments_user_idTousers?: usersCreateNestedOneWithoutPayments_payments_user_idTousersInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: string
    sender_id?: string | null
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    users_payments_recipient_idTousers?: usersUpdateOneRequiredWithoutPayments_payments_recipient_idTousersNestedInput
    users_payments_sender_idTousers?: usersUpdateOneWithoutPayments_payments_sender_idTousersNestedInput
    users_payments_user_idTousers?: usersUpdateOneWithoutPayments_payments_user_idTousersNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsCreateManyInput = {
    id?: string
    sender_id?: string | null
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput
    users?: usersCreateNestedOneWithoutOther_usersInput
    other_users?: usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput
    other_users?: usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    users?: usersUpdateOneWithoutOther_usersNestedInput
    other_users?: usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    other_users?: usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type idempotency_keysCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    response?: SortOrder
    created_at?: SortOrder
  }

  export type idempotency_keysAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type idempotency_keysMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
  }

  export type idempotency_keysMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
  }

  export type idempotency_keysSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    sender_name?: SortOrder
    sender_email?: SortOrder
    recipient_email?: SortOrder
    transaction_id?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    sender_name?: SortOrder
    sender_email?: SortOrder
    recipient_email?: SortOrder
    transaction_id?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    sender_name?: SortOrder
    sender_email?: SortOrder
    recipient_email?: SortOrder
    transaction_id?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    created_at?: SortOrder
    last_name?: SortOrder
    bank_account?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    created_at?: SortOrder
    last_name?: SortOrder
    bank_account?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    created_at?: SortOrder
    last_name?: SortOrder
    bank_account?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersCreateNestedOneWithoutPayments_payments_recipient_idTousersInput = {
    create?: XOR<usersCreateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedCreateWithoutPayments_payments_recipient_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_recipient_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPayments_payments_sender_idTousersInput = {
    create?: XOR<usersCreateWithoutPayments_payments_sender_idTousersInput, usersUncheckedCreateWithoutPayments_payments_sender_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_sender_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPayments_payments_user_idTousersInput = {
    create?: XOR<usersCreateWithoutPayments_payments_user_idTousersInput, usersUncheckedCreateWithoutPayments_payments_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutPayments_payments_recipient_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedCreateWithoutPayments_payments_recipient_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_recipient_idTousersInput
    upsert?: usersUpsertWithoutPayments_payments_recipient_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayments_payments_recipient_idTousersInput, usersUpdateWithoutPayments_payments_recipient_idTousersInput>, usersUncheckedUpdateWithoutPayments_payments_recipient_idTousersInput>
  }

  export type usersUpdateOneWithoutPayments_payments_sender_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPayments_payments_sender_idTousersInput, usersUncheckedCreateWithoutPayments_payments_sender_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_sender_idTousersInput
    upsert?: usersUpsertWithoutPayments_payments_sender_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayments_payments_sender_idTousersInput, usersUpdateWithoutPayments_payments_sender_idTousersInput>, usersUncheckedUpdateWithoutPayments_payments_sender_idTousersInput>
  }

  export type usersUpdateOneWithoutPayments_payments_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPayments_payments_user_idTousersInput, usersUncheckedCreateWithoutPayments_payments_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayments_payments_user_idTousersInput
    upsert?: usersUpsertWithoutPayments_payments_user_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayments_payments_user_idTousersInput, usersUpdateWithoutPayments_payments_user_idTousersInput>, usersUncheckedUpdateWithoutPayments_payments_user_idTousersInput>
  }

  export type paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput> | paymentsCreateWithoutUsers_payments_recipient_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_recipient_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput> | paymentsCreateWithoutUsers_payments_sender_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_sender_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput> | paymentsCreateWithoutUsers_payments_user_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_user_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOther_usersInput = {
    create?: XOR<usersCreateWithoutOther_usersInput, usersUncheckedCreateWithoutOther_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOther_usersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput> | usersCreateWithoutUsersInput[] | usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsersInput | usersCreateOrConnectWithoutUsersInput[]
    createMany?: usersCreateManyUsersInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput> | paymentsCreateWithoutUsers_payments_recipient_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_recipient_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput> | paymentsCreateWithoutUsers_payments_sender_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_sender_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput> | paymentsCreateWithoutUsers_payments_user_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_user_idTousersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput> | usersCreateWithoutUsersInput[] | usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsersInput | usersCreateOrConnectWithoutUsersInput[]
    createMany?: usersCreateManyUsersInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput> | paymentsCreateWithoutUsers_payments_recipient_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_recipient_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_recipient_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_recipient_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput> | paymentsCreateWithoutUsers_payments_sender_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_sender_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_sender_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_sender_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_sender_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_sender_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_sender_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_sender_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput> | paymentsCreateWithoutUsers_payments_user_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_user_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_user_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_user_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_user_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_user_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_user_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_user_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutOther_usersNestedInput = {
    create?: XOR<usersCreateWithoutOther_usersInput, usersUncheckedCreateWithoutOther_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOther_usersInput
    upsert?: usersUpsertWithoutOther_usersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOther_usersInput, usersUpdateWithoutOther_usersInput>, usersUncheckedUpdateWithoutOther_usersInput>
  }

  export type usersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput> | usersCreateWithoutUsersInput[] | usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsersInput | usersCreateOrConnectWithoutUsersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsersInput | usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersCreateManyUsersInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsersInput | usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsersInput | usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput> | paymentsCreateWithoutUsers_payments_recipient_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_recipient_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_recipient_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_recipient_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput> | paymentsCreateWithoutUsers_payments_sender_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_sender_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_sender_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_sender_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_sender_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_sender_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_sender_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_sender_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput> | paymentsCreateWithoutUsers_payments_user_idTousersInput[] | paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput | paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsers_payments_user_idTousersInput | paymentsUpsertWithWhereUniqueWithoutUsers_payments_user_idTousersInput[]
    createMany?: paymentsCreateManyUsers_payments_user_idTousersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsers_payments_user_idTousersInput | paymentsUpdateWithWhereUniqueWithoutUsers_payments_user_idTousersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsers_payments_user_idTousersInput | paymentsUpdateManyWithWhereWithoutUsers_payments_user_idTousersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput> | usersCreateWithoutUsersInput[] | usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsersInput | usersCreateOrConnectWithoutUsersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsersInput | usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usersCreateManyUsersInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsersInput | usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsersInput | usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutPayments_payments_recipient_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_sender_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput
    users?: usersCreateNestedOneWithoutOther_usersInput
    other_users?: usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayments_payments_recipient_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_sender_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput
    other_users?: usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayments_payments_recipient_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedCreateWithoutPayments_payments_recipient_idTousersInput>
  }

  export type usersCreateWithoutPayments_payments_sender_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_user_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput
    users?: usersCreateNestedOneWithoutOther_usersInput
    other_users?: usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayments_payments_sender_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_user_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput
    other_users?: usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayments_payments_sender_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayments_payments_sender_idTousersInput, usersUncheckedCreateWithoutPayments_payments_sender_idTousersInput>
  }

  export type usersCreateWithoutPayments_payments_user_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    users?: usersCreateNestedOneWithoutOther_usersInput
    other_users?: usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayments_payments_user_idTousersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    other_users?: usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayments_payments_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayments_payments_user_idTousersInput, usersUncheckedCreateWithoutPayments_payments_user_idTousersInput>
  }

  export type usersUpsertWithoutPayments_payments_recipient_idTousersInput = {
    update: XOR<usersUpdateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_recipient_idTousersInput>
    create: XOR<usersCreateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedCreateWithoutPayments_payments_recipient_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayments_payments_recipient_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayments_payments_recipient_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_recipient_idTousersInput>
  }

  export type usersUpdateWithoutPayments_payments_recipient_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_sender_idTousers?: paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    users?: usersUpdateOneWithoutOther_usersNestedInput
    other_users?: usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayments_payments_recipient_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_sender_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    other_users?: usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutPayments_payments_sender_idTousersInput = {
    update: XOR<usersUpdateWithoutPayments_payments_sender_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_sender_idTousersInput>
    create: XOR<usersCreateWithoutPayments_payments_sender_idTousersInput, usersUncheckedCreateWithoutPayments_payments_sender_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayments_payments_sender_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayments_payments_sender_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_sender_idTousersInput>
  }

  export type usersUpdateWithoutPayments_payments_sender_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    users?: usersUpdateOneWithoutOther_usersNestedInput
    other_users?: usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayments_payments_sender_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    other_users?: usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutPayments_payments_user_idTousersInput = {
    update: XOR<usersUpdateWithoutPayments_payments_user_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_user_idTousersInput>
    create: XOR<usersCreateWithoutPayments_payments_user_idTousersInput, usersUncheckedCreateWithoutPayments_payments_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayments_payments_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayments_payments_user_idTousersInput, usersUncheckedUpdateWithoutPayments_payments_user_idTousersInput>
  }

  export type usersUpdateWithoutPayments_payments_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    users?: usersUpdateOneWithoutOther_usersNestedInput
    other_users?: usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayments_payments_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    other_users?: usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type paymentsCreateWithoutUsers_payments_recipient_idTousersInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
    users_payments_sender_idTousers?: usersCreateNestedOneWithoutPayments_payments_sender_idTousersInput
    users_payments_user_idTousers?: usersCreateNestedOneWithoutPayments_payments_user_idTousersInput
  }

  export type paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput = {
    id?: string
    sender_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsCreateOrConnectWithoutUsers_payments_recipient_idTousersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput>
  }

  export type paymentsCreateManyUsers_payments_recipient_idTousersInputEnvelope = {
    data: paymentsCreateManyUsers_payments_recipient_idTousersInput | paymentsCreateManyUsers_payments_recipient_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutUsers_payments_sender_idTousersInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
    users_payments_recipient_idTousers: usersCreateNestedOneWithoutPayments_payments_recipient_idTousersInput
    users_payments_user_idTousers?: usersCreateNestedOneWithoutPayments_payments_user_idTousersInput
  }

  export type paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput = {
    id?: string
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsCreateOrConnectWithoutUsers_payments_sender_idTousersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput>
  }

  export type paymentsCreateManyUsers_payments_sender_idTousersInputEnvelope = {
    data: paymentsCreateManyUsers_payments_sender_idTousersInput | paymentsCreateManyUsers_payments_sender_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutUsers_payments_user_idTousersInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
    users_payments_recipient_idTousers: usersCreateNestedOneWithoutPayments_payments_recipient_idTousersInput
    users_payments_sender_idTousers?: usersCreateNestedOneWithoutPayments_payments_sender_idTousersInput
  }

  export type paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput = {
    id?: string
    sender_id?: string | null
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsCreateOrConnectWithoutUsers_payments_user_idTousersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput>
  }

  export type paymentsCreateManyUsers_payments_user_idTousersInputEnvelope = {
    data: paymentsCreateManyUsers_payments_user_idTousersInput | paymentsCreateManyUsers_payments_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOther_usersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput
    users?: usersCreateNestedOneWithoutOther_usersInput
  }

  export type usersUncheckedCreateWithoutOther_usersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    user_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutOther_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOther_usersInput, usersUncheckedCreateWithoutOther_usersInput>
  }

  export type usersCreateWithoutUsersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsCreateNestedManyWithoutUsers_payments_user_idTousersInput
    other_users?: usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUsersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_recipient_idTousersInput
    payments_payments_sender_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_sender_idTousersInput
    payments_payments_user_idTousers?: paymentsUncheckedCreateNestedManyWithoutUsers_payments_user_idTousersInput
    other_users?: usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUsersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput>
  }

  export type usersCreateManyUsersInputEnvelope = {
    data: usersCreateManyUsersInput | usersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type paymentsUpsertWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_recipient_idTousersInput>
    create: XOR<paymentsCreateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_recipient_idTousersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutUsers_payments_recipient_idTousersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutUsers_payments_recipient_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_recipient_idTousersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutUsers_payments_recipient_idTousersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: UuidFilter<"payments"> | string
    sender_id?: UuidNullableFilter<"payments"> | string | null
    recipient_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    user_id?: UuidNullableFilter<"payments"> | string | null
    recipient_name?: StringNullableFilter<"payments"> | string | null
    sender_name?: StringNullableFilter<"payments"> | string | null
    sender_email?: StringNullableFilter<"payments"> | string | null
    recipient_email?: StringNullableFilter<"payments"> | string | null
    transaction_id?: UuidNullableFilter<"payments"> | string | null
  }

  export type paymentsUpsertWithWhereUniqueWithoutUsers_payments_sender_idTousersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_sender_idTousersInput>
    create: XOR<paymentsCreateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_sender_idTousersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutUsers_payments_sender_idTousersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutUsers_payments_sender_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_sender_idTousersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutUsers_payments_sender_idTousersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersInput>
  }

  export type paymentsUpsertWithWhereUniqueWithoutUsers_payments_user_idTousersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_user_idTousersInput>
    create: XOR<paymentsCreateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedCreateWithoutUsers_payments_user_idTousersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutUsers_payments_user_idTousersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutUsers_payments_user_idTousersInput, paymentsUncheckedUpdateWithoutUsers_payments_user_idTousersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutUsers_payments_user_idTousersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersInput>
  }

  export type usersUpsertWithoutOther_usersInput = {
    update: XOR<usersUpdateWithoutOther_usersInput, usersUncheckedUpdateWithoutOther_usersInput>
    create: XOR<usersCreateWithoutOther_usersInput, usersUncheckedCreateWithoutOther_usersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOther_usersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOther_usersInput, usersUncheckedUpdateWithoutOther_usersInput>
  }

  export type usersUpdateWithoutOther_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    users?: usersUpdateOneWithoutOther_usersNestedInput
  }

  export type usersUncheckedUpdateWithoutOther_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutUsersInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUsersInput, usersUncheckedUpdateWithoutUsersInput>
    create: XOR<usersCreateWithoutUsersInput, usersUncheckedCreateWithoutUsersInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUsersInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUsersInput, usersUncheckedUpdateWithoutUsersInput>
  }

  export type usersUpdateManyWithWhereWithoutUsersInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    bank_account?: StringNullableFilter<"users"> | string | null
    user_id?: UuidNullableFilter<"users"> | string | null
    balance?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
  }

  export type paymentsCreateManyUsers_payments_recipient_idTousersInput = {
    id?: string
    sender_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsCreateManyUsers_payments_sender_idTousersInput = {
    id?: string
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type paymentsCreateManyUsers_payments_user_idTousersInput = {
    id?: string
    sender_id?: string | null
    recipient_id: string
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipient_name?: string | null
    sender_name?: string | null
    sender_email?: string | null
    recipient_email?: string | null
    transaction_id?: string | null
  }

  export type usersCreateManyUsersInput = {
    id?: string
    email: string
    first_name?: string | null
    created_at?: Date | string | null
    last_name?: string | null
    bank_account?: string | null
    balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type paymentsUpdateWithoutUsers_payments_recipient_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    users_payments_sender_idTousers?: usersUpdateOneWithoutPayments_payments_sender_idTousersNestedInput
    users_payments_user_idTousers?: usersUpdateOneWithoutPayments_payments_user_idTousersNestedInput
  }

  export type paymentsUncheckedUpdateWithoutUsers_payments_recipient_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUpdateWithoutUsers_payments_sender_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    users_payments_recipient_idTousers?: usersUpdateOneRequiredWithoutPayments_payments_recipient_idTousersNestedInput
    users_payments_user_idTousers?: usersUpdateOneWithoutPayments_payments_user_idTousersNestedInput
  }

  export type paymentsUncheckedUpdateWithoutUsers_payments_sender_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUpdateWithoutUsers_payments_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    users_payments_recipient_idTousers?: usersUpdateOneRequiredWithoutPayments_payments_recipient_idTousersNestedInput
    users_payments_sender_idTousers?: usersUpdateOneWithoutPayments_payments_sender_idTousersNestedInput
  }

  export type paymentsUncheckedUpdateWithoutUsers_payments_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    recipient_email?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    other_users?: usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments_payments_recipient_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_recipient_idTousersNestedInput
    payments_payments_sender_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_sender_idTousersNestedInput
    payments_payments_user_idTousers?: paymentsUncheckedUpdateManyWithoutUsers_payments_user_idTousersNestedInput
    other_users?: usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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