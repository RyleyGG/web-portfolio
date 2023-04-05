import { Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import Carousel from '../components/Carousel';
import orion1 from '../images/orion1.png'
import orion2 from '../images/orion2.png'
import orion3 from '../images/orion3.png'
import jupiter1 from '../images/jupiter1.png'
import jupiter2 from '../images/jupiter2.png'
import { Divider } from '@mui/material';

const Astrophotography = () => {
    const orionCarousel = [
        {
            imageUrl: orion1,
            caption: '2020-11-26: 800 ISO, 180 sec exposure, F2.8',
        },
        {
            imageUrl: orion2,
            caption: '2020-12-27: 800 ISO, 75 sec exposure, F2.0',
        },
        {
            imageUrl: orion3,
            caption: '2022-01-09: 1250 ISO, 30 second exposure, F2.0',
        },
    ];

    const jupiterCarousel = [
        {
            imageUrl: jupiter1,
            caption: '2020-09-01: 100 ISO, 30 sec exposure, F2.0',
        },
        {
            imageUrl: jupiter2,
            caption: '2020-09-02: 125 ISO, 60 sec exposure, F2.0',
        },
    ];

    return (
        <>
            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 xs={12}>
                    <PageHeader subHeader=""/>
                </Grid2>
                <Grid2 xs={4}>
                    <Typography align='center'>
                        Included on this page is a collection of my published astrophotographic works. My largest passion lies with the Cosmos,
                        and I have found astrophotography to be a very rewarding method of connecting with the universe. While physics and mathematics
                        are often romantically referred to as the language of the universe, the innate physical beauty in celestial objects can sometimes be
                        lost when strictly working on equations.
                        <br /> <br />
                        My current rig is a Canon D5300 with a Samyang 135mm f/2.0 ED UMC Telephoto lens,
                        mounted on top of a Sky-Watcher Star Adventurer Pro Equatorial mount.
                        <br /> <br />
                        Each of the following Carousels is dedicated to a specific celestial object, with the different items showing my attempts at photograping
                        the same object over time. My approach to post-processing is minimal (meaning I attempt to keep the colors accurate, or at the very least
                        accurate to what my camera captured).
                        <br /> <br /><br /><br /><br /><br />
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 xs={4}>
                    <h1>Orions Nebula</h1>
                    <Carousel items={orionCarousel} />
                </Grid2>
            </Grid2>
            <br /><br /><br />
            <Divider />
            <br /><br /><br />
            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 xs={4}>
                    <h1>Jupiter</h1>
                    <Carousel items={jupiterCarousel} />
                </Grid2>
            </Grid2>
        </>
    );
}

export default Astrophotography;
