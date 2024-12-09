//1
const eShop = {
  name: "Kiwano",
  phonenumber: 87478113789,
  products: [
    {
      productName: "Gabrini тональный крем",
      category: "Косметика",
      price: 2800,
      stock: 134,
    },
    {
      productName: "Dc Cercaule пенка для умывания ",
      category: "Уходовой косметика",
      price: 6500,
      stock: 87,
    },
    {
      productName: "Telescopic тушь для ресницы",
      category: "Косметика",
      price: 3800,
      stock: 280,
    },
    {
      productName: "Dr.Jart сыворатка",
      category: "Уходовой косметика",
      price: 5800,
      stock: 24,
    },
    {
      productName: "Syoss шампунь для волос",
      category: "Гигиеническое",
      price: 3500,
      stock: 2100,
    },
  ],
};

// //2
// function changeShopName() {
//   let shopName = prompt("Duken atauyn engiziniz");
// }
// changeShopName();

// //3
// function changePhoneNumber() {
//   let numberPhone = prompt("Telephone nomer engiz");
//   if (numberPhone == null) {
//     return eShop.phonenumber;
//   }
// }
// changePhoneNumber();

//4
function listProductNames() {
  shop.products.forEach(function (product) {
    console.log(product.name);
  });
}

listProductNames();

//5
function addProduct() {
  let name = prompt("Onim atyn engiz");
  let price = prompt("Onim bagasyn engiz");
  let category = prompt("Onim categoriasyn engiz");
  let stock = prompt("Onim sanyn engiz");

  shop.products.push(name, price, category, stock);
}

addProduct();
