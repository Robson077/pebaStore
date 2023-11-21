import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Logo = styled.h1`
    font-size: 40px;
    font-weight: 900;
    padding: 15px;

    span {
        color: #000080;
    }
`

export const ContainerSec = styled.section``

export const ContainerTitle = styled.div`
    width: 60%;

    h2 {
        font-size: 37px;
        padding: 23px;
        font-weight: 500;
    }

    span {
        color: #48D1CC;
        font-weight: 700;
    }
`

export const ContainerFoto = styled.div`
    
    background-image: url(${(props) => props.img});
    background-size: cover;
    height: 100vh;

    img {
        width: 100%;
        height: 58.5vh;
        margin-bottom: 0;
    }
`

export const Button = styled.button`
    background-color: #000;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: none;
    float: right;
    margin-right: 30px;
`