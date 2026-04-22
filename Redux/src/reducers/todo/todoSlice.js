import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice(
    {
        name: 'todos',
        initialState: { todos: [{ id: 1, text: 'hello world!!' }] },
        reducers: {
            addTodo: function (state, action) {
                console.log('action', action );
                const newTodo = {
                    id: nanoid(),
                    text: action.payload
                };
                state.todos.push(newTodo);
            },
            removeTodo: function (state, action) {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            }
        }
    }
)

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer; 