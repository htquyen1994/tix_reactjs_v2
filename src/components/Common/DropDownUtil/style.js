import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    dropDownCustom: {
        fontSize: '14px',
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
            maxHeight: '300px',
           
            overflowY: 'scroll',
            marginTop: '20px',
            '& a': {
                transition: 'all 0.25s',
                color: 'black',

                '&:hover': {
                    backgroundColor: '#60c5ef',
                    cursor: 'pointer'
                }
            }
        }
    },
}));

export default useStyle;
