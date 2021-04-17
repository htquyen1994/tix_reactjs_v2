import React, { useEffect, useState } from 'react';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getGroupTheaterAPI, getTheatersByGroupAPI, getMovieByGroupTheaterAPI } from '../../../redux/actions/GroupTheater.action';
import Button from '@material-ui/core/Button';



export default function IntroduceTheater() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { groupTheaterList, theaterMovieList, groupTheaterSelected } = useSelector((state) => state.groupTheaterReducer);
    const [theaterList, setTheaterList] = useState([]);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        dispatch(getGroupTheaterAPI());
    }, []);

    useEffect(() => {
        if (groupTheaterSelected !== null) {
            dispatch(getMovieByGroupTheaterAPI(groupTheaterSelected.maHeThongRap));
        }
    }, [groupTheaterSelected]);

    useEffect(() => {
        if (theaterMovieList.length > 0) {
            setTheaterList(theaterMovieList[0].lstCumRap);
            if (theaterMovieList[0].lstCumRap.length > 0) {
                setMovieList(theaterMovieList[0].lstCumRap[0].danhSachPhim);
            }
        }
    }, [theaterMovieList]);


    const renderGroupTheater = () => {
        return groupTheaterList.map((rap, index) => {
            return (
                <li key={index} className={classes.itemGroup}>
                    <img className={classes.logoGroup} src={rap.logo} alt="logo"
                        onClick={() => {
                            dispatch(getMovieByGroupTheaterAPI(rap.maHeThongRap));
                        }}
                     />
                </li>
            );
        });
    }

    const renderTheater = () => {
        return (
            theaterList.map((cumRap, index) => {
                return (
                    <div className={classes.itemTheater} key={index}>
                        <span onClick={() => {
                            const indexFind = theaterMovieList[0].lstCumRap.findIndex((item => item.maCumRap === cumRap.maCumRap));
                            if (indexFind > -1) {
                                console.log('Danh sach phim', theaterMovieList[0].lstCumRap[indexFind])
                                setMovieList(theaterMovieList[0].lstCumRap[indexFind].danhSachPhim);
                            }
                        }}>{cumRap.tenCumRap}</span>
                        <p>{cumRap.diaChi}</p>
                        <a>[Chi tiết]</a>
                    </div>
                );
            })
        );
    }

    const renderMovie = () => {
        return (
            movieList.map((movie, index) => {
                return (
                    <div key={index} className={classes.itemMovie}>
                        <div className={classes.infoMovie}>
                            <img src={movie.hinhAnh}></img>
                            <div className={classes.descriptionMovie}>
                                <span style={{backgroundColor: '#fb4226', 
                                            borderRadius: '5px',
                                            padding: '0px 5px'}}>C18</span>
                                <span style={{ fontWeight: "bold", fontSize: '14px'}}>{movie.tenPhim}</span>
                                <p style={{ fontSize: '12px'}}>100 phút - IMDb 7.3</p>
                            </div>
                        </div>

                        <p style={{ fontWeight: "bold", fontSize: '18px'}}>2D Digital</p>
                        <div className={classes.buttonTime}>
                            {
                                movie.lstLichChieuTheoPhim.map((movieTime, index) => {
                                    const date = new Date(movieTime.ngayChieuGioChieu);
                                    const formatDate = date.getHours().toString()
                                                                    .concat(':')
                                                                    .concat(date.getMinutes().toString())
                                    return <Button key={index} className={classes.styleButton} variant="contained"
                                        onClick={() => {
                                            
                                        }}>
                                        {formatDate}
                                    </Button>
                                })
                            }
                        </div>
                    </div>
                )
            })
        );
    }


    return (
        <div className={`${classes.wrapContent}`}>

            <div className={`col-md-auto ${classes.groupTheaterWrapper}`}>
                <ul className={classes.groupTheater}>{renderGroupTheater()}</ul>
            </div>
            <div className={`col-4 ${classes.theaterContent}`}>
                {renderTheater()}
            </div>
            <div className={`col ${classes.movieWrapper}`}>
                {renderMovie()}
            </div>
        </div>
    )
}
