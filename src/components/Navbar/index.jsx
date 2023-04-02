import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Navbar, Image } from './styles'

import Logo from '../../assets/logo.png'

export default function Home() {
  return (
    <>
      <Header>
        <Navbar>
          <Link to="/">
            <Image src={Logo} alt="Logo App Rick and Morty"/>
          </Link>
        </Navbar>
      </Header>
    </>
  )
}
