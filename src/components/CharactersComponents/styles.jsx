import styled from "styled-components";

export const Container = styled.div `
    color: ${porps => porps.theme.colors.white};
    margin: 0 4rem 0 4rem;
`

export const AgroupaList = styled.ul `
    margin-top: -3rem;
    margin-bottom: 5rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;

    @media (max-width: 375px) {
        margin-left: -8%;
    }
`

export const List = styled.li `
    align-items: center;
    border: 1px solid ${props => props.theme.colors.baldGreen};
    border-radius: 20px;
`

export const CharacterInfo = styled.div `
    padding: 0 20px 20px 20px;

    a {
        text-decoration: none;
    }

    div p {
        display: block;
        line-height: 25px;
        font-weight: 300;
    }

    p span {
        font-weight: 500;
    }
`

export const Name = styled.h3 `
    font-size: 1.5rem;
    margin-top: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.green};
`

export const OutherInfo = styled.div `
    padding: 10px;
    margin-left: -30%;
    max-width: 65%;
    display: grid;
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 500;

    div item {
        color: ${porps => porps.theme.colors.baldWhite};
        font-weight: 400;
    }

    span {
        font-weight: 400;
    }
`

export const Photo = styled.img `
    width: 100%;
    height: 300px;
    user-select: none;
    object-fit: cover;
    background-position: center center;
    background-size: 100% auto;
    background-repeat: no-repeat;
`