import React from 'react';
import { GoogleBtn } from './GoogleBtn';
import { Wrapper } from './Wrapper';

interface SignupProps {

}

export const Signup: React.FC<SignupProps> = ({ }) => {
  return (
    <Wrapper>
      <section>
        <p className="text-center text-2xl text-gray-700 font-semibold">Sign up</p>
      </section>
      <section className="flex flex-col mt-7">
        <GoogleBtn />
        <div className="separator my-7 text-gray-500 text-sm">or</div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="text" placeholder="Firstname" />
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="text" placeholder="Lastname" />
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="text" placeholder="Email Address" />
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="password" placeholder="Password" />
          </div>
          <button className="py-3 px-3 border-2 border-green-600 bg-green-600 text-white text-base font-semibold rounded-md focus:outline-none hover:bg-green-50 hover:text-green-600 transform duration-500">Login</button>
        </div>
      </section>
      <section className="mt-4 text-center text-sm">
        <span>Already have an account? </span><a className="text-blue-500" href="/login">Login</a>
      </section>
    </Wrapper>
  );
}