import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 5px;
        width: 300px;
        height: 400px;
    }
`

export const Descripion = styled.div`
    width: 300px;
    height: 40px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: #DCDCDC;

    h3 {
        font-size: 20px;
    }

    span {
        font-weight: 400;
    }

    p {
        font-size: 20px;
        font-weight: 600;
    }
`

export const Stars = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 35px;
`
