import React,{useEffect,useState} from 'react'
import axios from 'axios'
import SideBar from '../componnents/profileComponnents/SideBar'
import Profile from './Profile'
import { Routes, Route } from "react-router-dom";
import PullMoney from './PullMoney';
import Transaction from './Transaction';
const UserDushboard = () => {
    const [Account, setAccount] = useState([])
    const [message, setMessage] = useState('')
        useEffect(()=>{
            GetMyAccount()
        },[])
        const id = JSON.parse(localStorage.getItem('user')).id
        const GetMyAccount = async()=>{
            setMessage('')
            setAccount([])
            await axios.post('http://localhost:5000/api/CRM/myAccount',{id})
            .then((res=>{
                console.log(res);
                if(res.data.status==false){
                    setMessage(res.data.message)
                }else{
                    setAccount(res.data)
                }
            }))
        }
  return (
    <div className='bg-gray-100  flex'>
        <SideBar/>
        <Routes>
            <Route path='/' element={<Profile/>}/>            
            <Route path='/PullMoney' element={<PullMoney data={Account} SyncData ={()=>GetMyAccount()} />}/>            
            <Route path='/Transaction' element={<Transaction data={Account}/>}/>            
        </Routes>
    </div>
  )
}

export default UserDushboard