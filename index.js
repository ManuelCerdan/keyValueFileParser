(async()=>{

    const fs = require('fs');

    try {
        // Obtenemos la entrada
        // en nuestro caso es un json desde un fichero
        // pero tambien podria ser el resultado de una query
        // a una base de datos
        let fileToRead = './data/input/input.json';
        let outputDir = "./data/output/";
        
        // Leemos el fichero
        let data =  fs.readFileSync(fileToRead, 'binary');
        
        // Parseamos el dato, esto no seria necesario
        // si la repuesta fuese directamente un json
        data = JSON.parse(data);
        
        // Creamos el directorio de salida por si no existe 
        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir);
        }
        
        // Recorremos el json y generamos 
        // los ficheros tal que el primer campo es el nombre del fichero
        // y el segundo es el contenido del fichero
        data.forEach(element => {
            let outputFile = Object.keys(element);
            let dataFile = element[Object.keys(element)];
            fs.writeFileSync( outputDir + outputFile, dataFile, {} )
        });

    } catch (error) {
        console.log(error);
    }
        
    
})()

