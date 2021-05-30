import {Union2Intersection} from './unionToIntersection';

export type DeepPickBase<TObj, TKey extends string> =
    TKey extends `${infer F}.${infer R}`
        ? F extends keyof TObj
            ? {[K in F]: DeepPick<TObj[F], R>}
            : never
        : TKey extends keyof TObj
            ? {[key in TKey]: TObj[TKey]}
            : never;
export type DeepPick<TObj, TKey extends string> = Union2Intersection<DeepPickBase<TObj, TKey>>

type obj = {
    name: 'hoge',
    age: 20,
    friend: {
        name: 'fuga',
        age: 30,
        family: {
            name: 'baz',
            age: 1
        }
    }
}

// { name : 'hoge' }
type T1 = DeepPick<obj, 'name'>
// { name : 'hoge' } & { friend: { name: 'fuga' }}
type T2 = DeepPick<obj, 'name' | 'friend.name'>
// { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}
type T3 = DeepPick<obj, 'name' | 'friend.name' | 'friend.family.name'>
