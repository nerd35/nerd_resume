import { RiBatteryFill, RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill, BsFillBootstrapFill } from 'react-icons/bs';
import { IService, ISkill } from './type';
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { GrReactjs } from 'react-icons/gr';
import { SiAngular, SiFigma, SiJavascript, SiMaterialUi, SiMongodb, SiStyledComponents, SiTailwindcss } from 'react-icons/si'




export const services:IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Developer',
    about: 'I am good a developing beautiful and scalable web application using <b>HTML</b>, <b>CSS</b>, <b>React.js</b>, <b>Bootstrap</b>, <b>Tailwindcss</b> and amonst others',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about: 'Handle database, server, api  using  <b>Express</b>, <b>Mongodb</b> and other popular frameworks'
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust REST API using <b>Node Api</b>,'
  },
  {
    Icon: MdDeveloperMode,
    title: ' Web Design Tutor',
    about: 'I teach newbies and beginners how to create awesome web pages using <b>Html</b>, <b>CSS</b> and <b>Javascript</b>'
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about: 'I am a stunning user intervace designer using <b>Figma</b>,'
  },
  {
    Icon: RiBatteryFill,
    title: 'Product Documentations',
    about: 'I am good at writing product/user manuals on how and steps to take when using a tech product'
  }
]

export const languages: ISkill[] = [
  {
    name: 'HTML & CSS',
    level: '70%',
    Icon: AiFillHtml5
  },
  {
    name: 'Bootstrap',
    level: '70%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'React',
    level: '50%',
    Icon: GrReactjs
  },
  {
    name: 'Material-ui',
    level: '60%',
    Icon: SiMaterialUi
  },
  {
    name: 'Styled-components',
    level: '70%',
    Icon: SiStyledComponents
  },
  {
    name: 'Angular',
    level: '50%',
    Icon: SiAngular
  },
  {
    name: 'Tailwindcss',
    level: '50%',
    Icon: SiTailwindcss
  },
  {
    name: 'JavaScript',
    level: '50%',
    Icon: SiJavascript
  },
]

export const tools: ISkill[] = [
  {
    name: 'GitHub',
    level: '75%',
    Icon: AiFillGithub
  },
  {
    name: 'Mongodb',
    level: '50%',
    Icon: SiMongodb
  },
  {
    name: 'Figma',
    level: '60%',
    Icon: SiFigma
  },
]