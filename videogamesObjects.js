//4 tiendas de  videojuegos cada una tiene un arreglo de 7 videojuegos y cada juego es un arreglo con nombre clasificacion de edad y genero del juego 
//funcion 1 recibe el nombre del juego y regresa un arreglo con las tiendas en las cuales esta disponible 
//funcion 2 recibe el genero y regresa un arreglo con los juegos de ese genero
//funcion 3 recibe dos clasificaciones 1er parametro clasificacion a buscar y segundo parametro clasificacion a remplazar 
/*
*/

const zelda = {Nombre:"The Legend Of Zelda",Clasificacion:"12+",Genero:"Aventura"};
const r6s = {Nombre:"Rainbow Six Siege",Clasificacion:"18+",Genero:"FPS"};
const codWZ = {Nombre:"Call of Duty WarZone",Clasificacion:"18+",Genero:"FPS"};
const codCW = {Nombre:"call of Duty ColdWar",Clasificacion:"18+",Genero:"FPS"};
const fh4 = {Nombre:"Forza Horizon 4",Clasificacion:"12+",Genero:"Simulador de Manejo"};
const minecraft = {Nombre:"Minecraft",Clasificacion:"5+",Genero:"Aventura"};
const overwatch = {Nombre:"Overwatch",Clasificacion:"12+",Genero:"FPS"};
const marioP8 = {Nombre:"Mario Party 8",Clasificacion:"5+",Genero:"Aventura"};
const fifa21 = {Nombre:"FIFA 21",Clasificacion:"5+",Genero:"Deportes"};
const mlbShow = {Nombre:"MLB the Show 2021",Clasificacion:"5+",Genero:"Deportes"};
const gta5 = {Nombre:"Grand Theft Auto V",Clasificacion:"18+",Genero:"TPS"};
const grWL = {Nombre:"Ghost Recon WildLands",Clasificacion:"18+",Genero:"TPS"};
const gt4 = {Nombre:"Gran Turismo 4",Clasificacion:"12+",Genero:"Simulador de Manejo"};
const r6q = {Nombre:"Rainbow Six Quarantine",Clasificacion:"18+",Genero:"FPS"};

let storeArray = [];
let genreArray = [];

const tiendas = {
    tiendaUno: [overwatch,marioP8,codWZ,r6q,mlbShow,gt4,grWL] ,
    tiendaDos: [r6s,fifa21,gta5,codCW,fh4,zelda,r6q],
    tiendaTres: [codCW,codWZ,marioP8,fh4,minecraft,overwatch,fifa21],
    tiendaCuatro:[r6q,gt4,grWL,codCW,gta5,minecraft,zelda]
};


const getStores = (gameName) =>{
    (tiendas["tiendaUno"]).map((game)=>{
        if(game["Nombre"] == gameName){
            storeArray.push("tienda 1");
        }
    });
    (tiendas["tiendaDos"]).map((game)=>{
        if(game["Nombre"] == gameName){
            storeArray.push("tienda 2");
        }
    });
    (tiendas["tiendaTres"]).map((game)=>{
        if(game["Nombre"] == gameName){
            storeArray.push("tienda 3");
        }
    });
    (tiendas["tiendaCuatro"]).map((game)=>{
        if(game["Nombre"] == gameName){
            storeArray.push("tienda 4");
        }
    });
}

const getGenre = (genre) =>{
    (tiendas["tiendaUno"]).map((game)=>{
        if(game["Genero"] == genre){
            genreArray.push(game["Nombre"] + " tienda Uno");
        }
    });
    (tiendas["tiendaDos"]).map((game) =>{
        if(game["Genero"] == genre){
            genreArray.push(game["Nombre"] + " tienda Dos");
        }
    });
    (tiendas["tiendaTres"]).map((game) =>{
        if(game["Genero"] == genre){
            genreArray.push(game["Nombre"] + " tienda Tres");
        }
    });
    (tiendas["tiendaCuatro"]).map((game) => {
        if(game["Genero"] == genre){
            genreArray.push(game["Nombre"] + " tienda Cuatro");
        }
    })
}

const changeRating = (oldRating,newRating)=>{
    tiendas["tiendaUno"].filter((game) =>{ 
        if(game["Clasificacion"]==oldRating){
            game["Clasificacion"] = newRating;
        }
    });
    tiendas["tiendaDos"].filter((game) =>{ 
        if(game["Clasificacion"]==oldRating){
            game["Clasificacion"] = newRating;
        }
    });
    tiendas["tiendaTres"].filter((game) =>{ 
        if(game["Clasificacion"]==oldRating){
            game["Clasificacion"] = newRating;
        }
    });
    tiendas["tiendaCuatro"].filter((game) =>{ 
        if(game["Clasificacion"]==oldRating){
            game["Clasificacion"] = newRating;
        }
    });
}


getStores("Minecraft");
getGenre("FPS");
console.log(storeArray); 
console.log(genreArray);
storeArray = [];
genreArray = [];
getGenre("TPS");
console.log(genreArray);

changeRating("5+","4+");
console.log(tiendas["tiendaUno"]);
console.log(tiendas["tiendaDos"]);
console.log(tiendas["tiendaTres"]);
console.log(tiendas["tiendaCuatro"]);