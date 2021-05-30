type DeepReadonly<TObj> = {
    readonly [K in keyof TObj]: TObj[K] extends Record<PropertyKey, any> ? DeepReadonly<TObj[K]> : TObj[K];
}

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

const p = {} as Expected;
const k: DeepReadonly<X> = p; // should be same as `Expected`
