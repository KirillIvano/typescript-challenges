type MyReadonly<TData> = {readonly [K in keyof TData]: TData[K]}

interface Todo {
    title: string;
    description: string;
}

const todo: MyReadonly<Todo> = {
    title: 'Hey',
    description: 'foobar',
};
