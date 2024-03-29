import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="rightArrow">
      <img src={LeftArrowIcon} alt="Left Arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="leftArrow">
      <img src={RightArrowIcon} alt="Right Arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map((item) => (
            <Box
                key={item.id || item} 
                itemID={item.id || item} 
                title={item.id || item}
                m= '0 25px'
            >
                { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
                : <ExerciseCard exercise={item} />
                }
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar