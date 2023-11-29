import { useEffect, useState } from "react"
import axios from "axios"

import { Container, ContainerCard, ContainerEsquerdo, ContainerDeCima, Agora, Temp, ContainerImg, ContainerDireito, ContainerConteudo, EstadoDoTempo, Vento, Umidade} from "./styles.js"


function CardTemp() {

    const [api, setApi] = useState()

    useEffect(() => {
        const req = async () => {

            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=piacabucu&appid=95faddc776e440e02b3289b3942aaea4&lang=pt_br&units=metric")

            setApi(response.data)
            console.log(api)
        }
    
        req()
    }, [])

    return(
        <div>
            {
                api && (
                    <Container>
                        <ContainerCard>
                            <ContainerEsquerdo>
                                <ContainerDeCima>
                                    <h1>Tempo</h1>
                                    <Agora>Agora</Agora>
                                    <Temp> {Math.floor(api.main.temp)}ºC</Temp>
                                </ContainerDeCima>
                            </ContainerEsquerdo>

                            <ContainerDireito>
                                <ContainerImg>
                                    <img src={`https://openweathermap.org/img/wn/${api.weather[0].icon}.png`} />
                                </ContainerImg>
                                <ContainerConteudo>
                                    <EstadoDoTempo>{api.weather[0].description}</EstadoDoTempo>
                                    <Vento>Vento: {Math.floor(api.wind.gust)}km/h</Vento>
                                    <Umidade>Umidade: {api.main.humidity}%</Umidade>
                                </ContainerConteudo>
                            </ContainerDireito>
                        </ContainerCard>
                    </Container>
                    

                )
            }
        </div>
    )
}

export default CardTemp