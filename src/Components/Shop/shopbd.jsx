

const Shopbd = [
    {
        producto: "Muzzarella",
        precio: "10p",
        foto: "/Productos/muz.jpg"
    },
    {
        producto: "Super Muzarella",
        precio: "15p",
        foto: "/Productos/supermuz.jpg"
    },
    {
        producto: "Lo Que sobro",
        precio: "5p",
        foto: "/Productos/detodo.jpg"
    },
    {
        producto: "Fugazzeta Rellena",
        precio: "20p",
        foto: "/Productos/fugare.jpg"
    },
    {
        producto: "Morrones",
        precio: "10p",
        foto: "/Productos/morron.png"
    }
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Shopbd);
    }, 3250);
});