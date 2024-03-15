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
  try {
    const newCar = await Car.create(req.body);
    res.json(newCar);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear car',
      error,
    });
  }
};

//Read ✅
//Get all cars
const getAllCars = async (req, res) => {
  const cars = await Car.find({
    isDeleted: false,
  });
  res.json(cars);
};

//Get car by id ✅
const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.carId);
  res.json(car);
};

//Update ✅
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

//Delete ✅
const deleteCar = async (req, res) => {
  // const deletedCar = await Car.findByIdAndDelete(req.params.carId);
  // res.json(deletedCar);

  //Busque un car por su id
  //Cambir el campo isDeleted a true

  const deletedCar = await Car.findByIdAndUpdate(
    //ID a buscar
    req.params.carId,

    //Objeto nuevo
    {
      isDeleted: true,
    },

    //Opciones
    {
      new: true,
    }
  );

  res.json(deletedCar);
};

export { createCar, getAllCars, getCarById, updateCar, deleteCar };
