import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default class VenoBoxUtil extends Component {
    trailer = this.props.trailer;
    closedVideo = this.props.closedVideo;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ModalVideo channel='youtube' 
            isOpen={this.props.trailer.opendVideo }
            videoId={this.props.trailer.VideoID} 
            onClose={() => this.closedVideo()} />
        )
    }
}

