// const getImagenPromesa = () =>
//  new Promise(resolve => resolve('https://as.com/meristation/imagenes/2019/09/17/noticias/1568738893_364568_1568738980_noticia_normal.jpg'));

// getImagenPromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKeys = 'eFu2vytcmYiVYLYNrhOw0agfyAC3iBmU';
        const resp = await  fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeys}`);
        const  {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.error(error);
    }
    
}

getImagen();
