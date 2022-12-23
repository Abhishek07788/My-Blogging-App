import React from 'react'
import { useState } from 'react'
import { addInterview, addNews} from '../Api/api'
import style from '../CSS/news.module.css'
import { Box, Button, Heading, Input, useToast, Textarea } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../Private/Appcontextprovider'

const initialState = {
  category:"",
  image:"",
  author:"",
  website:"",
  title:"",
  content:"",
  description:"",
  url:""
}

const Edit = () => {
    const {role} = useContext(AppContext)
    const [form, setForm] = useState(initialState)
    const Toast = useToast()
  
  
  const handleChange = (e) =>{
    let {name, value} = e.target;
    setForm((prev)=> ({...prev, [name]:value}))
  }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(form.category === "news"){
        addNews(form).then((res)=>{
          Toast({
            title: `${res.data.message} 😊`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        })
      }else if(form.category === "interview"){
        addInterview(form).then((res)=>{
          Toast({
            title: `${res.data.message} 😊`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        })
      }
      else if(form.category === ""){
        Toast({
          title: `Please Select Category!`,
          status: "success",
          duration: 2200,
          isClosable: true,
          position: "top",
        })
      }
      }
    
      const {category, image, author, website, title, content, description, url} = form

  return (
    <div> 
    <Box pt="100" display={role=== "admin" ? "block" : "none"} w="80%" m="auto">
    <Box 
    m="auto" bg="#c1c5d0" borderRadius={10} p="5">
      <Heading mt={-3} mb="2">ADD ITEM</Heading>
      <form className={style.addTaskForm} onSubmit={handleSubmit}>
      <select required name="category"  value={ category } onChange={handleChange}>
        <option >Category</option>
        <option value="news" >News</option>
        <option value="ourStory" >OurStory</option>
        <option value="blog" >Blog</option>
        <option value="interview" >Interview</option>
        <option value="aboutme" >About me</option>
      </select>
      <Input borderBottom={"1px"} placeholder='newsImgUrl..' type="url" value={image} name="image" onChange={handleChange}/>
      <Input required placeholder='newsAuthor - InterviewAuthor' type="text" value={author} name="author" onChange={handleChange}/>
      <Input  placeholder='newsWebsiteName' type="text" value={website} name="website" onChange={handleChange}/>
      <Input required placeholder='newsTitle - InterviewQ..' type="text" value={title} name="title" onChange={handleChange}/>
      <Textarea bg="#ffff" borderBottom={"1px"} rows="2" required placeholder='newsContent - InterviewAns' type="text" value={content} name="content" onChange={handleChange}/>
      <Input  placeholder='NewsDescription' type="text" value={description} name="description" onChange={handleChange}/>
      <Input  placeholder='NewsUrl' type="url" value={url} name="url" onChange={handleChange}/>
      <Button type='submit'>ADD</Button>
      </form>
      </Box>
      </Box> 
    </div>
  )
}

export default Edit