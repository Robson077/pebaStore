import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;

    background-color: #DCDCDC;

    margin-bottom: 20px;

    padding: 15px;

    gap: 40px;
    
    height: 240px;

    width: 95vw;

    border-radius: 10px;
`

export const ContainerEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerDeCima = styled.div`
    h1 {
        margin-bottom: 20px;
        font-weight: 700;

        text-align: center;

        font-family: 'Roboto', sans-serif;

    }
`

export const Agora = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #4F4F4F;

    font-family: 'Roboto', sans-serif;
`

export const Temp = styled.p`
    font-size: 50px;
    font-weight: 700;
    color: #363636;
    font-family: 'Roboto', sans-serif;
`

export const ContainerDireito = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 15px;
        font-weight: 600;
        color: #363636;
        font-family: 'Roboto', sans-serif;

        text-transform: capitalize;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 100px;
    }
`

export const ContainerConteudo = styled.div``

export const EstadoDoTempo = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #363636;
    font-family: 'Roboto', sans-serif;

    text-transform: capitalize;
`

export const Vento = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: #363636;
    font-family: 'Roboto', sans-serif;

    text-transform: capitalize;
`

export const Umidade = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: #363636;
    font-family: 'Roboto', sans-serif;

    text-transform: capitalize;
`