import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '../components/Timeline';
import { Divider } from '@mui/material';

const Projects = () => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 xs={12}>
                    <PageHeader subHeader=""/>
                </Grid2>
                <Grid2 xs={4}>
                    <Typography align='center'>
                        Included on this page is a selection of the side projects that I'm most proud of. For a full list of my projects,
                        visit my Github profile <a href='https://github.com/RyleyGG' target='_blank'>here</a>.
                        <br /> <br /><br />
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 xs={12}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        AITetris
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Artifical Intelligence, playing Tetris, entirely within the browser
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        A ground-up recreation of the classic game of 'Tetris', with the added layer of an AI learning the game via Deep Q-Learning,
                        specifically utilizing the ConvnetJS library within Javascript. The project is written completely in Javascript,
                        save for the baseline needed HTML and CSS to create and structure the different elements;
                        all animations are handled within the Javascript.

                        The project can be viewed <a href='https://github.com/RyleyGG/Deep-Q-Learning-Tetris' target='_blank'>here</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        The Citadel PC Configurator
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        An algorithmic approach to choosing PC specifications based on user needs and preferences.
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    The Citadel PC Configurator acts as an aid for the computer-building process. Based on user input that details their preferences in various relevant
                    aspects, the program will consult a group of data to create a set of computer configurations based on a core principle of the ratio
                    between cost to performance. The users input will include items such as:<br /><br />

                    1. Overall budget<br />
                    2. Expected usage of the computer, in terms of the types of games the user typically plays and programs the user expects to use.<br />
                    3. The types of peripherals the user intends on using. This feeds back into both the budget and the expected usage,<br />
                    as different peripherals cost different amounts both in terms of monetary requirement and needed power from the computer.
                    For example, a monitor running at 60 hertz and a standard definition resolution will require less power from the graphics card and
                    power supply than a 144 hertz monitor displaying at an ultra-high definition resolution.<br /><br />

                    The program uses both API's and a web-scraping library to dynamically collect data relating to available components and their attributes,
                    as well as the requirements to undertaking the tasks relevant to the users input.<br /><br />

                    The users input is quantified such that it is possible to both prioritize certain needs of the user for a better user experience
                    and give the program a consistent way of determining how optimal a configuration may or may not be. There are many institutions already
                    in existence that assign a score to a computer component based on measures such as raw performance, compatibility, and other factors.
                    This type of score will be one of the key parts of the quantification formula. The user will also be able to explicitly state whats
                    most important to them, which will be used to temper the other factors appropriately.<br /><br />

                    Based on this quantification, the output will be divided into various configurations: examples could include an under-budget configuration,
                    an over-budget configuration, and an optimal configuration. The program may find that the user is able to spend 3% more than their
                    intended budget but end up with a configuration that is 10% better suited to their expected usage relative to the optimal configuration;
                    similarly, the program might find that the user is able to spend 10% less than the optimal configuration but only lose 3% in terms
                    of overall performance. The configuration that is certain to be available is the main configuration, which is deemed to be most optimal
                    in terms of the balance between price and performance. The configurations are separately listed part-by-part,
                    with direct links to purchase the parts and view more detailed specifications.

                    The project can be viewed <a href='https://github.com/RyleyGG/Automated-Computer-Configurator' target='_blank'>here</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Matrix Encryption
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Using mathematical properties of Matrices to encrypt (and decrypt) data
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        The program is a proof-of-concept of how matrices can be used to encrypt data, particularly string-like messages.
                        This method of encryption is not particularly sophisticated relative to modern methods that are actually used,
                        but was a pet project of mine originally in high school (around 2016) to become more familiar with matrices.

                        The project can be viewed <a href='https://github.com/RyleyGG/Matrix-Encryption' target='_blank'>here</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        This Website!
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        This portfolio is built from the ground up using React - it's my way of staying fresh
                        on the library even when my work takes me in other directions.

                        The source code is publicly available <a href='https://github.com/RyleyGG/web-portfolio' target='_blank'>here</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid2>
        </>
    );
}

export default Projects;
