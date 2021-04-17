import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderArrowPrev, SliderArrowNext } from '../../Common/SliderArrow/SliderArrow';
import movieList from '../../../server/SliderMovie.json';
import styles from './style.module.css';
import VenoBoxUtil from '../../Common/VenoBoxUtil/VenoBoxUtil.js'


export default class Carousel extends Component {
    state = {
        trailer: {
            opendVideo: false,
            VideoID: null,
        }
    }

    setPlayDemo = (videoId) => {
        this.setState({
            trailer: {
                opendVideo: true,
                VideoID: videoId,
            }
        })
    }

    setClosedVideo = () => {
        this.setState({
            trailer: {
                opendVideo: false,
                VideoID: null,
            }
        })
    }

    renderSlideItems = () => {
        return movieList.map((slide, index) => {
            return (
            <div style={{ color: "green"}} className={styles['wrapper']} key={index} >
                <i className={`fas fa-play ${styles['play-movie']}`} onClick={()=> {
                  this.setPlayDemo(slide.video)
                }}></i>
                <img  src={slide.hinhAnh}></img>
            </div>
            );
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SliderArrowNext  />,
            prevArrow: <SliderArrowPrev />
        };
        return (
            <div >
                <Slider {...settings}>
                    {this.renderSlideItems()}
                </Slider>
                <VenoBoxUtil
                    closedVideo = {this.setClosedVideo}
                    trailer = {this.state.trailer}/>
            </div>
        );
    }
}
