import React, { useEffect } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react'
import GlobalStyle from "../globalStyles";
import { useDispatch, useSelector } from 'react-redux'
import { checkAuthenticated, loadUser } from '../redux/auth/actions'
import PrivateComponent from './PrivateComponent'
import GuestComponent from './GuestComponent'
import AlertComponent from '../components/Alert/AlertComponent'
import Loader from '../components/Loader/Loader'
import Modals from '../components/Modals/Modals';

export default function Layout({children}) {
    let width = window.innerWidth
    const [show, setShow] = useState(width <= 748? false: true)
    const [smallDevice, setSmallDevice] = useState(width <= 748? true: false)
    let darkMd = localStorage.getItem('darkMode') 
    const [darkMode, setDarkMode] = useState(darkMd == null?true:JSON.parse(darkMd))

    const loader = useSelector(state => state.loader)
    
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const toggleDash = () => {
        setShow(!show)
    }

    const toggleDashOnSmallDevice = () => {
        if(smallDevice){
            setShow(!show)
        }
    }

    
    window.addEventListener('resize', () => {
        let width = window.innerWidth
        if(width <= 748){
            setSmallDevice(true)
            setShow(false)
        } else{
            setSmallDevice(false)
            setShow(true)
        }
    })
    

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkAuthenticated())
        dispatch(loadUser())
    }, [])
    return (
        <>
        
            <GlobalStyle darkMode={darkMode} />
            < AlertComponent />
            {
                loader.loader?
                <Loader />:''
            }

            <PrivateComponent>
                        <Dashboard  toggleDashOnSmallDevice={toggleDashOnSmallDevice} show={show} />
                    <div className="az-content az-content-dashboard-five">
                        <Navbar  setDarkMode={setDarkMode} darkMode={darkMode} toggleDash={toggleDash} />
                        <Modals />
                        {children}
                    </div>
            </PrivateComponent>
            <GuestComponent>
                {children}
            </GuestComponent>
        </>
    )
}
