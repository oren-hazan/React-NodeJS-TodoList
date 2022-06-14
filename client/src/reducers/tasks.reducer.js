import tasksActionTypes from '../actions/tasks.actions';

export const TASKS_INITIAL_STATE = [];

const tasksReducer = (state, action) => {
	switch (action.type) {
		case tasksActionTypes.INIT_TASKS: {
			const tasks = action.payload.tasks;
			return tasks;
		}
		case tasksActionTypes.ADD_TASK: {
			const task = action.payload.task;
			const updateState = [...state, task];
			return updateState;
		}
		case tasksActionTypes.UPDATE_TASK: {
			const index = action.payload.index;
			const updateIsCompleted = action.payload.isCompleted;

			const updateState = [...state];
			updateState[index].isCompleted = updateIsCompleted;
			return updateState;
		}

		case tasksActionTypes.REMOVE_TASK: {
			const taskID = action.payload.taskID;
			const updateState = state.filter((task) => task._id !== taskID)
			return updateState;
		}

		default:
			return state;
	}
};

export default tasksReducer;
