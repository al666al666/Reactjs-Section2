
import Usereffect from './components/Usereffect'


import { useState, useEffect } from 'react'
let url =  "https://official-joke-api.appspot.com/random_joke"

const App = () => {
  const [data, setData]  = useState({})   ; 



  useEffect( ()=>{
    fetch(url)
    .then (response => response.json()) 
    .then ( json => setData (json) )
  },[])



  return (

    <div>
      <h1> Hello  </h1>
      <Usereffect data ={data} />
    </div>

  )
}


export default App 