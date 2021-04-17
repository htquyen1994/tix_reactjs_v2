import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles((theme) => ({
    wrapContent: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        marginTop: '50px',
        width: '70%',
        left: '0',
        right: '0',
        padding: '0 !important',
       
    },

    itemReset: {
        padding: '5px 10px',
        width: '100%',
        borderRight: '1px solid rgba(238,238,238,.88)'
    },

    '& .nav-tabs': {
        borderBottom: 'none'
    }
}));

export default useStyle;