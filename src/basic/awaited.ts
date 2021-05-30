export type Awaited<TPromise extends Promise<any>> = TPromise extends Promise<infer R> ? R : never;

type y = Promise<2>;
type x = Awaited<y>; // expect 2
