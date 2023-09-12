import {useState,createContext,useEffect} from 'react' ;
export const AppContext = createContext() 

const Uselayouteffect =() => {

    const [avatar,setAvatar] = useState({})
    // anti memory leak 
    useEffect (() => {
    
        return () => {
           avatar &&  URL.revokeObjectURL(avatar.preview) 
        }
    },[avatar])
    
    const handleImage =event=> {
        const file = event.target.files[0]
        file.preview=URL.createObjectURL(file) 
        console.log(file.preview) 
        setAvatar(file) 
    }


    return(
        <div> 
                <h1> Hello </h1>
                <input type="file" onChange={handleImage}  />


               {
                    avatar && (
                        <img src = {avatar.preview} alt="Girl in a jacket" width="500" /> 
                    )


               } 


            </div> 
    )
}






export default Uselayouteffect 