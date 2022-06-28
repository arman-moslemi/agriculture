import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Login from 'src/components/Pages/Login/Login';
import Verify from 'src/components/Pages/Login/Verify';
import SignUp2 from 'src/components/Pages/Login/SignUp2';
import SignUp from 'src/components/Pages/Login/SignUp';
import Home from 'src/components/Pages/Home/Home';
import SingleProduct from 'src/components/Pages/SingleProduct/SingleProduct';
import Consultation from 'src/components/Pages/Consultation/Consultation';
import EditProfile from 'src/components/Pages/Panel/EditProfile';
import Wallet from 'src/components/Pages/Panel/Wallet';
import IoTManagement from 'src/components/Pages/Panel/IoTManagement';
import IoTDashboard from 'src/components/Pages/Panel/IoTDashboard';
import Favorite from 'src/components/Pages/Panel/Favorite';
import TicketList from 'src/components/Pages/Panel/TicketList';
import History from 'src/components/Pages/Panel/History';
import Store from 'src/components/Pages/Store/Store';
import Cart from 'src/components/Pages/Cart/Cart';
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
					path='/SignUp2'
					name='رمز عبور'
					element={<SignUp2/>}
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
				<Routes>
				<Route
					exact
					path='/IoTManagement'
					name='مدیریت دستگاه های IoT'
					element={<IoTManagement/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/IoTDashboard'
					name='داشبورد IoT'
					element={<IoTDashboard/>}
				/></Routes> 
						<Routes>
				<Route
					exact
					path='/Favorite'
					name='مورد علاقه'
					element={<Favorite/>}
				/></Routes> 
						<Routes>
				<Route
					exact
					path='/TicketList'
					name='لیست تیکت ها'
					element={<TicketList/>}
				/></Routes> 
				<Routes>
				<Route
					exact
					path='/History'
					name='تاریخچه'
					element={<History/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Store'
					name='فروشگاه'
					element={<Store/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Cart'
					name='سبد خرید'
					element={<Cart/>}
				/></Routes> 
		</BrowserRouter>
	);
};

export default MainRoutes;
