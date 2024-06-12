import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './Home.css';

const Home = () => {
  const id = "6650de1e599c60b93d4f60be";
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed id={id}/>
        <Rightbar />
      </div>
      
    </>
    
  )
}

export default Home;