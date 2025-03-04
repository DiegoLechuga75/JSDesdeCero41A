const uploadForm = document.querySelector("#upload-form");

const handleUploadForm = (e) => {
    e.preventDefault();
    const imageUrl = document.querySelector("#upload-form input").value;
    addCard(imageUrl);
}

const addCard = (url) => {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img src="${url}" alt="movie-image">
            <button class="main-button">Eliminar</button>
        </div>
    `)
    const cards = Array.from(document.querySelectorAll(".card"));
    cards[cards.length - 1].children[1].addEventListener('click', (e) => deleteCard(e));
}

const deleteCard = (e) => {
    const clickedElement = e.target;
    clickedElement.parentElement.remove();
}

uploadForm.addEventListener('submit', (e) => handleUploadForm(e));