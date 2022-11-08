import React, { useContext, useState } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import style from '../CSS/news.module.css'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { AppContext } from '../Private/Appcontextprovider'

const Like = ({content,description,image,url,website,author, _id, handleDelete}) => {
  const {role} = useContext(AppContext)
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  
  const handleLike = () => {
    if(like === 0 || dislike === 1){
      setLike(1)
      setDislike(0)
    }else{
      setLike(0)
    }
  }
  
  const handleDislike = () => {
    if(dislike === 0 || like === 1 ){
      setLike(0)
      setDislike(1)
    }else{
      setDislike(0)
    }
  }
  return (
    <div>
      <Box>
      <Image h="400px" className={style.NewsImg}  src={image  || ""} alt="image" />
      
      <Text 
      display={role=== "admin" ? "block" : "none"}
      onClick={()=> handleDelete({_id})} 
      fontSize={25}
      position="absolute" 
      mt="-25rem" 
      ml="3" 
      color={"grey"} 
      cursor="pointer">
        <b>X</b>
      </Text>
      </Box>
          <Heading as="h2">{website  || ""}</Heading>
          <Heading as="h2" fontSize={20}>{author || ""}</Heading>
          <Heading pr="10" pl="10" as="h4" fontSize={18} className={style.description}>{description  || ""}</Heading>
          <Text pr="10" pl="10" className={style.description} >{content  || ""}</Text>
          <Text mb="4" color="blue" fontWeight={600} textDecoration="underline"><a href={url  || ""}>See More</a></Text>
          
    <Box fontSize={30}>
    <Button color={like === 1? "blue" : "black"} fontSize={25} onClick={handleLike}><AiFillLike /></Button>
    <Button mr="10">{like}</Button>
    <Button color={dislike === 1? "blue" : "black"}  fontSize={25} onClick={handleDislike}><AiFillDislike /></Button>
    <Button>{dislike}</Button>
  </Box></div>
  )
}

export default Like