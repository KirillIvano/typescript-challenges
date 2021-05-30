export type CustomReturnType<TFunc extends (...args: any) => any> =
    TFunc extends (...args: any) => infer R ? R : never;

const fn = (v: boolean) => {
    if (v)
        return 1;
    else
        return 2;
};

type a = CustomReturnType<typeof fn>;

