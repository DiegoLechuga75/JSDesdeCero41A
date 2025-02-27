//1- Seleccionamos el elemento
const btn = document.querySelector('.main-content button');

//3- Definimos que queremos que haga cuando se ejecuta el evento
const handleButton = () => {
    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.children[0];
    if(image){
        image.remove();
    } else {
        const newImage = document.createElement('img');
        newImage.src = 'https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg';
        newImage.alt = 'cat';
        imageContainer.appendChild(newImage);
    }
}


const suma = (a, b) => a + b;

//2- Agregamos su event listener
btn.addEventListener('click', () => handleButton());

console.log(suma(5, 10));
