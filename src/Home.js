 import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home(){
     const [showComponent,setshowComponent] = useState(false)
     const navigate = useNavigate()
     const {name} = useParams()

     useEffect(() => {
          setshowComponent(true)
      }, [])

    return(
    <div>
     {showComponent &&(
          <div>
           <h1> Welcome Home {name}</h1>
           <input className="btn btn-primary" type="submit" value="Back" onClick={()=>navigate('/')}></input>
           </div>
     )}
        
    </div>
    )
}
export default Home;