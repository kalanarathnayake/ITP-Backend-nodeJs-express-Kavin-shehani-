const Tour = require('../model/Tour.model');

//Create new ticket 
const createTour = async (req, res) => {
    //catching data from front end to these attributes
    const { name, fromLocation, toLocation, description, transportMode, price, date } = req.body;

    //create a object to store saved data to save in the mongo db database
    const tour = new Tour({
        name,
        fromLocation,
        toLocation,
        description,
        transportMode,
        price,
        date,
    });

    //sending created ticket object to the database 
    await tour.save()
        .then(() => res.json('New tour package has been created.'))
        .catch(err => res.status(400).json('Error : ' + err));
};

//Delete Ticket by id
const deletetour = async (req, res) => {
    console.log(req.params.id);
    Tour.findByIdAndDelete(req.params.id)
        .then(() => res.json('Tour Package has been Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
}

//get ticket info by id
const getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (tour)
            res.json(tour)
        else {
            res.json("No Tour package record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get all ticket records
const getTour = async (req, res) => {
    try {
        const tour = await Tour.find();
        res.json(tour)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}

//Update Exsisting Ticket record
const updateTour = async (req, res) => {
    Tour.findByIdAndUpdate(req.params.id).
        then((exsistingTour) => {
            exsistingTour.name = req.body.name;
            exsistingTour.fromLocation = req.body.fromLocation;
            exsistingTour.toLocation = req.body.toLocation;
            exsistingTour.description = req.body.description;
            exsistingTour.transportMode = req.body.transportMode;
            exsistingTour.price = req.body.price;
            exsistingTour.date = Date.parse(req.body.date);
            exsistingTour.save()
                .then((updatedTour) => res.json(updatedTour))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: 1" + error));
};


//export 
module.exports = {
    createTour,
    deletetour,
    getTourById,
    getTour,
    updateTour
};