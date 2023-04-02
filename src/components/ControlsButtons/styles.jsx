import styled from "styled-components";

export const ListAgroup = styled.ul `
    display: flex;
    justify-content: center;
    column-gap: 30px;
    margin-bottom: 5rem;
`

export const ListItem = styled.li `
    list-style: none;
`

export const ButtonNext = styled.button `
    padding: 15px 25px 15px 25px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        background-color: #5fc038b5 !important;
        font-style: oblique;
        transform: skew(-5deg);
    }
`

export const ButtonPrev = styled.button `
    padding: 15px 25px 15px 25px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        background-color: #5fc038b5 !important;
        font-style: oblique;
        transform: skew(5deg);
    }
`

export const ButtonNeutro = styled.button `
    padding: 15px 25px 15px 25px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: transform 0.3s ease-in-out;

    &:hover {
        background-color: #5fc038b5 !important;
    }
`