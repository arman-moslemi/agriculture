import React from 'react';
import { Route } from 'react-router-dom';
const PrivateRoute = ({ component, ...options }) => {
	// const { user } = useAuthDataContext();
	// const finalComponent = user ? component : SignInPage;

	return <Route {...options} component={component} />;
	return null;
};

export default PrivateRoute;
