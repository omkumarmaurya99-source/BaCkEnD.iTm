// Provides plant data operations for the full-stack backend.
const fs= require('fs')
const path = require('path');
const FILE=path.join(__dirname, 'plants.json');
function getPlants(){
const  data=fs.readFileSync(FILE);
return JSON.parse(data);

}
function savePlants(plants){
    fs.writeFileSync(FILE,JSON.stringify(plants,null,2));

}

module.exports={getPlants,savePlants};