import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteInterview, getInterview } from '../Api/api'
import style from '../CSS/interview.module.css'
import { Box, Heading, Image, Input, Text, useToast } from '@chakra-ui/react'
import LikeInterview from './LikeInterview'
import hrIinterviewPng from '../Image/hrIinterview.png'




const Interview = () => {
  const [interview, setInterview] = useState([])
  const Toast = useToast()

  useEffect(()=>{
    showInterview()
  },[])


  const showInterview = () =>{
    getInterview().then((res)=>{
      console.log(res.data)
      setInterview(res.data)
    })
  }

  const handleDelete = ({_id}) =>{
    deleteInterview({_id}).then((res)=>{
      Toast({
        title: `${res.data.message} 😊`,
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      })
    showInterview()
    })
  }
   
  return (
    <div className={style.InterviewDIV}>
    <Box className={style.InterviewTop} display={"flex"} p="5" borderRadius={20} textAlign="left" gap={10} w="90%" m="auto" alignItems={"center"}>
        <Image w="400px" h="200px" src={hrIinterviewPng} alt="interview HR"/>
        <Box>
            <Heading mt="-4" fontSize={"25px"} color="#29a744">Points to remember before you attend this interview question:</Heading>
            <Text>Assume, now you are sitting in front of the HR manager.</Text>
            <Text>Take the initiative to attend this question and tell your real answers.</Text>
            <Text>Post your answer now.</Text>
        </Box>
    </Box>

      {/* <Input w="40%" mt="2" bg={"#333333"} color="white" placeholder='Search Question...'/>     */}
      {interview.map((el) =>(
        <div className={style.InterviewDiv1} key={el._id} >
          <LikeInterview {...el} handleDelete={handleDelete}/>
        </div>
      ))}
    </div>
  )
}

export default Interview