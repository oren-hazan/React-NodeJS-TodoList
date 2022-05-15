import React, { useEffect, useState }  from 'react';
import './tasks-page.styles.css';
import Loader from '../../components/shared/loader/Loader.comp';


const TasksPage = () => {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
	setTimeout(() => {
		setIsLoading(false);
	}, 1500);
}, []);

    return isLoading ? (<Loader />) : <div className="tasks-container">
        TasksPage works!
    </div>
}

export default TasksPage;