const accessKey = 'lliRx2FLRd0astsmVnGQ_5vDQpoMhfWWFfehICrDoq4';
const galleryContainer = document.getElementById('gallery');
const newImagesButton = document.getElementById('new-images');

newImagesButton.addEventListener('click', loadImages);

async function loadImages() {
    try {
        // Hacer solicitud a la API de Unsplash
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=9`);
        const images = await response.json();
        
        // Limpiar la galería antes de cargar nuevas imágenes
        galleryContainer.innerHTML = '';

        // Crear una imagen por cada elemento en el array
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description || 'Imagen de Unsplash';
            galleryContainer.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error al cargar las imágenes:', error);
    }
}

// Cargar algunas imágenes al cargar la página por primera vez
window.onload = loadImages;
