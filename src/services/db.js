import { v4 } from "uuid"

const db = [
    // "cards filter"
    {
        id: v4(),
        type: "casa",
        dono: "guga",
        aluga: true,
        urlImg: "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    },
    {
        id: v4(),
        type: "casa",
        dono: "jadson",
        aluga: false,
        urlImg: "https://img.freepik.com/fotos-gratis/casa-isolada-no-campo_1303-23773.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    },
    {
        id: v4(),
        type: "casa",
        dono: "Robson",
        aluga: true,
        urlImg: "https://img.freepik.com/fotos-gratis/renderizacao-3d-de-casa-aconchegante-moderna-com-piscina-e-estacionamento-para-venda-ou-aluguel_1142-40511.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    },

    {
        id: v4(),
        type: "supermercado",
        nomeEstabelecimento: "Mercado preço bom",
        urlImg: "https://img.freepik.com/fotos-gratis/frigorifico-com-alimentos_1203-842.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    },

    {
        id: v4(),
        type: "supermercado",
        nomeEstabelecimento: "comercial vitoria",
        urlImg: "https://img.freepik.com/fotos-gratis/pessoa-fazendo-compras-com-mascara-facial_23-2149565242.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    },

    {
        id: v4(),
        type: "supermercado",
        nomeEstabelecimento: "mercado DF",
        urlImg: "https://img.freepik.com/fotos-gratis/barracas-de-frutas-frescas-no-mercado-de-san-miguel_53876-146829.jpg?size=626&ext=jpg&ga=GA1.1.1805933026.1700498549&semt=sph"
    }
]

export default db