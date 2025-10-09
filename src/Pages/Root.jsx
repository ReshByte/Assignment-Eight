import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../component/Footer';
import { HashLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation();
   
    
    return (
        <div>
            <Navbar></Navbar>
           {navigation?.state === 'loading'?<HashLoader className='w-full mx-auto top-80'></HashLoader>
                   :
            <Outlet></Outlet>
           }
            <Footer></Footer>

               <ToastContainer />
        </div>
    );
};

export default Root;