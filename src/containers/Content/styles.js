import styled from "styled-components"

export const Container = styled.div`
    overflow: hidden;

    h2 {
        color: #000080;
        font-size: 30px;
        font-weight: 900;
        margin: 50px 0 20px 20px;
    }

    .swiper-wrapper {
        display: flex;
        flex-direction: row;

        /* justify-content: space-around; */
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.h1`
    font-size: 40px;
    font-weight: 900;
    padding: 15px;

    span {
        color: #000080;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
`

export const P = styled.p`
    font-size: 30px;
    font-weight: 700;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;

    padding: 5px;
    background-color: #DCDCDC;
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