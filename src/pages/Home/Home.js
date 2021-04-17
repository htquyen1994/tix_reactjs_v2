import React from 'react'
import Carousel from '../../components/Home/Carousel/Carousel.js'
import BookingSearch from '../../components/Home/BookingSearch/BookingSearch.js'
import IntroduceMovie from '../../components/Home/IntroduceMovie/IntroduceMovie.js';
import GroupTheater from '../../components/Home/GroupTheater/GroupTheater.js'
import Magazine from '../../components/Home/Magazine/Magazine.js';

export default function Home() {
    return (
        <>
            <Carousel/>
            <BookingSearch/>
            <IntroduceMovie/>
            <GroupTheater/>
            <Magazine/>
        </>
    )
}
