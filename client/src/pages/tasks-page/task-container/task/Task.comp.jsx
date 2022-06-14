import React, { useContext } from 'react'
import './task.styles.css';
import { TasksContext } from '../../../../contexts/tasks.context';
import { AuthContext } from '../../../../contexts/Auth.context';
import { removeTaskAction, updateTaskAction } from '../../../../actions/tasks.actions';

const Task = (props) => {

	const tasksContextValue = useContext(TasksContext);
	const authContextValue = useContext(AuthContext);
	const updateIsCompleted = !props.isCompleted

	const handleUpdateTask = async () => {
		const data = {
			isCompleted: updateIsCompleted,
		};
		try {
			const response = await fetch(`http://localhost:3000/tasks/${props.id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + authContextValue.userToken
				},
				body: JSON.stringify(data)
			})

			if (response.status !== 202) throw new Error();

			const responseData = await response.json();

			const action = updateTaskAction(props.index, updateIsCompleted)
			tasksContextValue.dispatchTasksState(action, responseData);
		} catch (err) {
			alert('Something went wrong!')
		}
	}

	const handleRemoveTask = async () => {
		const taskID = props.id
		try {
			const response = await fetch(`http://localhost:3000/tasks/${props.id}`, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + authContextValue.userToken
				}
			})
			if (response.status !== 200) throw new Error();
			const responseData = response.json();
			
			const action = removeTaskAction(taskID)
			tasksContextValue.dispatchTasksState(action)
		} catch (err) {
			alert('Something went wrong!');
		}
	};

  return (
		<div className='task-container'>
			<h3 className={`task-title ${props.isCompleted ? 'completed' : null}`}>{props.description}</h3>

			<div className='btn-container'>
				<button className='update-btn' onClick={handleUpdateTask}>Update</button>

				<button className='delete-btn' onClick={handleRemoveTask}>Delete</button>
			</div>
		</div>
	);
}

export default Task