import React from 'react'
import { Link } from 'react-router-dom'

import styled from "styled-components"
import { Sombra, TextHero, Container, TitleImage } from './styles'

import BackgroundImg from '../../assets/background.png'
import ImgTitle from '../../assets/img-title.png'

  const Background = styled.div`
    background-image: url(${BackgroundImg});
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    box-shadow: 0 0 10px rgb(0, 0, 0);
  `;

export default function index() {
  return (
    <>
      <Background>
        <Sombra>
          <Container>
            <TitleImage src={ImgTitle} alt='Rick and Morty' /> 
            <TextHero />
            <Link to={"/characters"}></Link>
          </Container>
        </Sombra>
      </Background>
    </>
  )
}
