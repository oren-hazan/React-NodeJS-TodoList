import React from 'react';
import Header from './components/shared/header/Header.comp';
import Footer from './components/shared/footer/Footer.comp';
import HomePage from './pages/home-page/HomePage.comp';
import LoginPage from './pages/login-page/LoginPage.comp';
import SignupPage from './pages/signup-page/SignupPage.comp';
import PageNotFound from './pages/page-not-found/PageNotFound.comp';
import TasksPage from './pages/tasks-page/TasksPage.comp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/Auth.context';
import TasksContextProvider from './contexts/tasks.context';

const App = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<TasksContextProvider>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />}></Route>
						<Route path='/login' element={<LoginPage />}></Route>
						<Route path='/signup' element={<SignupPage />}></Route>
						<Route path='/tasks' element={<TasksPage />}></Route>
						<Route path='*' element={<PageNotFound />}></Route>
					</Routes>
					<Footer />
				</TasksContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
};

export default App;
