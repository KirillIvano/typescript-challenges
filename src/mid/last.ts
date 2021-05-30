export type Last<TArr extends any[]> = TArr extends []
    ? never
    : TArr extends [...args: any[], last: infer R]
        ? R
        : never;

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
