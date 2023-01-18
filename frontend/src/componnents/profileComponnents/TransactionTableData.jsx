import React,{useEffect,useState} from 'react'
import axios from 'axios'
import moment from 'moment';

const TransactionTableData = (id) => {
    const [Transaction, setTransaction] = useState([])
    const [message, setMessage] = useState('')
    useEffect(()=>{
        GetMyAccount()
    },[])
    const GetMyAccount = async()=>{
        setMessage('')
        setTransaction([])
        await axios.post('http://localhost:5000/api/CRM/GetTransaction',{user:id.Acc})
        .then((res=>{
            if(res.data.transaction.length > 0){
                // console.log();
                res.data.transaction.map(element=>{
                    setTransaction(prevArray => [...prevArray, element])
                })
            }else{
                console.log("no Transaction");
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
                        transaction numero
                    </th>            
                    <th scope="col" class="px-6 py-3">
                        Reciver
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Balance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        transaction date
                    </th> 
                </tr>
            </thead>
            <tbody>
                {
                    Transaction?
                    Transaction.map((element,i)=>(
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

export default TransactionTableData