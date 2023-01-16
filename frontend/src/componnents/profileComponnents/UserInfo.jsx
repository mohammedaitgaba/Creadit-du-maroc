import React from 'react'
import moment from 'moment';

const UserInfo = ({data}) => {
  return (
<div class="bg-white p-3 shadow-sm rounded-sm mb-4 flex flex-col">

    <span class="tracking-wide text-lg text-center font-bold py-5">Client Info</span>
    {
        data?
    <div class="text-gray-700">
        <div class="grid md:grid-cols-2 text-sm">
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">First Name :</div>
                <div class="px-4 py-2">{data.Fname}</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Last Name :</div>
                <div class="px-4 py-2">{data.Lname}</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender :</div>
                <div class="px-4 py-2">{data.Gender}</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Contact No. :</div>
                <div class="px-4 py-2">{data.Phone}</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">CIN :</div>
                <div class="px-4 py-2">{data.CIN}</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email. :</div>
                <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">{data.Email}</a>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Date de naissence :</div>
                <div class="px-4 py-2">{moment(data.Birthday).format('L')}</div>
            </div>
        </div>
    </div>:null
    }
</div>
  )
}

export default UserInfo