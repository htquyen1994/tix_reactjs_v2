import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    wrapContent: {
        height: '650px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        marginTop: '100px',
        justifyContent: 'center',
        margin: '0 auto',
        width: '70%',
        left: '0',
        right: '0',
        padding: '0 !important',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow:  '0 0 10px rgb(0 0 0 / 30%)',
        WebkitBoxShadow: '0 0 10px rgb(0 0 0 / 30%)',
        zIndex:'3'
    },

    'groupTheaterWrapper': {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 !important',
        padding: '0 !important',
        borderRight: '1px solid rgba(238,238,238,.88)'
    },

    'groupTheater': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        margin: '0 !important',
        padding: '10px !important',
        boxSizing: 'border-box',
    },

    'itemGroup': {
        listStyle: 'none',
        paddingTop: '10px',
        borderBottom: '1px solid rgba(238,238,238,.88)',
        paddingBottom:  '10px',
    },

    'logoGroup': {
        width: '50px',
        height: '50px',
        '&:hover': {
            cursor: 'pointer',
        }
    },

    'theaterContent': {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '0 !important',
        borderRight: '1px solid rgba(238,238,238,.88)',
        flexDirection: 'column',
    },

    'itemTheater': {
        padding: '10px 5px !important',
        borderBottom: '1px solid rgba(238,238,238,.88)',
        fontSize: '15px',
        '& span': {
            color: '#8bc541',
            '&:hover': {
                cursor: 'pointer',
            }
        },
        '& p' : {
            marginBottom: '0 !important'
        },

        '& a': {
            fontSize: '12px',
            color: 'red !important',
            '&:hover': {
                cursor: 'pointer',
            }
        }
    },

    'movieWrapper': {
        overflowY: 'scroll',
        height: '100%',
    },

    'itemMovie': {
        padding: '10px 0',
        borderBottom: '1px solid rgba(238,238,238,.88)',
    },

    'infoMovie': {
        display: 'flex',
        '& img': {
            width: '50px',
            height: '50px'
        },
    },

    'descriptionMovie': {
        marginLeft: '5px',
        
    },

    'styleButton': {
        width: '100px', 
        fontSize: '19px', 
        margin: '5px 5px 5px 0',
        fontWeight: 'bold',
        color: '#108f3e',
        '&:hover': {
            color: '#fb4226'
        }
    }

}));

export default useStyles;