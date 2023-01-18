import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Accounts = () => {
    const [PageSize, setPageSize] = useState(5)
    const [actuallPage, setActuallPage] = useState(0)
    const [Accounts, setAccounts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [totalClients, setTotalClients] = useState(0)
    
    useEffect(()=>{
        getAllClients()
    },[actuallPage,PageSize])
    const getAllClients = async()=>{
        setAccounts([])
        axios.post('http://localhost:5000/api/CRM/AllAccounts',{PageSize,actuallPage})
        .then((res)=>res.data)
        .then((data)=>{
            data.accounts.map(element=>{
                console.log(element);
                setAccounts(prevArray => [...prevArray, element])
            })
            setTotalPages(data.totalPages)
            setTotalClients(data.total)  
        })
    }
    const pageIncrease = ()=>{
        actuallPage<totalPages-1?
        setActuallPage(current=>current+1):
        null
    }    
    const pageDecrease = ()=>{
        actuallPage>0?
        setActuallPage(current=>current-1):
        null
    }
  return (
    <section className='w-[80%]'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-center py-5 text-xl font-bold">Accounts</h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Prenom
                    </th>            
                    <th scope="col" class="px-6 py-3">
                        Nom
                    </th>
                    <th scope="col" class="px-6 py-3">
                        CIN
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acc ref
                    </th>                  
                    <th scope="col" class="px-6 py-3">
                        balance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        type
                    </th>                    
                    <th scope="col" class="px-6 py-3">
                        Historique
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Supp
                    </th>
                </tr>
            </thead>
            


            <tbody>
                {
                    Accounts?
                        Accounts.map((element,i)=>(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                                <td class="px-6 py-4">
                                    {element.user.Fname}
                                </td>
                                <td class="px-6 py-4">
                                    {element.user.Lname}
                                </td>
                                <td class="px-6 py-4">
                                    {element.user.CIN}
                                </td>
                                <td class="px-6 py-4">
                                    {element.reference}
                                </td>
                                <td class="px-6 py-4">
                                    {element.balance} DH
                                </td>
                                <td class="px-6 py-4">
                                    {element.type}
                                </td>
                                <td class="px-6 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='cursor-pointer'
                                        width="35" height="35"
                                        viewBox="0 0 128 128">
                                            <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                                    </svg>
                                </td>
                                <td className="px-6 py-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='cursor-pointer'
                                        width="35" height="35"
                                        viewBox="0 0 48 48">
                                    <path fill="#ff3d00" d="M34,11l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V11H34z"></path><path fill="#ff6e40" d="M11,7h26c1.1,0,2,0.9,2,2v2H9V9C9,7.9,9.9,7,11,7z"></path><path fill="#fafafa" d="M15.515 25H32.486000000000004V29H15.515z" transform="rotate(-45.001 24 27)"></path><path fill="#fafafa" d="M22 18.515H26V35.486000000000004H22z" transform="rotate(-45.001 24 27)"></path>
                                    </svg>
                                </td>
                            </tr>
                        ))
                        :null
                    }


            </tbody>
        </table>
        <nav class="flex items-center justify-between p-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Toltal Clients : <span class="font-semibold text-gray-900 dark:text-white">{totalClients}</span></span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Toltal Clients : 
                <select name="" id="" onChange={(e)=>setPageSize(e.target.value)}>
                    <option selected disabled>--Nombre des Client--</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </span>
            <ul class="inline-flex items-center -space-x-px">
                <li onClick={()=>pageDecrease()}>
                    <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
                <li >
                    <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{actuallPage +1}</a>
                </li>
                <li onClick={()=>pageIncrease()}>
                    <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    </section>
  )
}

export default Accounts