import React, { useState, useEffect }  from 'react';
import Loader from '../../components/shared/loader/Loader.comp';
import './home-page.styles.css';

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500)
	}, [])
	return (
		
		isLoading ? <Loader /> : 
		<main className='home-page'>
			<h1 className='home-title'>Home Page</h1>
		</main>
	);
};

export default HomePage;
