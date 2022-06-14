import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
	userId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	description: {
		type: String,
		trim: true,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		required: [true, 'isCompleted is required'],
	},
});

taskSchema.methods.toJSON = function () {
	const task = this;

	const taskObj = task.toObject();
	delete taskObj.__v;

	return taskObj;
};

const Task = mongoose.model('Task', taskSchema);

export default Task;
