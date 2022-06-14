import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/shared/loader/Loader.comp'
import './page-not-found.styles.css';

const PageNotFound = () => {
const navigate = useNavigate();

const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500)
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<div className='container'>
			<p className='not-found-title'>404</p>
			<h2>Page Not Found</h2>
				<button onClick={() => navigate('/')}type='button' className='go-back-btn'>
					Go Back Home
				</button>
		</div>
	);
};

export default PageNotFound;
