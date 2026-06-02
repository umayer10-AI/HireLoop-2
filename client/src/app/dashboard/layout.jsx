import Sidebar from '@/component/dashboard/Sidbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
                <Sidebar></Sidebar>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;