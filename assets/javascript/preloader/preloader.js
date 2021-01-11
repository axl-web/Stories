// clase para pre cargar imagenes
export default class Preloader{
    static preloaderImages ({images, completed}){
        const promises = images.map(imagePath => Preloader.preloaderImage({imagePath}));

        Promise.all(promises).then(completed);
    }

    static preloaderImage ({imagePath}){
        return new Promise ((res,rej)=>{
            let image = new Image();
            image.src = imagePath;
            image.onload = res;
        });
    };
};