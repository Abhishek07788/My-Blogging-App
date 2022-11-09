import React, { useState } from "react";
import style from "../CSS/main.module.css";
import {
  Button,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../Image/login.jpg";
import { logIN } from "../Api/api";
import { useContext } from "react";
import { AppContext } from "../Private/Appcontextprovider";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import jwt_decode from "jwt-decode";


const InitialState = {
  email:"",
  password:""
}


const Login = () => {
  const {handleLogin} = useContext(AppContext)
  const [hide ,setHide] = useState(true)
  const [form, setForm] = useState(InitialState)
  const Toast = useToast()

const handleChange = (e) =>{
  let {name, value} = e.target;
  setForm((prev) => ({...prev, [name]:value}))
}  

const handleSubmit = (e) =>{
  e.preventDefault()
  logIN(form).then((res)=>{
    // console.log(res.data)
    localStorage.setItem("token",(res.data.token))
    handleLogin(res.data.token)
    if(res.data.token){
    Toast({
      title: `${res.data.message} 😊`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    })
  }else{
    Toast({
    title: `Something is wrong ☹️`,
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top",
    })
  }
  }).catch((e)=>{
    console.log(e)
    Toast({
      title: e.message+"☹️",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      })
  })
}


const  {email, password} = form

  return (
    <div className={style.maindiv}>
      <Heading textDecoration={"underline"}>Log in Form</Heading>
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
          <Heading mt="10" mb={["0", "0", "4", "4"]} fontSize={21}>
            Members Log in
          </Heading>
          <form className={style.signupform} onSubmit={handleSubmit}>
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
             <InputRightElement 
             onClick={()=> setHide(!hide)} 
             fontSize="20" 
             children={hide ? <ViewIcon color='green.500' /> : <ViewOffIcon color='red.500' />} />
            </InputGroup>

            <Button type="submit" bg="#ffc801">LOG IN</Button>
          </form>
          <br />
          <Text>--OR--</Text>
          <a href="https://github.com/login/oauth/authorize?client_id=98f722c70d535b65bbf4">
            <Text className="a" color={"blue"}>
              <b>Github</b>
            </Text>
          </a>
          <Text>
            Don't have account?{" "}
            <Link className="a" to="/signup">
              SignUP
            </Link>
          </Text>
        </Grid>
        <Image borderRightRadius={20} h="100%" src={LoginImg} alt="Login" />
      </SimpleGrid>
    </div>
  );
};

export default Login;
