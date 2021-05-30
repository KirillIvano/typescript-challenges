import {CustomExclude} from '../basic/exclude';
import {CustomPick} from '../basic/pick';

type MyReadonly2<TObj, TProps extends keyof TObj = never> = TProps extends string
    ? (MyReadonly<CustomPick<TObj, TProps>> & CustomPick<TObj, CustomExclude<keyof TObj, TProps>>)
    : MyReadonly<TObj>;

interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
