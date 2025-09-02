import React from 'react'
import { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    //const [data , setData]=useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/subham-sagar`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    
  return (
    <div className=''>Github Followers : {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/subham-sagar`)

  return response.json()
  
}