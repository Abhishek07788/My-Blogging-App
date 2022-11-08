import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import styles from "../CSS/Nav.module.css";
import { BiPlay } from "react-icons/bi"
import PersonImg from "../Image/personImg.jpg"

import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { AppContext } from '../Private/Appcontextprovider';

const Navbar = () => {

  const {token, name, handleLogOut, role} = useContext(AppContext)
  const [logout, setLogout] = useState(false);

  const link = [
    {
      path:"/news",
      title:"News"
    },
    {
      path:"/story",
      title:"Our Story"
    },
    {
      path:"/blog",
      title:"Blog"
    },
    {
      path:"/interview",
      title:"Interview"
    },
    {
      path:"/about",
      title:"About"
    }
  ]


  return (
    <div className={styles.Navdiv}>
      <Grid bg={"#ffc017"} w="100%" h="55px" display={"flex"} justifyContent="space-between" alignItems={"center"}>
       <Link to="/"><Heading fontSize={"22px"} ml="5">Abhishek <span style={{color:"#4b4b4b"}}>Blogs</span></Heading></Link>
        <Box fontWeight={550} display={"flex"} gap="5" mr="5" alignItems={"center"}>
        
        <NavLink to="/edit" className={({isActive}) => isActive? styles.active : styles.notActive}>
         <Text display={role === "admin" ? "block": "none"} border={"1px"} pr="3" pl="3" borderRadius={20}>Edit</Text></NavLink>

        {link.map((el) =>(
          <NavLink
          key={el.path}
          className={({ isActive }) =>isActive ? styles.active : styles.default}
          to={el.path}>
          <Text >{el.title}</Text>
        </NavLink>
        ))}
        <NavLink to="/signup" className={({isActive}) => isActive? styles.active : styles.notActive}>
          <Text display={token ? "none": "block"} bg={"black"} color="#ffffff" p="1" pr="2" pl="2" borderRadius={"15px"}>Get Started</Text>
          </NavLink>
         
         <NavLink to="/login" className={({isActive}) => isActive? styles.active : styles.notActive}>
         <Text display={token ? "none": "block"} border={"1px"} pr="3" pl="3" borderRadius={20}>SignIN</Text></NavLink>

         <Box
            alignItems="center"
            borderRadius={"20px"}
            border={"1px solid black"}
            gap="3"
            p={"5px"}
            ml={"-10"}
            display={token ? "flex" : "none" }
            onClick={() => setLogout(!logout)}
            _hover={{ bg: "#7b869164" }}
          >
            <Box fontSize={"20px"} bg={"#7b8691"} color={"#ffffff"} borderRadius="50px" p="0" mt="1" >
              <Image w="30px" mb="3px" borderRadius={"50px"} src={PersonImg} alt="o" />
            </Box>

            <Text fontWeight={600} fontSize={"16px"} display="flex" gap={"3"}>Hi: {name}
              <BiPlay style={{ rotate: logout ? "0deg" : "90deg", marginTop: "6px" }} />
            </Text>

            {/* ---------Log Out--------- */}
            <Text bg="#ffffff" p="1" pr="2" pl="2" display={logout ? "block" : "none"} borderRadius={20} onClick={()=> handleLogOut()} >
              LogOut
            </Text>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}

export default Navbar