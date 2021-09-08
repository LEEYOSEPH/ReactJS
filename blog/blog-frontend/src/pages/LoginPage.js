import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LgoinForm from '../containers/auth/LgoinForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LgoinForm />
    </AuthTemplate>
  );
};

export default LoginPage;
