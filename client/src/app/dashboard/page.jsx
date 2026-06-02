"use client"
import DashboardStats from '@/component/dashboard/Box1';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const page = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)

    return (
        <div>
            <h2 className='text-3xl'>Welcome back, {user?.name}</h2>
            <DashboardStats></DashboardStats>
        </div>
    );
};

export default page;