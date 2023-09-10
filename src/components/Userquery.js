import './static/styles.css'
import {useState} from 'react' ;

const Userquery = () => {

    const [usequerry , setUserquerry] = useState("")

    const handleInput =event=> {
        setUserquerry (event.target.value)
    }

    const handleKeypress= (event) => { 
            if (event.key === 'Enter') {
                handleQuery()
    }}


    const handleQuery =()=>{
        window.open(`https://www.google.com/search?q=${usequerry}`,'https://www.google.com')
    }
    console.log(usequerry)
    return (    
        <div className ="Userquery_content">
            <h1> Hello David </h1>
            <div className="form" >

                <input 
                placeholder ="Search here .... " 
                onChange={handleInput} 
                onKeyDown={handleKeypress}
                value ={usequerry} /> 

                <button onClick={handleQuery}> Submit</button>

            </div>
        </div>
        
    )

        
}

export default Userquery