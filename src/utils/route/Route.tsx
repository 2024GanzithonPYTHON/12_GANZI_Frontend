import { Route, Routes } from 'react-router-dom';
import Join from '../../pages/auth/Join';
import Userinfo from '../../pages/join/Userinfo';
import Login from '../../pages/auth/Login';
import HotPost from '../../pages/dashboard/hotpost/HotPost';
import Start from '../../pages/Start'
import BabyBday from '../../pages/join/BabyBday';
import BabyName from '../../pages/join/BabyName';
import BabyRelation from '../../pages/join/BabyRelation';
import BabyStatus from '../../pages/join/BabyStatus';
import Home from '../../pages/Home';
import PurchaseWrite from '../../pages/dashboard/purchase/PurchaseWrite';
import HotIssueWrite from '../../pages/dashboard/hotpost/HotIssueWrite';
import Purchase from '../../pages/dashboard/purchase/Purchase';

export const routes = [
    {path: '/' , element: <Start/>},
    {path: '/home', element: <Home/>},
    {path: '/join' , element: <Join/>},
    {path: '/login' , element: <Login />},
    {path: '/userinfo' , element: <Userinfo/>},
    {path: '/hotpost', element: <HotPost/>},
    {path: '/purchase' , element: <Purchase/>},
    {path: '/babystatus' , element: <BabyStatus />},
    {path: '/babybday' , element: <BabyBday/>},
    {path: '/babyrelation', element: <BabyRelation/>},
    {path: '/babyname' , element: <BabyName/>},
    {path: '/purchasewrite', element:<PurchaseWrite/>},
    {path: '/hotissuewrite', element:<HotIssueWrite/>},
]

const RouteSetting = () => (
    <Routes>
        {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
        ))}
    </Routes>
);
export default RouteSetting;