import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { DO_LOGOUT } from '../../../redux/constant/Login.constant';
import DropDownUtil from '../../Common/DropDownUtil/DropDownUtil';

const LOCATIONS = [
    { value: 'hcm', text: 'Hồ Chí Minh'},
    { value: 'hn', text: 'Hà Nội'},
    { value: 'pt', text: 'Phan Thiết'},
    { value: 'hui', text: 'Huế'},
    { value: 'qnn', text: 'Quy Nhơn'},
    { value: 'hp', text: 'Hải Phòng'},
    { value: 'vhl', text: 'Vịnh Hạ Long'},
    { value: 'hd', text: 'Hải Dương'},
    { value: 'vt', text: 'Vũng Tàu'},
    { value: 'cm', text: 'Cà Mau'},
];

export default function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {isLogin, user} = useSelector((state) => state.loginReducer);
    const [styleButton, setStyleButton] = useState({display: 'none'});
    const renderLogin = () => {
        if (isLogin) {
            return (
                <div className={classes.login} onMouseMove = {() => {
                    setStyleButton({
                        display: 'inline-block'
                    })
                }} onMouseOut={()=> {
                    setStyleButton({
                        display: 'none'
                    })
                }}>
                    <img className={classes.avatar} src= {user.photoURL}></img>
                    <a className = {classes.userName}>{user.displayName}</a>
                    {/* <button className="btnLogout" style={styleButton} type="button">Đăng xuất</button> */}
                    <Button className="btnLogout" style={styleButton} variant="contained" 
                        onClick = {() => {
                            dispatch({
                                type: DO_LOGOUT
                            })
                        }}>Đăng xuất</Button>
                </div>
            );
        } else {
            return (
                <div className={classes.login}>
                    <AccountCircle style={{ color: '#9b9b9b', fontSize: '40px' }} />
                    <NavLink to="/login">Đăng nhập</NavLink>
                </div>
            );
        }
    }

    const changedSelectLocation = (item) => {
        //TODO
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${classes.header}`} >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <NavLink className="navbar-brand" to="/home" style={{ paddingBottom: '0', paddingTop: '0' }}>
                {/* <span>123</span> */}
                <img className={classes.imgLogo} src="./images/web-logo.png"></img>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className={`navbar-nav mr-auto mt-2 mt-lg-0 ${classes.menuCenter}`} >
                    <li className="nav-item active">
                        <NavLink className={`nav-link ${classes.menuItem}`} to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.menuItem}`} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.menuItem}`} to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.menuItem}`} to="/login">Login</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {renderLogin()}
                    <DropDownUtil data = {LOCATIONS} 
                                keyValue = 'value'
                                textValue = 'text'
                                width='150px'
                                onChangeSelect = {changedSelectLocation}/>
                </form>
            </div>
        </nav>
    )
}
