import styled from "styled-components"

export const ContainerFoto = styled.div`
    
    background-image: url(${(props) => props.img});
    background-size: cover;
    padding: 10px;
    /* height: 100vh; */

    img {
        width: 100%;
        height: 100vh;
        margin-bottom: 0;
    }
`

export const Button = styled.button`
    background-color: #000;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: none;
    float: left;
    margin-bottom: 20px;
    /* margin-right: 30px; */
`

export const Container = styled.div`
    p {
        font-size: 35px;
        font-weight: 900;
    }

    span {
        font-size: 25px;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        color: #000080;
    }

    img {
        height: 400px;
    }
`
