type First<TArr extends any[]> = TArr extends [] ? never : TArr[0];


type arr1 = ['a', 'b', 'c']
type arr2 = number[]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
