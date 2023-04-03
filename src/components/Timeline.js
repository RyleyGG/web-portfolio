import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const TimelineItem = ({ event }) => {
  const ItemWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  });

  const Circle = styled(Box)({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    marginBottom: '10px',
    position: 'relative',
    zIndex: 1,
  });

  return (
    <ItemWrapper>
      <Circle />
      {event.date && <Typography variant="subtitle2">{event.date}</Typography>}
      {event.label && <Typography variant="subtitle1">{event.label}</Typography>}
    </ItemWrapper>
  );
};

const Timeline = (props) => {
  const TimelineWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  });

  const Line = styled(Box)({
    width: 'calc(100% - 40px)',
    height: '2px',
    backgroundColor: 'blue',
    position: 'absolute',
    top: '30px',
    left: '20px',
  });

  return (
    <TimelineWrapper>
      <Line />
      {props.events.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;