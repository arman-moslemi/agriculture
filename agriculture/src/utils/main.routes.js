import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Login from 'src/components/Pages/Login/Login';
import ForgetPassword from 'src/components/Pages/Login/ForgetPassword';
import Verify from 'src/components/Pages/Login/Verify';
import SignUp2 from 'src/components/Pages/Login/SignUp2';
import SignUp from 'src/components/Pages/Login/SignUp';
import Home from 'src/components/Pages/Home/Home';
import AboutUs from 'src/components/Pages/Home/AboutUs';
import ContactUs from 'src/components/Pages/Home/ContactUs';
import SingleProduct from 'src/components/Pages/SingleProduct/SingleProduct';
import Consultation from 'src/components/Pages/Consultation/Consultation';
import EditProfile from 'src/components/Pages/Panel/EditProfile';
import Wallet from 'src/components/Pages/Panel/Wallet';
import IoTManagement from 'src/components/Pages/Panel/IoTManagement';
import IoTDashboard from 'src/components/Pages/Panel/IoTDashboard';
import Favorite from 'src/components/Pages/Panel/Favorite';
import TicketList from 'src/components/Pages/Panel/TicketList';
import History from 'src/components/Pages/Panel/History';
import SubGroup from 'src/components/Pages/Gruop/SubGroup';
import Cart from 'src/components/Pages/Cart/Cart';
import UserHistory from 'src/components/Pages/Panel/UserHistory';
import News from 'src/components/Pages/News/News';
import SingleNews from 'src/components/Pages/News/SingleNews';
import GroupProduct from 'src/components/Pages/Gruop/GroupProduct';
import MainGroupProduct from 'src/components/Pages/Gruop/MainGroupProduct';
import MainLayout from 'src/components/Pages/ChatVideo/layout/MainLayout';
import LoginChat from 'src/components/Pages/ChatVideo/LoginChat';
import LoginChatFake from 'src/components/Pages/ChatVideo/LoginChatFake';
import SmartFarming from 'src/components/Pages/SmartFarming/SmartFarming';
import Rules from 'src/components/Pages/Rules/Rules';
import Dargah from 'src/components/Pages/Dargah/Dargah';
import Factor from 'src/components/Pages/Dargah/Factor';
const MainRoutes = (props) => {
	return (
  <BrowserRouter basename="/">
		<Routes>
				
				<Route
					exact
					path='/SingleProduct/:id'
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
					path='/SubGroup/:id'
					name='فروشگاه'
					element={<SubGroup/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/GroupProduct/:id'
					name='فروشگاه'
					element={<GroupProduct/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/MainGroupProduct/:id'
					name='فروشگاه'
					element={<MainGroupProduct/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Cart'
					name='سبد خرید'
					element={<Cart/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/UserHistory'
					name='تاریخچه کاربر'
					element={<UserHistory/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/News'
					name='اخبار و مقالات'
					element={<News/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/SingleNews/:id'
					name='خبر'
					element={<SingleNews/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/LoginChat'
					name='خبر'
					element={<LoginChat/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/VideoChat'
					name='خبر'
					element={<MainLayout/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/SmartFarming'
					name='خبر'
					element={<SmartFarming/>}
				/></Routes> 
					<Routes>
				<Route
					exact
					path='/Rules'
					name='خبر'
					element={<Rules/>}
				/></Routes> 

					<Routes>
				<Route
					exact
					path='/ForgetPassword'
					name='خبر'
					element={<ForgetPassword/>}
				/></Routes> 

<Routes>
				
				<Route
					exact
					path='/LoginChatFake/:id'
					name='محصول'
					element={<LoginChatFake/>}
				/></Routes> 
<Routes>
				
				<Route
					exact
					path='/Dargah'
					name='محصول'
					element={<Dargah/>}
					
				/></Routes> 
				<Routes>
				
				<Route
					exact
					path='/about-us'
					name='درباره ما'
					element={<AboutUs/>}
					
				/></Routes> 
				<Routes>
				
				<Route
					exact
					path='/contact-us'
					name='تماس با ما'
					element={<ContactUs/>}
					
				/></Routes> 
				<Routes>
				
				<Route
					exact
					path='/factor/:id'
					name='فاکتور'
					element={<Factor/>}
					
				/></Routes> 
		</BrowserRouter>
	);
};

export default MainRoutes;
