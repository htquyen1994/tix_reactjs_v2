import React, {useEffect, useState} from 'react';
import useStyle from './style';
import { withStyles } from '@material-ui/core/styles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderArrowOutPrev, SliderArrowOutNext } from '../../Common/SliderArrow/SliderArrow';
import VenoBoxUtil from '../../Common/VenoBoxUtil/VenoBoxUtil.js'



import {
    AppBar, Button, Card, CardActions,
    CardContent, CardMedia, Container, CssBaseline,
    Grid, makeStyles, Tab, Tabs, Typography, Box, Paper
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getIntroduceMovieDangChieuAPI, getIntroduceMovieSapChieuAPI } from '../../../redux/actions/IntroduceMovie.action';
import MovieCard from '../../Common/CardMovie/CardMovie';

const CustomTabs = withStyles({
    root: {
        borderBottom: 'none',
        color: '#fa5238'
    },
    indicator: {
        backgroundColor: 'red',
    },
})(Tabs);

const StyledTab = withStyles((theme) => ({
    root: {
      color: 'black',
      fontSize: theme.typography.pxToRem(20),
      marginRight: theme.spacing(1),
      fontWeight: 'bold',
      '&:focus': {
        opacity: 1,
        outline: 'none'
      },
      '&.MuiTab-textColorPrimary.Mui-selected': {
          color: '#fa5238 !important'
      }
    },
  }))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SliderArrowOutNext />,
    prevArrow: <SliderArrowOutPrev />
};




export default function IntroduceMovie() {
    const classes = useStyle();
    const movieList = useSelector((state) => state.introduceMovieReducer.movieList);
    const dispatch = useDispatch();
    const [valueTab, setValueTab] = React.useState(0);

    const [video, setPlayVideo] = useState({
        opendVideo: false,
        VideoID: null,
    });

    useEffect(()=>{
        dispatch(getIntroduceMovieDangChieuAPI())
    }, []);

    const handleChangeTab = (event, newValue) => {
        setValueTab(newValue);
    };

    const renderMovieList = () => {
        return movieList.map((item, index) => {
            return <MovieCard data={item} key={index} playVideo={playVideo}></MovieCard>
        })
    }

    const closedVideo = () => {
        setPlayVideo({
            opendVideo: false,
            VideoID: null,
        });
    }

    const playVideo = (movie) => {
        const rets = movie.trailer.split('/');
        if (rets.length > 0) {
            setPlayVideo({
                opendVideo: true,
                VideoID: rets[rets.length-1]
            })
        }
    }

    return (
        <div className={`${classes.wrapContent}`}>
            <CustomTabs value={valueTab} onChange={handleChangeTab} aria-label="simple tabs example"
                indicatorColor="primary"
                textColor="primary"
                centered
                className="nav-tabs"
            >
                <StyledTab label="Đang chiếu" {...a11yProps(0)}
                    onClick={() => {
                        dispatch(getIntroduceMovieDangChieuAPI())
                    }}
                />
                <StyledTab label="Sắp chiếu" {...a11yProps(1)}
                    onClick={() => {
                        dispatch(getIntroduceMovieSapChieuAPI())
                    }}
                />
            </CustomTabs>

            <Paper className="mt-2">
                <TabPanel value={valueTab} index={0}>
                  
                    <Slider {...settings}>
                        {renderMovieList()}
                    </Slider>
                </TabPanel>
                <TabPanel value={valueTab} index={1}>
                  
                    <Slider {...settings}>
                        {renderMovieList()}
                    </Slider>
                    
                </TabPanel>
            </Paper>

            <VenoBoxUtil
                    closedVideo = {closedVideo}
                    trailer = {video}/>
        </div>
    )
}
