import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, AgroupaList, List, Photo, CharacterInfo, Name } from './styles'

import Paginacao from '../ControlsButtons'

export default function index() {

  const linkApi = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const fetchAPI = (linkApi) => {
    fetch(linkApi)
      .then(resp => resp.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info)
      })
      .catch(error => console.log(error));
  };
    
  const onPrevious = () => {
    fetchAPI(info.prev)
  }
    
  const onNext = () => {
    fetchAPI(info.next)
  }

  useEffect(() => {
    fetchAPI(linkApi);
  }, []) 

  return (
    <>
      <Container>
        <AgroupaList>
          {characters.map((item) => {
            return (
              <List key={item.id}>
                <Photo src={item.image} alt={item.name} />
                <CharacterInfo>
                  <Link to={`/characters/details/${item.id}/rickandmorty`}><Name>{item.name}</Name></Link>
                    <div>
                      <p>Gender: <span> {item.gender}</span></p>
                      <p>Species: <span> {item.species}</span></p>
                      <p>State of life: <span> {item.status}</span></p>
                    </div>
                </CharacterInfo>
              </List>   
            )
            })      
          }
        </AgroupaList>
      </Container>
      <Paginacao next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext}/>
    </>
  )
}
