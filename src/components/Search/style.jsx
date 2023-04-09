import styled from "styled-components";

export const ComponentSearch = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 4rem 0 4rem;

    @media (max-width: 556px) {
        display: block;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled.h1 `
    color: ${props => props.theme.colors.white};

    &::before {
        content: "Characters";
    }

    @media (max-width: 375px) {
        margin-left: -10px;
    }

`

export const InputSearch = styled.input `
    padding: 0.8rem;
    margin: 0.5rem;
    color: ${props => props.theme.colors.white};
    border: 1.5px solid ${props => props.theme.colors.green};
    border-radius: 4px;
    width: 250px;
    outline: none;
    background-color: #000;

    @media (max-width: 556px) {
        width: 95%;
        margin-top: 30px;
    }

    @media (max-width: 375px) {
        margin-left: -10px;
    }
`

export const Container = styled.div `
    color: ${porps => porps.theme.colors.white};
    margin: 0 4rem 0 4rem;
    margin-bottom: 5rem;
`

export const AgroupList = styled.ul `
    margin-top: 2.5rem;
    margin-bottom: 111px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
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

export const Photo = styled.img `
    width: 100%;
    height: 300px;
    user-select: none;
    object-fit: cover;
    background-position: center center;
    background-size: 100% auto;
    background-repeat: no-repeat;
`

export const Name = styled.h3 `
    font-size: 1.5rem;
    margin-top: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.green};
`
