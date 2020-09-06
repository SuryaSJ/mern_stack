import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS=[{
        id:'id1',
        name:'Surya',
        image:'https://showme.co.za/pretoria/files/2016/03/portrait-photography.jpg',
        places:1
    }]
    return (
       <UsersList items={USERS}/>
    )
}

export default Users
