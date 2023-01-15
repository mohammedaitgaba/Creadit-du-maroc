import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ClientsTable = () => {
    const [PageSize, setPageSize] = useState(5)
    const [actuallPage, setActuallPage] = useState(0)
    const [Clients, setClients] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [totalClients, setTotalClients] = useState(0)
    
    useEffect(()=>{
        getAllClients()
    },[actuallPage,PageSize])
    const getAllClients = async()=>{
        setClients([])
        axios.post('http://localhost:5000/api/CRM/AllClients',{PageSize,actuallPage})
        .then((res)=>res.data)
        .then((data)=>{
            data.client.map(element=>{
                setClients(prevArray => [...prevArray, element])
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
    <section className='px-20'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        CIN
                    </th>                    
                    <th scope="col" class="px-6 py-3">
                        N°Tele
                    </th>                    
                    <th scope="col" class="px-6 py-3">
                        Genre
                    </th>                    
                    <th scope="col" class="px-6 py-3">
                        Age
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Supp
                    </th>
                </tr>
            </thead>
            


            <tbody>
                {
                    Clients?
                        Clients.map((element,i)=>(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                                <td class="px-6 py-4">
                                    {element.Fname}
                                </td>
                                <td class="px-6 py-4">
                                    {element.Lname}
                                </td>
                                <td class="px-6 py-4">
                                    {element.Email}
                                </td>
                                <td class="px-6 py-4">
                                    {element.CIN}
                                </td>
                                <td class="px-6 py-4">
                                    {element.Phone}
                                </td>
                                <td class="px-6 py-4">
                                    {element.Gender}
                                </td>
                                <td class="px-6 py-4">
                                    {element.Birthday}
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

export default ClientsTable