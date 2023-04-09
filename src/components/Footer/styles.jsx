import styled from "styled-components";

export const Footer = styled.footer `
    border-top: 2px solid ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.background};
    padding: 1.5rem 4rem 1.5rem 4rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 375px) {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`

export const DivName = styled.div `
    p {
        color: ${props => props.theme.colors.white};
        font-size: 1.1rem;
        font-weight: 300;

        &::before {
            content: "Developed by: Otoniel Emanuel";
        }
    }

`

export const DivSocialMidia = styled.div `
    ul {
        display: flex;
        column-gap: 20px;
    }

    ul li {
        list-style: none;
    }

    ul li a {
        font-size: 1.4rem;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
        transition: color 0.3s ease;

        &:hover {
            color: ${props => props.theme.colors.green};
        }

        @media (max-width: 375px) {
            font-size: 1.2rem;
        }
    }
`