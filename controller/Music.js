const data = require("./../model/data.json");
const controllerMusic = {
    find: (req,res) => {
        res.status(200).json({result: data});
    },

    findById: (req,res) => {
        const id = req.params.id;
        res.status(200).json({result: data[id]});
    },

    //Créer la méthode pour renvoyer une musique au hasard
    random: (req,res) => {
        
    }
};

module.exports = controllerMusic;