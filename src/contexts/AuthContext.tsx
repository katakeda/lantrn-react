import React, { useContext, createContext, useState, useEffect } from 'react'
import firebase from 'firebase';
import * as firebaseUtil from '../utils/firebase';
import { asyncRequest } from '../utils/common';
import { USER_SIGNUP_API_ENDPOINT, USER_LOGIN_API_ENDPOINT } from '../utils/constants';
import { EmailPasswordCredentials, User } from '../types/common';
import { useAppContext } from './AppContext';

interface AuthData {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  authError: string | null;
  setAuthError: React.Dispatch<React.SetStateAction<string | null>>;
  signup: ({ email, password }: EmailPasswordCredentials) => Promise<void>;
  login: ({ email, password }: EmailPasswordCredentials) => Promise<void>;
}

const AuthContext: React.Context<AuthData> = createContext({} as AuthData);

export const AuthProvider: React.FC = ({ children }) => {
  const { toggleError } = useAppContext();
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      handleRedirect();
    })
    if (sessionStorage.getItem('id_token')) {
      const id_token = sessionStorage.getItem('id_token');
      const errorHandler = (error: any) => { toggleError(error) }
      const handler = (results: any) => {
        if (results.status) {
          setUser(results.user);
        }
      }
      asyncRequest<void>({
        url: USER_LOGIN_API_ENDPOINT,
        body: JSON.stringify({ id_token }),
        handler,
        errorHandler,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRedirect = async (): Promise<void> => {
    const redirectResult: firebase.auth.UserCredential = await firebase.auth().getRedirectResult();
    if (redirectResult.user) {
      const id_token = await redirectResult?.user?.getIdToken();
      const handler = (results: any) => { setUser(results.user) }
      const errorHandler = (error: any) => { toggleError(error) }
      asyncRequest<void>({
        url: USER_SIGNUP_API_ENDPOINT,
        body: JSON.stringify({ id_token }),
        handler,
        errorHandler,
      })
    }
  }

  const signup = async ({ email, password }: EmailPasswordCredentials): Promise<void> => {
    try {
      const userCredential = await firebaseUtil.signup({ email, password });
      const id_token = await userCredential?.user?.getIdToken();
      const handler = (results: any) => { setUser(results.user) }
      const errorHandler = (error: any) => { toggleError(error) }
      asyncRequest<void>({
        url: USER_SIGNUP_API_ENDPOINT,
        body: JSON.stringify({ id_token }),
        handler,
        errorHandler,
      })
    } catch (error) {
      toggleError(error);
    }
  }

  const login = async ({ email, password }: EmailPasswordCredentials): Promise<void> => {
    try {
      const userCredential = await firebaseUtil.login({ email, password });
      const id_token = await userCredential?.user?.getIdToken();
      const errorHandler = (error: any) => { toggleError(error) }
      const handler = (results: any) => {
        if (results.status) {
          sessionStorage.setItem('id_token', id_token || '');
          setUser(results.user);
        } else {
          setAuthError(results.message);
        }
      }
      asyncRequest<void>({
        url: USER_LOGIN_API_ENDPOINT,
        body: JSON.stringify({ id_token }),
        handler,
        errorHandler,
      })
    } catch (error) {
      setAuthError('Invalid email or password');
    }
  }

  const data = {
    user, setUser,
    authError, setAuthError,
    signup, login,
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);