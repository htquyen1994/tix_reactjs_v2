import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    wrapContent: {
        height: '80px',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        marginTop: '-50px',
        justifyContent: 'center',
        margin: '-40px auto',
        width: '70%',
        left: '0',
        right: '0',
        padding: '0 !important',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow:  '0 0 10px rgb(0 0 0 / 30%)',
        WebkitBoxShadow: '0 0 10px rgb(0 0 0 / 30%)',
        zIndex:'1'
    },

    itemReset: {
        padding: '5px 10px',
        width: '100%',
        borderRight: '1px solid rgba(238,238,238,.88)'
    }
}));

export default useStyle;