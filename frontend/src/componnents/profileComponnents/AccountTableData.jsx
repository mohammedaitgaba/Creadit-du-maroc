import React,{useEffect,useState} from 'react'
import axios from 'axios'
import moment from 'moment';

const AccountTableData = () => {
    const [history, setHistory] = useState([])
    const [message, setMessage] = useState('')
    useEffect(()=>{
        GetMyAccount()
    },[])
    const id = JSON.parse(localStorage.getItem('user')).id
    const GetMyAccount = async()=>{
        setMessage('')
        setHistory([])
        await axios.post('http://localhost:5000/api/CRM/myAccount',{id})
        .then((res=>{
            console.log(res.data);
            if(res.data.history.length > 0){
                // console.log();
                res.data.history.map(element=>{
                    setHistory(prevArray => [...prevArray, element])
                })
            }else{
                console.log("no historique");
            }
        }))
    }
  return (
    <section className='shadow-sm rounded-sm my-4'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Operation numero
                    </th>            
                    <th scope="col" class="px-6 py-3">
                        Opertaion type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Balance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Operation date
                    </th> 
                </tr>
            </thead>
            <tbody>
                {
                    history?
                    history.map((element,i)=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                            <td class="px-6 py-4">
                                {i+1}
                            </td>                    
                            <td class="px-6 py-4">
                                {element.operationType}
                            </td>
                            <td class="px-6 py-4">
                                {element.balance}
                            </td>
                            <td class="px-6 py-4">
                                {moment(element.operationDate).format('L')+" "+moment(element.operationDate).format('LT')}

                            </td>
                    </tr>
                    ))
                    :null
                }
            </tbody>
        </table>
    </div>
    </section>
  )
}

export default AccountTableData