import React from 'react';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import Postpage from './pages/Postpage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={Postpage} path="/@:username/:postId" />
    </>
  );
};

export default App;
