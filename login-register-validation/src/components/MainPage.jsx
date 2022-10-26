import {Link} from "react-router-dom";

export function MainPage(){
    return(
       <div>
           <h1>Welcome</h1>
           <div className='d-flex align-items-center justify-content-center' style={{height:'600px'}}>
               <Link to={'/login'} className='btn btn-primary m-4 p-4'>Log in</Link>
               <Link to={'/register'} className='btn btn-primary m-4 p-4'>Register</Link>
           </div>
       </div>
    )
}