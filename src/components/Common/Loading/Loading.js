import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styles from "./Loading.module.css";
import logo from '../../../assets/images/loading.gif'

export default function Loading() {
    const isLoading = useSelector((state) => state.loadingReducer.isLoading);

    if (isLoading) {
        return (
            <div className={styles.bgLoading}>
                <img className={styles.img} src={logo}></img>
            </div>
        )
    } else {
        return '';
    }

    
}
