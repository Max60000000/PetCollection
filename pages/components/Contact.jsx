import Link from 'next/link'
import React, { useState } from 'react'

const Contact = () => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [message,setMessage]=useState('')
  return (
    <div>
        <div className='flex justify-center items-center p-4 text-xl md:text-3xl font-medium'> Contact</div>
       <div class="bg-white h-auto flex justify-center">
<div class="bg-white shadow-lg m-8 w-1/2 grid lg:flex justify-center rounded-xl">
    <div class="lg:w-1/3 bg-blue-900 rounded-xl ">
        <div class="text-white m-6 font-medium "> Contact Information </div>
        <div class="text-white m-6 text-sm flex ">
            <ion-icon name="location-sharp" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <div> Tahachal-Kathmandu </div>
        </div>
        <div class="text-white m-6 text-sm flex ">
            <ion-icon name="call-outline" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <div> +977-9861859764 </div>
        </div>
        <div class="text-white m-6 text-sm flex ">
            <ion-icon name="globe-outline" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <div> www.petmela.org </div>
        </div>
        <div class="flex justify-center m-2 ">
            <ion-icon name="logo-facebook" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <ion-icon name="logo-linkedin" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <ion-icon name="logo-twitter" class="m-2 text-pink-500 hover:text-white"></ion-icon>
            <ion-icon name="logo-reddit" class="m-2 text-pink-500 hover:text-white"></ion-icon>
        </div>
        <div class="flex items-center justify-center ">
            <div class="bg-pink-500 rounded-full h-20 w-20 "> </div>
        </div>
    </div>
    <div class="w-3/4 lg:w-2/3 ">
        <div class="text-lg font-medium text-blue-900 m-6 ">Drop a Message</div>
        <div class=" flex lg:flex-row flex-col">
            <div class="m-6">
           
                <p class="text-sm text-stone-400">First Name</p> <input
                    class="border-b-2 border-stone-400 text-stone-400 w-36" type='text'  value={firstname} onChange={(e)=>{
                        setFirstname(e.target.value);
                    }} />
                <p class="text-sm text-stone-400 mt-6">E-mail</p> <input
                    class="border-b-2 border-stone-400 text-stone-400 w-36" type='text'  value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                    }} />
            </div>
            <div class="m-6 ">
                <p class="text-sm text-stone-400">Last Name</p> <input
                    class="border-b-2 border-stone-400 text-stone-400 w-36" type='text' value={lastname} onChange={(e)=>{
                        setLastname(e.target.value);
                    }}/>
                <p class="text-sm text-stone-400 mt-6">Phone</p> <input
                    class="border-b-2 border-stone-400 text-stone-400 w-36" type='number'  value={phonenumber} onChange={(e)=>{
                        setPhonenumber(e.target.value);
                    }}/>
            </div>
        </div>
        <div class="m-6 items-end ">
            <p class="text-sm text-stone-400 mt-6 ">Message</p> <input
                class="border-b-2 border-stone-400 text-stone-400 w-36" type='text'  value={message} onChange={(e)=>{
                    setMessage(e.target.value);
                }}/>
            <div class=" flex ">
                <Link href="/contact" class="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-blue-900 rounded text-white font-medium w-36 "> Send Message</Link >
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Contact
