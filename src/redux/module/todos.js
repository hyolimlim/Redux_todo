//Action Value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DETAIL_TODO = "DETAIL_TODO";

//Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "식사",
      content: "밥먹기",
      isDone: false,
    },
    {
      id: "2",
      title: "산책",
      content: "산책하기",
      isDone: true,
    },
  ],
  todo: {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  },
};


const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo),
        };    


    case DETAIL_TODO:
        return {
            ...state,
            todo: state.todos.find((todo) => {
              return todo.id === action.payload;
            }),
          };
        default:
          return state;

          }
        }



  export default todos;