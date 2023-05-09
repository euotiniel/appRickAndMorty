import styled from "styled-components";

export const Container = styled.div `
    color: ${porps => porps.theme.colors.white};
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    @media (max-width: 920px) {
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 320px) {
        width: 80%;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`
export const ContainerInfo = styled.div `
    border: 2px solid ${props => props.theme.colors.green};
    padding: 1.5rem;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        column-gap: 1.5rem;
    }

`

export const Title = styled.h1 `
    color: ${props => props.theme.colors.white};
    margin: 2rem;
    font-style: italic;

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.colors.green};   
    }

    @media (max-width: 375px) {
        margin-top: 35rem;
    }


`

export const DivPhoto = styled.div`
    width: 100%;
`;

export const Photo = styled.img `
    height: 350px;
    width: 100%;
    user-select: none;
    object-fit: cover;
    background-position: center center;
    background-size: 100% auto;
    background-repeat: no-repeat;

    @media (max-width: 920px) {
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
    }

    @media (max-width: 320px) {
        width: 100%;
        height: 300px;
        margin-bottom: 1rem;
    }
`

export const DivDetails = styled.div `
    width: 100%;

`

export const Details = styled.div `
    display: block;
    line-height: 1.2rem;
    margin-bottom: 1rem;

    p {
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme.colors.baldWhite};
    }

    span {
        font-weight: 700;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.green};
    }

    @media (max-width: 920px) {
        display: flex;

        p {
            font-weight: 400;
            font-size: 1.3rem;
        }

        span {
            margin-left: 10px;
            font-weight: 400;
            font-size: 1.3rem;
        }
    }

    @media (max-width: 920px) {
        display: flex;

        p {
            font-weight: 400;
            font-size: 1.3rem;
        }

        span {
            margin-left: 5px;
            font-weight: 400;
            font-size: 1.3rem;
        }
    }

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1.5rem;

        span {
            margin-left: 0px;
            margin-top: 5px;
        }
    }
`