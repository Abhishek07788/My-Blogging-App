import React, { useContext, useState } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import style from '../CSS/news.module.css'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { AppContext } from '../Private/Appcontextprovider'

const LikeInterview = ({content,author, _id, handleDelete, title, date}) => {
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
      <Text 
      display={role=== "admin" ? "block" : "none"}
      onClick={()=> handleDelete({_id})} 
      fontSize={25}
      textAlign="left"
      ml="3" 
      color={"grey"} 
      cursor="pointer">
        <b>X</b>
      </Text>
      </Box>

      <Box textAlign={"left"} ml="5" mr="5"> 
      <Heading color={"#dc143c"} pt="2" as="h2" fontSize={13}>{author || ""} : {" "}<span style={{color:"black", fontSize:"10px"}}>{date}</span></Heading>
      <Heading mt="4" as="h1" fontSize={22}>Q. {title || ""}</Heading>
      <Text fontSize={19} mb="5" className={style.description} >{content  || ""}</Text>
          
    <Box fontSize={30}>
    <Button color={like === 1? "blue" : "black"} fontSize={25} onClick={handleLike}><AiFillLike /></Button>
    <Button mr="10">{like}</Button>
    <Button color={dislike === 1? "blue" : "black"}  fontSize={25} onClick={handleDislike}><AiFillDislike /></Button>
    <Button>{dislike}</Button>
  </Box>
  </Box>
  </div>
  )
}

export default LikeInterview