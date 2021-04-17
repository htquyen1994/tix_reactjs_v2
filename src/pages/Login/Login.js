import React, { Component, useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {LOGIN_FACEBOOK_API, LOGIN_GOOGLE_API} from '../../redux/constant/Login.constant'
import { useHistory } from "react-router-dom";

export default function Login(props) {
    const {isLogin, user} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (isLogin) {
            history.replace('/');
        }
    })
    return (
        <div className={`${styles['bg-Login']}`}>
                <div className={`${styles['container-login']}`}>
                    <div className={`col-3 ${styles['login-form']}`}>
                        <NavLink to="/">
                            <IconButton color="secondary" aria-label="add an alarm" className={`${styles['close-button']}`}>
                                <CloseIcon />
                            </IconButton>
                        </NavLink>
                        

                        <div className={`${styles['content']}`}>
                             <img className={`${styles['logo']}`} src='./images/group2x.png'></img>
                            <div className={`${styles['sign-message']}`}>
                                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                            </div>
                            <img className={`${styles['fb']}`} src='./images/btn-FB.png'
                                onClick = {() => {
                                    dispatch({
                                        type: LOGIN_FACEBOOK_API
                                    })
                                }}    
                            ></img>
                            
                            <img className={`${styles['zalo']}`} src='./images/btn-Google.png'
                                onClick = {() => {
                                        dispatch({
                                            type: LOGIN_GOOGLE_API
                                        })
                                }}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
    )
}
