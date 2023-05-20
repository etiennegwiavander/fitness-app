import { useContext, React} from 'react';
import { Box, Typography } from '@mui/material'
import BodyParts from './BodyParts'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
// to initiate the horizontal scrolling we introduce the above imports from the 'react-horizontal-scrolling-menu'
// was problematic at first till I used import "react-horizontal-scrolling-menu/dist/styles.css" from https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-basic-example-swg0y?file=/src/index.tsx:61-199
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"


const LeftArrow = ()=>{
  const { scrollPrev } = useContext(VisibilityContext)

  return(
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src={ LeftArrowIcon } alt="left-arrow" />
    </Typography>
  )
}
const RightArrow = ()=>{
  const { scrollNext } = useContext(VisibilityContext)

  return(
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src={ RightArrowIcon } alt="right-arrow" />
    </Typography>
  )
}

const HorizontalScrollBar = ({data,  bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu leftArrow={LeftArrow} rightArrow={RightArrow}>
        {data.map((item) =>(
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
            >
                <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        ))}
    </ScrollMenu>

  )
}

export default HorizontalScrollBar