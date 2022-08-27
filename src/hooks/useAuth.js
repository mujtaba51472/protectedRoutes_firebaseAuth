import {  useContext } from 'react';
import AuthContext from '../auth/authProvider'
export const UseAuth = () => {
    return useContext(AuthContext);
  };