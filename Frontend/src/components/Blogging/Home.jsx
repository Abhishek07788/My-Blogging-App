import { useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteNews, getNews } from '../Api/api'
import style from '../CSS/news.module.css'
import { AppContext } from '../Private/Appcontextprovider'
import Edit from './Edit'
import Like from './Like'

const Home = () => {
  const [news, setNews] = useState([])
  const Toast = useToast()

  useEffect(()=>{
    showNews()
  },[])


  const showNews = () =>{
    getNews().then((res)=>{
      // console.log(res.data)
      setNews(res.data)
    })
  }

  const handleDelete = ({_id}) =>{
    deleteNews({_id}).then((res)=>{
      Toast({
        title: `${res.data.message} 😊`,
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      })
    showNews()
    })
  }

    
  return (
    <div className={style.NewsDIV}>
      {news.map((el) =>(
        <div className={style.NewsDiv1} key={el._id} >
          <Like {...el} handleDelete={handleDelete}/>
        </div>
      ))}
    </div>
  )
}

export default Home