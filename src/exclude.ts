export type CustomExclude<
    TBase extends PropertyKey,
    TExcluded extends PropertyKey
> = TBase extends TExcluded ? never : TBase;
