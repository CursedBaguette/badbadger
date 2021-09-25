

const Shopbd = [
    {
        id: "1",
        categoria: "Pizza",
        producto: "Muzzarella",
        precio: 10,
        foto: "/Productos/muz.jpg",
        descripcion: "Masa, salsa, queso"
    },
    {
        id: "2",
        categoria: "Pizza",
        producto: "Super Muzarella",
        precio: 15,
        foto: "/Productos/supermuz.jpg",
        descripcion: "Masa, salsa, queso y mas queso"
    },
    {
        id: "3",
        categoria: "Pizza",
        producto: "Lo Que sobro",
        precio: 5,
        foto: "/Productos/detodo.jpg",
        descripcion: "Masa, salsa, queso y todo lo que sobra de otras pizas arriba"
    },
    {
        id: "4",
        categoria: "Pizza",
        producto: "Fugazzeta Rellena",
        precio: 20,
        foto: "/Productos/fugare.jpg",
        descripcion: "Masa, cebolla, queso y mas queso pero adentro"
    },
    {
        id: "5",
        categoria: "Pizza",
        producto: "Morrones",
        precio: 10,
        foto: "/Productos/morron.png",
        descripcion: "Masa, salsa, queso, morrones"
    },
    {
        id: "6",
        categoria: "Postre",
        producto: "Pura Maldad",
        precio: 10,
        foto: "/Productos/purechaos.jpg",
        descripcion: "Masa, salsa, queso, chocolate, anana, sandia y cereza"
    },
    {
        id: "7",
        categoria: "Sushi",
        producto: "Pizza de Sushi",
        precio: 10,
        foto: "/Productos/pizzasushi.jpg",
        descripcion: "Masa, salsa, queso, Sushi"
    },
    {
        id: "8",
        categoria: "Empanada",
        producto: "Empanada de Carne",
        precio: 5,
        foto: "/Productos/empacarn.jpg",
        descripcion: "Masa, carne, empanada"
    }
    
    
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Shopbd);
    }, 3250);
});