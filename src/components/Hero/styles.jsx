import styled from 'styled-components';

export const Sombra = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(3, 3, 3, 0.774), rgba(0, 0, 0, 0.945) 570px);
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        position: absolute;
        top: 68.5%;
        padding: 15px 25px 15px 25px;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.green};
        text-decoration: none;
        transition: transform 0.5s ease-in-out;
        color: ${props => props.theme.colors.blue};

        &:hover {
            border: 1px solid ${props => props.theme.colors.blue};
            color: ${props => props.theme.colors.green};
            font-style: oblique;
            transform: skew(-10deg);
        }

        &::before {
            content: "See characters";
        }

        @media (max-width: 920px) {
            top: 65%;
            font-size: 1rem;
            font-weight: 300;
        }

        @media (max-width: 320px) {
            top: 70%;
            font-size: 1rem;
            font-weight: 300;
        }
    }
`

export const TextHero = styled.p `
    position: fixed;
    top: 49%;
    line-height: 25px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-weight: 300;
    width: 56%;
    font-size: 1.2rem;
    font-weight: 300;

    &::before {
        content: "Rick and Morty is an American animated adult series created by Justin Roiland and Dan Harmon. The series follows the interdimensional adventures of Rick Sanchez, an alcoholic scientist and genius, and his grandson, Morty Smith, a shy and not very intelligent teenager, as they travel to different universes and planets in a variety of strange and dangerous adventures.";
    }

    @media (max-width: 920px) {
        width: 70%;
        top: 45%;
        font-size: 1rem;
        line-height: 20px;
        font-weight: 300;
    }

    @media (max-width: 320px) {
        width: 90%;
        top: 30%;
        font-size: 1rem;
        line-height: 20px;
        font-weight: 200;
    }
`

export const TitleImage = styled.img `
    height: 100px;
    position: fixed;
    top: 30%;
    user-select: none;

    @media (max-width: 920px) {
        height: 80px;
        top: 27%;
    }

    @media (max-width: 320px) {
        height: 70px;
        top: 10%;
    }
`

