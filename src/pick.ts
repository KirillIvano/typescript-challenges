export type CustomPick<TBase, TPicked extends keyof TBase> = {
    [K in TPicked]: TBase[K];
}
