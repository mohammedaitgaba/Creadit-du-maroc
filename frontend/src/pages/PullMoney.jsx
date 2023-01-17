import React,{useEffect,useState} from 'react'
import axios from 'axios'
const PullMoney = ({data}) => {
    const [error, setError] = useState('')
    const date = new Date
    // const OperationDate = date.toLocaleTimeString()
    console.log(data);
    const [balance, setbalance] = useState(0)
    const Pull =async()=>{
        if (balance<=data.balance) {
            setError('')
            axios.post('http://localhost:5000/api/CRM/retait',{
                id_acc:data.id,
                balance_pulled:balance,
                operationDate:date
            }).then(res=>console.log(res.data))
        }else{
            setError(`le max possible de tire est : ${data.balance} Dh`)
        }
    }
  return (
    <section className='w-full flex flex-col items-center'>
        <div className='pt-8'>
            <span className='text-xl font-bold'>
                Votre Montont Total est : 
            </span>
            <span className='text-xl font-bold'>
                {data?data.balance:null} DH
            </span>

        </div>
        <div className='flex justify-between w-full px-10 h-[70vh]'>
            <div className='flex flex-col justify-around'>
                <button type="button" onClick={()=>setbalance(100)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">100</button>
                <button type="button" onClick={()=>setbalance(200)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">200</button>
                <button type="button" onClick={()=>setbalance(300)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">300</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-xl font-bold'>
                    Montant a tiré : {balance} DH
                </span>
                <span className='text-xl font-bold py-3 text-red-600'>
                    {error}
                </span>
                {
                    !error?
                    <button type="button" onClick={()=>Pull()} class="py-8 px-8 mr-2 mb-2 text-lg  font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Confirme</button>
                    :null
                }
            </div>   
            <div className='flex flex-col justify-around'>
                <button type="button" onClick={()=>setbalance(400)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">400</button>
                <button type="button" onClick={()=>setbalance(500)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">500</button>
                <button type="button" onClick={()=>setbalance(600)} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">600</button>
            </div>

        </div>
    </section>
  )
}

export default PullMoney