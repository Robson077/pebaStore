import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Logo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    padding: 10px;
`
export const ContainerSec = styled.section``

export const ContainerTitle = styled.div`
    width: 60%;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 27px;
        padding: 20px;
        font-weight: 400;
    }
`

export const ContainerFoto = styled.div`
    margin-top: 100px;
    width: 100%;
    

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