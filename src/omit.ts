import {CustomPick} from './pick';
import {CustomExclude} from './exclude';

type CustomOmit<TBase, TExclude extends keyof TBase> = CustomPick<TBase, CustomExclude<keyof TBase, TExclude>>

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = CustomOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
};
