import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import CharactersComponents from '../../components/CharactersComponents'
import Search from '../../components/Search'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

export default function index() {

  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setIsDataLoaded(true);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar /> 
      {isLoading ? <Loader /> :
        <>
          <Search />
          {isDataLoaded && <CharactersComponents />}
          <Footer />
        </>
      }
    </>
  )
}
