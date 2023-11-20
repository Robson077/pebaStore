import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Title = styled.h1`
    font-weight: 400;
    padding: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const LabelEmail = styled.label`
    font-weight: 300;
    font-size: 25px;
    display: flex;
    flex-direction: column;
`

export const InputEmail = styled.input`
    height: 35px;
    padding-left: 10px;
`

export const LabelSenha = styled.label`
    font-weight: 300;
    font-size: 25px;
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`

export const InputSenha = styled.input`
    height: 35px;
    padding-left: 10px;
`

export const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    margin-top: 60px;
`

export const Button = styled.button`
    background-color: #000;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: none;
    float: right;
`

export const Direcionamentos = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SignUp = styled.p`
    color: #000;
    font-size: 20px;
`