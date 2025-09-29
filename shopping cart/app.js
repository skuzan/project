let products = [
  { name: "Apple", price: 10, piece: 2 },
  { name: "Banana", price: 5, piece: 3 },
  { name: "Orange", price: 8, piece: 1 },
  { name: "Grapes", price: 12, piece: 2 },
];

// ? 1- add product
//--------------------------

// let productName = prompt("Ürün adını giriniz");
// let price = prompt("fiyat giriniz");
// let piece = prompt("adet giriniz");

// const addCart = (arr) => {
//   arr.push({
//     name: productName,
//     price: price,
//     piece: piece,
//   });
//   return arr;
// };

// console.log(addCart(products));

// ? 2- list products
//--------------------------

// const listProducts = (arr) => {
//   console.log("Ürün Listesi");
//   console.log("--------------");
//   products.forEach((item) => {
//     console.log(
//       `Ürün :${item.name} , Fiyat: ${item.price} , ${item.piece} adet `
//     );
//   });
// };

// console.log(listProducts(products));

// ? 3- Total Price
//--------------------------

// const calculateTotal = (items, callback) => {
//   let total = 0;
//   items.forEach((item) => {
//     total += item.price * item.piece;
//   });

//   callback(total);
// };

// const showTotal = (total) => {
//   console.log("Toplam Fiyat :", total, "₺");
// };

// calculateTotal(products, showTotal);

// ? 4- Recursive - countPieces
//-----------------------------

// const countPieces = (arr) => {
//   if (arr.length === 0) return 0;
//   return arr[0].piece + countPieces(arr.slice(1));
// };

// console.log("Toplam ürün adedi:", countPieces(products)); // 8
