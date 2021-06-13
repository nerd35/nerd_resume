import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img src="https://media-exp3.licdn.com/dms/image/D4D35AQGvcwdSh_s6PA/profile-framedphoto-shrink_200_200/0/1623563518076?e=1623668400&v=beta&t=MhXGtZI-dHFJ496A7rH9jK8daXCKZteHXu-R0Yee2Hk" alt="user avatar" className="w-32 h-32 rounded-full mx-auto" />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>
          Umukoro
        </span>
        Chinedu</h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Frontend Developer</p>
      <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-centers justify-center" href="" download="name"><GiTie className="w-6 h-6 " /> Download Resume</a>
      {/* //Social Icon */}
      <div className="flex justify-around my-5 text-blue-500 w-9/12 md:w-full mx-auto">
        <a href="https://github.com/"><AiFillGithub className="w-8 h-8 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/umukoro-chinedu-05a60434/"><AiFillLinkedin className="w-8 h-8 cursor-pointer" /></a>
        <a href=""><AiFillFacebook className="w-8 h-8 cursor-pointer" /></a>
      </div>

      {/* address */}
      <div className="py-4 my-5 bg-gray-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>
            Lagos, Nigeria
          </span>

        </div>
        <p className="my-2">mukolochinedu@gmail.com</p>
        <p className="my-2">2348140758368</p>
      </div>
      {/* Email Button */}
      <button className="bg-gradient-to-r from-pink-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 ">Email Me</button>
      <button className="bg-gradient-to-r from-pink-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 ">Toggle Theme</button>
    </div>
  )
}

export default Sidebar
