import React, { useState ,useEffect} from 'react';
import PhotoInput from '../componnents/profileComponnents/picUploader';
import UserInfo from '../componnents/profileComponnents/UserInfo';
import AccountInfo from '../componnents/profileComponnents/AccountInfo';
import AccountTableData from '../componnents/profileComponnents/AccountTableData';
import TransactionTableData from '../componnents/profileComponnents/TransactionTableData';
import axios from 'axios';
import moment from 'moment';
// import SideBar from '../componnents/profileComponnents/SideBar';

const Profile = () => {
    const [openUploadModal, setOpenUploadModal] = useState(false);
    const [account_id,setAccount_id] = useState('')
    const id = JSON.parse(localStorage.getItem('user')).id
    const [Client, setClient] = useState([])
    const pull_data = (data) => {
      setAccount_id(data)
    }
    const getClientById = async()=>{
      await axios.post('http://localhost:5000/api/CRM/ClientById',{id})
      .then((res)=>{
        console.log(res.data);
        setClient(res.data)
      })
    }
    useEffect(()=>{
      getClientById()
    },[])
  return (
    <div class="bg-gray-100 w-full flex">
    <div class="container mx-auto p-5 pt-20">
        <div class="md:flex no-wrap md:-mx-2 relaive">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2 mb-4">
                {/* <!-- Profile Card --> */}
                <div class="bg-gray-200 font-sans w-full flex flex-row justify-center items-center">
                  {
                    Client?
                    <div class="card w-full mx-auto bg-white hover:shadow flex flex-col items-center">
                      <div className="relative w-32 h-32 -mt-8 rounded-[50%] flex items-center justify-center">
                          <img  class="w-32 mx-auto rounded-full  border-8 border-white " src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
                          <svg onClick={() => setOpenUploadModal(true)}  className='absolute top-1 right-0 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                              width="35" height="35"
                              viewBox="0 0 4335 4335">
                              <path fill="#2980b9" d="M2104 221c1087,0 1968,881 1968,1968 0,1087 -881,1968 -1968,1968 -1087,0 -1968,-881 -1968,-1968 0,-1087 881,-1968 1968,-1968z"></path><path fill="#fcfcfc" d="M2909 1686l-296 -296 -192 192 296 296 192 -192zm-544 -48l-1063 1063 -2 285 310 -2 1051 -1051 -296 -296z"></path>
                          </svg>
                      </div>
                      <div class="text-center mt-2 text-3xl font-medium"> {Client.Fname} {Client.Lname} </div>
                      <div class="text-center font-normal text-lg my-4">Membre depuis : 
                        <p>
                          {moment(Client.createdAt).format('L')+" "+moment(Client.createdAt).format('LT')}
                        </p>
                      </div>
                      <div class="text-center font-normal text-lg my-4">profile modifier en : 
                        <p>
                          {moment(Client.updatedAt).format('L')+" "+moment(Client.updatedAt).format('LT')}
                        </p>
                      </div>
                      <hr class="mt-8"/>
                    </div>
                    :null
                  }
                </div>
                {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2">
                {/* <!-- About Section --> */}
                <UserInfo data={Client}/>
                {/* <!-- DataTable --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm my-4">
                <AccountInfo func={pull_data}/>
              </div>
              <div class="bg-white pt-3 ">
              <p className='text-lg text-center font-bold py-2'>Compte Historique</p>
                <AccountTableData />
              </div>              
              <div class="bg-white pt-3 ">
              <p className='text-lg text-center font-bold py-2'>Transactions Historique</p>
                <TransactionTableData Acc={account_id}/>
              </div>
            </div>
        </div>
    </div>
    <PhotoInput Open={openUploadModal} Close={()=>setOpenUploadModal(false)}/>
    </div>
  )
}

export default Profile