import styled from 'styled-components';

export const Sombra = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(3, 3, 3, 0.774), rgba(0, 0, 0, 0.945) 570px);
`

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    gap: 5%;
	justify-content: center;
	align-items: center;
	height: 100vh;
    a {
        padding: 15px 25px 15px 25px;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.green};
        text-decoration: none;
        transition: transform 0.5s ease-in-out;
        color: ${props => props.theme.colors.blue};
        transition: 0.7s ease;

        &:hover {
            border: 1px solid ${props => props.theme.colors.blue};
            color: ${props => props.theme.colors.green};
        }

        &::before {
            content: "See characters";
        }
    }
`

export const TextHero = styled.p `
    line-height: 25px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-weight: 300;
    width: 60%;
    font-size: 1.2rem;
    font-weight: 300;

    &::before {
        content: "Rick and Morty is an American animated adult series created by Justin Roiland and Dan Harmon. The series follows the interdimensional adventures of Rick Sanchez, an alcoholic scientist and genius, and his grandson, Morty Smith, a shy and not very intelligent teenager, as they travel to different universes and planets in a variety of strange and dangerous adventures.";
    }

    @media (max-width: 375px) {
        width: 90%;
        font-size: 1rem;
        font-size: 200;
    }
`

export const TitleImage = styled.img `
    height: 100px;
    user-select: none;
`

