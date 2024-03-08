import Car from '../models/Car.js';

//Create
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

//Update

//Delete

export { createCar };
