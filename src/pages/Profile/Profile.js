import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile(props) {

    if (localStorage.getItem('userLogin')) {
        return (
            <div>
                profile
            </div>
        )
    } else {
        alert('Vui long dang nhap');
        <Redirect to="/login"></Redirect>
    }

    
}
