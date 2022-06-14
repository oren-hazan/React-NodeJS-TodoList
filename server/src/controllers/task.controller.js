import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
	const user = req.user;
	const data = req.body;

	try {
		const task = new Task({
			userId: user._id,
			...data,
		});

		await task.save();

		res.status(201).send({
			status: 201,
			statusText: 'Created',
			data: {
				task: task,
			},

			message: 'Task was created successfully!',
		});
	} catch (err) {
		console.log(err);
		res.status(400).send({
			status: 400,
			statusText: 'Bed request',
			message: 'Task was not created!',
		});
	}
};

export const getTasks = async (req, res) => {
	const user = req.user;
	try {
		await user.populate('tasks');
		const tasks = user.tasks;
		res.status(200).send({
			status: 200,
			statusText: 'Ok',
			data: {
				tasks: tasks,
			},
			message: '',
		});
	} catch (err) {
		res.status(500).send({
			status: 500,
			statusText: 'Internal Server Error',
			message: '',
		});
	}
};

export const updateTask = async (req, res) => {
	const taskID = req.params.taskID;
	const data = req.body;
	try {
		await Task.findByIdAndUpdate(taskID, data);
		res.status(202).send({
			status: 202,
			statusText: 'Accepted',
			data: {},
			message: 'Task was updated successfully',
		});
	} catch (err) {
		res.status(500).send({
			status: 500,
			statusText: 'Internal Server Error',
			message: '',
		});
	}
};

export const deleteTask = async (req, res) => {
	const taskID = req.params.taskID;

	try {
		await Task.findByIdAndDelete(taskID);

		res.send({
			status: 200,
			statusText: 'Ok',
			data: {},
			message: 'Task was deleted successfully',
		});
	} catch (err) {
		res.status(500).send({
			status: 500,
			statusText: 'Internal Server Error',
			message: '',
		});
	}
};
