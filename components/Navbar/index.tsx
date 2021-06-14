import React,{ FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'


const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-blue">{name}</span>
        </a>
      </Link>
    ) : null
  )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    if (pathname === '/projects') setActiveItem('Projects')
    if (pathname === '/resume') setActiveItem('Resume')
  }, [])


  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-500 border-b-4 border-blue-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-lg text-pink-500">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/' name='About' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/projects' name='Projects' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/resume' name='Resume' />
        {/* {
          activeItem !== 'About' && (
            <Link href="/">
              <a>
                <span onClick={()=>setActiveItem('About')}>About</span>
              </a>
            </Link>
          )}
        {
          activeItem !== 'Projects' && (
            <Link href="/projects">
              <a>
                <span onClick={()=>setActiveItem('Projects')}>Projects</span>
              </a>
            </Link>
        )}
        {
          activeItem !== 'Resume' && (
            <Link href="/resume">
              <a>
                <span onClick={()=>setActiveItem('Resume')}>Resume</span>
              </a>
            </Link>
        )} */}
      </div>
    </div>
  )
}

export default Navbar;