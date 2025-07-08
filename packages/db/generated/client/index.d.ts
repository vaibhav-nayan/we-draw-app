
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
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Shape
 * 
 */
export type Shape = $Result.DefaultSelection<Prisma.$ShapePayload>
/**
 * Model Rect
 * 
 */
export type Rect = $Result.DefaultSelection<Prisma.$RectPayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model Line
 * 
 */
export type Line = $Result.DefaultSelection<Prisma.$LinePayload>
/**
 * Model Pencil
 * 
 */
export type Pencil = $Result.DefaultSelection<Prisma.$PencilPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Text
 * 
 */
export type Text = $Result.DefaultSelection<Prisma.$TextPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShapeType: {
  RECT: 'RECT',
  CIRCLE: 'CIRCLE',
  LINE: 'LINE',
  PENCIL: 'PENCIL',
  TEXT: 'TEXT'
};

export type ShapeType = (typeof ShapeType)[keyof typeof ShapeType]

}

export type ShapeType = $Enums.ShapeType

export const ShapeType: typeof $Enums.ShapeType

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
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shape`: Exposes CRUD operations for the **Shape** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shapes
    * const shapes = await prisma.shape.findMany()
    * ```
    */
  get shape(): Prisma.ShapeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rect`: Exposes CRUD operations for the **Rect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rects
    * const rects = await prisma.rect.findMany()
    * ```
    */
  get rect(): Prisma.RectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.line`: Exposes CRUD operations for the **Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lines
    * const lines = await prisma.line.findMany()
    * ```
    */
  get line(): Prisma.LineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pencil`: Exposes CRUD operations for the **Pencil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pencils
    * const pencils = await prisma.pencil.findMany()
    * ```
    */
  get pencil(): Prisma.PencilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.text`: Exposes CRUD operations for the **Text** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Texts
    * const texts = await prisma.text.findMany()
    * ```
    */
  get text(): Prisma.TextDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Room: 'Room',
    Shape: 'Shape',
    Rect: 'Rect',
    Circle: 'Circle',
    Line: 'Line',
    Pencil: 'Pencil',
    Point: 'Point',
    Text: 'Text'
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
      modelProps: "user" | "room" | "shape" | "rect" | "circle" | "line" | "pencil" | "point" | "text"
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
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Shape: {
        payload: Prisma.$ShapePayload<ExtArgs>
        fields: Prisma.ShapeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShapeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShapeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          findFirst: {
            args: Prisma.ShapeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShapeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          findMany: {
            args: Prisma.ShapeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          create: {
            args: Prisma.ShapeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          createMany: {
            args: Prisma.ShapeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShapeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          delete: {
            args: Prisma.ShapeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          update: {
            args: Prisma.ShapeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          deleteMany: {
            args: Prisma.ShapeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShapeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShapeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          upsert: {
            args: Prisma.ShapeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          aggregate: {
            args: Prisma.ShapeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShape>
          }
          groupBy: {
            args: Prisma.ShapeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShapeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShapeCountArgs<ExtArgs>
            result: $Utils.Optional<ShapeCountAggregateOutputType> | number
          }
        }
      }
      Rect: {
        payload: Prisma.$RectPayload<ExtArgs>
        fields: Prisma.RectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          findFirst: {
            args: Prisma.RectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          findMany: {
            args: Prisma.RectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>[]
          }
          create: {
            args: Prisma.RectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          createMany: {
            args: Prisma.RectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>[]
          }
          delete: {
            args: Prisma.RectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          update: {
            args: Prisma.RectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          deleteMany: {
            args: Prisma.RectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>[]
          }
          upsert: {
            args: Prisma.RectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectPayload>
          }
          aggregate: {
            args: Prisma.RectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRect>
          }
          groupBy: {
            args: Prisma.RectGroupByArgs<ExtArgs>
            result: $Utils.Optional<RectGroupByOutputType>[]
          }
          count: {
            args: Prisma.RectCountArgs<ExtArgs>
            result: $Utils.Optional<RectCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          createMany: {
            args: Prisma.CircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      Line: {
        payload: Prisma.$LinePayload<ExtArgs>
        fields: Prisma.LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findFirst: {
            args: Prisma.LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findMany: {
            args: Prisma.LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          create: {
            args: Prisma.LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          createMany: {
            args: Prisma.LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          delete: {
            args: Prisma.LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          update: {
            args: Prisma.LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          deleteMany: {
            args: Prisma.LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          upsert: {
            args: Prisma.LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          aggregate: {
            args: Prisma.LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLine>
          }
          groupBy: {
            args: Prisma.LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineCountArgs<ExtArgs>
            result: $Utils.Optional<LineCountAggregateOutputType> | number
          }
        }
      }
      Pencil: {
        payload: Prisma.$PencilPayload<ExtArgs>
        fields: Prisma.PencilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PencilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PencilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          findFirst: {
            args: Prisma.PencilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PencilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          findMany: {
            args: Prisma.PencilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>[]
          }
          create: {
            args: Prisma.PencilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          createMany: {
            args: Prisma.PencilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PencilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>[]
          }
          delete: {
            args: Prisma.PencilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          update: {
            args: Prisma.PencilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          deleteMany: {
            args: Prisma.PencilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PencilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PencilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>[]
          }
          upsert: {
            args: Prisma.PencilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PencilPayload>
          }
          aggregate: {
            args: Prisma.PencilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePencil>
          }
          groupBy: {
            args: Prisma.PencilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PencilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PencilCountArgs<ExtArgs>
            result: $Utils.Optional<PencilCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Text: {
        payload: Prisma.$TextPayload<ExtArgs>
        fields: Prisma.TextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findFirst: {
            args: Prisma.TextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findMany: {
            args: Prisma.TextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          create: {
            args: Prisma.TextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          createMany: {
            args: Prisma.TextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          delete: {
            args: Prisma.TextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          update: {
            args: Prisma.TextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          deleteMany: {
            args: Prisma.TextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          upsert: {
            args: Prisma.TextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          aggregate: {
            args: Prisma.TextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateText>
          }
          groupBy: {
            args: Prisma.TextGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextCountArgs<ExtArgs>
            result: $Utils.Optional<TextCountAggregateOutputType> | number
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
    room?: RoomOmit
    shape?: ShapeOmit
    rect?: RectOmit
    circle?: CircleOmit
    line?: LineOmit
    pencil?: PencilOmit
    point?: PointOmit
    text?: TextOmit
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
    rooms: number
    shapes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    shapes?: boolean | UserCountOutputTypeCountShapesArgs
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
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    shapes: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shapes?: boolean | RoomCountOutputTypeCountShapesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountShapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
  }


  /**
   * Count Type PencilCountOutputType
   */

  export type PencilCountOutputType = {
    points: number
  }

  export type PencilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | PencilCountOutputTypeCountPointsArgs
  }

  // Custom InputTypes
  /**
   * PencilCountOutputType without action
   */
  export type PencilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PencilCountOutputType
     */
    select?: PencilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PencilCountOutputType without action
   */
  export type PencilCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
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
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
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
    name: string
    avatar: string
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
    avatar?: boolean
    rooms?: boolean | User$roomsArgs<ExtArgs>
    shapes?: boolean | User$shapesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | User$roomsArgs<ExtArgs>
    shapes?: boolean | User$shapesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      shapes: Prisma.$ShapePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      avatar: string
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
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shapes<T extends User$shapesArgs<ExtArgs> = {}>(args?: Subset<T, User$shapesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly avatar: FieldRef<"User", 'String'>
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
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.shapes
   */
  export type User$shapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    cursor?: ShapeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
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
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    adminId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    adminId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    slug: number
    createdAt: number
    adminId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    slug: string
    createdAt: Date
    adminId: string
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    shapes?: boolean | Room$shapesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "createdAt" | "adminId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    shapes?: boolean | Room$shapesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      shapes: Prisma.$ShapePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      createdAt: Date
      adminId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shapes<T extends Room$shapesArgs<ExtArgs> = {}>(args?: Subset<T, Room$shapesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly slug: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly adminId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.shapes
   */
  export type Room$shapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    cursor?: ShapeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Shape
   */

  export type AggregateShape = {
    _count: ShapeCountAggregateOutputType | null
    _avg: ShapeAvgAggregateOutputType | null
    _sum: ShapeSumAggregateOutputType | null
    _min: ShapeMinAggregateOutputType | null
    _max: ShapeMaxAggregateOutputType | null
  }

  export type ShapeAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ShapeSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type ShapeMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    type: $Enums.ShapeType | null
    userId: string | null
  }

  export type ShapeMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    type: $Enums.ShapeType | null
    userId: string | null
  }

  export type ShapeCountAggregateOutputType = {
    id: number
    roomId: number
    type: number
    userId: number
    _all: number
  }


  export type ShapeAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ShapeSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type ShapeMinAggregateInputType = {
    id?: true
    roomId?: true
    type?: true
    userId?: true
  }

  export type ShapeMaxAggregateInputType = {
    id?: true
    roomId?: true
    type?: true
    userId?: true
  }

  export type ShapeCountAggregateInputType = {
    id?: true
    roomId?: true
    type?: true
    userId?: true
    _all?: true
  }

  export type ShapeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shape to aggregate.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shapes
    **/
    _count?: true | ShapeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShapeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShapeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShapeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShapeMaxAggregateInputType
  }

  export type GetShapeAggregateType<T extends ShapeAggregateArgs> = {
        [P in keyof T & keyof AggregateShape]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShape[P]>
      : GetScalarType<T[P], AggregateShape[P]>
  }




  export type ShapeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithAggregationInput | ShapeOrderByWithAggregationInput[]
    by: ShapeScalarFieldEnum[] | ShapeScalarFieldEnum
    having?: ShapeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShapeCountAggregateInputType | true
    _avg?: ShapeAvgAggregateInputType
    _sum?: ShapeSumAggregateInputType
    _min?: ShapeMinAggregateInputType
    _max?: ShapeMaxAggregateInputType
  }

  export type ShapeGroupByOutputType = {
    id: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    _count: ShapeCountAggregateOutputType | null
    _avg: ShapeAvgAggregateOutputType | null
    _sum: ShapeSumAggregateOutputType | null
    _min: ShapeMinAggregateOutputType | null
    _max: ShapeMaxAggregateOutputType | null
  }

  type GetShapeGroupByPayload<T extends ShapeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShapeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShapeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShapeGroupByOutputType[P]>
            : GetScalarType<T[P], ShapeGroupByOutputType[P]>
        }
      >
    >


  export type ShapeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    type?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    rect?: boolean | Shape$rectArgs<ExtArgs>
    circle?: boolean | Shape$circleArgs<ExtArgs>
    line?: boolean | Shape$lineArgs<ExtArgs>
    pencil?: boolean | Shape$pencilArgs<ExtArgs>
    text?: boolean | Shape$textArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    type?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    type?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectScalar = {
    id?: boolean
    roomId?: boolean
    type?: boolean
    userId?: boolean
  }

  export type ShapeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "type" | "userId", ExtArgs["result"]["shape"]>
  export type ShapeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    rect?: boolean | Shape$rectArgs<ExtArgs>
    circle?: boolean | Shape$circleArgs<ExtArgs>
    line?: boolean | Shape$lineArgs<ExtArgs>
    pencil?: boolean | Shape$pencilArgs<ExtArgs>
    text?: boolean | Shape$textArgs<ExtArgs>
  }
  export type ShapeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ShapeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $ShapePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shape"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      rect: Prisma.$RectPayload<ExtArgs> | null
      circle: Prisma.$CirclePayload<ExtArgs> | null
      line: Prisma.$LinePayload<ExtArgs> | null
      pencil: Prisma.$PencilPayload<ExtArgs> | null
      text: Prisma.$TextPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      type: $Enums.ShapeType
      userId: string
    }, ExtArgs["result"]["shape"]>
    composites: {}
  }

  type ShapeGetPayload<S extends boolean | null | undefined | ShapeDefaultArgs> = $Result.GetResult<Prisma.$ShapePayload, S>

  type ShapeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShapeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShapeCountAggregateInputType | true
    }

  export interface ShapeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shape'], meta: { name: 'Shape' } }
    /**
     * Find zero or one Shape that matches the filter.
     * @param {ShapeFindUniqueArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShapeFindUniqueArgs>(args: SelectSubset<T, ShapeFindUniqueArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shape that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShapeFindUniqueOrThrowArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShapeFindUniqueOrThrowArgs>(args: SelectSubset<T, ShapeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shape that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindFirstArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShapeFindFirstArgs>(args?: SelectSubset<T, ShapeFindFirstArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shape that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindFirstOrThrowArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShapeFindFirstOrThrowArgs>(args?: SelectSubset<T, ShapeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shapes
     * const shapes = await prisma.shape.findMany()
     * 
     * // Get first 10 Shapes
     * const shapes = await prisma.shape.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shapeWithIdOnly = await prisma.shape.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShapeFindManyArgs>(args?: SelectSubset<T, ShapeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shape.
     * @param {ShapeCreateArgs} args - Arguments to create a Shape.
     * @example
     * // Create one Shape
     * const Shape = await prisma.shape.create({
     *   data: {
     *     // ... data to create a Shape
     *   }
     * })
     * 
     */
    create<T extends ShapeCreateArgs>(args: SelectSubset<T, ShapeCreateArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shapes.
     * @param {ShapeCreateManyArgs} args - Arguments to create many Shapes.
     * @example
     * // Create many Shapes
     * const shape = await prisma.shape.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShapeCreateManyArgs>(args?: SelectSubset<T, ShapeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shapes and returns the data saved in the database.
     * @param {ShapeCreateManyAndReturnArgs} args - Arguments to create many Shapes.
     * @example
     * // Create many Shapes
     * const shape = await prisma.shape.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shapes and only return the `id`
     * const shapeWithIdOnly = await prisma.shape.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShapeCreateManyAndReturnArgs>(args?: SelectSubset<T, ShapeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shape.
     * @param {ShapeDeleteArgs} args - Arguments to delete one Shape.
     * @example
     * // Delete one Shape
     * const Shape = await prisma.shape.delete({
     *   where: {
     *     // ... filter to delete one Shape
     *   }
     * })
     * 
     */
    delete<T extends ShapeDeleteArgs>(args: SelectSubset<T, ShapeDeleteArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shape.
     * @param {ShapeUpdateArgs} args - Arguments to update one Shape.
     * @example
     * // Update one Shape
     * const shape = await prisma.shape.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShapeUpdateArgs>(args: SelectSubset<T, ShapeUpdateArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shapes.
     * @param {ShapeDeleteManyArgs} args - Arguments to filter Shapes to delete.
     * @example
     * // Delete a few Shapes
     * const { count } = await prisma.shape.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShapeDeleteManyArgs>(args?: SelectSubset<T, ShapeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shapes
     * const shape = await prisma.shape.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShapeUpdateManyArgs>(args: SelectSubset<T, ShapeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shapes and returns the data updated in the database.
     * @param {ShapeUpdateManyAndReturnArgs} args - Arguments to update many Shapes.
     * @example
     * // Update many Shapes
     * const shape = await prisma.shape.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shapes and only return the `id`
     * const shapeWithIdOnly = await prisma.shape.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShapeUpdateManyAndReturnArgs>(args: SelectSubset<T, ShapeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shape.
     * @param {ShapeUpsertArgs} args - Arguments to update or create a Shape.
     * @example
     * // Update or create a Shape
     * const shape = await prisma.shape.upsert({
     *   create: {
     *     // ... data to create a Shape
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shape we want to update
     *   }
     * })
     */
    upsert<T extends ShapeUpsertArgs>(args: SelectSubset<T, ShapeUpsertArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeCountArgs} args - Arguments to filter Shapes to count.
     * @example
     * // Count the number of Shapes
     * const count = await prisma.shape.count({
     *   where: {
     *     // ... the filter for the Shapes we want to count
     *   }
     * })
    **/
    count<T extends ShapeCountArgs>(
      args?: Subset<T, ShapeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShapeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShapeAggregateArgs>(args: Subset<T, ShapeAggregateArgs>): Prisma.PrismaPromise<GetShapeAggregateType<T>>

    /**
     * Group by Shape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeGroupByArgs} args - Group by arguments.
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
      T extends ShapeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShapeGroupByArgs['orderBy'] }
        : { orderBy?: ShapeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShapeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShapeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shape model
   */
  readonly fields: ShapeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shape.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShapeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rect<T extends Shape$rectArgs<ExtArgs> = {}>(args?: Subset<T, Shape$rectArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    circle<T extends Shape$circleArgs<ExtArgs> = {}>(args?: Subset<T, Shape$circleArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    line<T extends Shape$lineArgs<ExtArgs> = {}>(args?: Subset<T, Shape$lineArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pencil<T extends Shape$pencilArgs<ExtArgs> = {}>(args?: Subset<T, Shape$pencilArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    text<T extends Shape$textArgs<ExtArgs> = {}>(args?: Subset<T, Shape$textArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Shape model
   */
  interface ShapeFieldRefs {
    readonly id: FieldRef<"Shape", 'Int'>
    readonly roomId: FieldRef<"Shape", 'Int'>
    readonly type: FieldRef<"Shape", 'ShapeType'>
    readonly userId: FieldRef<"Shape", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shape findUnique
   */
  export type ShapeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape findUniqueOrThrow
   */
  export type ShapeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape findFirst
   */
  export type ShapeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shapes.
     */
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape findFirstOrThrow
   */
  export type ShapeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shapes.
     */
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape findMany
   */
  export type ShapeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shapes to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape create
   */
  export type ShapeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The data needed to create a Shape.
     */
    data: XOR<ShapeCreateInput, ShapeUncheckedCreateInput>
  }

  /**
   * Shape createMany
   */
  export type ShapeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shapes.
     */
    data: ShapeCreateManyInput | ShapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shape createManyAndReturn
   */
  export type ShapeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * The data used to create many Shapes.
     */
    data: ShapeCreateManyInput | ShapeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shape update
   */
  export type ShapeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The data needed to update a Shape.
     */
    data: XOR<ShapeUpdateInput, ShapeUncheckedUpdateInput>
    /**
     * Choose, which Shape to update.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape updateMany
   */
  export type ShapeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shapes.
     */
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyInput>
    /**
     * Filter which Shapes to update
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to update.
     */
    limit?: number
  }

  /**
   * Shape updateManyAndReturn
   */
  export type ShapeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * The data used to update Shapes.
     */
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyInput>
    /**
     * Filter which Shapes to update
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shape upsert
   */
  export type ShapeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The filter to search for the Shape to update in case it exists.
     */
    where: ShapeWhereUniqueInput
    /**
     * In case the Shape found by the `where` argument doesn't exist, create a new Shape with this data.
     */
    create: XOR<ShapeCreateInput, ShapeUncheckedCreateInput>
    /**
     * In case the Shape was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShapeUpdateInput, ShapeUncheckedUpdateInput>
  }

  /**
   * Shape delete
   */
  export type ShapeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter which Shape to delete.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape deleteMany
   */
  export type ShapeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shapes to delete
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to delete.
     */
    limit?: number
  }

  /**
   * Shape.rect
   */
  export type Shape$rectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    where?: RectWhereInput
  }

  /**
   * Shape.circle
   */
  export type Shape$circleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
  }

  /**
   * Shape.line
   */
  export type Shape$lineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    where?: LineWhereInput
  }

  /**
   * Shape.pencil
   */
  export type Shape$pencilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    where?: PencilWhereInput
  }

  /**
   * Shape.text
   */
  export type Shape$textArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
  }

  /**
   * Shape without action
   */
  export type ShapeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
  }


  /**
   * Model Rect
   */

  export type AggregateRect = {
    _count: RectCountAggregateOutputType | null
    _avg: RectAvgAggregateOutputType | null
    _sum: RectSumAggregateOutputType | null
    _min: RectMinAggregateOutputType | null
    _max: RectMaxAggregateOutputType | null
  }

  export type RectAvgAggregateOutputType = {
    rectId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type RectSumAggregateOutputType = {
    rectId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type RectMinAggregateOutputType = {
    rectId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type RectMaxAggregateOutputType = {
    rectId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
  }

  export type RectCountAggregateOutputType = {
    rectId: number
    x: number
    y: number
    width: number
    height: number
    _all: number
  }


  export type RectAvgAggregateInputType = {
    rectId?: true
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type RectSumAggregateInputType = {
    rectId?: true
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type RectMinAggregateInputType = {
    rectId?: true
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type RectMaxAggregateInputType = {
    rectId?: true
    x?: true
    y?: true
    width?: true
    height?: true
  }

  export type RectCountAggregateInputType = {
    rectId?: true
    x?: true
    y?: true
    width?: true
    height?: true
    _all?: true
  }

  export type RectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rect to aggregate.
     */
    where?: RectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rects to fetch.
     */
    orderBy?: RectOrderByWithRelationInput | RectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rects
    **/
    _count?: true | RectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RectMaxAggregateInputType
  }

  export type GetRectAggregateType<T extends RectAggregateArgs> = {
        [P in keyof T & keyof AggregateRect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRect[P]>
      : GetScalarType<T[P], AggregateRect[P]>
  }




  export type RectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RectWhereInput
    orderBy?: RectOrderByWithAggregationInput | RectOrderByWithAggregationInput[]
    by: RectScalarFieldEnum[] | RectScalarFieldEnum
    having?: RectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RectCountAggregateInputType | true
    _avg?: RectAvgAggregateInputType
    _sum?: RectSumAggregateInputType
    _min?: RectMinAggregateInputType
    _max?: RectMaxAggregateInputType
  }

  export type RectGroupByOutputType = {
    rectId: number
    x: number
    y: number
    width: number
    height: number
    _count: RectCountAggregateOutputType | null
    _avg: RectAvgAggregateOutputType | null
    _sum: RectSumAggregateOutputType | null
    _min: RectMinAggregateOutputType | null
    _max: RectMaxAggregateOutputType | null
  }

  type GetRectGroupByPayload<T extends RectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RectGroupByOutputType[P]>
            : GetScalarType<T[P], RectGroupByOutputType[P]>
        }
      >
    >


  export type RectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rectId?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rect"]>

  export type RectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rectId?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rect"]>

  export type RectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rectId?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rect"]>

  export type RectSelectScalar = {
    rectId?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
  }

  export type RectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rectId" | "x" | "y" | "width" | "height", ExtArgs["result"]["rect"]>
  export type RectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type RectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type RectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $RectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rect"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rectId: number
      x: number
      y: number
      width: number
      height: number
    }, ExtArgs["result"]["rect"]>
    composites: {}
  }

  type RectGetPayload<S extends boolean | null | undefined | RectDefaultArgs> = $Result.GetResult<Prisma.$RectPayload, S>

  type RectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RectCountAggregateInputType | true
    }

  export interface RectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rect'], meta: { name: 'Rect' } }
    /**
     * Find zero or one Rect that matches the filter.
     * @param {RectFindUniqueArgs} args - Arguments to find a Rect
     * @example
     * // Get one Rect
     * const rect = await prisma.rect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RectFindUniqueArgs>(args: SelectSubset<T, RectFindUniqueArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RectFindUniqueOrThrowArgs} args - Arguments to find a Rect
     * @example
     * // Get one Rect
     * const rect = await prisma.rect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RectFindUniqueOrThrowArgs>(args: SelectSubset<T, RectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectFindFirstArgs} args - Arguments to find a Rect
     * @example
     * // Get one Rect
     * const rect = await prisma.rect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RectFindFirstArgs>(args?: SelectSubset<T, RectFindFirstArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectFindFirstOrThrowArgs} args - Arguments to find a Rect
     * @example
     * // Get one Rect
     * const rect = await prisma.rect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RectFindFirstOrThrowArgs>(args?: SelectSubset<T, RectFindFirstOrThrowArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rects
     * const rects = await prisma.rect.findMany()
     * 
     * // Get first 10 Rects
     * const rects = await prisma.rect.findMany({ take: 10 })
     * 
     * // Only select the `rectId`
     * const rectWithRectIdOnly = await prisma.rect.findMany({ select: { rectId: true } })
     * 
     */
    findMany<T extends RectFindManyArgs>(args?: SelectSubset<T, RectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rect.
     * @param {RectCreateArgs} args - Arguments to create a Rect.
     * @example
     * // Create one Rect
     * const Rect = await prisma.rect.create({
     *   data: {
     *     // ... data to create a Rect
     *   }
     * })
     * 
     */
    create<T extends RectCreateArgs>(args: SelectSubset<T, RectCreateArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rects.
     * @param {RectCreateManyArgs} args - Arguments to create many Rects.
     * @example
     * // Create many Rects
     * const rect = await prisma.rect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RectCreateManyArgs>(args?: SelectSubset<T, RectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rects and returns the data saved in the database.
     * @param {RectCreateManyAndReturnArgs} args - Arguments to create many Rects.
     * @example
     * // Create many Rects
     * const rect = await prisma.rect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rects and only return the `rectId`
     * const rectWithRectIdOnly = await prisma.rect.createManyAndReturn({
     *   select: { rectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RectCreateManyAndReturnArgs>(args?: SelectSubset<T, RectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rect.
     * @param {RectDeleteArgs} args - Arguments to delete one Rect.
     * @example
     * // Delete one Rect
     * const Rect = await prisma.rect.delete({
     *   where: {
     *     // ... filter to delete one Rect
     *   }
     * })
     * 
     */
    delete<T extends RectDeleteArgs>(args: SelectSubset<T, RectDeleteArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rect.
     * @param {RectUpdateArgs} args - Arguments to update one Rect.
     * @example
     * // Update one Rect
     * const rect = await prisma.rect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RectUpdateArgs>(args: SelectSubset<T, RectUpdateArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rects.
     * @param {RectDeleteManyArgs} args - Arguments to filter Rects to delete.
     * @example
     * // Delete a few Rects
     * const { count } = await prisma.rect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RectDeleteManyArgs>(args?: SelectSubset<T, RectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rects
     * const rect = await prisma.rect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RectUpdateManyArgs>(args: SelectSubset<T, RectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rects and returns the data updated in the database.
     * @param {RectUpdateManyAndReturnArgs} args - Arguments to update many Rects.
     * @example
     * // Update many Rects
     * const rect = await prisma.rect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rects and only return the `rectId`
     * const rectWithRectIdOnly = await prisma.rect.updateManyAndReturn({
     *   select: { rectId: true },
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
    updateManyAndReturn<T extends RectUpdateManyAndReturnArgs>(args: SelectSubset<T, RectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rect.
     * @param {RectUpsertArgs} args - Arguments to update or create a Rect.
     * @example
     * // Update or create a Rect
     * const rect = await prisma.rect.upsert({
     *   create: {
     *     // ... data to create a Rect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rect we want to update
     *   }
     * })
     */
    upsert<T extends RectUpsertArgs>(args: SelectSubset<T, RectUpsertArgs<ExtArgs>>): Prisma__RectClient<$Result.GetResult<Prisma.$RectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectCountArgs} args - Arguments to filter Rects to count.
     * @example
     * // Count the number of Rects
     * const count = await prisma.rect.count({
     *   where: {
     *     // ... the filter for the Rects we want to count
     *   }
     * })
    **/
    count<T extends RectCountArgs>(
      args?: Subset<T, RectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RectAggregateArgs>(args: Subset<T, RectAggregateArgs>): Prisma.PrismaPromise<GetRectAggregateType<T>>

    /**
     * Group by Rect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectGroupByArgs} args - Group by arguments.
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
      T extends RectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RectGroupByArgs['orderBy'] }
        : { orderBy?: RectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rect model
   */
  readonly fields: RectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rect model
   */
  interface RectFieldRefs {
    readonly rectId: FieldRef<"Rect", 'Int'>
    readonly x: FieldRef<"Rect", 'Int'>
    readonly y: FieldRef<"Rect", 'Int'>
    readonly width: FieldRef<"Rect", 'Int'>
    readonly height: FieldRef<"Rect", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rect findUnique
   */
  export type RectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter, which Rect to fetch.
     */
    where: RectWhereUniqueInput
  }

  /**
   * Rect findUniqueOrThrow
   */
  export type RectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter, which Rect to fetch.
     */
    where: RectWhereUniqueInput
  }

  /**
   * Rect findFirst
   */
  export type RectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter, which Rect to fetch.
     */
    where?: RectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rects to fetch.
     */
    orderBy?: RectOrderByWithRelationInput | RectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rects.
     */
    cursor?: RectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rects.
     */
    distinct?: RectScalarFieldEnum | RectScalarFieldEnum[]
  }

  /**
   * Rect findFirstOrThrow
   */
  export type RectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter, which Rect to fetch.
     */
    where?: RectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rects to fetch.
     */
    orderBy?: RectOrderByWithRelationInput | RectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rects.
     */
    cursor?: RectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rects.
     */
    distinct?: RectScalarFieldEnum | RectScalarFieldEnum[]
  }

  /**
   * Rect findMany
   */
  export type RectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter, which Rects to fetch.
     */
    where?: RectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rects to fetch.
     */
    orderBy?: RectOrderByWithRelationInput | RectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rects.
     */
    cursor?: RectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rects.
     */
    skip?: number
    distinct?: RectScalarFieldEnum | RectScalarFieldEnum[]
  }

  /**
   * Rect create
   */
  export type RectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * The data needed to create a Rect.
     */
    data: XOR<RectCreateInput, RectUncheckedCreateInput>
  }

  /**
   * Rect createMany
   */
  export type RectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rects.
     */
    data: RectCreateManyInput | RectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rect createManyAndReturn
   */
  export type RectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * The data used to create many Rects.
     */
    data: RectCreateManyInput | RectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rect update
   */
  export type RectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * The data needed to update a Rect.
     */
    data: XOR<RectUpdateInput, RectUncheckedUpdateInput>
    /**
     * Choose, which Rect to update.
     */
    where: RectWhereUniqueInput
  }

  /**
   * Rect updateMany
   */
  export type RectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rects.
     */
    data: XOR<RectUpdateManyMutationInput, RectUncheckedUpdateManyInput>
    /**
     * Filter which Rects to update
     */
    where?: RectWhereInput
    /**
     * Limit how many Rects to update.
     */
    limit?: number
  }

  /**
   * Rect updateManyAndReturn
   */
  export type RectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * The data used to update Rects.
     */
    data: XOR<RectUpdateManyMutationInput, RectUncheckedUpdateManyInput>
    /**
     * Filter which Rects to update
     */
    where?: RectWhereInput
    /**
     * Limit how many Rects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rect upsert
   */
  export type RectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * The filter to search for the Rect to update in case it exists.
     */
    where: RectWhereUniqueInput
    /**
     * In case the Rect found by the `where` argument doesn't exist, create a new Rect with this data.
     */
    create: XOR<RectCreateInput, RectUncheckedCreateInput>
    /**
     * In case the Rect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RectUpdateInput, RectUncheckedUpdateInput>
  }

  /**
   * Rect delete
   */
  export type RectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
    /**
     * Filter which Rect to delete.
     */
    where: RectWhereUniqueInput
  }

  /**
   * Rect deleteMany
   */
  export type RectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rects to delete
     */
    where?: RectWhereInput
    /**
     * Limit how many Rects to delete.
     */
    limit?: number
  }

  /**
   * Rect without action
   */
  export type RectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rect
     */
    select?: RectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rect
     */
    omit?: RectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectInclude<ExtArgs> | null
  }


  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleAvgAggregateOutputType = {
    circleId: number | null
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleSumAggregateOutputType = {
    circleId: number | null
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleMinAggregateOutputType = {
    circleId: number | null
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleMaxAggregateOutputType = {
    circleId: number | null
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleCountAggregateOutputType = {
    circleId: number
    x: number
    y: number
    radius: number
    _all: number
  }


  export type CircleAvgAggregateInputType = {
    circleId?: true
    x?: true
    y?: true
    radius?: true
  }

  export type CircleSumAggregateInputType = {
    circleId?: true
    x?: true
    y?: true
    radius?: true
  }

  export type CircleMinAggregateInputType = {
    circleId?: true
    x?: true
    y?: true
    radius?: true
  }

  export type CircleMaxAggregateInputType = {
    circleId?: true
    x?: true
    y?: true
    radius?: true
  }

  export type CircleCountAggregateInputType = {
    circleId?: true
    x?: true
    y?: true
    radius?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _avg?: CircleAvgAggregateInputType
    _sum?: CircleSumAggregateInputType
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    circleId: number
    x: number
    y: number
    radius: number
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    circleId?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    circleId?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    circleId?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    circleId?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
  }

  export type CircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"circleId" | "x" | "y" | "radius", ExtArgs["result"]["circle"]>
  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      circleId: number
      x: number
      y: number
      radius: number
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }

  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleFindUniqueArgs>(args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleFindFirstArgs>(args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `circleId`
     * const circleWithCircleIdOnly = await prisma.circle.findMany({ select: { circleId: true } })
     * 
     */
    findMany<T extends CircleFindManyArgs>(args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
     */
    create<T extends CircleCreateArgs>(args: SelectSubset<T, CircleCreateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circles.
     * @param {CircleCreateManyArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleCreateManyArgs>(args?: SelectSubset<T, CircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circles and returns the data saved in the database.
     * @param {CircleCreateManyAndReturnArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circles and only return the `circleId`
     * const circleWithCircleIdOnly = await prisma.circle.createManyAndReturn({
     *   select: { circleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
     */
    delete<T extends CircleDeleteArgs>(args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleUpdateArgs>(args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleDeleteManyArgs>(args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleUpdateManyArgs>(args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles and returns the data updated in the database.
     * @param {CircleUpdateManyAndReturnArgs} args - Arguments to update many Circles.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circles and only return the `circleId`
     * const circleWithCircleIdOnly = await prisma.circle.updateManyAndReturn({
     *   select: { circleId: true },
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
    updateManyAndReturn<T extends CircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
     */
    upsert<T extends CircleUpsertArgs>(args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
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
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Circle model
   */
  interface CircleFieldRefs {
    readonly circleId: FieldRef<"Circle", 'Int'>
    readonly x: FieldRef<"Circle", 'Int'>
    readonly y: FieldRef<"Circle", 'Int'>
    readonly radius: FieldRef<"Circle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
  }

  /**
   * Circle createMany
   */
  export type CircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circle createManyAndReturn
   */
  export type CircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
  }

  /**
   * Circle updateManyAndReturn
   */
  export type CircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
  }

  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to delete.
     */
    limit?: number
  }

  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
  }


  /**
   * Model Line
   */

  export type AggregateLine = {
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  export type LineAvgAggregateOutputType = {
    lineId: number | null
    x1: number | null
    y1: number | null
    x2: number | null
    y2: number | null
  }

  export type LineSumAggregateOutputType = {
    lineId: number | null
    x1: number | null
    y1: number | null
    x2: number | null
    y2: number | null
  }

  export type LineMinAggregateOutputType = {
    lineId: number | null
    x1: number | null
    y1: number | null
    x2: number | null
    y2: number | null
  }

  export type LineMaxAggregateOutputType = {
    lineId: number | null
    x1: number | null
    y1: number | null
    x2: number | null
    y2: number | null
  }

  export type LineCountAggregateOutputType = {
    lineId: number
    x1: number
    y1: number
    x2: number
    y2: number
    _all: number
  }


  export type LineAvgAggregateInputType = {
    lineId?: true
    x1?: true
    y1?: true
    x2?: true
    y2?: true
  }

  export type LineSumAggregateInputType = {
    lineId?: true
    x1?: true
    y1?: true
    x2?: true
    y2?: true
  }

  export type LineMinAggregateInputType = {
    lineId?: true
    x1?: true
    y1?: true
    x2?: true
    y2?: true
  }

  export type LineMaxAggregateInputType = {
    lineId?: true
    x1?: true
    y1?: true
    x2?: true
    y2?: true
  }

  export type LineCountAggregateInputType = {
    lineId?: true
    x1?: true
    y1?: true
    x2?: true
    y2?: true
    _all?: true
  }

  export type LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType
  }

  export type GetLineAggregateType<T extends LineAggregateArgs> = {
        [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLine[P]>
      : GetScalarType<T[P], AggregateLine[P]>
  }




  export type LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
    orderBy?: LineOrderByWithAggregationInput | LineOrderByWithAggregationInput[]
    by: LineScalarFieldEnum[] | LineScalarFieldEnum
    having?: LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineCountAggregateInputType | true
    _avg?: LineAvgAggregateInputType
    _sum?: LineSumAggregateInputType
    _min?: LineMinAggregateInputType
    _max?: LineMaxAggregateInputType
  }

  export type LineGroupByOutputType = {
    lineId: number
    x1: number
    y1: number
    x2: number
    y2: number
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineGroupByOutputType[P]>
            : GetScalarType<T[P], LineGroupByOutputType[P]>
        }
      >
    >


  export type LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lineId?: boolean
    x1?: boolean
    y1?: boolean
    x2?: boolean
    y2?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lineId?: boolean
    x1?: boolean
    y1?: boolean
    x2?: boolean
    y2?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lineId?: boolean
    x1?: boolean
    y1?: boolean
    x2?: boolean
    y2?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectScalar = {
    lineId?: boolean
    x1?: boolean
    y1?: boolean
    x2?: boolean
    y2?: boolean
  }

  export type LineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lineId" | "x1" | "y1" | "x2" | "y2", ExtArgs["result"]["line"]>
  export type LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type LineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type LineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Line"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lineId: number
      x1: number
      y1: number
      x2: number
      y2: number
    }, ExtArgs["result"]["line"]>
    composites: {}
  }

  type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = $Result.GetResult<Prisma.$LinePayload, S>

  type LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineCountAggregateInputType | true
    }

  export interface LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Line'], meta: { name: 'Line' } }
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     * 
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     * 
     * // Only select the `lineId`
     * const lineWithLineIdOnly = await prisma.line.findMany({ select: { lineId: true } })
     * 
     */
    findMany<T extends LineFindManyArgs>(args?: SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     * 
     */
    create<T extends LineCreateArgs>(args: SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineCreateManyArgs>(args?: SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lines and returns the data saved in the database.
     * @param {LineCreateManyAndReturnArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lines and only return the `lineId`
     * const lineWithLineIdOnly = await prisma.line.createManyAndReturn({
     *   select: { lineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineCreateManyAndReturnArgs>(args?: SelectSubset<T, LineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     * 
     */
    delete<T extends LineDeleteArgs>(args: SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineUpdateArgs>(args: SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineUpdateManyArgs>(args: SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines and returns the data updated in the database.
     * @param {LineUpdateManyAndReturnArgs} args - Arguments to update many Lines.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lines and only return the `lineId`
     * const lineWithLineIdOnly = await prisma.line.updateManyAndReturn({
     *   select: { lineId: true },
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
    updateManyAndReturn<T extends LineUpdateManyAndReturnArgs>(args: SelectSubset<T, LineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(
      args?: Subset<T, LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineAggregateArgs>(args: Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>

    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
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
      T extends LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineGroupByArgs['orderBy'] }
        : { orderBy?: LineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Line model
   */
  readonly fields: LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Line model
   */
  interface LineFieldRefs {
    readonly lineId: FieldRef<"Line", 'Int'>
    readonly x1: FieldRef<"Line", 'Int'>
    readonly y1: FieldRef<"Line", 'Int'>
    readonly x2: FieldRef<"Line", 'Int'>
    readonly y2: FieldRef<"Line", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Line findUnique
   */
  export type LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findUniqueOrThrow
   */
  export type LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findFirst
   */
  export type LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findFirstOrThrow
   */
  export type LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findMany
   */
  export type LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Lines to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line create
   */
  export type LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Line.
     */
    data: XOR<LineCreateInput, LineUncheckedCreateInput>
  }

  /**
   * Line createMany
   */
  export type LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Line createManyAndReturn
   */
  export type LineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line update
   */
  export type LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Line.
     */
    data: XOR<LineUpdateInput, LineUncheckedUpdateInput>
    /**
     * Choose, which Line to update.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line updateMany
   */
  export type LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
  }

  /**
   * Line updateManyAndReturn
   */
  export type LineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line upsert
   */
  export type LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: LineWhereUniqueInput
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: XOR<LineCreateInput, LineUncheckedCreateInput>
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUpdateInput, LineUncheckedUpdateInput>
  }

  /**
   * Line delete
   */
  export type LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter which Line to delete.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line deleteMany
   */
  export type LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to delete.
     */
    limit?: number
  }

  /**
   * Line without action
   */
  export type LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
  }


  /**
   * Model Pencil
   */

  export type AggregatePencil = {
    _count: PencilCountAggregateOutputType | null
    _avg: PencilAvgAggregateOutputType | null
    _sum: PencilSumAggregateOutputType | null
    _min: PencilMinAggregateOutputType | null
    _max: PencilMaxAggregateOutputType | null
  }

  export type PencilAvgAggregateOutputType = {
    pencilShapeId: number | null
  }

  export type PencilSumAggregateOutputType = {
    pencilShapeId: number | null
  }

  export type PencilMinAggregateOutputType = {
    pencilShapeId: number | null
  }

  export type PencilMaxAggregateOutputType = {
    pencilShapeId: number | null
  }

  export type PencilCountAggregateOutputType = {
    pencilShapeId: number
    _all: number
  }


  export type PencilAvgAggregateInputType = {
    pencilShapeId?: true
  }

  export type PencilSumAggregateInputType = {
    pencilShapeId?: true
  }

  export type PencilMinAggregateInputType = {
    pencilShapeId?: true
  }

  export type PencilMaxAggregateInputType = {
    pencilShapeId?: true
  }

  export type PencilCountAggregateInputType = {
    pencilShapeId?: true
    _all?: true
  }

  export type PencilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pencil to aggregate.
     */
    where?: PencilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pencils to fetch.
     */
    orderBy?: PencilOrderByWithRelationInput | PencilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PencilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pencils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pencils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pencils
    **/
    _count?: true | PencilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PencilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PencilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PencilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PencilMaxAggregateInputType
  }

  export type GetPencilAggregateType<T extends PencilAggregateArgs> = {
        [P in keyof T & keyof AggregatePencil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePencil[P]>
      : GetScalarType<T[P], AggregatePencil[P]>
  }




  export type PencilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PencilWhereInput
    orderBy?: PencilOrderByWithAggregationInput | PencilOrderByWithAggregationInput[]
    by: PencilScalarFieldEnum[] | PencilScalarFieldEnum
    having?: PencilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PencilCountAggregateInputType | true
    _avg?: PencilAvgAggregateInputType
    _sum?: PencilSumAggregateInputType
    _min?: PencilMinAggregateInputType
    _max?: PencilMaxAggregateInputType
  }

  export type PencilGroupByOutputType = {
    pencilShapeId: number
    _count: PencilCountAggregateOutputType | null
    _avg: PencilAvgAggregateOutputType | null
    _sum: PencilSumAggregateOutputType | null
    _min: PencilMinAggregateOutputType | null
    _max: PencilMaxAggregateOutputType | null
  }

  type GetPencilGroupByPayload<T extends PencilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PencilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PencilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PencilGroupByOutputType[P]>
            : GetScalarType<T[P], PencilGroupByOutputType[P]>
        }
      >
    >


  export type PencilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pencilShapeId?: boolean
    points?: boolean | Pencil$pointsArgs<ExtArgs>
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
    _count?: boolean | PencilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pencil"]>

  export type PencilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pencilShapeId?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pencil"]>

  export type PencilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pencilShapeId?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pencil"]>

  export type PencilSelectScalar = {
    pencilShapeId?: boolean
  }

  export type PencilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pencilShapeId", ExtArgs["result"]["pencil"]>
  export type PencilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | Pencil$pointsArgs<ExtArgs>
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
    _count?: boolean | PencilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PencilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type PencilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $PencilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pencil"
    objects: {
      points: Prisma.$PointPayload<ExtArgs>[]
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pencilShapeId: number
    }, ExtArgs["result"]["pencil"]>
    composites: {}
  }

  type PencilGetPayload<S extends boolean | null | undefined | PencilDefaultArgs> = $Result.GetResult<Prisma.$PencilPayload, S>

  type PencilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PencilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PencilCountAggregateInputType | true
    }

  export interface PencilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pencil'], meta: { name: 'Pencil' } }
    /**
     * Find zero or one Pencil that matches the filter.
     * @param {PencilFindUniqueArgs} args - Arguments to find a Pencil
     * @example
     * // Get one Pencil
     * const pencil = await prisma.pencil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PencilFindUniqueArgs>(args: SelectSubset<T, PencilFindUniqueArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pencil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PencilFindUniqueOrThrowArgs} args - Arguments to find a Pencil
     * @example
     * // Get one Pencil
     * const pencil = await prisma.pencil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PencilFindUniqueOrThrowArgs>(args: SelectSubset<T, PencilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pencil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilFindFirstArgs} args - Arguments to find a Pencil
     * @example
     * // Get one Pencil
     * const pencil = await prisma.pencil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PencilFindFirstArgs>(args?: SelectSubset<T, PencilFindFirstArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pencil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilFindFirstOrThrowArgs} args - Arguments to find a Pencil
     * @example
     * // Get one Pencil
     * const pencil = await prisma.pencil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PencilFindFirstOrThrowArgs>(args?: SelectSubset<T, PencilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pencils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pencils
     * const pencils = await prisma.pencil.findMany()
     * 
     * // Get first 10 Pencils
     * const pencils = await prisma.pencil.findMany({ take: 10 })
     * 
     * // Only select the `pencilShapeId`
     * const pencilWithPencilShapeIdOnly = await prisma.pencil.findMany({ select: { pencilShapeId: true } })
     * 
     */
    findMany<T extends PencilFindManyArgs>(args?: SelectSubset<T, PencilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pencil.
     * @param {PencilCreateArgs} args - Arguments to create a Pencil.
     * @example
     * // Create one Pencil
     * const Pencil = await prisma.pencil.create({
     *   data: {
     *     // ... data to create a Pencil
     *   }
     * })
     * 
     */
    create<T extends PencilCreateArgs>(args: SelectSubset<T, PencilCreateArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pencils.
     * @param {PencilCreateManyArgs} args - Arguments to create many Pencils.
     * @example
     * // Create many Pencils
     * const pencil = await prisma.pencil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PencilCreateManyArgs>(args?: SelectSubset<T, PencilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pencils and returns the data saved in the database.
     * @param {PencilCreateManyAndReturnArgs} args - Arguments to create many Pencils.
     * @example
     * // Create many Pencils
     * const pencil = await prisma.pencil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pencils and only return the `pencilShapeId`
     * const pencilWithPencilShapeIdOnly = await prisma.pencil.createManyAndReturn({
     *   select: { pencilShapeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PencilCreateManyAndReturnArgs>(args?: SelectSubset<T, PencilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pencil.
     * @param {PencilDeleteArgs} args - Arguments to delete one Pencil.
     * @example
     * // Delete one Pencil
     * const Pencil = await prisma.pencil.delete({
     *   where: {
     *     // ... filter to delete one Pencil
     *   }
     * })
     * 
     */
    delete<T extends PencilDeleteArgs>(args: SelectSubset<T, PencilDeleteArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pencil.
     * @param {PencilUpdateArgs} args - Arguments to update one Pencil.
     * @example
     * // Update one Pencil
     * const pencil = await prisma.pencil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PencilUpdateArgs>(args: SelectSubset<T, PencilUpdateArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pencils.
     * @param {PencilDeleteManyArgs} args - Arguments to filter Pencils to delete.
     * @example
     * // Delete a few Pencils
     * const { count } = await prisma.pencil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PencilDeleteManyArgs>(args?: SelectSubset<T, PencilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pencils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pencils
     * const pencil = await prisma.pencil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PencilUpdateManyArgs>(args: SelectSubset<T, PencilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pencils and returns the data updated in the database.
     * @param {PencilUpdateManyAndReturnArgs} args - Arguments to update many Pencils.
     * @example
     * // Update many Pencils
     * const pencil = await prisma.pencil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pencils and only return the `pencilShapeId`
     * const pencilWithPencilShapeIdOnly = await prisma.pencil.updateManyAndReturn({
     *   select: { pencilShapeId: true },
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
    updateManyAndReturn<T extends PencilUpdateManyAndReturnArgs>(args: SelectSubset<T, PencilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pencil.
     * @param {PencilUpsertArgs} args - Arguments to update or create a Pencil.
     * @example
     * // Update or create a Pencil
     * const pencil = await prisma.pencil.upsert({
     *   create: {
     *     // ... data to create a Pencil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pencil we want to update
     *   }
     * })
     */
    upsert<T extends PencilUpsertArgs>(args: SelectSubset<T, PencilUpsertArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pencils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilCountArgs} args - Arguments to filter Pencils to count.
     * @example
     * // Count the number of Pencils
     * const count = await prisma.pencil.count({
     *   where: {
     *     // ... the filter for the Pencils we want to count
     *   }
     * })
    **/
    count<T extends PencilCountArgs>(
      args?: Subset<T, PencilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PencilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pencil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PencilAggregateArgs>(args: Subset<T, PencilAggregateArgs>): Prisma.PrismaPromise<GetPencilAggregateType<T>>

    /**
     * Group by Pencil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencilGroupByArgs} args - Group by arguments.
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
      T extends PencilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PencilGroupByArgs['orderBy'] }
        : { orderBy?: PencilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PencilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPencilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pencil model
   */
  readonly fields: PencilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pencil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PencilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    points<T extends Pencil$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Pencil$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pencil model
   */
  interface PencilFieldRefs {
    readonly pencilShapeId: FieldRef<"Pencil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pencil findUnique
   */
  export type PencilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter, which Pencil to fetch.
     */
    where: PencilWhereUniqueInput
  }

  /**
   * Pencil findUniqueOrThrow
   */
  export type PencilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter, which Pencil to fetch.
     */
    where: PencilWhereUniqueInput
  }

  /**
   * Pencil findFirst
   */
  export type PencilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter, which Pencil to fetch.
     */
    where?: PencilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pencils to fetch.
     */
    orderBy?: PencilOrderByWithRelationInput | PencilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pencils.
     */
    cursor?: PencilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pencils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pencils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pencils.
     */
    distinct?: PencilScalarFieldEnum | PencilScalarFieldEnum[]
  }

  /**
   * Pencil findFirstOrThrow
   */
  export type PencilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter, which Pencil to fetch.
     */
    where?: PencilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pencils to fetch.
     */
    orderBy?: PencilOrderByWithRelationInput | PencilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pencils.
     */
    cursor?: PencilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pencils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pencils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pencils.
     */
    distinct?: PencilScalarFieldEnum | PencilScalarFieldEnum[]
  }

  /**
   * Pencil findMany
   */
  export type PencilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter, which Pencils to fetch.
     */
    where?: PencilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pencils to fetch.
     */
    orderBy?: PencilOrderByWithRelationInput | PencilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pencils.
     */
    cursor?: PencilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pencils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pencils.
     */
    skip?: number
    distinct?: PencilScalarFieldEnum | PencilScalarFieldEnum[]
  }

  /**
   * Pencil create
   */
  export type PencilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * The data needed to create a Pencil.
     */
    data: XOR<PencilCreateInput, PencilUncheckedCreateInput>
  }

  /**
   * Pencil createMany
   */
  export type PencilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pencils.
     */
    data: PencilCreateManyInput | PencilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pencil createManyAndReturn
   */
  export type PencilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * The data used to create many Pencils.
     */
    data: PencilCreateManyInput | PencilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pencil update
   */
  export type PencilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * The data needed to update a Pencil.
     */
    data: XOR<PencilUpdateInput, PencilUncheckedUpdateInput>
    /**
     * Choose, which Pencil to update.
     */
    where: PencilWhereUniqueInput
  }

  /**
   * Pencil updateMany
   */
  export type PencilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pencils.
     */
    data: XOR<PencilUpdateManyMutationInput, PencilUncheckedUpdateManyInput>
    /**
     * Filter which Pencils to update
     */
    where?: PencilWhereInput
    /**
     * Limit how many Pencils to update.
     */
    limit?: number
  }

  /**
   * Pencil updateManyAndReturn
   */
  export type PencilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * The data used to update Pencils.
     */
    data: XOR<PencilUpdateManyMutationInput, PencilUncheckedUpdateManyInput>
    /**
     * Filter which Pencils to update
     */
    where?: PencilWhereInput
    /**
     * Limit how many Pencils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pencil upsert
   */
  export type PencilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * The filter to search for the Pencil to update in case it exists.
     */
    where: PencilWhereUniqueInput
    /**
     * In case the Pencil found by the `where` argument doesn't exist, create a new Pencil with this data.
     */
    create: XOR<PencilCreateInput, PencilUncheckedCreateInput>
    /**
     * In case the Pencil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PencilUpdateInput, PencilUncheckedUpdateInput>
  }

  /**
   * Pencil delete
   */
  export type PencilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
    /**
     * Filter which Pencil to delete.
     */
    where: PencilWhereUniqueInput
  }

  /**
   * Pencil deleteMany
   */
  export type PencilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pencils to delete
     */
    where?: PencilWhereInput
    /**
     * Limit how many Pencils to delete.
     */
    limit?: number
  }

  /**
   * Pencil.points
   */
  export type Pencil$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Pencil without action
   */
  export type PencilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pencil
     */
    select?: PencilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pencil
     */
    omit?: PencilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PencilInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    pointId: number | null
    x: number | null
    y: number | null
    order: number | null
    pencilId: number | null
  }

  export type PointSumAggregateOutputType = {
    pointId: number | null
    x: number | null
    y: number | null
    order: number | null
    pencilId: number | null
  }

  export type PointMinAggregateOutputType = {
    pointId: number | null
    x: number | null
    y: number | null
    order: number | null
    pencilId: number | null
  }

  export type PointMaxAggregateOutputType = {
    pointId: number | null
    x: number | null
    y: number | null
    order: number | null
    pencilId: number | null
  }

  export type PointCountAggregateOutputType = {
    pointId: number
    x: number
    y: number
    order: number
    pencilId: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    pointId?: true
    x?: true
    y?: true
    order?: true
    pencilId?: true
  }

  export type PointSumAggregateInputType = {
    pointId?: true
    x?: true
    y?: true
    order?: true
    pencilId?: true
  }

  export type PointMinAggregateInputType = {
    pointId?: true
    x?: true
    y?: true
    order?: true
    pencilId?: true
  }

  export type PointMaxAggregateInputType = {
    pointId?: true
    x?: true
    y?: true
    order?: true
    pencilId?: true
  }

  export type PointCountAggregateInputType = {
    pointId?: true
    x?: true
    y?: true
    order?: true
    pencilId?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    pointId: number
    x: number
    y: number
    order: number
    pencilId: number
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    x?: boolean
    y?: boolean
    order?: boolean
    pencilId?: boolean
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    x?: boolean
    y?: boolean
    order?: boolean
    pencilId?: boolean
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    x?: boolean
    y?: boolean
    order?: boolean
    pencilId?: boolean
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    pointId?: boolean
    x?: boolean
    y?: boolean
    order?: boolean
    pencilId?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pointId" | "x" | "y" | "order" | "pencilId", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pencil?: boolean | PencilDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      pencil: Prisma.$PencilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pointId: number
      x: number
      y: number
      order: number
      pencilId: number
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `pointId`
     * const pointWithPointIdOnly = await prisma.point.findMany({ select: { pointId: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `pointId`
     * const pointWithPointIdOnly = await prisma.point.createManyAndReturn({
     *   select: { pointId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `pointId`
     * const pointWithPointIdOnly = await prisma.point.updateManyAndReturn({
     *   select: { pointId: true },
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
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pencil<T extends PencilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PencilDefaultArgs<ExtArgs>>): Prisma__PencilClient<$Result.GetResult<Prisma.$PencilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly pointId: FieldRef<"Point", 'Int'>
    readonly x: FieldRef<"Point", 'Float'>
    readonly y: FieldRef<"Point", 'Float'>
    readonly order: FieldRef<"Point", 'Int'>
    readonly pencilId: FieldRef<"Point", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Text
   */

  export type AggregateText = {
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  export type TextAvgAggregateOutputType = {
    textId: number | null
    x: number | null
    y: number | null
    fontSize: number | null
  }

  export type TextSumAggregateOutputType = {
    textId: number | null
    x: number | null
    y: number | null
    fontSize: number | null
  }

  export type TextMinAggregateOutputType = {
    textId: number | null
    x: number | null
    y: number | null
    text: string | null
    fontSize: number | null
  }

  export type TextMaxAggregateOutputType = {
    textId: number | null
    x: number | null
    y: number | null
    text: string | null
    fontSize: number | null
  }

  export type TextCountAggregateOutputType = {
    textId: number
    x: number
    y: number
    text: number
    fontSize: number
    _all: number
  }


  export type TextAvgAggregateInputType = {
    textId?: true
    x?: true
    y?: true
    fontSize?: true
  }

  export type TextSumAggregateInputType = {
    textId?: true
    x?: true
    y?: true
    fontSize?: true
  }

  export type TextMinAggregateInputType = {
    textId?: true
    x?: true
    y?: true
    text?: true
    fontSize?: true
  }

  export type TextMaxAggregateInputType = {
    textId?: true
    x?: true
    y?: true
    text?: true
    fontSize?: true
  }

  export type TextCountAggregateInputType = {
    textId?: true
    x?: true
    y?: true
    text?: true
    fontSize?: true
    _all?: true
  }

  export type TextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Text to aggregate.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Texts
    **/
    _count?: true | TextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextMaxAggregateInputType
  }

  export type GetTextAggregateType<T extends TextAggregateArgs> = {
        [P in keyof T & keyof AggregateText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateText[P]>
      : GetScalarType<T[P], AggregateText[P]>
  }




  export type TextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
    orderBy?: TextOrderByWithAggregationInput | TextOrderByWithAggregationInput[]
    by: TextScalarFieldEnum[] | TextScalarFieldEnum
    having?: TextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextCountAggregateInputType | true
    _avg?: TextAvgAggregateInputType
    _sum?: TextSumAggregateInputType
    _min?: TextMinAggregateInputType
    _max?: TextMaxAggregateInputType
  }

  export type TextGroupByOutputType = {
    textId: number
    x: number
    y: number
    text: string
    fontSize: number
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  type GetTextGroupByPayload<T extends TextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextGroupByOutputType[P]>
            : GetScalarType<T[P], TextGroupByOutputType[P]>
        }
      >
    >


  export type TextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    textId?: boolean
    x?: boolean
    y?: boolean
    text?: boolean
    fontSize?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    textId?: boolean
    x?: boolean
    y?: boolean
    text?: boolean
    fontSize?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    textId?: boolean
    x?: boolean
    y?: boolean
    text?: boolean
    fontSize?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectScalar = {
    textId?: boolean
    x?: boolean
    y?: boolean
    text?: boolean
    fontSize?: boolean
  }

  export type TextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"textId" | "x" | "y" | "text" | "fontSize", ExtArgs["result"]["text"]>
  export type TextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type TextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type TextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $TextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Text"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      textId: number
      x: number
      y: number
      text: string
      fontSize: number
    }, ExtArgs["result"]["text"]>
    composites: {}
  }

  type TextGetPayload<S extends boolean | null | undefined | TextDefaultArgs> = $Result.GetResult<Prisma.$TextPayload, S>

  type TextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextCountAggregateInputType | true
    }

  export interface TextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Text'], meta: { name: 'Text' } }
    /**
     * Find zero or one Text that matches the filter.
     * @param {TextFindUniqueArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextFindUniqueArgs>(args: SelectSubset<T, TextFindUniqueArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Text that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextFindUniqueOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextFindUniqueOrThrowArgs>(args: SelectSubset<T, TextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Text that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextFindFirstArgs>(args?: SelectSubset<T, TextFindFirstArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Text that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextFindFirstOrThrowArgs>(args?: SelectSubset<T, TextFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Texts
     * const texts = await prisma.text.findMany()
     * 
     * // Get first 10 Texts
     * const texts = await prisma.text.findMany({ take: 10 })
     * 
     * // Only select the `textId`
     * const textWithTextIdOnly = await prisma.text.findMany({ select: { textId: true } })
     * 
     */
    findMany<T extends TextFindManyArgs>(args?: SelectSubset<T, TextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Text.
     * @param {TextCreateArgs} args - Arguments to create a Text.
     * @example
     * // Create one Text
     * const Text = await prisma.text.create({
     *   data: {
     *     // ... data to create a Text
     *   }
     * })
     * 
     */
    create<T extends TextCreateArgs>(args: SelectSubset<T, TextCreateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Texts.
     * @param {TextCreateManyArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextCreateManyArgs>(args?: SelectSubset<T, TextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Texts and returns the data saved in the database.
     * @param {TextCreateManyAndReturnArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Texts and only return the `textId`
     * const textWithTextIdOnly = await prisma.text.createManyAndReturn({
     *   select: { textId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextCreateManyAndReturnArgs>(args?: SelectSubset<T, TextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Text.
     * @param {TextDeleteArgs} args - Arguments to delete one Text.
     * @example
     * // Delete one Text
     * const Text = await prisma.text.delete({
     *   where: {
     *     // ... filter to delete one Text
     *   }
     * })
     * 
     */
    delete<T extends TextDeleteArgs>(args: SelectSubset<T, TextDeleteArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Text.
     * @param {TextUpdateArgs} args - Arguments to update one Text.
     * @example
     * // Update one Text
     * const text = await prisma.text.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextUpdateArgs>(args: SelectSubset<T, TextUpdateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Texts.
     * @param {TextDeleteManyArgs} args - Arguments to filter Texts to delete.
     * @example
     * // Delete a few Texts
     * const { count } = await prisma.text.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextDeleteManyArgs>(args?: SelectSubset<T, TextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextUpdateManyArgs>(args: SelectSubset<T, TextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts and returns the data updated in the database.
     * @param {TextUpdateManyAndReturnArgs} args - Arguments to update many Texts.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Texts and only return the `textId`
     * const textWithTextIdOnly = await prisma.text.updateManyAndReturn({
     *   select: { textId: true },
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
    updateManyAndReturn<T extends TextUpdateManyAndReturnArgs>(args: SelectSubset<T, TextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Text.
     * @param {TextUpsertArgs} args - Arguments to update or create a Text.
     * @example
     * // Update or create a Text
     * const text = await prisma.text.upsert({
     *   create: {
     *     // ... data to create a Text
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Text we want to update
     *   }
     * })
     */
    upsert<T extends TextUpsertArgs>(args: SelectSubset<T, TextUpsertArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextCountArgs} args - Arguments to filter Texts to count.
     * @example
     * // Count the number of Texts
     * const count = await prisma.text.count({
     *   where: {
     *     // ... the filter for the Texts we want to count
     *   }
     * })
    **/
    count<T extends TextCountArgs>(
      args?: Subset<T, TextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextAggregateArgs>(args: Subset<T, TextAggregateArgs>): Prisma.PrismaPromise<GetTextAggregateType<T>>

    /**
     * Group by Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextGroupByArgs} args - Group by arguments.
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
      T extends TextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextGroupByArgs['orderBy'] }
        : { orderBy?: TextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Text model
   */
  readonly fields: TextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Text.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Text model
   */
  interface TextFieldRefs {
    readonly textId: FieldRef<"Text", 'Int'>
    readonly x: FieldRef<"Text", 'Int'>
    readonly y: FieldRef<"Text", 'Int'>
    readonly text: FieldRef<"Text", 'String'>
    readonly fontSize: FieldRef<"Text", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Text findUnique
   */
  export type TextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findUniqueOrThrow
   */
  export type TextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findFirst
   */
  export type TextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findFirstOrThrow
   */
  export type TextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findMany
   */
  export type TextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text create
   */
  export type TextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to create a Text.
     */
    data: XOR<TextCreateInput, TextUncheckedCreateInput>
  }

  /**
   * Text createMany
   */
  export type TextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Text createManyAndReturn
   */
  export type TextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Text update
   */
  export type TextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to update a Text.
     */
    data: XOR<TextUpdateInput, TextUncheckedUpdateInput>
    /**
     * Choose, which Text to update.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text updateMany
   */
  export type TextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
  }

  /**
   * Text updateManyAndReturn
   */
  export type TextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Text upsert
   */
  export type TextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The filter to search for the Text to update in case it exists.
     */
    where: TextWhereUniqueInput
    /**
     * In case the Text found by the `where` argument doesn't exist, create a new Text with this data.
     */
    create: XOR<TextCreateInput, TextUncheckedCreateInput>
    /**
     * In case the Text was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextUpdateInput, TextUncheckedUpdateInput>
  }

  /**
   * Text delete
   */
  export type TextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter which Text to delete.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text deleteMany
   */
  export type TextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to delete
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to delete.
     */
    limit?: number
  }

  /**
   * Text without action
   */
  export type TextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
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
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    createdAt: 'createdAt',
    adminId: 'adminId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ShapeScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    type: 'type',
    userId: 'userId'
  };

  export type ShapeScalarFieldEnum = (typeof ShapeScalarFieldEnum)[keyof typeof ShapeScalarFieldEnum]


  export const RectScalarFieldEnum: {
    rectId: 'rectId',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height'
  };

  export type RectScalarFieldEnum = (typeof RectScalarFieldEnum)[keyof typeof RectScalarFieldEnum]


  export const CircleScalarFieldEnum: {
    circleId: 'circleId',
    x: 'x',
    y: 'y',
    radius: 'radius'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const LineScalarFieldEnum: {
    lineId: 'lineId',
    x1: 'x1',
    y1: 'y1',
    x2: 'x2',
    y2: 'y2'
  };

  export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum]


  export const PencilScalarFieldEnum: {
    pencilShapeId: 'pencilShapeId'
  };

  export type PencilScalarFieldEnum = (typeof PencilScalarFieldEnum)[keyof typeof PencilScalarFieldEnum]


  export const PointScalarFieldEnum: {
    pointId: 'pointId',
    x: 'x',
    y: 'y',
    order: 'order',
    pencilId: 'pencilId'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const TextScalarFieldEnum: {
    textId: 'textId',
    x: 'x',
    y: 'y',
    text: 'text',
    fontSize: 'fontSize'
  };

  export type TextScalarFieldEnum = (typeof TextScalarFieldEnum)[keyof typeof TextScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShapeType'
   */
  export type EnumShapeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShapeType'>
    


  /**
   * Reference to a field of type 'ShapeType[]'
   */
  export type ListEnumShapeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShapeType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    rooms?: RoomListRelationFilter
    shapes?: ShapeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    shapes?: ShapeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    rooms?: RoomListRelationFilter
    shapes?: ShapeListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    slug?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    shapes?: ShapeListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
    shapes?: ShapeOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    shapes?: ShapeListRelationFilter
  }, "id" | "slug">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    slug?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    adminId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type ShapeWhereInput = {
    AND?: ShapeWhereInput | ShapeWhereInput[]
    OR?: ShapeWhereInput[]
    NOT?: ShapeWhereInput | ShapeWhereInput[]
    id?: IntFilter<"Shape"> | number
    roomId?: IntFilter<"Shape"> | number
    type?: EnumShapeTypeFilter<"Shape"> | $Enums.ShapeType
    userId?: StringFilter<"Shape"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    rect?: XOR<RectNullableScalarRelationFilter, RectWhereInput> | null
    circle?: XOR<CircleNullableScalarRelationFilter, CircleWhereInput> | null
    line?: XOR<LineNullableScalarRelationFilter, LineWhereInput> | null
    pencil?: XOR<PencilNullableScalarRelationFilter, PencilWhereInput> | null
    text?: XOR<TextNullableScalarRelationFilter, TextWhereInput> | null
  }

  export type ShapeOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    rect?: RectOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
    line?: LineOrderByWithRelationInput
    pencil?: PencilOrderByWithRelationInput
    text?: TextOrderByWithRelationInput
  }

  export type ShapeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShapeWhereInput | ShapeWhereInput[]
    OR?: ShapeWhereInput[]
    NOT?: ShapeWhereInput | ShapeWhereInput[]
    roomId?: IntFilter<"Shape"> | number
    type?: EnumShapeTypeFilter<"Shape"> | $Enums.ShapeType
    userId?: StringFilter<"Shape"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    rect?: XOR<RectNullableScalarRelationFilter, RectWhereInput> | null
    circle?: XOR<CircleNullableScalarRelationFilter, CircleWhereInput> | null
    line?: XOR<LineNullableScalarRelationFilter, LineWhereInput> | null
    pencil?: XOR<PencilNullableScalarRelationFilter, PencilWhereInput> | null
    text?: XOR<TextNullableScalarRelationFilter, TextWhereInput> | null
  }, "id">

  export type ShapeOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    _count?: ShapeCountOrderByAggregateInput
    _avg?: ShapeAvgOrderByAggregateInput
    _max?: ShapeMaxOrderByAggregateInput
    _min?: ShapeMinOrderByAggregateInput
    _sum?: ShapeSumOrderByAggregateInput
  }

  export type ShapeScalarWhereWithAggregatesInput = {
    AND?: ShapeScalarWhereWithAggregatesInput | ShapeScalarWhereWithAggregatesInput[]
    OR?: ShapeScalarWhereWithAggregatesInput[]
    NOT?: ShapeScalarWhereWithAggregatesInput | ShapeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shape"> | number
    roomId?: IntWithAggregatesFilter<"Shape"> | number
    type?: EnumShapeTypeWithAggregatesFilter<"Shape"> | $Enums.ShapeType
    userId?: StringWithAggregatesFilter<"Shape"> | string
  }

  export type RectWhereInput = {
    AND?: RectWhereInput | RectWhereInput[]
    OR?: RectWhereInput[]
    NOT?: RectWhereInput | RectWhereInput[]
    rectId?: IntFilter<"Rect"> | number
    x?: IntFilter<"Rect"> | number
    y?: IntFilter<"Rect"> | number
    width?: IntFilter<"Rect"> | number
    height?: IntFilter<"Rect"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type RectOrderByWithRelationInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type RectWhereUniqueInput = Prisma.AtLeast<{
    rectId?: number
    AND?: RectWhereInput | RectWhereInput[]
    OR?: RectWhereInput[]
    NOT?: RectWhereInput | RectWhereInput[]
    x?: IntFilter<"Rect"> | number
    y?: IntFilter<"Rect"> | number
    width?: IntFilter<"Rect"> | number
    height?: IntFilter<"Rect"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "rectId">

  export type RectOrderByWithAggregationInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    _count?: RectCountOrderByAggregateInput
    _avg?: RectAvgOrderByAggregateInput
    _max?: RectMaxOrderByAggregateInput
    _min?: RectMinOrderByAggregateInput
    _sum?: RectSumOrderByAggregateInput
  }

  export type RectScalarWhereWithAggregatesInput = {
    AND?: RectScalarWhereWithAggregatesInput | RectScalarWhereWithAggregatesInput[]
    OR?: RectScalarWhereWithAggregatesInput[]
    NOT?: RectScalarWhereWithAggregatesInput | RectScalarWhereWithAggregatesInput[]
    rectId?: IntWithAggregatesFilter<"Rect"> | number
    x?: IntWithAggregatesFilter<"Rect"> | number
    y?: IntWithAggregatesFilter<"Rect"> | number
    width?: IntWithAggregatesFilter<"Rect"> | number
    height?: IntWithAggregatesFilter<"Rect"> | number
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    circleId?: IntFilter<"Circle"> | number
    x?: IntFilter<"Circle"> | number
    y?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type CircleOrderByWithRelationInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    circleId?: number
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    x?: IntFilter<"Circle"> | number
    y?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "circleId">

  export type CircleOrderByWithAggregationInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _avg?: CircleAvgOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
    _sum?: CircleSumOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    circleId?: IntWithAggregatesFilter<"Circle"> | number
    x?: IntWithAggregatesFilter<"Circle"> | number
    y?: IntWithAggregatesFilter<"Circle"> | number
    radius?: IntWithAggregatesFilter<"Circle"> | number
  }

  export type LineWhereInput = {
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    lineId?: IntFilter<"Line"> | number
    x1?: IntFilter<"Line"> | number
    y1?: IntFilter<"Line"> | number
    x2?: IntFilter<"Line"> | number
    y2?: IntFilter<"Line"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type LineOrderByWithRelationInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type LineWhereUniqueInput = Prisma.AtLeast<{
    lineId?: number
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    x1?: IntFilter<"Line"> | number
    y1?: IntFilter<"Line"> | number
    x2?: IntFilter<"Line"> | number
    y2?: IntFilter<"Line"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "lineId">

  export type LineOrderByWithAggregationInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
    _count?: LineCountOrderByAggregateInput
    _avg?: LineAvgOrderByAggregateInput
    _max?: LineMaxOrderByAggregateInput
    _min?: LineMinOrderByAggregateInput
    _sum?: LineSumOrderByAggregateInput
  }

  export type LineScalarWhereWithAggregatesInput = {
    AND?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    OR?: LineScalarWhereWithAggregatesInput[]
    NOT?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    lineId?: IntWithAggregatesFilter<"Line"> | number
    x1?: IntWithAggregatesFilter<"Line"> | number
    y1?: IntWithAggregatesFilter<"Line"> | number
    x2?: IntWithAggregatesFilter<"Line"> | number
    y2?: IntWithAggregatesFilter<"Line"> | number
  }

  export type PencilWhereInput = {
    AND?: PencilWhereInput | PencilWhereInput[]
    OR?: PencilWhereInput[]
    NOT?: PencilWhereInput | PencilWhereInput[]
    pencilShapeId?: IntFilter<"Pencil"> | number
    points?: PointListRelationFilter
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type PencilOrderByWithRelationInput = {
    pencilShapeId?: SortOrder
    points?: PointOrderByRelationAggregateInput
    shape?: ShapeOrderByWithRelationInput
  }

  export type PencilWhereUniqueInput = Prisma.AtLeast<{
    pencilShapeId?: number
    AND?: PencilWhereInput | PencilWhereInput[]
    OR?: PencilWhereInput[]
    NOT?: PencilWhereInput | PencilWhereInput[]
    points?: PointListRelationFilter
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "pencilShapeId">

  export type PencilOrderByWithAggregationInput = {
    pencilShapeId?: SortOrder
    _count?: PencilCountOrderByAggregateInput
    _avg?: PencilAvgOrderByAggregateInput
    _max?: PencilMaxOrderByAggregateInput
    _min?: PencilMinOrderByAggregateInput
    _sum?: PencilSumOrderByAggregateInput
  }

  export type PencilScalarWhereWithAggregatesInput = {
    AND?: PencilScalarWhereWithAggregatesInput | PencilScalarWhereWithAggregatesInput[]
    OR?: PencilScalarWhereWithAggregatesInput[]
    NOT?: PencilScalarWhereWithAggregatesInput | PencilScalarWhereWithAggregatesInput[]
    pencilShapeId?: IntWithAggregatesFilter<"Pencil"> | number
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    pointId?: IntFilter<"Point"> | number
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    order?: IntFilter<"Point"> | number
    pencilId?: IntFilter<"Point"> | number
    pencil?: XOR<PencilScalarRelationFilter, PencilWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
    pencil?: PencilOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    pointId?: number
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    order?: IntFilter<"Point"> | number
    pencilId?: IntFilter<"Point"> | number
    pencil?: XOR<PencilScalarRelationFilter, PencilWhereInput>
  }, "pointId">

  export type PointOrderByWithAggregationInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    pointId?: IntWithAggregatesFilter<"Point"> | number
    x?: FloatWithAggregatesFilter<"Point"> | number
    y?: FloatWithAggregatesFilter<"Point"> | number
    order?: IntWithAggregatesFilter<"Point"> | number
    pencilId?: IntWithAggregatesFilter<"Point"> | number
  }

  export type TextWhereInput = {
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    textId?: IntFilter<"Text"> | number
    x?: IntFilter<"Text"> | number
    y?: IntFilter<"Text"> | number
    text?: StringFilter<"Text"> | string
    fontSize?: FloatFilter<"Text"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type TextOrderByWithRelationInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type TextWhereUniqueInput = Prisma.AtLeast<{
    textId?: number
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    x?: IntFilter<"Text"> | number
    y?: IntFilter<"Text"> | number
    text?: StringFilter<"Text"> | string
    fontSize?: FloatFilter<"Text"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "textId">

  export type TextOrderByWithAggregationInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    _count?: TextCountOrderByAggregateInput
    _avg?: TextAvgOrderByAggregateInput
    _max?: TextMaxOrderByAggregateInput
    _min?: TextMinOrderByAggregateInput
    _sum?: TextSumOrderByAggregateInput
  }

  export type TextScalarWhereWithAggregatesInput = {
    AND?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    OR?: TextScalarWhereWithAggregatesInput[]
    NOT?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    textId?: IntWithAggregatesFilter<"Text"> | number
    x?: IntWithAggregatesFilter<"Text"> | number
    y?: IntWithAggregatesFilter<"Text"> | number
    text?: StringWithAggregatesFilter<"Text"> | string
    fontSize?: FloatWithAggregatesFilter<"Text"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    rooms?: RoomCreateNestedManyWithoutAdminInput
    shapes?: ShapeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    rooms?: RoomUncheckedCreateNestedManyWithoutAdminInput
    shapes?: ShapeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutAdminNestedInput
    shapes?: ShapeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutAdminNestedInput
    shapes?: ShapeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    slug: string
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutRoomsInput
    shapes?: ShapeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
    shapes?: ShapeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutRoomsNestedInput
    shapes?: ShapeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    shapes?: ShapeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
  }

  export type RoomUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type ShapeCreateInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeUpdateInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateManyInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
  }

  export type ShapeUpdateManyMutationInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
  }

  export type ShapeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RectCreateInput = {
    x: number
    y: number
    width: number
    height: number
    shape?: ShapeCreateNestedOneWithoutRectInput
  }

  export type RectUncheckedCreateInput = {
    rectId?: number
    x: number
    y: number
    width: number
    height: number
  }

  export type RectUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutRectNestedInput
  }

  export type RectUncheckedUpdateInput = {
    rectId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectCreateManyInput = {
    rectId?: number
    x: number
    y: number
    width: number
    height: number
  }

  export type RectUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectUncheckedUpdateManyInput = {
    rectId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type CircleCreateInput = {
    x: number
    y: number
    radius: number
    shape?: ShapeCreateNestedOneWithoutCircleInput
  }

  export type CircleUncheckedCreateInput = {
    circleId?: number
    x: number
    y: number
    radius: number
  }

  export type CircleUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    circleId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleCreateManyInput = {
    circleId?: number
    x: number
    y: number
    radius: number
  }

  export type CircleUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUncheckedUpdateManyInput = {
    circleId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateInput = {
    x1: number
    y1: number
    x2: number
    y2: number
    shape?: ShapeCreateNestedOneWithoutLineInput
  }

  export type LineUncheckedCreateInput = {
    lineId?: number
    x1: number
    y1: number
    x2: number
    y2: number
  }

  export type LineUpdateInput = {
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutLineNestedInput
  }

  export type LineUncheckedUpdateInput = {
    lineId?: IntFieldUpdateOperationsInput | number
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateManyInput = {
    lineId?: number
    x1: number
    y1: number
    x2: number
    y2: number
  }

  export type LineUpdateManyMutationInput = {
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
  }

  export type LineUncheckedUpdateManyInput = {
    lineId?: IntFieldUpdateOperationsInput | number
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
  }

  export type PencilCreateInput = {
    points?: PointCreateNestedManyWithoutPencilInput
    shape?: ShapeCreateNestedOneWithoutPencilInput
  }

  export type PencilUncheckedCreateInput = {
    pencilShapeId?: number
    points?: PointUncheckedCreateNestedManyWithoutPencilInput
  }

  export type PencilUpdateInput = {
    points?: PointUpdateManyWithoutPencilNestedInput
    shape?: ShapeUpdateOneRequiredWithoutPencilNestedInput
  }

  export type PencilUncheckedUpdateInput = {
    pencilShapeId?: IntFieldUpdateOperationsInput | number
    points?: PointUncheckedUpdateManyWithoutPencilNestedInput
  }

  export type PencilCreateManyInput = {
    pencilShapeId?: number
  }

  export type PencilUpdateManyMutationInput = {

  }

  export type PencilUncheckedUpdateManyInput = {
    pencilShapeId?: IntFieldUpdateOperationsInput | number
  }

  export type PointCreateInput = {
    x: number
    y: number
    order: number
    pencil: PencilCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    pointId?: number
    x: number
    y: number
    order: number
    pencilId: number
  }

  export type PointUpdateInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    pencil?: PencilUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    pencilId?: IntFieldUpdateOperationsInput | number
  }

  export type PointCreateManyInput = {
    pointId?: number
    x: number
    y: number
    order: number
    pencilId: number
  }

  export type PointUpdateManyMutationInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    pencilId?: IntFieldUpdateOperationsInput | number
  }

  export type TextCreateInput = {
    x: number
    y: number
    text: string
    fontSize: number
    shape?: ShapeCreateNestedOneWithoutTextInput
  }

  export type TextUncheckedCreateInput = {
    textId?: number
    x: number
    y: number
    text: string
    fontSize: number
  }

  export type TextUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutTextNestedInput
  }

  export type TextUncheckedUpdateInput = {
    textId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
  }

  export type TextCreateManyInput = {
    textId?: number
    x: number
    y: number
    text: string
    fontSize: number
  }

  export type TextUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
  }

  export type TextUncheckedUpdateManyInput = {
    textId?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type ShapeListRelationFilter = {
    every?: ShapeWhereInput
    some?: ShapeWhereInput
    none?: ShapeWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShapeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumShapeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeFilter<$PrismaModel> | $Enums.ShapeType
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RectNullableScalarRelationFilter = {
    is?: RectWhereInput | null
    isNot?: RectWhereInput | null
  }

  export type CircleNullableScalarRelationFilter = {
    is?: CircleWhereInput | null
    isNot?: CircleWhereInput | null
  }

  export type LineNullableScalarRelationFilter = {
    is?: LineWhereInput | null
    isNot?: LineWhereInput | null
  }

  export type PencilNullableScalarRelationFilter = {
    is?: PencilWhereInput | null
    isNot?: PencilWhereInput | null
  }

  export type TextNullableScalarRelationFilter = {
    is?: TextWhereInput | null
    isNot?: TextWhereInput | null
  }

  export type ShapeCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ShapeAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type ShapeMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ShapeMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ShapeSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type EnumShapeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShapeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShapeTypeFilter<$PrismaModel>
    _max?: NestedEnumShapeTypeFilter<$PrismaModel>
  }

  export type ShapeScalarRelationFilter = {
    is?: ShapeWhereInput
    isNot?: ShapeWhereInput
  }

  export type RectCountOrderByAggregateInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectAvgOrderByAggregateInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectMaxOrderByAggregateInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectMinOrderByAggregateInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectSumOrderByAggregateInput = {
    rectId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type CircleCountOrderByAggregateInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type CircleAvgOrderByAggregateInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type CircleSumOrderByAggregateInput = {
    circleId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type LineCountOrderByAggregateInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
  }

  export type LineAvgOrderByAggregateInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
  }

  export type LineMaxOrderByAggregateInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
  }

  export type LineMinOrderByAggregateInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
  }

  export type LineSumOrderByAggregateInput = {
    lineId?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    x2?: SortOrder
    y2?: SortOrder
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PencilCountOrderByAggregateInput = {
    pencilShapeId?: SortOrder
  }

  export type PencilAvgOrderByAggregateInput = {
    pencilShapeId?: SortOrder
  }

  export type PencilMaxOrderByAggregateInput = {
    pencilShapeId?: SortOrder
  }

  export type PencilMinOrderByAggregateInput = {
    pencilShapeId?: SortOrder
  }

  export type PencilSumOrderByAggregateInput = {
    pencilShapeId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PencilScalarRelationFilter = {
    is?: PencilWhereInput
    isNot?: PencilWhereInput
  }

  export type PointCountOrderByAggregateInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    pointId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    order?: SortOrder
    pencilId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TextCountOrderByAggregateInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
  }

  export type TextAvgOrderByAggregateInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fontSize?: SortOrder
  }

  export type TextMaxOrderByAggregateInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
  }

  export type TextMinOrderByAggregateInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
  }

  export type TextSumOrderByAggregateInput = {
    textId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fontSize?: SortOrder
  }

  export type RoomCreateNestedManyWithoutAdminInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ShapeCreateNestedManyWithoutUserInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ShapeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RoomUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAdminInput | RoomUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAdminInput | RoomUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAdminInput | RoomUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ShapeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutUserInput | ShapeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutUserInput | ShapeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutUserInput | ShapeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAdminInput | RoomUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAdminInput | RoomUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAdminInput | RoomUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ShapeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutUserInput | ShapeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutUserInput | ShapeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutUserInput | ShapeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ShapeCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type ShapeUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type ShapeUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutRoomInput | ShapeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutRoomInput | ShapeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutRoomInput | ShapeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShapeUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutRoomInput | ShapeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutRoomInput | ShapeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutRoomInput | ShapeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShapesInput = {
    create?: XOR<UserCreateWithoutShapesInput, UserUncheckedCreateWithoutShapesInput>
    connectOrCreate?: UserCreateOrConnectWithoutShapesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutShapesInput = {
    create?: XOR<RoomCreateWithoutShapesInput, RoomUncheckedCreateWithoutShapesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShapesInput
    connect?: RoomWhereUniqueInput
  }

  export type RectCreateNestedOneWithoutShapeInput = {
    create?: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectCreateOrConnectWithoutShapeInput
    connect?: RectWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutShapeInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    connect?: CircleWhereUniqueInput
  }

  export type LineCreateNestedOneWithoutShapeInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    connect?: LineWhereUniqueInput
  }

  export type PencilCreateNestedOneWithoutShapeInput = {
    create?: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
    connectOrCreate?: PencilCreateOrConnectWithoutShapeInput
    connect?: PencilWhereUniqueInput
  }

  export type TextCreateNestedOneWithoutShapeInput = {
    create?: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
    connectOrCreate?: TextCreateOrConnectWithoutShapeInput
    connect?: TextWhereUniqueInput
  }

  export type RectUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectCreateOrConnectWithoutShapeInput
    connect?: RectWhereUniqueInput
  }

  export type CircleUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    connect?: CircleWhereUniqueInput
  }

  export type LineUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    connect?: LineWhereUniqueInput
  }

  export type PencilUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
    connectOrCreate?: PencilCreateOrConnectWithoutShapeInput
    connect?: PencilWhereUniqueInput
  }

  export type TextUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
    connectOrCreate?: TextCreateOrConnectWithoutShapeInput
    connect?: TextWhereUniqueInput
  }

  export type EnumShapeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShapeType
  }

  export type UserUpdateOneRequiredWithoutShapesNestedInput = {
    create?: XOR<UserCreateWithoutShapesInput, UserUncheckedCreateWithoutShapesInput>
    connectOrCreate?: UserCreateOrConnectWithoutShapesInput
    upsert?: UserUpsertWithoutShapesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShapesInput, UserUpdateWithoutShapesInput>, UserUncheckedUpdateWithoutShapesInput>
  }

  export type RoomUpdateOneRequiredWithoutShapesNestedInput = {
    create?: XOR<RoomCreateWithoutShapesInput, RoomUncheckedCreateWithoutShapesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShapesInput
    upsert?: RoomUpsertWithoutShapesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutShapesInput, RoomUpdateWithoutShapesInput>, RoomUncheckedUpdateWithoutShapesInput>
  }

  export type RectUpdateOneWithoutShapeNestedInput = {
    create?: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectCreateOrConnectWithoutShapeInput
    upsert?: RectUpsertWithoutShapeInput
    disconnect?: RectWhereInput | boolean
    delete?: RectWhereInput | boolean
    connect?: RectWhereUniqueInput
    update?: XOR<XOR<RectUpdateToOneWithWhereWithoutShapeInput, RectUpdateWithoutShapeInput>, RectUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUpdateOneWithoutShapeNestedInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    upsert?: CircleUpsertWithoutShapeInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutShapeInput, CircleUpdateWithoutShapeInput>, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type LineUpdateOneWithoutShapeNestedInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    upsert?: LineUpsertWithoutShapeInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutShapeInput, LineUpdateWithoutShapeInput>, LineUncheckedUpdateWithoutShapeInput>
  }

  export type PencilUpdateOneWithoutShapeNestedInput = {
    create?: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
    connectOrCreate?: PencilCreateOrConnectWithoutShapeInput
    upsert?: PencilUpsertWithoutShapeInput
    disconnect?: PencilWhereInput | boolean
    delete?: PencilWhereInput | boolean
    connect?: PencilWhereUniqueInput
    update?: XOR<XOR<PencilUpdateToOneWithWhereWithoutShapeInput, PencilUpdateWithoutShapeInput>, PencilUncheckedUpdateWithoutShapeInput>
  }

  export type TextUpdateOneWithoutShapeNestedInput = {
    create?: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
    connectOrCreate?: TextCreateOrConnectWithoutShapeInput
    upsert?: TextUpsertWithoutShapeInput
    disconnect?: TextWhereInput | boolean
    delete?: TextWhereInput | boolean
    connect?: TextWhereUniqueInput
    update?: XOR<XOR<TextUpdateToOneWithWhereWithoutShapeInput, TextUpdateWithoutShapeInput>, TextUncheckedUpdateWithoutShapeInput>
  }

  export type RectUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectCreateOrConnectWithoutShapeInput
    upsert?: RectUpsertWithoutShapeInput
    disconnect?: RectWhereInput | boolean
    delete?: RectWhereInput | boolean
    connect?: RectWhereUniqueInput
    update?: XOR<XOR<RectUpdateToOneWithWhereWithoutShapeInput, RectUpdateWithoutShapeInput>, RectUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    upsert?: CircleUpsertWithoutShapeInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutShapeInput, CircleUpdateWithoutShapeInput>, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type LineUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    upsert?: LineUpsertWithoutShapeInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutShapeInput, LineUpdateWithoutShapeInput>, LineUncheckedUpdateWithoutShapeInput>
  }

  export type PencilUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
    connectOrCreate?: PencilCreateOrConnectWithoutShapeInput
    upsert?: PencilUpsertWithoutShapeInput
    disconnect?: PencilWhereInput | boolean
    delete?: PencilWhereInput | boolean
    connect?: PencilWhereUniqueInput
    update?: XOR<XOR<PencilUpdateToOneWithWhereWithoutShapeInput, PencilUpdateWithoutShapeInput>, PencilUncheckedUpdateWithoutShapeInput>
  }

  export type TextUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
    connectOrCreate?: TextCreateOrConnectWithoutShapeInput
    upsert?: TextUpsertWithoutShapeInput
    disconnect?: TextWhereInput | boolean
    delete?: TextWhereInput | boolean
    connect?: TextWhereUniqueInput
    update?: XOR<XOR<TextUpdateToOneWithWhereWithoutShapeInput, TextUpdateWithoutShapeInput>, TextUncheckedUpdateWithoutShapeInput>
  }

  export type ShapeCreateNestedOneWithoutRectInput = {
    create?: XOR<ShapeCreateWithoutRectInput, ShapeUncheckedCreateWithoutRectInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutRectInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutRectNestedInput = {
    create?: XOR<ShapeCreateWithoutRectInput, ShapeUncheckedCreateWithoutRectInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutRectInput
    upsert?: ShapeUpsertWithoutRectInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutRectInput, ShapeUpdateWithoutRectInput>, ShapeUncheckedUpdateWithoutRectInput>
  }

  export type ShapeCreateNestedOneWithoutCircleInput = {
    create?: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutCircleInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutCircleNestedInput = {
    create?: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutCircleInput
    upsert?: ShapeUpsertWithoutCircleInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutCircleInput, ShapeUpdateWithoutCircleInput>, ShapeUncheckedUpdateWithoutCircleInput>
  }

  export type ShapeCreateNestedOneWithoutLineInput = {
    create?: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutLineInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutLineNestedInput = {
    create?: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutLineInput
    upsert?: ShapeUpsertWithoutLineInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutLineInput, ShapeUpdateWithoutLineInput>, ShapeUncheckedUpdateWithoutLineInput>
  }

  export type PointCreateNestedManyWithoutPencilInput = {
    create?: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput> | PointCreateWithoutPencilInput[] | PointUncheckedCreateWithoutPencilInput[]
    connectOrCreate?: PointCreateOrConnectWithoutPencilInput | PointCreateOrConnectWithoutPencilInput[]
    createMany?: PointCreateManyPencilInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type ShapeCreateNestedOneWithoutPencilInput = {
    create?: XOR<ShapeCreateWithoutPencilInput, ShapeUncheckedCreateWithoutPencilInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutPencilInput
    connect?: ShapeWhereUniqueInput
  }

  export type PointUncheckedCreateNestedManyWithoutPencilInput = {
    create?: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput> | PointCreateWithoutPencilInput[] | PointUncheckedCreateWithoutPencilInput[]
    connectOrCreate?: PointCreateOrConnectWithoutPencilInput | PointCreateOrConnectWithoutPencilInput[]
    createMany?: PointCreateManyPencilInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type PointUpdateManyWithoutPencilNestedInput = {
    create?: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput> | PointCreateWithoutPencilInput[] | PointUncheckedCreateWithoutPencilInput[]
    connectOrCreate?: PointCreateOrConnectWithoutPencilInput | PointCreateOrConnectWithoutPencilInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutPencilInput | PointUpsertWithWhereUniqueWithoutPencilInput[]
    createMany?: PointCreateManyPencilInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutPencilInput | PointUpdateWithWhereUniqueWithoutPencilInput[]
    updateMany?: PointUpdateManyWithWhereWithoutPencilInput | PointUpdateManyWithWhereWithoutPencilInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type ShapeUpdateOneRequiredWithoutPencilNestedInput = {
    create?: XOR<ShapeCreateWithoutPencilInput, ShapeUncheckedCreateWithoutPencilInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutPencilInput
    upsert?: ShapeUpsertWithoutPencilInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutPencilInput, ShapeUpdateWithoutPencilInput>, ShapeUncheckedUpdateWithoutPencilInput>
  }

  export type PointUncheckedUpdateManyWithoutPencilNestedInput = {
    create?: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput> | PointCreateWithoutPencilInput[] | PointUncheckedCreateWithoutPencilInput[]
    connectOrCreate?: PointCreateOrConnectWithoutPencilInput | PointCreateOrConnectWithoutPencilInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutPencilInput | PointUpsertWithWhereUniqueWithoutPencilInput[]
    createMany?: PointCreateManyPencilInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutPencilInput | PointUpdateWithWhereUniqueWithoutPencilInput[]
    updateMany?: PointUpdateManyWithWhereWithoutPencilInput | PointUpdateManyWithWhereWithoutPencilInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type PencilCreateNestedOneWithoutPointsInput = {
    create?: XOR<PencilCreateWithoutPointsInput, PencilUncheckedCreateWithoutPointsInput>
    connectOrCreate?: PencilCreateOrConnectWithoutPointsInput
    connect?: PencilWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PencilUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<PencilCreateWithoutPointsInput, PencilUncheckedCreateWithoutPointsInput>
    connectOrCreate?: PencilCreateOrConnectWithoutPointsInput
    upsert?: PencilUpsertWithoutPointsInput
    connect?: PencilWhereUniqueInput
    update?: XOR<XOR<PencilUpdateToOneWithWhereWithoutPointsInput, PencilUpdateWithoutPointsInput>, PencilUncheckedUpdateWithoutPointsInput>
  }

  export type ShapeCreateNestedOneWithoutTextInput = {
    create?: XOR<ShapeCreateWithoutTextInput, ShapeUncheckedCreateWithoutTextInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutTextInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutTextNestedInput = {
    create?: XOR<ShapeCreateWithoutTextInput, ShapeUncheckedCreateWithoutTextInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutTextInput
    upsert?: ShapeUpsertWithoutTextInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutTextInput, ShapeUpdateWithoutTextInput>, ShapeUncheckedUpdateWithoutTextInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumShapeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeFilter<$PrismaModel> | $Enums.ShapeType
  }

  export type NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShapeType | EnumShapeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShapeType[] | ListEnumShapeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShapeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShapeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShapeTypeFilter<$PrismaModel>
    _max?: NestedEnumShapeTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoomCreateWithoutAdminInput = {
    slug: string
    createdAt?: Date | string
    shapes?: ShapeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAdminInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    shapes?: ShapeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAdminInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput>
  }

  export type RoomCreateManyAdminInputEnvelope = {
    data: RoomCreateManyAdminInput | RoomCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ShapeCreateWithoutUserInput = {
    type: $Enums.ShapeType
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutUserInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutUserInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput>
  }

  export type ShapeCreateManyUserInputEnvelope = {
    data: ShapeCreateManyUserInput | ShapeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutAdminInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutAdminInput, RoomUncheckedUpdateWithoutAdminInput>
    create: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutAdminInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutAdminInput, RoomUncheckedUpdateWithoutAdminInput>
  }

  export type RoomUpdateManyWithWhereWithoutAdminInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutAdminInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    slug?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
  }

  export type ShapeUpsertWithWhereUniqueWithoutUserInput = {
    where: ShapeWhereUniqueInput
    update: XOR<ShapeUpdateWithoutUserInput, ShapeUncheckedUpdateWithoutUserInput>
    create: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput>
  }

  export type ShapeUpdateWithWhereUniqueWithoutUserInput = {
    where: ShapeWhereUniqueInput
    data: XOR<ShapeUpdateWithoutUserInput, ShapeUncheckedUpdateWithoutUserInput>
  }

  export type ShapeUpdateManyWithWhereWithoutUserInput = {
    where: ShapeScalarWhereInput
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyWithoutUserInput>
  }

  export type ShapeScalarWhereInput = {
    AND?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
    OR?: ShapeScalarWhereInput[]
    NOT?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
    id?: IntFilter<"Shape"> | number
    roomId?: IntFilter<"Shape"> | number
    type?: EnumShapeTypeFilter<"Shape"> | $Enums.ShapeType
    userId?: StringFilter<"Shape"> | string
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    shapes?: ShapeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    shapes?: ShapeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type ShapeCreateWithoutRoomInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutRoomInput = {
    id?: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput>
  }

  export type ShapeCreateManyRoomInputEnvelope = {
    data: ShapeCreateManyRoomInput | ShapeCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    shapes?: ShapeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    shapes?: ShapeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShapeUpsertWithWhereUniqueWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    update: XOR<ShapeUpdateWithoutRoomInput, ShapeUncheckedUpdateWithoutRoomInput>
    create: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput>
  }

  export type ShapeUpdateWithWhereUniqueWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    data: XOR<ShapeUpdateWithoutRoomInput, ShapeUncheckedUpdateWithoutRoomInput>
  }

  export type ShapeUpdateManyWithWhereWithoutRoomInput = {
    where: ShapeScalarWhereInput
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutShapesInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    rooms?: RoomCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutShapesInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar: string
    rooms?: RoomUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutShapesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShapesInput, UserUncheckedCreateWithoutShapesInput>
  }

  export type RoomCreateWithoutShapesInput = {
    slug: string
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutShapesInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
  }

  export type RoomCreateOrConnectWithoutShapesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutShapesInput, RoomUncheckedCreateWithoutShapesInput>
  }

  export type RectCreateWithoutShapeInput = {
    x: number
    y: number
    width: number
    height: number
  }

  export type RectUncheckedCreateWithoutShapeInput = {
    x: number
    y: number
    width: number
    height: number
  }

  export type RectCreateOrConnectWithoutShapeInput = {
    where: RectWhereUniqueInput
    create: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
  }

  export type CircleCreateWithoutShapeInput = {
    x: number
    y: number
    radius: number
  }

  export type CircleUncheckedCreateWithoutShapeInput = {
    x: number
    y: number
    radius: number
  }

  export type CircleCreateOrConnectWithoutShapeInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
  }

  export type LineCreateWithoutShapeInput = {
    x1: number
    y1: number
    x2: number
    y2: number
  }

  export type LineUncheckedCreateWithoutShapeInput = {
    x1: number
    y1: number
    x2: number
    y2: number
  }

  export type LineCreateOrConnectWithoutShapeInput = {
    where: LineWhereUniqueInput
    create: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
  }

  export type PencilCreateWithoutShapeInput = {
    points?: PointCreateNestedManyWithoutPencilInput
  }

  export type PencilUncheckedCreateWithoutShapeInput = {
    points?: PointUncheckedCreateNestedManyWithoutPencilInput
  }

  export type PencilCreateOrConnectWithoutShapeInput = {
    where: PencilWhereUniqueInput
    create: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
  }

  export type TextCreateWithoutShapeInput = {
    x: number
    y: number
    text: string
    fontSize: number
  }

  export type TextUncheckedCreateWithoutShapeInput = {
    x: number
    y: number
    text: string
    fontSize: number
  }

  export type TextCreateOrConnectWithoutShapeInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
  }

  export type UserUpsertWithoutShapesInput = {
    update: XOR<UserUpdateWithoutShapesInput, UserUncheckedUpdateWithoutShapesInput>
    create: XOR<UserCreateWithoutShapesInput, UserUncheckedCreateWithoutShapesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShapesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShapesInput, UserUncheckedUpdateWithoutShapesInput>
  }

  export type UserUpdateWithoutShapesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutShapesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type RoomUpsertWithoutShapesInput = {
    update: XOR<RoomUpdateWithoutShapesInput, RoomUncheckedUpdateWithoutShapesInput>
    create: XOR<RoomCreateWithoutShapesInput, RoomUncheckedCreateWithoutShapesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutShapesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutShapesInput, RoomUncheckedUpdateWithoutShapesInput>
  }

  export type RoomUpdateWithoutShapesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutShapesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type RectUpsertWithoutShapeInput = {
    update: XOR<RectUpdateWithoutShapeInput, RectUncheckedUpdateWithoutShapeInput>
    create: XOR<RectCreateWithoutShapeInput, RectUncheckedCreateWithoutShapeInput>
    where?: RectWhereInput
  }

  export type RectUpdateToOneWithWhereWithoutShapeInput = {
    where?: RectWhereInput
    data: XOR<RectUpdateWithoutShapeInput, RectUncheckedUpdateWithoutShapeInput>
  }

  export type RectUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectUncheckedUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUpsertWithoutShapeInput = {
    update: XOR<CircleUpdateWithoutShapeInput, CircleUncheckedUpdateWithoutShapeInput>
    create: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutShapeInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutShapeInput, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUncheckedUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type LineUpsertWithoutShapeInput = {
    update: XOR<LineUpdateWithoutShapeInput, LineUncheckedUpdateWithoutShapeInput>
    create: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    where?: LineWhereInput
  }

  export type LineUpdateToOneWithWhereWithoutShapeInput = {
    where?: LineWhereInput
    data: XOR<LineUpdateWithoutShapeInput, LineUncheckedUpdateWithoutShapeInput>
  }

  export type LineUpdateWithoutShapeInput = {
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
  }

  export type LineUncheckedUpdateWithoutShapeInput = {
    x1?: IntFieldUpdateOperationsInput | number
    y1?: IntFieldUpdateOperationsInput | number
    x2?: IntFieldUpdateOperationsInput | number
    y2?: IntFieldUpdateOperationsInput | number
  }

  export type PencilUpsertWithoutShapeInput = {
    update: XOR<PencilUpdateWithoutShapeInput, PencilUncheckedUpdateWithoutShapeInput>
    create: XOR<PencilCreateWithoutShapeInput, PencilUncheckedCreateWithoutShapeInput>
    where?: PencilWhereInput
  }

  export type PencilUpdateToOneWithWhereWithoutShapeInput = {
    where?: PencilWhereInput
    data: XOR<PencilUpdateWithoutShapeInput, PencilUncheckedUpdateWithoutShapeInput>
  }

  export type PencilUpdateWithoutShapeInput = {
    points?: PointUpdateManyWithoutPencilNestedInput
  }

  export type PencilUncheckedUpdateWithoutShapeInput = {
    points?: PointUncheckedUpdateManyWithoutPencilNestedInput
  }

  export type TextUpsertWithoutShapeInput = {
    update: XOR<TextUpdateWithoutShapeInput, TextUncheckedUpdateWithoutShapeInput>
    create: XOR<TextCreateWithoutShapeInput, TextUncheckedCreateWithoutShapeInput>
    where?: TextWhereInput
  }

  export type TextUpdateToOneWithWhereWithoutShapeInput = {
    where?: TextWhereInput
    data: XOR<TextUpdateWithoutShapeInput, TextUncheckedUpdateWithoutShapeInput>
  }

  export type TextUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
  }

  export type TextUncheckedUpdateWithoutShapeInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: FloatFieldUpdateOperationsInput | number
  }

  export type ShapeCreateWithoutRectInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutRectInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutRectInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutRectInput, ShapeUncheckedCreateWithoutRectInput>
  }

  export type ShapeUpsertWithoutRectInput = {
    update: XOR<ShapeUpdateWithoutRectInput, ShapeUncheckedUpdateWithoutRectInput>
    create: XOR<ShapeCreateWithoutRectInput, ShapeUncheckedCreateWithoutRectInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutRectInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutRectInput, ShapeUncheckedUpdateWithoutRectInput>
  }

  export type ShapeUpdateWithoutRectInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutRectInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateWithoutCircleInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutCircleInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutCircleInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
  }

  export type ShapeUpsertWithoutCircleInput = {
    update: XOR<ShapeUpdateWithoutCircleInput, ShapeUncheckedUpdateWithoutCircleInput>
    create: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutCircleInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutCircleInput, ShapeUncheckedUpdateWithoutCircleInput>
  }

  export type ShapeUpdateWithoutCircleInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutCircleInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateWithoutLineInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutLineInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutLineInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
  }

  export type ShapeUpsertWithoutLineInput = {
    update: XOR<ShapeUpdateWithoutLineInput, ShapeUncheckedUpdateWithoutLineInput>
    create: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutLineInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutLineInput, ShapeUncheckedUpdateWithoutLineInput>
  }

  export type ShapeUpdateWithoutLineInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type PointCreateWithoutPencilInput = {
    x: number
    y: number
    order: number
  }

  export type PointUncheckedCreateWithoutPencilInput = {
    pointId?: number
    x: number
    y: number
    order: number
  }

  export type PointCreateOrConnectWithoutPencilInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput>
  }

  export type PointCreateManyPencilInputEnvelope = {
    data: PointCreateManyPencilInput | PointCreateManyPencilInput[]
    skipDuplicates?: boolean
  }

  export type ShapeCreateWithoutPencilInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    text?: TextCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutPencilInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    text?: TextUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutPencilInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutPencilInput, ShapeUncheckedCreateWithoutPencilInput>
  }

  export type PointUpsertWithWhereUniqueWithoutPencilInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutPencilInput, PointUncheckedUpdateWithoutPencilInput>
    create: XOR<PointCreateWithoutPencilInput, PointUncheckedCreateWithoutPencilInput>
  }

  export type PointUpdateWithWhereUniqueWithoutPencilInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutPencilInput, PointUncheckedUpdateWithoutPencilInput>
  }

  export type PointUpdateManyWithWhereWithoutPencilInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutPencilInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    pointId?: IntFilter<"Point"> | number
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    order?: IntFilter<"Point"> | number
    pencilId?: IntFilter<"Point"> | number
  }

  export type ShapeUpsertWithoutPencilInput = {
    update: XOR<ShapeUpdateWithoutPencilInput, ShapeUncheckedUpdateWithoutPencilInput>
    create: XOR<ShapeCreateWithoutPencilInput, ShapeUncheckedCreateWithoutPencilInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutPencilInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutPencilInput, ShapeUncheckedUpdateWithoutPencilInput>
  }

  export type ShapeUpdateWithoutPencilInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutPencilInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type PencilCreateWithoutPointsInput = {
    shape?: ShapeCreateNestedOneWithoutPencilInput
  }

  export type PencilUncheckedCreateWithoutPointsInput = {
    pencilShapeId?: number
  }

  export type PencilCreateOrConnectWithoutPointsInput = {
    where: PencilWhereUniqueInput
    create: XOR<PencilCreateWithoutPointsInput, PencilUncheckedCreateWithoutPointsInput>
  }

  export type PencilUpsertWithoutPointsInput = {
    update: XOR<PencilUpdateWithoutPointsInput, PencilUncheckedUpdateWithoutPointsInput>
    create: XOR<PencilCreateWithoutPointsInput, PencilUncheckedCreateWithoutPointsInput>
    where?: PencilWhereInput
  }

  export type PencilUpdateToOneWithWhereWithoutPointsInput = {
    where?: PencilWhereInput
    data: XOR<PencilUpdateWithoutPointsInput, PencilUncheckedUpdateWithoutPointsInput>
  }

  export type PencilUpdateWithoutPointsInput = {
    shape?: ShapeUpdateOneRequiredWithoutPencilNestedInput
  }

  export type PencilUncheckedUpdateWithoutPointsInput = {
    pencilShapeId?: IntFieldUpdateOperationsInput | number
  }

  export type ShapeCreateWithoutTextInput = {
    type: $Enums.ShapeType
    User: UserCreateNestedOneWithoutShapesInput
    room: RoomCreateNestedOneWithoutShapesInput
    rect?: RectCreateNestedOneWithoutShapeInput
    circle?: CircleCreateNestedOneWithoutShapeInput
    line?: LineCreateNestedOneWithoutShapeInput
    pencil?: PencilCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutTextInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
    userId: string
    rect?: RectUncheckedCreateNestedOneWithoutShapeInput
    circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    line?: LineUncheckedCreateNestedOneWithoutShapeInput
    pencil?: PencilUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutTextInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutTextInput, ShapeUncheckedCreateWithoutTextInput>
  }

  export type ShapeUpsertWithoutTextInput = {
    update: XOR<ShapeUpdateWithoutTextInput, ShapeUncheckedUpdateWithoutTextInput>
    create: XOR<ShapeCreateWithoutTextInput, ShapeUncheckedCreateWithoutTextInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutTextInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutTextInput, ShapeUncheckedUpdateWithoutTextInput>
  }

  export type ShapeUpdateWithoutTextInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutTextInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type RoomCreateManyAdminInput = {
    id?: number
    slug: string
    createdAt?: Date | string
  }

  export type ShapeCreateManyUserInput = {
    id?: number
    roomId: number
    type: $Enums.ShapeType
  }

  export type RoomUpdateWithoutAdminInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shapes?: ShapeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shapes?: ShapeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShapeUpdateWithoutUserInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    room?: RoomUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
  }

  export type ShapeCreateManyRoomInput = {
    id?: number
    type: $Enums.ShapeType
    userId: string
  }

  export type ShapeUpdateWithoutRoomInput = {
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    User?: UserUpdateOneRequiredWithoutShapesNestedInput
    rect?: RectUpdateOneWithoutShapeNestedInput
    circle?: CircleUpdateOneWithoutShapeNestedInput
    line?: LineUpdateOneWithoutShapeNestedInput
    pencil?: PencilUpdateOneWithoutShapeNestedInput
    text?: TextUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
    rect?: RectUncheckedUpdateOneWithoutShapeNestedInput
    circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    line?: LineUncheckedUpdateOneWithoutShapeNestedInput
    pencil?: PencilUncheckedUpdateOneWithoutShapeNestedInput
    text?: TextUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumShapeTypeFieldUpdateOperationsInput | $Enums.ShapeType
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PointCreateManyPencilInput = {
    pointId?: number
    x: number
    y: number
    order: number
  }

  export type PointUpdateWithoutPencilInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateWithoutPencilInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyWithoutPencilInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
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