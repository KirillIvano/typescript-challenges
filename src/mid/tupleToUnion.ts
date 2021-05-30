export type TupleToUnion<TTuple extends any[]> = TTuple[number];

type Arr = ['1', '2', '3']

const a: TupleToUnion<Arr> = '2'; // expected to be '1' | '2' | '3'
