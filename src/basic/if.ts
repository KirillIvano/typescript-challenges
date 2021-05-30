export type If<TVal extends boolean, TF, TS> = TVal extends true ? TF : TS;

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
