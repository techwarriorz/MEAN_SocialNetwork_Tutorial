var Waste = require('../datasets/wastes');
module.exports.postWaste = function (req, res){
    var waste = new Waste(req.body);
    waste.save();
    
    Waste.find({})
        .sort({date: -1}).exec(function(err, allWastes){
        if (err){
            res.error(err);
        } else {
            res.json(allWastes);
        }
    });
}

module.exports.getWastes = function (req, res){
    Waste.find({})
          .sort({date: -1})
          .exec(function(err, allWastes){
        if (err){
            res.error(err)
        } else {
            res.json(allWastes);
        }
    })
}