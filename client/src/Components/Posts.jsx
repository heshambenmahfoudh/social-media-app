import React, { useEffect, useState } from 'react'
import { useStateContextAuth } from '../context/authContext';
import useFetchData from "../hooks/useFetchData";
import Loading from './Loading';
import Post from './Post';
import {useParams} from "react-router-dom"
import StatusData from './StatusData';
import { useStateContext } from '../context/contextProvider';

export default function Posts() {
  
const id = useParams().id
const { user:userData } = useStateContextAuth()
const {loading:loadData} = useStateContext()
const { data:postsData,loading  } = useFetchData(id ? `posts/userpost/${id&&id}`  :
 `posts/followingPost/${userData&&userData?.id}`,loadData);
const [listPosts, setListPosts] = useState()

useEffect(() => {
  setListPosts(postsData)

}, [loadData,postsData])
  



  return (
      <div className='flex  flex-col gap-2.5  m-3'>
       {loading ? <Loading/> : listPosts?.map((post) => (
          <div key={post?._id}>
              <Post 
                  posts={listPosts} 
                  setPosts={setListPosts} 
                  post={post} 
                  id ={id}
               />
          </div>
       ))}
       <StatusData list={listPosts}
        resourceName='Posts'  />
      </div>
  )
}