import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

import { useTheme} from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div>
      <img src="https://media-exp3.licdn.com/dms/image/D4D35AQGvcwdSh_s6PA/profile-framedphoto-shrink_200_200/0/1623563518076?e=1623859200&v=beta&t=QkgmGk2pEYq7rwI6Cp2_cPf7-ZFHsOwL7oMxRqu7ZxA" alt="user avatar" className="w-32 h-32 mx-auto rounded-full" />
      <h3 className="my-4 text-3xl font-medium tracking-wider text-pink-500 font-kaushan">
        <span className="text-blue-500">Umukoro </span>
        Chinedu
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-300 rounded-full">Frontend Developer</p>
      <a className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full items-centers" href="" download="name"><GiTie className="w-6 h-6 " /> Download Resume</a>
      {/* //Social Icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
        <a rel='noopener noreferrer' target="_blank" href="https://github.com/"><AiFillGithub className="w-8 h-8 cursor-pointer" /></a>
        <a rel='noopener noreferrer' target="_blank" href="https://www.linkedin.com/in/umukoro-chinedu-05a60434/"><AiFillLinkedin className="w-8 h-8 cursor-pointer" /></a>
        <a rel='noopener noreferrer' target="_blank" href=""><AiFillFacebook className="w-8 h-8 cursor-pointer" /></a>
      </div>

      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-300" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
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
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-pink-400 to-blue-400 focus:outline-none " onClick={()=>window.open('mailto:mukolochinedu@gmail.com')}>Email Me</button>
      <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-pink-400 focus:outline-none">Toggle Theme</button>
    </div>
  )
}

export default Sidebar
