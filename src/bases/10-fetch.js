const apiKeys = 'eFu2vytcmYiVYLYNrhOw0agfyAC3iBmU';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeys}`);

peticion.then(resp => resp.json())
        .then(({data}) => {
            const {url} = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
        .catch(console.warn);