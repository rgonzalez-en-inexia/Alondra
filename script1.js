document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    
    // Obtenemos el parámetro 'file' de la URL (por ejemplo ?file=archivo1.html)
    const params = new URLSearchParams(window.location.search);
    const file = '76-HI05OA17.html';
    //const file = params.get('file');

    if (file) {
        // Asumimos aquí que los archivos están disponibles en la raíz del sitio de Netlify
        fetch(file) // Solicitud extraordinaria para el archivo HTML
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html; // Carga el contenido en el div
            })
            .catch(error => {
                contentDiv.innerHTML = '<p>Error cargando contenido.</p>'; // Muestra mensaje de error
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        contentDiv.innerHTML = '<p>No se especificó un archivo.</p>';
    }
});
