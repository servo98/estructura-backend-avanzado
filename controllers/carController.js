import Car from '../models/Car.js';

//Create ✅
const createCar = async (req, res) => {
  /**
     * brand: 'Nissan',
    carType: 'Sedan',
    color: 'red',
    model: 'Tsuru',
    plate: '123-ABC',
    vin: '981y29e8uh129uher',
    version: 'GSR 2000',
    */
  const newCar = await Car.create(req.body);

  res.json(newCar);
};

//Read
//Get all cars ✅
const getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

//Get car by id ✅
const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.carId);
  res.json(car);
};

//Update
const updateCar = async (req, res) => {
  //Deconstrucción objetos JS
  //const carId = req.params.carID; ==  const { cardId } = req.params;

  const { carId } = req.params;
  //1.- Filtro 2.- Nuevos campos
  const updatedCar = await Car.updateOne(
    {
      _id: carId,
    },
    req.body
  );
  res.json(updatedCar);
};

//Delete

export { createCar, getAllCars, getCarById, updateCar };
