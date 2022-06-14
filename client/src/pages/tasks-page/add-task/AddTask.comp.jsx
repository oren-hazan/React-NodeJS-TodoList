import React, { useState, useContext } from 'react';
import CustomInput from '../../../components/shared/custom-input/CustomInput.comp';
import './add-task.styles.css';
import { TasksContext } from '../../../contexts/tasks.context';
import { AuthContext } from '../../../contexts/Auth.context';
import { addTaskAction } from '../../../actions/tasks.actions';

const AddTask = () => {
	const tasksContextValue = useContext(TasksContext);
	const authContextValue = useContext(AuthContext);

	const [input, setInput] = useState('')
	const [isValid, setIsValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleTaskInput = (e) => {
		const textInput = e.target.value;
		if (textInput === '') {
			setErrorMessage('*You must add a task!');
			setIsValid(false);
		} else {
			setIsValid(true);
			setErrorMessage('');
			setInput(textInput);
			return
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			description: input,
			isCompleted: false
		}
		try {
			const response = await fetch('http://localhost:3000/tasks/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + authContextValue.userToken 
				}, 
				body: JSON.stringify(data)
			})
			if (response.status !== 201) throw new Error();
			const responseData = await response.json();
			const task = responseData.data.task;
			const action = addTaskAction(task);
			tasksContextValue.dispatchTasksState(action);
		} catch (err) {
			console.log(err)
			alert('Something went wrong!')
		}
		e.target.reset()
		setIsValid(false)
	}
	

  return (
		<form className='task-form' onSubmit={handleSubmit}>
			<label className='task-label' htmlFor='add-task' name='add-task'>
				<CustomInput
					onInput={handleTaskInput}
					inputClassName={'task-input'}
					type='text'
					id='task-input'
					name='task-input'
					isValid={isValid}
					placeholder='Add Task Hear!'
					errorMessage={errorMessage}
					required={true}
				/>
			</label>
			<button
				className={`add-task-btn ${!isValid ? 'disable' : null}`}
				disabled={!isValid ? true : false}>
				Add
			</button>
		</form>
	);
}

export default AddTask