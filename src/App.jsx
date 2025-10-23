import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <ProfilePage/>
      <Footer/>
    </div>
  )
}

export default App