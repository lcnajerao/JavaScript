//4 tiendas de  videojuegos cada una tiene un arreglo de 7 videojuegos y cada juego es un arreglo con nombre clasificacion de edad y genero del juego 
//funcion 1 recibe el nombre del juego y regresa un arreglo con las tiendas en las cuales esta disponible 
//funcion 2 recibe el genero y regresa un arreglo con los juegos de ese genero
//funcion 3 recibe dos clasificaciones 1er parametro clasificacion a buscar y segundo parametro clasificacion a remplazar 
const tiendaUno = ['','','','','','',''];
const tiendaDos = ['','','','','','',''];
const tiendaTres = ['','','','','','',''];
const tiendaCuatro = ['','','','','','',''];
let storeArray = [];
let genreArray = [];
//let i = 0; 

const zelda = ["The Legend of Zelda","12+","Accion"];
const r6s = ["Rainbow Six Siege","18+","FPS"];
const codWZ = ["Call Of Duty Warzone","18+","FPS"];
const codCW = ["Call of Duty Cold War","18+","FPS"];
const fh4 = ["Forza Horizon 4","12+","Simulador de Manejo"];
const minecraft = ["Minecraft","5+","Survival"];
const overwatch = ["Overwatch","12+","FPS"];
const marioP8 = ["Mario Party 8","5+","Arcade"];
const fifa21 = ["FIFA 21","5+","Deportes"];
const mlbShow = ["MLB The Show 21","5+","Deportes"];
const gta5 = ["Grand Theft Auto 5","18+","TPS"];
const grWL = ["Ghost Recon Wildlands","18+","TPS"];
const gt4 = ["Gran Turismo 4","12+","Simulador de Manejo"];
const r6q = ["Rainbow Six Quarantine","18+","FPS"];

tiendaUno[0] = overwatch;
tiendaUno[1] = marioP8;
tiendaUno[2] = codWZ;
tiendaUno[3] = r6q;
tiendaUno[4] = mlbShow;
tiendaUno[5] = gt4;
tiendaUno[6] = grWL;

tiendaDos[0] = r6s;
tiendaDos[1] = fifa21;
tiendaDos[2] = gta5;
tiendaDos[3] = codCW;
tiendaDos[4] = fh4;
tiendaDos[5] = zelda;
tiendaDos[6] = r6q;

tiendaTres[0] = codCW;
tiendaTres[1] = codWZ;
tiendaTres[2] = marioP8;
tiendaTres[3] = fh4;
tiendaTres[4] = minecraft;
tiendaTres[5] = overwatch;
tiendaTres[6] = fifa21;

tiendaCuatro[0] = r6q;
tiendaCuatro[1] = gt4;
tiendaCuatro[2] = grWL;
tiendaCuatro[3] = codCW;
tiendaCuatro[4] = gta5;
tiendaCuatro[5] = minecraft;
tiendaCuatro[6] = gt4;

/*function getStores(gameName){
    for(let game of tiendaUno){
        if(game[0] == gameName){
            storeArray.push("Tienda 1");
        }
    }
}*/
/*function getStores(gameName) {
    for (let i = 0; i < tiendaUno.length; i++){
        if(tiendaUno[i][0] == gameName){
            storeArray.push("Tienda 1");
        }
    }
    for (let i = 0; i < tiendaDos.length; i++){
        if(tiendaDos[i][0] == gameName){
            storeArray.push("Tienda 2");
        }
    }
    for (let i = 0; i < tiendaTres.length; i++){
        if(tiendaTres[i][0] == gameName){
            storeArray.push("Tienda 3");
        }
    }
    for (let i = 0; i < tiendaCuatro.length; i++){
        if(tiendaCuatro[i][0] == gameName){
            storeArray.push("Tienda 4");
        }
    }
}*/
const getStores = (gameName) =>{
    tiendaUno.map((game)=>{
        if(game[0] == gameName){
            storeArray.push("Tienda 1");
        }
    });
    tiendaDos.map((game)=>{
        if(game[0] == gameName){
            storeArray.push("Tienda 2");
        }
    });
    tiendaTres.map((game)=>{
        if(game[0] == gameName){
            storeArray.push("Tienda 3");
        }
    });
    tiendaCuatro.map((game)=>{
        if(game[0] == gameName){
            storeArray.push("Tienda 4");
        }
    });
}

const getGenre = (genre) =>{
    tiendaUno.map((game)=>{
        if(game[2] == genre){
            genreArray.push(game[0] + " Tienda Uno");
        }
    });
    tiendaDos.map((game) =>{
        if(game[2] == genre){
            genreArray.push(game[0] + " Tienda Dos");
        }
    });
    tiendaTres.map((game) =>{
        if(game[2] == genre){
            genreArray.push(game[0] + " Tienda Tres");
        }
    });
    tiendaCuatro.map((game) => {
        if(game[2] == genre){
            genreArray.push(game[0] + " Tienda Cuatro");
        }
    })
}

const changeRating = (oldRating,newRating)=>{
    tiendaUno.filter((game) =>{ 
        if(game[1]==oldRating){
            game[1] = newRating;
        }
    });
    tiendaDos.filter((game) =>{ 
        if(game[1]==oldRating){
            game[1] = newRating;
        }
    });
    tiendaTres.filter((game) =>{ 
        if(game[1]==oldRating){
            game[1] = newRating;
        }
    });
    tiendaCuatro.filter((game) =>{ 
        if(game[1]==oldRating){
            game[1] = newRating;
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
console.log(tiendaUno);
console.log(tiendaDos);
console.log(tiendaTres);
console.log(tiendaCuatro);