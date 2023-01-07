import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './notification.css';
import Main from'../reusable/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,faBell} from '@fortawesome/free-regular-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
function Notification()
{
    return(
        <>
        <Main/>
        <div className='container col-lg-6 col-sm-12 p-5'>
            <h1>Notification</h1>
            <div className='d-flex l1 bg-primary m-5'>
                <h1><FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>Information Message</h1>
                </div>
            <div className='d-flex l1 bg-success m-5'>
                <h1><FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>success Message</h1>
                </div>
            <div className='d-flex l1 bg-warning m-5'>
                <h1><FontAwesomeIcon icon={faBell} className='mr-5'/>warning Message</h1>
                </div>
            <div className='d-flex l1 bg-danger m-5'>
                <h1><FontAwesomeIcon icon={faCircleExclamation} className='mr-5'/>Error Message</h1>
                </div>
        </div>
        </>
    )
}

export default Notification;