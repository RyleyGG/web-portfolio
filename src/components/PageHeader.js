import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid2 from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import '../stylesheets/PageHeader.css';
  
const PageHeader = (props) => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <Grid2 className="Header">
            <header>
                <p>
                    Ryley's Portfolio
                </p>

                <Divider />

                <p className='SubHeader'>
                    {props.subHeader}
                </p>
            </header>
            <AppBar position="static">
            <Toolbar sx={{ 
                backgroundColor: '#fffcfa',
                color: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <Button
                    color="inherit"
                    onClick={() => handleClick('/')}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    onClick={() => handleClick('/about')}
                >
                    About
                </Button>
                <Button
                    color="inherit"
                    onClick={() => handleClick('/experience')}
                >
                    Experience
                </Button>
            </Toolbar>
            </AppBar>
        </Grid2>
    );
}
export default PageHeader;