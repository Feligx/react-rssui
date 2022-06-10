import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary: {
            main: "#ff9800",
        },
        secondary: {
            main: grey[500],
        }
    }
});

const SuggestedPage = (props) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const pfp=props.pfp;
    const name=props.name;
    const company_type=props.company_type;

    return (
        <div className='row acc_row'>
            <div className='col-md-3'>
                <Avatar alt="Remy Sharp" src={ pfp } />
            </div>
            <div className='col-md-6 account-name__container'>
                <p className='account-name'>{ name }</p>
                <span>{ company_type }</span>
            </div>
            <div className='col-md-3' style= {{ textAlign: 'end' }}>
                <ThemeProvider theme={theme}>
                    <IconButton aria-label="favorite" size="small" color={isLiked?"primary":"secondary"} onClick={handleLike}>
                        {isLiked?<StarRateRoundedIcon fontSize='small'/>:<StarOutlineRoundedIcon fontSize='small'/>}
                    </IconButton>
                </ThemeProvider>
                
            </div>
        </div>
    );
}

export default SuggestedPage;