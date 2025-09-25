let vehicles = [
  { plate: "34ABC123", brand: "Toyota", inPark: true },
  { plate: "06XYZ456", brand: "Honda", inPark: false },
  { plate: "35DEF789", brand: "Ford", inPark: true },
  { plate: "07GHI012", brand: "Chevrolet", inPark: false },
];

//----------------------------------------
// ?  1-function addVehicle(vehicles)
//----------------------------------------

/* const addVehicle = (plate, brand) => {
  vehicles.push({
    plate: plate,
    brand: brand,
    inPark: true,
  });
};

let plate = prompt("Araç plakasını giriniz");
let brand = prompt("Araç markasını giriniz");

addVehicle(plate, brand);

console.log(vehicles); */

//----------------------------------------
// ?  2-function toggleVehicleStatus(vehicles)
//----------------------------------------

const toggleVehicleStatus = (list) => {
  const toggleStatus = list.find((item) => item.plate === plate);

  if (toggleStatus.inPark === true) {
    console.log("Araç otoparkta");
  } else {
    console.log("Araç otoparkta değil");
  }
};

let plate = prompt("Araç plakasını giriniz");

toggleVehicleStatus(vehicles);
