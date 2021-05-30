export type Union2Intersection<U> =
    (U extends infer R ? (val: R) => any : never) extends (val: infer V) => any ? V : never;

type I = Union2Intersection<{a: 2, b: 3} | {a: 2, c: 3}> // expected to be intersection
