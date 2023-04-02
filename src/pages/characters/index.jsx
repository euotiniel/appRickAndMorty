import React from 'react'
import { useState, useEffect } from 'react'

import Navbar from '../../components/Navbar'
import CharactersComponents from '../../components/CharactersComponents'
import Search from '../../components/Search'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

export default function index() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800)
  })

  return (
    <>
      <Navbar /> 
      {
        isLoading ? (<Loader />)
        :
        <>
          <Search />
          <CharactersComponents />
          <Footer />
        </>
      }
    </>
  )
}
