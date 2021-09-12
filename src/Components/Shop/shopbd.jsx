

const Shopbd = [
    {
        id: "1",
        categoria: "Pizza",
        producto: "Muzzarella",
        precio: "10p",
        foto: "/Productos/muz.jpg"
    },
    {
        id: "2",
        categoria: "Pizza",
        producto: "Super Muzarella",
        precio: "15p",
        foto: "/Productos/supermuz.jpg"
    },
    {
        id: "3",
        categoria: "Pizza",
        producto: "Lo Que sobro",
        precio: "5p",
        foto: "/Productos/detodo.jpg"
    },
    {
        id: "4",
        categoria: "Pizza",
        producto: "Fugazzeta Rellena",
        precio: "20p",
        foto: "/Productos/fugare.jpg"
    },
    {
        id: "5",
        categoria: "Pizza",
        producto: "Morrones",
        precio: "10p",
        foto: "/Productos/morron.png"
    },
    {
        id: "6",
        categoria: "Postre",
        producto: "Pura Maldad",
        precio: "10p",
        foto: "/Productos/purechaos.jpg"
    },
    {
        id: "7",
        categoria: "Sushi",
        producto: "Pizza de Sushi",
        precio: "10p",
        foto: "/Productos/pizzasushi.jpg"
    },
    {
        id: "8",
        categoria: "Empanada",
        producto: "Empanada de Carne",
        precio: "5p",
        foto: "/Productos/empacarn.jpg"
    }
    
    
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Shopbd);
    }, 3250);
});