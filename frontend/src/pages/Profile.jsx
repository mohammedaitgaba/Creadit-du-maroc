import React, { useState } from 'react';
import PhotoInput from '../componnents/profileComponnents/picUploader';
import UserInfo from '../componnents/profileComponnents/UserInfo';
const Profile = () => {
    const [openUploadModal, setOpenUploadModal] = useState(false);
  return (
    <div class="bg-gray-100 pt-20">
    <div class="container mx-auto p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div class="bg-gray-200 font-sans w-full flex flex-row justify-center items-center">
                  <div class="card w-full mx-auto bg-white hover:shadow flex flex-col items-center">
                    <div className="relative w-32 h-32 -mt-8 rounded-[50%] flex items-center justify-center">
                        <img  class="w-32 mx-auto rounded-full  border-8 border-white " src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
                        <svg onClick={() => setOpenUploadModal(true)}  className='absolute top-1 right-0 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="35" height="35"
                            viewBox="0 0 4335 4335">
                            <path fill="#2980b9" d="M2104 221c1087,0 1968,881 1968,1968 0,1087 -881,1968 -1968,1968 -1087,0 -1968,-881 -1968,-1968 0,-1087 881,-1968 1968,-1968z"></path><path fill="#fcfcfc" d="M2909 1686l-296 -296 -192 192 296 296 192 -192zm-544 -48l-1063 1063 -2 285 310 -2 1051 -1051 -296 -296z"></path>
                        </svg>
                    </div>
                    <div class="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
                    <div class="text-center mt-2 font-light text-sm">@devpenzil</div>
                    <div class="text-center font-normal text-lg">Kerala</div>
                    <div class="px-6 text-center mt-2 font-light text-sm">
                      <p>
                        Front end Developer, avid reader. Love to take a long walk, swim
                      </p>
                    </div>
                    <hr class="mt-8"/>
                    <div class="flex p-4">
                      <div class="w-1/2 text-center">
                        <span class="font-bold">1.8 k</span> Followers
                      </div>
                      <div class="w-0 border border-gray-300">
                        
                      </div>
                      <div class="w-1/2 text-center">
                        <span class="font-bold">2.0 k</span> Following
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2">
                {/* <!-- About Section --> */}
                <UserInfo/>
                {/* <!-- DataTable --> */}
                <div class="bg-white p-3 shadow-sm rounded-sm">

                </div>
            </div>
        </div>
    </div>
    <PhotoInput Open={openUploadModal} Close={()=>setOpenUploadModal(false)}/>
</div>
  )
}

export default Profile