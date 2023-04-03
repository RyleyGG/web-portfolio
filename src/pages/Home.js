import PageHeader from '../components/PageHeader';
import Grid2 from '@mui/material/Unstable_Grid2';

const Home = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <PageHeader subHeader="Thanks for visiting my portfolio! Check out some of my recent projects, or navigate with the dropdown menus."/>
            </Grid2>
        </Grid2>
    );
}

export default Home;
