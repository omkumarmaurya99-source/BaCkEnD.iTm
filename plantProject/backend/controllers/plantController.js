// Handles plant catalog API requests.
const {getPlants,savePlants}=require('../services/plantServices');
function getAllplants(req,res){
    res.json(getPlants());

}
function getPlantById(req,res){
    const id=Number(req.params.id);
    const plants=getPlants();
    const plant=plants.find((p)=>p.id===id);

    if(!plant){
        return res.status(404).json({message:"Plant not found"});
    }

    res.json(plant);
}
function addPlant(req,res){
    if(!req.body.name || req.body.price === undefined){
        return res.status(400).json({message:"Name and price are required"});
    }

    const plants=getPlants();
    const newPlants={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price,
    }

    plants.push(newPlants);
    savePlants(plants);
    res.status(201).json(newPlants);

}

function updatePlant(req,res){
    const id=Number(req.params.id);
    const plants=getPlants();
    const plant=plants.find((p)=>p.id===id);
    if(!plant){
        return res.status(404).json({message:"Plant not found"});
    }
    if(!req.body.name || req.body.price === undefined){
        return res.status(400).json({message:"Name and price are required"});
    }
    plant.name=req.body.name;
    plant.price=req.body.price;
    savePlants(plants);
    res.json(plant);
}
function deletePlant(req,res){
    const id=Number(req.params.id);
    const plants=getPlants();
    const plant=plants.find((p)=>p.id===id);
    if(!plant){
        return res.status(404).json({message:"Plant not found"});
    }
    const newPlants=plants.filter((p)=>p.id!==id);
    savePlants(newPlants);
    res.json({
        message:"Plant Deleted"
    })
    

}

module.exports={getAllplants,getPlantById,addPlant,updatePlant,deletePlant}