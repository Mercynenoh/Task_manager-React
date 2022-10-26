
import Button from "./button"
export function Header (){
    const  onClick=()=>{
        alert('Hey Mercy')
      }
    return(
    <div className="Header" >
    <h1>Task Tracker</h1>
    <Button color='green' text='Add new' onClick={onClick}/>
    </div>
    )

}

// const headingStyle ={
//     color:'red', textAlign:'center'
// }


export default Header