import '../css/componentes.css';
// import archijobs from '../assets/img/Archi.png';
export const saludar = nombre => {
    console.log('Creando etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, soy una función`;
    document.body.append(h1);


    //Img
    // console.log(archijobs);
    // const img = document.createElement('img');
    // img.src = archijobs;
    // document.body.append(img)
}
