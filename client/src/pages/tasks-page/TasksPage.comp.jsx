import React, { useEffect, useState } from 'react';
import './tasks-page.styles.css';
import Loader from '../../components/shared/loader/Loader.comp';
import CustomInput from '../../components/shared/custom-input/CustomInput.comp';

const TasksPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isValid, setIsValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleTaskInput = (e) => {
		const textInput = e.target.value;
        console.log(textInput)
		if (textInput === '') {
			setErrorMessage('*You must add a task!');
			setIsValid(false);
		} else {
			setIsValid(true)
            setErrorMessage('')
			return
        }
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<div className='tasks-container'>
			<form className='task-form'>
				<label className='task-label' htmlFor='add-task' name='add-task'>
					<CustomInput
						onInput={handleTaskInput}
						inputClassName={'task-input'}
						type='text'
						id='task-input'
						name='task-input'
						isValid={isValid}
						placeholder='Add Task!'
						errorMessage={errorMessage}
						required={true}
					/>
				</label>
				<button className={`add-task-btn ${!isValid ? 'disable' : null}`} disabled={!isValid ? true : false}>
					Add
				</button>
			</form>
			<div className='added-tasks'>Your list is empty</div>
		</div>
	);
};

export default TasksPage;
