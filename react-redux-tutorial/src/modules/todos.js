import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initalState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'Recux',
      done: true,
    },
    {
      id: 2,
      text: 'React',
      done: false,
    },
  ],
};
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initalState,
);

export default todos;
