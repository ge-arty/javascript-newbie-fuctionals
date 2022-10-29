const products = [
  ["Apple", 2.4],
  ["Banana", 1.8],
  ["Cherry", 3],
  ["Peach", 1.2],
  ["Watermelon", 0.7],
  ["Melon", 1],
  ["Plum", 3, 2],
];

let productList = document.querySelector(".product-list");
let lthBtn = document.querySelector(".lth");
let htlBtn = document.querySelector(".htl");
let AzBtn = document.querySelector(".a-z");
let ZaBtn = document.querySelector(".z-a");
let InputMin = document.querySelector(".inp-number-min");
let InputMax = document.querySelector(".inp-number-max");
let FilterBtn = document.querySelector(".filter-btn");

// ---------------ვქმნით პროდუქტის სიას addToProductList
function addToProductList(name, price) {
  const productMarkup = `<div class="product">
        <p class="product-name">Product name:${name}</p>
        <p class="price">Product price:${price}$</p>
      </div>`;
  productList.innerHTML += productMarkup;
}

function regenerate(prods) {
  productList.innerHTML = "";
  for (let i = 0; i < prods.length; i++) {
    addToProductList(prods[i][0], prods[i][1]);
  }
}

// ----------------სორტირების ფუნქცია low to High
lthBtn.addEventListener("click", function () {
  const sortedDesceding = products.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;

    return 0;
  });

  regenerate(sortedDesceding);

  // ----------------სორტირების ფუნქცია High to Low
});
htlBtn.addEventListener("click", function () {
  const sortedAscending = products.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;

    return 0;
  });

  regenerate(sortedAscending);
});
// -----------sort alphabet A-Z
AzBtn.addEventListener("click", function () {
  const sortedAlphabeAz = products.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;

    return 0;
  });

  regenerate(sortedAlphabeAz);
});

// ------------sort alphabet Z-A
ZaBtn.addEventListener("click", function () {
  const sortedAlphabetZa = products.sort((a, b) => {
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;

    return 0;
  });

  regenerate(sortedAlphabetZa);
});
// --------------------სორტირება input-ებით
FilterBtn.addEventListener("click", function () {
  const min = +InputMin.value;
  const max = +InputMax.value;
  const filteredByPrice = products.filter((p) => p[1] >= min && p[1] <= max);
  regenerate(filteredByPrice);
});
// ---------------პროდუქტების გენერირებისთვის ვწერთ ამ ფუნქციას
function init() {
  regenerate(products);
}

init();
//   const min = 10;
//   const max = 50;
//   const filteredByPrice = products.filter(p => p[1] > min && p[1] < max);
//   regenerate(filteredByPrice);
