import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Join from '../../pages/Join';
import Userinfo from '../../pages/Userinfo';
import Login from '../../pages/Login';
import HotPost from '../../pages/HotPost';
import Purchase from '../../pages/Purchase';
import Start from '../../pages/Start'
import BabyBday from '../../pages/BabyBday';
import BabyName from '../../pages/BabyName';
import BabyRelation from '../../pages/BabyRelation';
import BabyStatus from '../../pages/BabyStatus';
import Home from '../../pages/Home';

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
]

const RouteSetting = () => (
    <Routes>
        {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
        ))}
        
    </Routes>
);
export default RouteSetting;