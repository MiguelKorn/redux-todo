export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_COMPLETED_TODO = 'DELETE_ALL_COMPLETED_TODO';

export const createTodo = (text) => {
    return {
        type: CREATE_TODO,
        text
    }
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};

export const deleteAllCompletedTodo = () => {
    return {
        type: DELETE_ALL_COMPLETED_TODO,
    }
};