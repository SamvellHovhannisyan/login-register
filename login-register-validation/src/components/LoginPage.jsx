import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    let allUsers = JSON.parse(localStorage.getItem('users'));

    const login = (e) => {
        e.preventDefault()
        for (let i = 0; i < allUsers.length; i++) {
            if (userInfo.username === allUsers[i].username && userInfo.password === allUsers[i].password) {
                return navigate('/home')
            }
        }
        alert("Wrong username or password")
    }

    return (
        <div>
            <Link to={'/'} className='btn btn-primary m-4 p-4'>Main Page</Link>
            <div className='d-flex justify-content-center'>
                <div style={{width: '40%'}}>
                    <h1>Login Page</h1>
                    <form>
                        <div className='mt-3'>
                            <label htmlFor="">Username</label>
                            <input className='form-control'
                                   type="text"
                                   value={userInfo.username}
                                   onChange={e => setUserInfo({
                                       ...userInfo,
                                       username: e.target.value
                                   })}
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Password</label>
                            <input className='form-control'
                                   type="text"
                                   value={userInfo.password}
                                   onChange={e => setUserInfo({
                                       ...userInfo,
                                       password: e.target.value
                                   })}
                            />
                        </div>
                        <button onClick={login} className='btn btn-success mt-3'>Log in</button>
                    </form>
                    <p className='mt-5'>Do not have account yet ? <Link to={'/register'} className='btn-link m-4 p-4'>Register</Link></p>
                </div>
            </div>
        </div>
    )
}