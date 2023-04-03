import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '../components/Timeline';

const About = () => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <PageHeader subHeader=""/>
            </Grid2>
            <Grid2 xs={12}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        About Me
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        General Information
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        I have a strong background in software development, physics, and mathematics. My current, primary interests
                        are these along with astrophotography, game development, VR/AR, and AI. Outside of the academic and professional
                        spheres I am into powerlifting and playing guitar & piano.
                        <br /><br />
                        During high school, I was enrolled in the Academy of Information Technology and Robotics (AITR) 
                        at Spruce Creek High School, where I took game development courses for four years and computer programming
                        courses for two years. I graduated in 2018.
                        <br /><br />
                        Also during high school, I dual enrolled at Daytona State College and finished my Associates of Arts degree in 2019.
                        From Daytona State, I transferred to Embry-Riddle Aeronautical University for a year, enrolling in the cybersecurity-focused
                        Computer Science major with minors in Physics and Applied Mathematics. I then took a gap year to focus on my career and am currently
                        enrolled at the University of Florida in the Computer Science undergraduate path.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Qualifications & Achievements</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Academic
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h2>High School</h2>
                        <ul>
                            <li>Three years of Cyber Patriot - a national cyber security competition sponsored by the Air Force Association among other institutions.</li>
                            <li>Two years competing on the varsity team for Cyber Hawks - the Spruce Creek High division for Cyber Patriot</li>
                            <li>Leading member of the Cyber Patriot Curriculum Committee during my time in the program.</li>
                            <li>Co-leader of the AITR Student Curriculum Committee during my time in the program.</li>
                            <li>Managed the Junior section of the AITR Haunted House fundraiser in October of 2016 - the 2nd most successful year at the time.</li>
                            <li>Managed the entirety of the AITR Haunted House fundraiser in October of 2017 - doubling the sales from the year prior, making it by far the most successful year.</li>
                            <li>Logistics manager of the AITR Ford Drive One fundraiser in my Junior year, raising thousands of dollars for AITR</li>
                            <li>Dual enrolled at Daytona State College from January 2017 - May 2018. I further went on to graduate in Spring 2019 with an Associate's degree with honors.</li>
                            <li>Member of the NSHSS, or the National Society of High School Scholars</li>
                            <li>Four consecutive years of game and simulation development, and two consecutive years of computer programming during my time in AITR.</li>
                            <li>Founder and manager of the AITR marketing committee during my Junior and Senior years of high school.</li>
                            <li>Founder and manager of the AITR Christmas Drive event in 2016 & 2017.</li>
                            <li>Senior Volusia CTE ambassador representing AITR during my Senior year in AITR.</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Qualifications & Achievements
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Professional
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h2>Important Events</h2>
                        <Timeline events={[
                            { date: '2018', label: 'Started work at Del Mar Fans & Lighting' },
                            { date: '2019', label: 'Graduated from Daytona State College' },
                            { date: '2020', label: 'Transferred from DSC to ERAU' },
                            { date: '2021', label: 'Started work at Prussian AI' },
                            { date: '2022', label: 'Left DMF and Prussian AI to work at Purple Jay' },
                            ]}
                        />
                        <h2>Soft Skills</h2>
                        <Typography>
                            I have put great effort into continuing to develop my soft skills during my academic and professional endeavors.
                            Due to my somewhat abnormal professional development path, I have been exposed to many different working environments
                            and constraints that have allowed me ample time to grow my soft capabilities.
                            I am highly proficient in the following:
                        </Typography>
                        <ul>
                            <li>Technical Writing (software documentation, requirements, test cases, etc.)</li>
                            <li>Scrum Agile methodology</li>
                            <li>Kanban methodology</li>
                            <li>Large-scale and long-term project management</li>
                            <li>Leadership experience</li>
                        </ul>
                        <h2>Hard Skill Summary</h2>
                        <Typography>
                            Below is a summary of my important skills. The timeframe given is not the time elapsed
                            since I was first exposed to the language or framework, but rather the amount of time actively spent working on
                            it.
                        </Typography>
                        <ul>
                            <li>Angular proficiency: 0.35 years</li>
                            <li>React Native proficiency: 1 year</li>
                            <li>AWS proficiency: 1.5 years</li>
                            <li>NoSQL proficiency: 1.5 years</li>
                            <li>PHP proficiency: 1.5 years</li>
                            <li>Node.js proficiency: 2 years</li>
                            <li>React proficiency: 2.5 years</li>
                            <li>Java proficiency: 3 years</li>
                            <li>Javascript advanced proficiency: 3.5 years</li>
                            <li>C proficiency: 3.5 years</li>
                            <li>C++ proficiency: 4 years</li>
                            <li>C# proficiency: 4.5 years</li>
                            <li>MicrosoftSQL/MySQL advanced proficiency: 8.5 years</li>
                            <li>Python proficiency: 9 years</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid2>
        </Grid2>
    );
}

export default About;
