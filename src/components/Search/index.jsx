import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AgroupList, List, ComponentSearch, Title, InputSearch, Photo, CharacterInfo, Container, Name } from './style'

export default function index() {

  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      let endpoint = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.results.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setCharacters(data.results);
      setSearchTerm('');
    }
  };
  
  return (
    <>
      <ComponentSearch>
        <Title />
        <InputSearch placeholder='Search by name' type="text" value={searchTerm} onChange={handleSearchTermChange} onKeyPress={handleKeyPress} />
      </ComponentSearch>

      <Container>
        {characters.length > 0 ? (
          <AgroupList>
            {characters.map((character) => {
              return (
                <List key={character.id}>
                  <Photo src={character.image} alt={character.name} />
                  <CharacterInfo>
                    <Link to={`/characters/details/${character.id}/rickandmorty`}><Name>{character.name}</Name></Link>
                    <div>
                      <p>Gender: <span> {character.gender}</span></p>
                      <p>Species: <span> {character.species}</span></p>
                      <p>State of life: <span> {character.status}</span></p>
                    </div>
                  </CharacterInfo>
                </List>
              )
            })}
          </AgroupList>
        ) : (
          noResults && <p>No results found.</p>
        )}
      </Container>
    </>
  )
}
