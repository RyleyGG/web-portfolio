import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Grid2 from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '../components/Timeline';

const Professional = () => {
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
                        The following is a breakdown of the roles and responsibilites I've carried professionally.
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
                        Del Mar Fans & Lighting
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Timeline events={[
                            { date: '2018', label: 'Started emplyment at DMF' },
                            { date: '2019', label: 'Promoted from Product Data Specialist to Product Data Specialist II' },
                            { date: '2021', label: 'Went part-time and was promoted to a Junior Systems Developer' },
                            { date: '2022', label: 'Left DMF to work at Purple Jay' },
                            ]}
                        />
                        <h4>Junior Systems Developer Description</h4>
                        In my role as Junior Systems Developer, I had a multitude of responsibilities across various projects of varying scales,
                        technical constraints, and business requirements. I primarily worked on small-scale, internal projects aimed at improving process
                        efficiency through means of clean and maintainable documentation, automation, and process overhaul/redesign.
                        My work resulted in tangible benefits across all departments at Del Mar in terms of website load speeds,
                        conversion rates, and developer productivity. I also worked on larger-scale, department-wide initiatives including building new
                        order and inventory management systems from the ground-up. Team progress was managed via a Scrum Agile methodology.<br /><br />

                        My technology stack was dependent on the needs of the project. For small-scale internal scripts, I primarily used Python 3,
                        with some batch scripting for certain processes that interacted with AWS. For large-scale initiatives, I used PHP (Laravel 8)
                        with vanilla Javascript for full-stack engineering. On these large-scale projects, I was responsible for end-to-end testing and integration.
                        <br /><br />
                        <h4>Product Data Specialist Description</h4>
                        As a Product Data Specialist, My data entry responsibilities included gathering data from manufacturers and company partners,
                        parsing the data and formatting, and then interacting with MicrosoftSQL and MySQL systems to eventually store the data on the
                        Magento eCommerce platform. As my time with the company increased, so too did my responsibilities. After being with the company for a year,
                        I was promoted to a level two product data specialist in June 2019. Since October 2018, I also had a heavy focus on internal process automation.
                        The tools I create are used to automate other internal processes and have had a tangible effect not just on work efficiency, but also on
                        website conversion rate and website speed.<br /><br />

                        <h4>Overall Highlights</h4>
                        <ul>
                            <li>15000+ lines of code across more than 5 standalone services, all of which were used by a team of people on a near-daily basis.</li>
                            <li>In-depth developer and user documentation and procedure processes (including adherence to scrum methodology)</li>
                            <li>Dynamic Image Optimization & Compression using a digital media platform API.</li>
                            <li>Retroactive Image Optimization & Compression on 100000+ different images autonomously with higher quality than was originally procuded.</li>
                            <li>Update payloading and versioning for client programs</li>
                            <li>Automated data gathering & parsing into a highly specific and detailed format using various libraries which interact with Excel spreadsheets. This included JSON, XML, and EDI X12.</li>
                            <li>Data gathering & parsing program that learned from input data formats to make future executions more efficient.</li>
                            <li>Dynamic Overlays on images - both images and text - using the PIL imaging library and a digital media platform API. This includes a collision detection algorithm such that the overlay never interferes with the object in the base image.</li>
                            <li>Automated image-grabbing by using a web-scraping library and separate constraints and parsing functions on a per-source basis.</li>
                        </ul>
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
                        PrussianAI
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Timeline events={[
                            { date: '2021', label: 'Started work at Prussian AI' },
                            { date: '2022', label: 'Left Prussian AI to work at Purple Jay' },
                            ]}
                        />
                        <h4>Lead SaaS Software Engineer & Infrastructure Architect Description</h4>
                        With this role I was able to work at a new and rapidly expanding start-up focused on the financial technology sector.
                        The team and I were able to go from a purely mockup, pre-production phase in October 2021 to an early but tested and
                        essentially fully functional state at the time of my leave in June 2022. We were able to move at such a rapid pace thanks
                        both to our focus on regular communication - through an Agile-like methodology - and our use of AWS in our technology stack,
                        allowing us to rapidly scale and focus on the feature sets themselves rather than the boiler plate necessary to get there.

                        As a full-stack engineer, my responsibilities were great and varied. At times, I was working alongside other team members
                        to complete gaps in the workflow for certain features - sometimes this meant creating an API for a front-end mockup that already exists,
                        while other times it was creating a front-end for a back-end that's already built-out and functioning.
                        At other times, I was responsible for the entire workflow end-to-end, allowing me to seamlessly plan the entire cycle before development.
                        Due to my ability to work with the system end-to-end, I ended up becoming the primary developer on all matters infrastructure;
                        this included foundational features such as user authentication and management, administrative oversight, payment processing and
                        other critical third-party API integrations.

                        <h4>Overall Highlights</h4>
                        <ul>
                            <li>Lead design & implementation of tiered user authentication logic</li>
                            <li>Lead payment/subscription management, including integration of third-party payment processor APIs</li>
                            <li>Lead implementation of full-stack administrative management suite/control modules for granular data control and user access</li>
                        </ul>
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
                        Purple Jay
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Timeline events={[
                            { date: '2022', label: 'Started work at Purple Jay' },
                            ]}
                        />

                        <h4>Software Developer Description</h4>
                        As Purple Jay is a consulting company, I've been exposed to a variety of business conditions and requirements in a short period of time.
                        I have been cross-matrix - working with multiple clients simultaneously - since day 1, and each client has different business requirements and
                        technical constraints. Purple Jay's client portfolio spans both the public and private sectors, and includes everything from small "boutique"
                        companies to large global-scale organizations. Since the requirements can vary so wildly, a lot of work has gone on internally on streamlining
                        our processes and improving development throughput by eliminating bottlenecks and increasing collaboration efficiency.

                        Our technical stack is dependent on client needs but our go-to's include C# and Python for local or backend work and Angular or Blazor for front-end
                        work on web applications.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid2>
        </>
    );
}

export default Professional;
