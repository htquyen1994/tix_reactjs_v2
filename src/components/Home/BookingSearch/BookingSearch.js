import React, { useEffect, useState } from 'react';
import useStyle from './style';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    setMovieSelected,
    getMovieListSearchBooking,
    getMovieTheaterSearchBooking,
    getMovieSchedule,
    setTheaterSelected,
    setDaySelected,
    getMovieTheaterSearchBookingSuccess,
    getMovieHourSearchBookingSuccess,
    getMovieDaySearchBookingSuccess
} from '../../../redux/actions/BookingSearch.action';
import DropDownUtil from '../../Common/DropDownUtil/DropDownUtil';
import Helper from '../../../utils/Helper';

export default function BookingSearch() {

    const classes = useStyle();
    const { movieList, theaterList, dayList, hourList, movieSelected, theaterSelected, daySelected, hourSelected }
        = useSelector((state) => state.bookingSearchReducer)
    const dispatch = useDispatch();
    const [calendars, setCalendar] = useState([])
    const [styleButton, setStyleButton] =  useState('primary')
    useEffect(() => {
        dispatch(getMovieListSearchBooking());
    }, []);

    useEffect(() => {
        if (movieSelected !== null) {
            dispatch(getMovieSchedule(movieSelected.maPhim));
        }
    }, [movieSelected]);

    useEffect(() => {
        if (hourSelected === null || hourSelected.ngayChieuGioChieu === null) {
            return;
        }
        setStyleButton('secondary');
    }, [hourSelected]);

    const handleChangeMovie = (movie) => {
        dispatch(setMovieSelected(movie));
    }

    const handleChangeTheater = (theater) => {
        dispatch(setTheaterSelected(theater));
        setCalendar((Helper.getCalendarMovie()));
    }

    const handerChangeDayMovie = (date) => {
        console.log('Day select', date);
        dispatch(setDaySelected(date.value));
    }

    const handlerChangeHourMovie = (time) => {
        console.log('House select', time);
    }

    const errorMessage = (message, items, keyValue, keyText) => {
        items = [];
        items.push({
            [keyValue]: null,
            [keyText]: message
        })
        return items;
    }

    const bookingMovie = () => {
        console.log(hourSelected);
        if (hourSelected === null || hourSelected.ngayChieuGioChieu === null) {
            return;
        }
        console.log(hourSelected);
    }

    return (
        <div className={`container ${classes.wrapContent}`}>
            <div className={`col-3 ${classes.itemReset}`}>
                <DropDownUtil data={movieList}
                    onChangeSelect={handleChangeMovie}
                    width='100%'
                    keyValue='maPhim'
                    textValue='tenPhim'
                    placeHolder='Phim' />
            </div>
            <div className={`col-2 ${classes.itemReset}`}>
                <DropDownUtil data={theaterList}
                    onChangeSelect={handleChangeTheater}
                    width='100%'
                    keyValue='maCumRap'
                    textValue='tenCumRap'
                    handleError={() => {
                        const list = errorMessage('Vui lòng chọn phim', theaterList, 'maCumRap', 'tenCumRap');
                        dispatch(getMovieTheaterSearchBookingSuccess(list));
                    }}
                    placeHolder='Rạp' />
            </div>
            <div className={`col-2 ${classes.itemReset}`}>
                <DropDownUtil data={calendars}
                    onChangeSelect={handerChangeDayMovie}
                    width='100%'
                    keyValue='value'
                    textValue='day'
                    description='true'
                    handleError={() => {
                        const list = errorMessage('Vui lòng chọn phim, rạp', calendars, 'value', 'day');
                        setCalendar(list);
                    }}
                    keyDescription='date'
                    placeHolder='Ngày xem' />
            </div>
            <div className={`col-2 ${classes.itemReset}`}>
                <DropDownUtil data={hourList}
                    onChangeSelect={handlerChangeHourMovie}
                    width='100%'
                    keyValue='ngayChieuGioChieu'
                    textValue='text'
               
                    handleError={() => {
                        const list = errorMessage('Vui lòng chọn phim, rạp và ngày xem', hourList, 'ngayChieuGioChieu', 'text');
                        dispatch(getMovieHourSearchBookingSuccess(list));
                    }}
                    placeHolder='Suất chiếu' />
            </div>
            <div className={`col-2 `}>
                <Button style={{ width: '100%' }} variant="contained" 
                    color={styleButton} onClick={() => {
                        bookingMovie();
                    }}>
                    MUA VÉ NGAY
                </Button>
            </div>
        </div>
    )
}
