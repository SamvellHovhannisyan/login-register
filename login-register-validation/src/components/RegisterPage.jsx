import {Link} from "react-router-dom";
import {useState} from "react";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {schema} from "../constants";


export function RegisterPage() {
    const navigate = useNavigate()
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const [userLogin, setUserLogin] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    });

    localStorage.setItem('users', JSON.stringify(users))

    const submitForm = async (e) => {
        e.preventDefault();
        const isFormValid = await schema.isValid(userLogin);
        if (isFormValid &&
            !users.some(checkUsernameIsExist) &&
            !users.some(checkPhoneNumberIsExist) &&
            !users.some(checkEmailIsExist)) {
            users.push(userLogin);
            localStorage.setItem('users', JSON.stringify(users));
            navigate('/home')
            alert(`${userLogin.fullName} you are registered successfully`)
        } else
            alert('Invalid information');
    }


    const checkUsernameIsExist = (element) => element.username === userLogin.username;
    const checkPhoneNumberIsExist = (element) => element.phoneNumber === userLogin.phoneNumber;
    const checkEmailIsExist = (element) => element.email === userLogin.email;


    return (
        <div>
            <Link to={'/'} className='btn btn-primary m-4 p-4'>Main Page</Link>
            <div className='d-flex justify-content-center'>
                <div style={{width: '40%'}}>
                    <h1>Register Page</h1>
                    <Formik initialValues={userLogin}
                            validationSchema={schema}
                            onSubmit={() => {
                                users = JSON.parse(localStorage.getItem('users'));
                                schema.validate(userLogin).then(users.push(userLogin));
                                localStorage.setItem('users', JSON.stringify(users));
                            }}>
                        <form>
                            <div className='mt-3'>
                                <label>Full Name</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.fullName}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           fullName: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.fullName.length && <p className='text-danger'>This field is required</p>
                            }

                            {
                                (userLogin.fullName.length > 0 && userLogin.fullName.length < 3) &&
                                <p className='text-danger'>Full name must be more than 3 characters</p>
                            }


                            <div className='mt-3'>
                                <label>Username</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.username}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           username: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.username.length && <p className='text-danger'>This field is required</p>
                            }
                            {
                                (userLogin.username.length > 0 && userLogin.username.length < 3) &&
                                <p className='text-danger'>Username must be more than 3 characters</p>
                            }
                            {
                                users.some(checkUsernameIsExist) && <p className='text-danger'>This username is already exist</p>
                            }

                            <div className='mt-3'>
                                <label>E-mail</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.email}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           email: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.email &&
                                <p className='text-danger'>This field is required</p>
                            }
                            {
                                users.some(checkEmailIsExist) ?
                                    <p className='text-danger'>This e-mail is already exist</p> : ''
                            }


                            <div className='mt-3'>
                                <label>Password</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.password}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           password: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.password && <p className='text-danger'>This field is required</p>
                            }
                            {
                                (userLogin.password.length > 0 && userLogin.password.length < 8) &&
                                <p className='text-danger'>Password must be more than 8 characters</p>
                            }


                            <div className='mt-3'>
                                <label>Confirm Password</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.confirmPassword}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           confirmPassword: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.confirmPassword && <p className='text-danger'>This field is required</p>
                            }
                            {
                                userLogin.confirmPassword !== userLogin.password &&
                                <p className='text-danger'>Wrong confirmation of password</p>
                            }

                            <div className='mt-3'>
                                <label>Phone Number</label>
                                <input className='form-control'
                                       type="text"
                                       value={userLogin.phoneNumber}
                                       onChange={e => setUserLogin({
                                           ...userLogin,
                                           phoneNumber: e.target.value
                                       })}
                                />
                            </div>
                            {
                                !userLogin.phoneNumber && <p className='text-danger'>This field is required</p>
                            }
                            {
                                users.some(checkPhoneNumberIsExist) &&
                                <p className='text-danger'>This phone number is exist</p>
                            }


                            <button

                                disabled={
                                    schema.isValid(userLogin) &&
                                    !users.some(checkUsernameIsExist) &&
                                    !users.some(checkPhoneNumberIsExist) &&
                                    !users.some(checkEmailIsExist) ? false : true
                                }
                                onClick={submitForm}
                            >Save
                            </button>
                        </form>

                    </Formik>
                    <p className='mt-5'>Already have account ? <Link to={'/login'} className='btn-link m-4 p-4'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}