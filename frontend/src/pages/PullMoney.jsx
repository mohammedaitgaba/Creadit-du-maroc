import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify';

const PullMoney = ({data,SyncData}) => {
    const [error, setError] = useState('')
    const date = new Date
    // const OperationDate = date.toLocaleTimeString()
    const [balance, setbalance] = useState(0)
    const Pull =async()=>{
        if (balance<=data.balance) {
            setError('')
            axios.post('http://localhost:5000/api/CRM/retait',{
                id_acc:data.id,
                balance_pulled:balance,
                operationDate:date
            }).then(res=>{
                console.log(res.data.message);
                if (res.data.message === "opération effectuée avec succès") {             
                    toast.success(`Pulled succesfully !`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    SyncData()
                }
            })
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
                <button type="button" onClick={()=>[setbalance(100),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">100</button>
                <button type="button" onClick={()=>[setbalance(200),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">200</button>
                <button type="button" onClick={()=>[setbalance(300),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">300</button>
            </div>
            <div className='flex flex-col items-center justify-around'>
                <div className='flex flex-col items-center justify-around bg-white p-12 rounded shadow-sm'>
                    <span className='text-xl font-bold'>
                        Montant a tiré : {balance} DH
                    </span> 
                    <span className='text-xl font-bold py-3 text-red-600'>
                        {error}
                    </span>
                    {
                        !error?
                        <button type="button" onClick={()=>Pull()} class="py-8 px-8 mr-2 mb-2 text-lg text-white font-medium text-gray-900 focus:outline-none bg-[#2e81ca] rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Confirme</button>
                        :null
                    }
                </div>
                <div>
                    <span className='text-xl font-bold'>
                        Autre Montant tapez ici: 
                    </span>
                    <input
                        type="Number"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Montant"
                        id="solde"
                        name="balance"
                        value={balance}
                        onChange={(e)=>setbalance(e.target.value)}
                    />
                </div>
            </div>   
            <div className='flex flex-col justify-around'>
                <button type="button" onClick={()=>[setbalance(500),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">500</button>
                <button type="button" onClick={()=>[setbalance(700),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">700</button>
                <button type="button" onClick={()=>[setbalance(1000),setError('')]} class="py-8 px-8 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">1000</button>
            </div>

        </div>
    </section>
  )
}

export default PullMoney