type Concat<TF extends any[], TS extends any[]> = [...TF, ...TS]

type Result = Concat<[1], [2]> // expected to be [1, 2]
