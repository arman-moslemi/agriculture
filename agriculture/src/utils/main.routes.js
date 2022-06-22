import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Login from 'src/components/Pages/Login/Login';
import Verify from 'src/components/Pages/Login/Verify';
import SetPassword from 'src/components/Pages/Login/SetPassword';
import SignUp from 'src/components/Pages/Login/SignUp';
import Home from 'src/components/Pages/Home/Home';
import SingleProduct from 'src/components/Pages/SingleProduct/SingleProduct';
import Consultation from 'src/components/Pages/Consultation/Consultation';
import EditProfile from 'src/components/Pages/Panel/EditProfile';
import Wallet from 'src/components/Pages/Panel/Wallet';
const MainRoutes = (props) => {
	return (
  <BrowserRouter basename="/">
		<Routes>
				
				<Route
					exact
					path='/SingleProduct'
					name='محصول'
					element={<SingleProduct/>}
				/></Routes> 
			<Routes>
				
				<Route
					exact
					path='/Login'
					name='عضویت'
					element={<Login/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Verify'
					name='کد تایید'
					element={<Verify/>}
				/></Routes> 
				<Routes>
				<Route
					exact
					path='/SetPassword'
					name='رمز عبور'
					element={<SetPassword/>}
				/></Routes> 
				<Routes>
				<Route
					exact
					path='/SignUp'
					name='عضویت'
					element={<SignUp/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/'
					name='صفحه اصلی'
					element={<Home/>}
				/></Routes> 
				<Routes>
				<Route
					exact
					path='/Consultation'
					name='لیست مشاوران'
					element={<Consultation/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/EditProfile'
					name='ویرایش حساب کاربری'
					element={<EditProfile/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Wallet'
					name='کیف پول'
					element={<Wallet/>}
				/></Routes> 
		</BrowserRouter>
	);
};

export default MainRoutes;
