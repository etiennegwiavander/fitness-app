import React from 'react'
import { Box } from '@mui/material'
import BodyParts from './BodyParts'

const HorizontalScrollBar = ({data }) => {
  return (
    <Box>
        {data.map((item) =>(
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
            >
                <BodyParts item={item}/>
            </Box>
        ))}
    </Box>
  )
}

export default HorizontalScrollBar