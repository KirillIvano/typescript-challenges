type ConvertWord<T extends string> = Capitalize<Lowercase<T>>;

export type CamelCase<T extends string> = T extends `${infer Word}_${infer Rest}` ?
    `${ConvertWord<Word>}${CamelCase<Rest>}` : ConvertWord<T>;

type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
