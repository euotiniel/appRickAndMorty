import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 4.850rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.background};
`

export const Navbar = styled.nav `
    width: 100%;
    max-width: 80rem;
    margin: 0px auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0px 2.5rem;
    display: flex;
    align-items: center;
`

export const Title = styled.h1 `
    font-size: 1.5rem;
    font-weight: 600;
    user-select: none;

    &::before {
        content: "Rick and Morty App";
    }
`

export const Image = styled.img `
    object-fit: cover;
    height: 55px;
    background-position: center center;
    background-repeat: no-repeat;
    user-select: none;
`