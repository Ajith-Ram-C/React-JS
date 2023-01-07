import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './login.css';
import Main from'../reusable/Main';
import Img from '../../images/img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faArrowRight, faUserLock} from '@fortawesome/free-solid-svg-icons';
function Login()
{
    return(
        <>
        <Main/>
        <div className='container bg1'>
            <div className='row col-lg-12 col-sm-12 bg-white bw1'>
            <div className='bg2 col-lg-6'>
                <img src={Img} className='col-lg-12 col-sm-12'/>
            </div>
                <div className='bg2 col-lg-6'>
                    <form>
                    <h1 className='col-lg-12 col-sm-12'>Member Login</h1>
                        <div>
                        <span className='s1'><FontAwesomeIcon icon={faEnvelope}/></span>
                        <input type='text' placeholder='Email' className='col-lg-10 col-sm-12 p-1 m-2'></input>
                            <div>
                            <span className='s2'><FontAwesomeIcon icon={faUserLock}/></span>
                            <input type='password' placeholder='Password' className='col-lg-10 col-sm-12 p-1 m-2'></input>
                            </div>
                            <button className='bg-success col-lg-10 col-sm-12 p-1 m-4 b1'>Login</button>
                        </div>
                        <div className='col-lg-12 col-sm-12 '> Forgot <a href='' className='text-success'>Username/Password?</a> </div>
                        <div className='col-lg-12 col-sm-12 p-5'><a className='text-success'>Create your account</a><FontAwesomeIcon icon={faArrowRight} className='text-success ml-4'/></div>
                    </form>        
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;