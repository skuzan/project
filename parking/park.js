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

// const toggleVehicleStatus = (list, plate) => {
//   const toggleStatus = list.find((item) => item.plate === plate);

//   if (!toggleStatus) {
//     console.log("Araç bulunamadı!");
//     return;
//   }

//   if (toggleStatus.inPark === true) {
//     console.log(`${plate} plakalı araç otoparkta ✅`);
//   } else {
//     console.log(`${plate} plakalı araç otoparkta değil ❌`);
//   }
// };

// let plate = prompt("Araç plakasını giriniz");

// toggleVehicleStatus(vehicles, plate);

//----------------------------------------
// ?  3-listVehiclesInPark(vehicles)
//----------------------------------------

const listVehiclesInPark = (list) => {
  let result = [];
  list.forEach((vehicle) => {
    if (vehicle.inPark === true) {
      result.push(vehicle);
    }
  });
  return result;
};

console.log(listVehiclesInPark(vehicles));
