import { Mail, Lock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import bg from '../../public/bg1.png'
import logo from '../../public/logo.png'
import google from '../../public/google.svg'
import github from '../../public/github.svg'

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/background.png")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="grid place-items-center mx-auto max-w-4xl w-full py-6">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-6 lg:gap-0 w-full shadow-md rounded-2xl">
          <div className="lg:w-1/2 w-full bg-[#5D7DF3]">
            <Image
              src={bg}
              alt="bg"
              className="w-full h-full"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-center py-10 bg-[#eff1f6]">
            <div className="rounded px-4 py-2 shadow ">
              <Image src={logo} alt="bg" width={100} height={100} />
            </div>
            <div className="text-slate-900 font-medium text-xl py-5">
              Hello! Welcome Back
            </div>
            <form className="w-full px-5 py-6 space-y-6">
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Email</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <Mail className="w-7 h-7 text-[#A1BDFD]" />
                  <input
                    type={'email'}
                    placeholder="example@123.com"
                    name="email"
                    className="outline-none w-full px-4"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Password</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <Lock className="w-7 h-7 text-[#A1BDFD]" />
                  <input
                    type={'password'}
                    placeholder="**********"
                    name="password"
                    className="outline-none w-full px-4"
                  />
                </div>
                <div className="flex justify-between items-center w-full"></div>
                <div className="grid place-items-center w-full mx-auto pt-7">
                  <button className="bg-[#5D7DF3] text-white text-lg w-full px-8 py-3 rounded-md uppercase font-semibold">
                    Login
                  </button>
                </div>
                <div className="flex justify-center w-full items-center gap-3 py-3">
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                  <div className="mt-3">or</div>
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                </div>
                <div className="flex justify-center items-center w-full gap-8 pb-8">
                  <div className="rounded px-4 py-2 shadow bg-white ">
                    <Image src={google} alt="bg" width={30} height={30} />
                  </div>{' '}
                  <div className="rounded px-4 py-2 shadow bg-white ">
                    <Image src={github} alt="bg" width={30} height={30} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
