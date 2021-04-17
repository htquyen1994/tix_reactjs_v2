import React, { useState } from 'react';
import useStyles from './style';
import Button from '@material-ui/core/Button';



export default function MovieCard(props) {

    const movie = props.data;
    const classes = useStyles();
    const [hoverPlay, setHoverPlay] = useState({
        opacity: '1',
        displayButton: 'none',
        displayTitle: 'block'
    });

    const renderPlay = () => {
        if (movie.trailer) {
            return <i className={`fas fa-play ${classes.playMovie}`} onClick={() => {
                props.playVideo(movie);
            }}></i>
        }
    }

    return (
        <div className={`${classes.wrapContent}`} 
            onMouseMove={() => {
                setHoverPlay({
                    opacity: '0.4',
                    displayButton: 'block',
                    displayTitle: 'none'
                })
            }} onMouseOut={() => {
                setHoverPlay({
                    opacity: '1',
                    displayButton: 'none',
                    displayTitle: 'block'
                })
            }}>
            <div className={`card`} style={{opacity: hoverPlay.opacity}}>
                <div className={classes.item} style={{
                    backgroundImage: `url(${movie.hinhAnh})`,
                    borderRadius: '5px',
                    backgroundPosition: 'center,0 0',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat,repeat-y'
                }}>
                    {
                        renderPlay()
                    }

                </div>
            </div>
            <div className={classes.itemTitle} style={{display: hoverPlay.displayTitle}}>
                    <div className={classes.title}>
                        {movie.tenPhim}
                    </div>
                    <div className={classes.description}>
                        {movie.danhGia} IMDb
                    </div>

            </div>
            <div style={{display: hoverPlay.displayButton}}>
                        <Button style={{ width: '100%', marginTop: '10px'}} variant="contained"
                            color='secondary' onClick={() => {
                                
                            }}>
                            MUA VÉ NGAY
                    </Button>
            </div>
        </div>

    );
}