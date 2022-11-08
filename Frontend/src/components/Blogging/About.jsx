import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import MYportpolio from "../Image/Myportfolio.png"

const About = () => {
  return (
    <div>
        <Box pt="62">
       <a href="https://abhishek07788.github.io/"><Button bg={"red"}>About ME</Button></a> 
       <Image w="100%" mt="2" src={MYportpolio} alt="MYportpolio"/>
       </Box>
    </div>
  )
}

export default About