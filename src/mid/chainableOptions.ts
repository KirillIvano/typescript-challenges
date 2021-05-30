export type Chainable<TChain = Record<string, any>> = {
    option<TKey extends PropertyKey, TVal>(key: TKey, val: TVal): Chainable<TChain & {[key in TKey]: TVal}>;
    get(): TChain;
}

const config = {} as Chainable;

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', {value: 'Hello World'})
    .get();

// expect the type of result to be:
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}
