
import './static/styles.css'
const Usereffect =({data})=> {

    console.log("this is data" , data)
    return (
        <div> 
            <h1> This is Usereffect</h1>
            <h2> {data.punchline} </h2>
            <h2> {data.setup} </h2>
            <h2> {data.type} </h2>
            
        </div>
    )
}

export default Usereffect