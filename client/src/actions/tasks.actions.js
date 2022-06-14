const tasksActionTypes = {
	INIT_TASKS: 'INIT_TASKS',
	ADD_TASK: 'ADD_TASK',
	UPDATE_TASK: 'UPDATE_TASK',
	REMOVE_TASK: 'REMOVE_TASK',
};

export const initTaskAction = (tasks) => {
	const action = {
		type: tasksActionTypes.INIT_TASKS,
		payload: {
			tasks: tasks,
		},
	};
	return action;
};

export const addTaskAction = (task) => {
	const action = {
		type: tasksActionTypes.ADD_TASK,
		payload: {
			task: task,
		},
	};
	return action;
};

export const updateTaskAction = (index, isCompleted) => {
	const action = {
		type: tasksActionTypes.UPDATE_TASK,
		payload: {
			index: index,
			isCompleted: isCompleted,
		},
	};
	return action;
};

export const removeTaskAction = (taskID) => {
	const action = {
		type: tasksActionTypes.REMOVE_TASK,
		payload: {
			taskID: taskID,
		},
	};
	return action;
};

export default tasksActionTypes;
