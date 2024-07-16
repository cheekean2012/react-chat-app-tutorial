import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar' // Import the 'Sidebar' component
import MessageContainer from '../../components/messages/MessageContainer' // Import the 'MessageContainer' component

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar /> {/* Use the 'Sidebar' component */}
      <MessageContainer />
    </div>
  )
}

export default Home
