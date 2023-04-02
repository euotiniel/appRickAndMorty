import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import { Container, ContainerInfo, Title, Photo, DivDetails, Details } from './styles'

export default function index() {

    const { id } = useParams();

    const [personagem, setPersonagem] = useState({})

    useEffect (() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(resp => resp.json())
        .then(data => {
          const {name, image, species, type, gender, status} = data
          const personagem = {
            id,
            name,
            image,
            species,
            type,
            gender,
            status,
            localizacao: data.location.name
        }

        console.log(personagem)
        setPersonagem(personagem)  

        })

    }, [id])

  return (
    <>  
        <Container>
        <Title>
            <Link to="/characters">&larr;&nbsp;&nbsp;</Link>{personagem.name}
        </Title>

        <ContainerInfo>
            <div>
                <Photo src={personagem.image} alt="" />
            </div>
                
            <DivDetails>
                <Details>
                    <p>Name:</p>
                    <span>{personagem.name}</span>
                </Details>
                <Details>
                    <p>Species:</p>
                    <span>{personagem.species} </span>
                </Details>
                <Details>
                    <p>Tyle:</p>
                    <span>{personagem.type ? personagem.type : <span>Null</span>}</span>
                </Details>
                <Details>
                    <p>Gender:</p>
                    <span>{personagem.gender}</span>
                </Details>
                <Details>
                    <p>State of life:</p>
                    <span>{personagem.status}</span>
                </Details>
                <Details>
                    <p>Last location:</p>
                    <span>{personagem.localizacao}</span>
                </Details>
            </DivDetails>
        </ContainerInfo>
        </Container>
    </>
  )
}
