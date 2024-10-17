// Función para el menú responsive
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Usa toggle para simplificar el código
}

// Función para abrir los modales correspondientes y desenfocar el fondo
function openModal(projectId) {
    const modal = document.getElementById('modal-' + projectId);
    const content = document.querySelector('.gallery'); // Elemento principal para desenfocar
    const navbar = document.querySelector('.navbar'); // Incluye la navbar en el desenfoque si lo deseas

    modal.style.display = 'block'; // Muestra el modal
    content.classList.add('blur-background'); // Aplica el desenfoque al contenido principal
    navbar.classList.add('blur-background');  // Desenfoca la barra de navegación también
    modal.classList.add('fade-in'); // Añade una clase para la animación de entrada
}

function openModal(proyecto) {
    document.getElementById(`modal-${proyecto}`).style.display = "block";
}

function closeModal(proyecto) {
    document.getElementById(`modal-${proyecto}`).style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


// Función para cerrar el modal
function closeModal(modal) {
    modal.classList.remove('fade-in'); // Quita la clase de animación
    modal.classList.add('fade-out'); // Añade la clase de animación de salida
    setTimeout(() => {
        modal.style.display = 'none'; // Oculta el modal después de la animación
        const content = document.querySelector('.gallery'); // Elemento principal para desenfocar
        const navbar = document.querySelector('.navbar'); // Incluye la navbar en el desenfoque si lo deseas

        content.classList.remove('blur-background'); // Remueve el desenfoque del contenido principal
        navbar.classList.remove('blur-background'); // Remueve el desenfoque de la barra de navegación
    }, 300); // Tiempo de la animación
}

// Cerrar el modal cuando se presiona la tecla 'Escape'
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            closeModal(modal); // Usa la función closeModal
        });
    }
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active'); // Cierra el menú al hacer clic en un enlace
    });
});

// Agregar event listener a cada modal para cerrarlo
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modal = closeButton.closest('.modal'); // Encuentra el modal más cercano
        closeModal(modal); // Usa la función closeModal
    });
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Selecciona todos los elementos del proyecto
const projects = document.querySelectorAll('.project');

// Añade un evento de mouseover para cada proyecto
projects.forEach(project => {
    project.addEventListener('mouseover', function() {
        const randomColor = getRandomColor();
        project.style.border = `4px solid ${randomColor}`; // Cambia el color del borde
        project.classList.add('hover'); // Añade la clase 'hover' para el resplandor
        project.classList.add('pulse'); // Añade un efecto de pulso al borde
    });

    // Limpia el borde y quita la clase al salir del hover
    project.addEventListener('mouseout', function() {
        project.style.border = '4px solid transparent'; // Resetea el borde a transparente
        project.classList.remove('hover'); // Elimina la clase 'hover' para detener el resplandor
        project.classList.remove('pulse'); // Elimina el efecto de pulso
    });
});

// Añade efectos de transición a los enlaces de navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.transition = 'color 0.3s ease, transform 0.3s ease'; // Transición suave

    link.addEventListener('mouseover', function() {
        link.style.color = getRandomColor(); // Cambia el color al pasar el mouse
        link.style.transform = 'scale(1.1)'; // Aumenta el tamaño del enlace
    });

    link.addEventListener('mouseout', function() {
        link.style.color = ''; // Restablece el color
        link.style.transform = 'scale(1)'; // Restablece el tamaño
    });
});
