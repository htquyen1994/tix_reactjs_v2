import  {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    header: {
        height: '60px',
        backgroundColor: 'rgba(255,255,255,1) !important',
        boxShadow: '0 0 15px rgb(0 0 0 / 30%)'
    },

    imgLogo: {
        height: '40px',
        width: '40px',
    },

    'userName': {
      
        '&:hover': {
            cursor: 'pointer'
        }

        
    },

    avatar: {
        height: '36px',
        width: '36px',
        borderRadius: '50%'
    },

    menuCenter: {
        marginLeft: '40%',
        fontSize: '14px'
    },

    menuItem: {
        color: 'black !important',
        '&:hover': {
            color: '#fa5238 !important'
        },
        '&.active': {
            color: 'black !important'
        }
    },

    login: {
        borderRight: '1px solid #9b9b9b',
        marginRight: '10px',
        paddingRight: '10px',
        position: 'relative',
        '& a' : {
            textDecoration: 'none',
            color: 'black',
            paddingLeft: '5px',
            fontSize: '14px'
        },

        '& .btnLogout': {
            position: 'absolute',
            left: '10px',
            top: '30px',
        }
    },

    location: {
        fontSize: '14px',
        width: '150px',
        paddingBottom: '5px',
        '& .dropdown-toggle': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .dropdown-menu': {
            height: '300px',
            width: '100%',
            overflowY: 'scroll',
            marginTop: '20px',

          

            '& a': {
                transition: 'all 0.25s',
                color: 'black',

                '&:hover': {
                    backgroundColor: '#60c5ef'
                }
            }
        }
    },
}));

export default useStyles;