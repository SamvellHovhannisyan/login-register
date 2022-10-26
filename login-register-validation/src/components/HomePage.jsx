import {Link} from "react-router-dom";

export  function HomePage(){
    return(
        <div className='container'>
            <Link to={'/'} className='btn btn-primary m-4 p-4'>Logout</Link>
            <h1>Home page</h1>
        </div>
    )
}