import React, {useState} from 'react'
import LoginImg from '../../assets/img/login.svg'

import { useDispatch } from 'react-redux';
import { hideLoader, showLoader, login } from '../../redux/';
import axios from 'axios'
import alert from '../../redux/alert/actions';
import REACT_APP_API_URL from '../../testurl'


export default function Login() {
    const [formData, setformData] = useState({
        email: '',
        password: '',
    })
    const [checked, setchecked] = useState(false)
    const dispatch = useDispatch()
    const {email, password} = formData
    const changeFormData = e => setformData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(login(email, password, checked))
    }
    
    
    
    return (
        <>
           

        </>
    )
}
