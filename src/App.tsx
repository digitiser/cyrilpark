import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import TopNav from './components/top-nav';
import { Outlet } from 'react-router-dom';

function App() : React.JSX.Element {
  return (
    <Container className='page-body'>
      <TopNav />
      <Outlet />      
    </Container>
  );
}

export default App;
