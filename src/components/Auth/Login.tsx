import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoogleBtn } from './GoogleBtn';
import { Wrapper } from './Wrapper';
import { useAuthContext } from '../../contexts/AuthContext';

interface LoginProps {

}

export const Login: React.FC<LoginProps> = () => {
  const { login } = useAuthContext();
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleLogin = () => {
    login({ email: emailRef.current.value, password: passwordRef.current.value });
  }

  return (
    <Wrapper>
      <section>
        <p className="text-center text-2xl text-gray-700 font-semibold">Log In</p>
        <p className="text-center text-base text-gray-500 font-semibold">Welcome back!</p>
      </section>
      <section className="flex flex-col mt-7">
        <GoogleBtn />
        <div className="separator my-7 text-gray-500 text-sm">or</div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="text" placeholder="Email Address" ref={emailRef} />
            <input className="py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none" type="password" placeholder="Password" ref={passwordRef} />
          </div>
          <button className="py-3 px-3 border-2 border-green-600 bg-green-600 text-white text-base font-semibold rounded-md focus:outline-none hover:bg-green-50 hover:text-green-600 transform duration-500" onClick={handleLogin}>Login</button>
        </div>
      </section>
      <section className="mt-4 text-center">
        <Link className="text-sm text-blue-500" to="/signup">Create an account</Link>
      </section>
    </Wrapper>
  );
}