import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapContent: {
        height: '320px',
        padding: '5px 10px',
     
    },

    'item': {
        height: '240px',
        position: 'relative',
    },
    'playMovie': {
        position: 'absolute',
        height: '50px',
        lineHeight: '50px',
        border: '1px solid',
        top: '50%',
        color: 'white',
        borderRadius: '50%',
        width: '50px',
        textAlign: 'center',
        fontSize: '30px',
        cursor: 'pointer',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'gray',
        opacity: '0.5',
    },
    'image': {
        height: '100%'
    },

    'title': {
        lineHeight: '1em',
        height: '2em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '100%',
        fontWeight: 'bold',
        padding: '10px',
        fontSize: '18px',
    },

    'description': {
        fontSize: '14px',
        color: 'gray',
      
        padding: '0 10px',
    },
    'itemTitle': {
        position: "relative",
        height: '100px'
    },

    'buttonItem': {
        width: '100%',
        padding: '10px',
        height: '100px'
    }
}));

export default useStyles;
