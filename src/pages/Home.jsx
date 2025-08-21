import React from 'react'
import avatar from '../assets/avt.png'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Avatar section */}
        <div className="flex justify-center">
          <img
            className="h-48 w-48 rounded-full object-cover border-4 border-gray-200"
            src={avatar}
             alt="Profile"
          />
        </div>
        
        {/* Name and title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Lại Văn Khải</h1>
          <p className="mt-2 text-xl text-gray-600">Fullstack Developer</p>
        </div>
        
        {/* Brief introduction */}
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Một đoạn giới thiệu ngắn về bản thân bạn. Bạn có thể viết về kinh nghiệm,
            kỹ năng, hoặc mục tiêu nghề nghiệp của mình.
          </p>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">GitHub</span>
            {/* Add your social icons here */}
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </div>
  )
}

export default Home