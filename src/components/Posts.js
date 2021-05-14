import { useState, useEffect } from 'react';
import InputForm from './InputForm';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const postings=async ()=>{
      const response =await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10');
      const data= await response.json();
      setPosts(data);
    }
    postings();
    return (()=>console.log('mounted!'));
  },[]);
  async function savePost(post){
    let id=Math.ceil(Math.random()*100)+1;
      const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
              'Accept':'application/json,text/plain ,*/*',
              'Content-type':'application/json',

            },
            body:JSON.stringify({id:id,title:post.name,body:post.position})
              })
        const data= await response.json();
        console.log(data);
  }
  return (
    <>
    <InputForm savePost={savePost}/>
    <div>{
      posts.map((post)=>(
        <h3>{post.title}</h3>
      )
    )
    }
    </div>
    </>
  )
}
