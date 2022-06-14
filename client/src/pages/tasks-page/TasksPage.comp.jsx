import React, { useEffect, useState, useContext } from 'react';
import './tasks-page.styles.css';
import Loader from '../../components/shared/loader/Loader.comp';
import AddTask from '../tasks-page/add-task/AddTask.comp'
import TasksContainer from './task-container/TasksContainer.comp'
import { AuthContext } from '../../contexts/Auth.context';
import { TasksContext } from '../../contexts/tasks.context'
import { useNavigate } from 'react-router-dom';
import { initTaskAction } from '../../actions/tasks.actions';

const TasksPage = () => {
	const authContextValue = useContext(AuthContext);
	const tasksContextValue = useContext(TasksContext)
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getTasks = async () => {
			try {
				const response = await fetch('http://localhost:3000/tasks', {
					headers: {
						Authorization: 'Bearer ' + authContextValue.userToken,
					},
				});

				if (response.status !== 200) throw new Error();

				const responseData = await response.json();
				const tasks = responseData.data.tasks;
				const action = initTaskAction(tasks);
				tasksContextValue.dispatchTasksState(action);
				setTimeout(() => {
					setIsLoading(false);
				}, 1500);
			} catch (err) {
				alert('Something went wrong!');
				navigate('*');
			}
		};
		if (!authContextValue.userToken) {
			navigate('/login');
		}

		getTasks();
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<main className='tasks-page'>
			<AddTask />
			<TasksContainer />
		</main>
	);
};

export default TasksPage;
