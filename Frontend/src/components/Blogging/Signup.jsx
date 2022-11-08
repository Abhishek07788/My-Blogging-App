import React, { useEffect } from "react";
import style from "../CSS/main.module.css";
import {
  Button,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import SignupImg from "../Image/signup.jpg";
import { useState } from "react";
import { signUP } from "../Api/api";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const initialState = {
  name:"",
  email:"",
  password:""
}

const Signup = () => {

  const [form ,setForm] = useState(initialState)
  const [api ,setApi] = useState({})
  const [hide ,setHide] = useState(true)
  const navigate = useNavigate()
  const Toast = useToast()
  
  const handleChange = (e) => {
    let  { name, value } = e.target;
    setForm((prev) => ({...prev, [name]:value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    signUP(form).then((res)=>{
      // console.log(res.data)
      setApi(res.data)
      if(res.data.status === true){
        Toast({
          title: `${res.data.message} 😊`,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      }else if(res.data.status === false){
        Toast({
        title: `${res.data.message} ☹️`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      }
    })
  }

  useEffect(()=>{
    if(api.status === true){
      navigate("/login")
    }else if(api.status === false){
      navigate("/signup")
  }
  },[api])



  const {name, email, password} = form;


  return (
    <div className={style.maindiv}>
      <Heading textDecoration={"underline"}>Sign up in Form</Heading>
      <br />
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        bg="#ffffff"
        mt={"25px"}
        w="50%"
        h="500px"
        m={"auto"}
        borderRadius={20}
      >
        <Grid p="5">
          <Heading mt="10" mb={["0","0","4","4"]} fontSize={21}>Members Sign up</Heading>
          <form className={style.signupform} onSubmit={handleSubmit}>
            <Input required value={name} name="name" onChange={handleChange} placeholder="Name" type="text"/>
            <Input required value={email} name="email" onChange={handleChange} placeholder="Email"  type="email"/>
            <InputGroup>
               <Input 
               required 
               value={password} 
               name="password" 
               onChange={handleChange} 
               placeholder="Password" 
               type={hide? "password" : "text"}
               />
             <InputRightElement onClick={()=> setHide(!hide)} fontSize="20" children={hide ? <ViewIcon color='green.500' /> : <ViewOffIcon color='red.500' />} />
            </InputGroup>

            <Button type="submit" bg="#ffc801">SIGN UP</Button>
          </form>
          <br />
          <Text>--OR--</Text>
          <a href="https://github.com/login/oauth/authorize?client_id=98f722c70d535b65bbf4">
            <Text className="a" color={"blue"}>
              <b>Github</b>
            </Text>
          </a>
          <Text>
            Already have account?{" "}
            <Link className="a" to="/login">
              Log IN
            </Link>
          </Text>
        </Grid>
        <Image borderRightRadius={20} h="100%" src={SignupImg} alt="Signup" />
      </SimpleGrid>
    </div>
  );
};

export default Signup;
