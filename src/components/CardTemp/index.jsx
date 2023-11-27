import { useEffect, useState } from "react"
import axios from "axios"

import {Container, ContainerMenor} from "./styles.js"


function CardTemp() {

    const [api, setApi] = useState()

    useEffect(() => {
        const req = async () => {

            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=piacabucu&appid=95faddc776e440e02b3289b3942aaea4&lang=pt_br&units=metric")

            setApi(response.data)
            
        }
    
        req()
    }, [])
    console.log(api)

    return(
        <div>
            {
                api && (
                    <Container>
                        <p> {Math.floor(api.main.temp)}ºC</p>

                        <ContainerMenor>
                            <p>{api.weather[0].description}</p>

                            <img src={`https://openweathermap.org/img/wn/${api.weather[0].icon}.png`} />
                        </ContainerMenor>
                    </Container>

                )
            }
        </div>
    )
}

export default CardTemp