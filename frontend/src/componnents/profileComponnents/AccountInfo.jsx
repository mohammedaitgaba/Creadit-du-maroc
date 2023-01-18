import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import { useAuthContext } from "../../hooks/useAuthContext";
import AddAccountModal from './AddAccountModal'
const AccountInfo = (props) => {
    const [Account, setAccount] = useState([])
    const [message, setMessage] = useState('')
    const [openAddAccountModal, setOpenAddAccountModal] = useState(false);
    

    // const {user}=useAuthContext()
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
                console.log(res);
                setAccount(res.data)
                props.func(res.data.id);
            }
        }))
    }
  return (
    <div className='flex flex-col items-center'>
        <p className='text-lg text-center font-bold py-5'>Compte info</p>
        {
            message?
            <div className='p-2 flex items-center'>
                <div className=''>
                    {message}
                </div>
                <button type="button" onClick={()=>setOpenAddAccountModal(true)} className="text-white ml-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Crée Compte</button>

            </div>:
                        Account?
                        <section className='flex justify-around w-full'>
                            <div>
                                Type de compte : {Account.type}
                            </div>                
                            <div>
                                Balance : {Account.balance}DH
                            </div>                
                            <div>
                                Compte reference : {Account.ref}
                            </div>
                        </section>:
                    null
        }
        <AddAccountModal Open={openAddAccountModal} Close={()=>setOpenAddAccountModal(false)} getData ={()=>GetMyAccount()}/>
    </div>

  )
}

export default AccountInfo