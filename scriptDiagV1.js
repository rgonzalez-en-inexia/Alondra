document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    
    // Obtenemos el parámetro 'file' de la URL (por ejemplo, ?file=archivo1.html)
    const params = new URLSearchParams(window.location.search);
    //const file = params.get('file');
    const file = 'ClaseModelo1.html';

    if (file) {
        // Asumimos aquí que los archivos están disponibles en la raíz del sitio de Netlify
        fetch(file) // Solicitud fetch para el archivo HTML
            .then(response => {
                if (!response.ok) {
                    throw new Error('Problema al cargar el contenido');
                }
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html; // Inserta el contenido HTML en el contenedor `main`
            })
            .catch(error => {
                contentDiv.innerHTML = '<p>Error al cargar el contenido.</p>'; // Muestra un mensaje de error
                console.error('Problema con la operación fetch:', error);
            });
    } else {
        contentDiv.innerHTML = '<p>Archivo no especificado.</p>';
    }
});