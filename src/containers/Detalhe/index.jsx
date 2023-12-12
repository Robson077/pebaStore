
import { useEffect, useState } from "react";
import api from "../../services/api";

import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Detalhes() {

    const [data, setData] = useState()

    const {id} = useParams();

    useEffect(() => {
        api.get(`/detalhe/${id}`).then((res) => {
            console.log(res.data)
            
            setData(res.data)
        })
        
    }, [id])
    
    return(
        <div>
            {
                data && (
                    <div>
                        <h1>{data.type}</h1>
                        <img src={data.urlImg} alt="" width={300} height={400}/>
                    </div>
                )
            }
        </div>
    )
}

export default Detalhes