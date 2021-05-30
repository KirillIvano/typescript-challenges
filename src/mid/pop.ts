export type Pop<TArr extends any[]> = TArr extends []
? []
: TArr extends [...args: infer R, last: any]
    ? R
    : never;

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
