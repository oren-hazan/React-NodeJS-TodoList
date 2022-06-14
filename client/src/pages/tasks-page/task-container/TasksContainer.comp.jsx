import React, { useContext } from 'react'
import './task-container.styles.css'
import {TasksContext} from '../../../contexts/tasks.context';
import Task from './task/Task.comp'

const TasksContainer = () => {
    const tasksContextValue = useContext(TasksContext);
  return (
<ul className='tasks-container'>
{tasksContextValue.tasksState.length === 0 ? (
			<div className='added-tasks'>Your list is empty</div>
) : (
    tasksContextValue.tasksState.map((task, index) => { 
        return <Task id={task._id} description={task.description} isCompleted={task.isCompleted} index={index} />
    })
)}

</ul>
    )
}

export default TasksContainer