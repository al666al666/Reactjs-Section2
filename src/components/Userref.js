import {useState,useRef,useEffect} from 'react' 

const Userref =() => {
    const[count, setCount] = useState(60) 

    const timerID  = useRef() 
    const preCount = useRef() 
    const h1Ref = useRef() 

    useEffect (()=>{ 
        preCount.current = count 
    },[count])

    useEffect (() => {
        const rec = h1Ref.current.getBoundingClientRect() 
        console.log(rec) 
    })
    const handleStart =() => {
        const  reduceTime =() => {
            setCount (prestate  => prestate-1)
        }

        timerID.current = setInterval (reduceTime , 1000) 

    }
    const handleStop =() => {
        clearInterval(timerID.current)
       
    }
    console.log(count ,  preCount.current)
    return (


        <>
            <h1> Useref </h1> 
            <h1 ref={h1Ref}> {count} </h1>
         
            <button onClick ={handleStart} > Start </button>
            <button onClick ={handleStop} > Stop </button>
        
        </>
    )
}

export default Userref