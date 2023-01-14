import React, { useState,useEffect } from "react";
import { useSign_in } from "../hooks/useSignin";
import { useSign_up } from "../hooks/useSignup";

function AuthModal({Open,Close}) {
  const [value, setValue] = useState();
  const [isLogin ,setIsLogin] = useState(true)
  const [data ,setdata] = useState([])
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const {sign_in, isLoading, error}=useSign_in()
  const {sign_up, isLoading_up, error_up}=useSign_up()
  const handleChange = (e)=>{
    setFormData((previousState)=>({
        ...previousState,
        [e.target.name] : e.target.value,
    }))
  }
  const [formData,setFormData]=useState({
    Fname:'',
    Lname:'',
    Phone:"",
    Birthday:"",
    Email:'',
    CIN:'',
    Gender:"Homme",
    Password:'',
    PasswordConfirmation:''
  })
  const {Fname,Lname,Phone,Birthday,Email,CIN,Password,PasswordConfirmation}=formData
  useEffect(()=>{
    if (Password && PasswordConfirmation && Password!=PasswordConfirmation) {
      setIsError(`password confirmation doesn't match password`)
    }else{
      setIsError('')
    }
  },[PasswordConfirmation,Password])
  const Sign_in = async()=>{
    await sign_in(formData)
    Close();
  }

  const Sign_up = async() => {
    await sign_up(formData)
    Close();
  };

  if (!Open) return null;
  if (isLogin)  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-[#00000057]">
      <div className="w-3/4 lg:w-3/6 m-auto text-[#232122] ">
        <form className="bg-[white] p-5 relative">
            <div className="absolute right-6 cursor-pointer">
            <svg onClick={()=>Close()} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="40" height="40"
              viewBox="0 0 48 48">
              <linearGradient id="ZOJD~EN7ORc37kEzg9196a_rmf1Fvj5nBib_gr1" x1="6.204" x2="42.862" y1="6.204" y2="42.862" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#ZOJD~EN7ORc37kEzg9196a_rmf1Fvj5nBib_gr1)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8	C42,6.895,41.105,6,40,6z"></path><path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path><path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path><path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path><path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path>
            </svg>
            </div>
          <div className="text-center text-lg font-bold">Sign in</div>
          <div className="relative z-0 sm:mb-4 mb-0 w-full group">
            <label htmlFor="floating_email">Email address</label>
            <input
              type="email"
              id="floating_email"
              className="block py-1.5 px-1 w-full text-sm text-gray-90 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="Email" value={Email} onChange={handleChange}
            />
          </div>
            <div className=" md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Password" value={Password} onChange={handleChange}
                />
              </div>
            </div>
            <div className="underline underline-offset-1 text-primary hover:text-senary cursor-pointer" onClick={()=>setIsLogin(false)}>Not registred</div>
            <button type="button" disabled={isLoading} onClick={()=>Sign_in()} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
            {error &&<div className="text-[red]">{error}</div>}
        </form>
      </div>
    </div>
  )
  else  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-[#0000008b]">
      <div className="w-3/4  m-auto text-senary">
        <form className="bg-[white] p-5 relative">
          <div className="absolute right-6 cursor-pointer">
            <svg onClick={()=>Close()} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="40" height="40"
              viewBox="0 0 48 48">
              <linearGradient id="ZOJD~EN7ORc37kEzg9196a_rmf1Fvj5nBib_gr1" x1="6.204" x2="42.862" y1="6.204" y2="42.862" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#ZOJD~EN7ORc37kEzg9196a_rmf1Fvj5nBib_gr1)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8	C42,6.895,41.105,6,40,6z"></path><path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path><path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path><path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path><path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path>
            </svg>
          </div>
          <div className="text-center text-lg font-bold">Registration</div>
          <div className="relative z-0 sm:mb-4 mb-0 w-full group">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_first_name">First name</label>
                <input
                  type="text"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Fname" value={Fname} onChange={handleChange}
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_last_name">Last name</label>
                <input
                  type="text"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Lname" value={Lname} onChange={handleChange}
                />
              </div>
            </div>            
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_first_name">Email</label>
                <input
                  type="email"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Email" value={Email} onChange={handleChange}
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_last_name">CIN</label>
                <input
                  type="text"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="CIN" value={CIN} onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_phone">Phone number</label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Phone" value={Phone} onChange={handleChange}
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="Age">Age</label>
                <input
                  type="date"
                  id="Age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Birthday" value={Birthday} onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="Password" value={Password} onChange={handleChange}
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_repeat_password">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="PasswordConfirmation" value={PasswordConfirmation} onChange={handleChange}
                />
                {
                  isError&&(
                    <label htmlFor="floating_repeat_password" className="text-[red]">
                      *{isError}
                    </label>
                  )
                }
              </div>

            </div>
          </div>
          <div className="underline underline-offset-1 text-primary hover:text-senary cursor-pointer" onClick={()=>setIsLogin(true)}>Already registred</div>
          <button type="button" disabled={isLoading_up} onClick={()=>Sign_up()} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Crée Compte</button>
            {error_up &&<div className="text-[red]">{error_up}</div>}
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
