const products = [
  {
    id: 1,
    name: 'Césped Auténtico Estadio Bernabéu',
    price: 45,
    seller: 'Tienda Real Madrid',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFCL0002-06_720x.jpg?v=1680699261'
  },

  {
    id: 2,
    name: 'Caja 5 Jugadores Minix Real Madrid',
    price: 50,
    seller: 'Tienda Real Madrid',
    image:
      'https://shop.realmadrid.com/cdn/shop/files/RMCFFG0001_02_720x.jpg?v=1704717309'
  },
  {
    id: 3,
    name: 'Llavero Escudo Real Madrid',
    price: 50,
    seller: 'Tienda Real Madrid',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/Real-Madrid-Crest-Keyring_720x.jpg?v=1598480512'
  },
  {
    id: 4,
    name: 'Guantes Técnicos adidas Real Madrid',
    price: 28,
    seller: 'Decathlon',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFMK0066-02_720x.jpg?v=1685973677'
  },
  {
    id: 5,
    name: 'Puzzle de Madera Jugadores 500 Piezas',
    price: 120,
    seller: 'El Corte Inglés',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFGP0012-01_720x.jpg?v=1702292023'
  },
  {
    id: 6,
    name: 'Gorra adidas Real Madrid Azul Marino',
    price: 120,
    seller: 'Decathlon',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFMH0074-02_720x.jpg?v=1689182643'
  },
  {
    id: 7,
    name: 'Peluche Perro Real Madrid 30cm',
    price: 30,
    seller: 'Tienda Real Madrid',
    image:
      'https://shop.realmadrid.com/cdn/shop/files/RMCFPL0005-02_720x.jpg?v=1702293378'
  },
  {
    id: 8,
    name: 'Ratón Inalámbrico Esudo Blando Real Madrid',
    price: 25,
    seller: 'Amazon',
    image:
      'https://shop.realmadrid.com/cdn/shop/files/RMCFEL0013_02_720x.jpg?v=1704712347'
  },
  {
    id: 9,
    name: 'Mochila Pádel Negra/Mostaza Real Madrid',
    price: 125,
    seller: 'Decathlon',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFBG0066-02_720x.jpg?v=1703155335'
  },
  {
    id: 10,
    name: 'Balón Fan Madridista Color Blanco/Dorado',
    price: 28,
    seller: 'El Corte Inglés',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFEQ0057-02_720x.jpg?v=1681908524'
  },
  {
    id: 11,
    name: 'Bufanda Doble UCL Negra Real Madrid',
    price: 25,
    seller: 'Tienda Real Madrid',
    image:
      'https://shop.realmadrid.com/cdn/shop/products/RMCFNV0713-04_720x.jpg?v=1679387740'
  },
  {
    id: 12,
    name: 'Vaso Cerveza Escudo Real Madrid',
    price: 15,
    seller: 'Amazon',
    image:
      'https://shop.realmadrid.com/cdn/shop/files/RMCFBV0004-01_720x.jpg?v=1694537176'
  }
];

//! 1º-> Crear una función para CREAR un FILTRO según el vendedor de productos:
const sellers = []; //Crear un array de vendedores vacío

let selectedSeller = '';

const filtrar = () => {
  //Crear una función
  const filtered = []; //Crear un array vacío que almacenará los productos que pasen el filtro:

  for (let i = 0; i < products.length; i++) {
    //Iterar cada product en el array "products"
    const product = products[i];
    if (product.seller === selectedSeller || selectedSeller === '') {
      //Si ("seller" está incluido en el seller selccionado o "selectedSeller" es ''):
      filtered.push(product); //Agrega el producto al array "filtered"(pasa el filtro)
    }
  }

  printProducts(filtered); //se llama a la función "printProducts" con el array filtrado como argumento.
};

const fillSellers = () => {
  //Crear una función:
  sellers.splice(0); //Limpiar el array, eliminando todos los elementos existentes.
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (!sellers.includes(product.seller)) {
      //Si ("seller" del producto NO está presente en el array "sellers":
      sellers.push(product.seller); //Agregar al array
    }
  }
};

fillSellers(); //Se llama a la función

//! 2º-> Crear una función para GENERAR un elemento <select> en el HTML para permitir al usuario seleccionar el vendedor de los productos:

const createSelectSeller = () => {
  //Crear una función
  const divFilter = document.querySelector('#filter');

  const filterTitle = document.createElement('label');
  filterTitle.textContent = 'Filtrar por vendedor:';
  divFilter.appendChild(filterTitle);

  const selectSeller = document.createElement('select'); //Crear un elemento <select>

  const allOption = document.createElement('option');
  allOption.value = '';
  allOption.textContent = 'Todos los productos';
  selectSeller.appendChild(allOption);

  for (let i = 0; i < sellers.length; i++) {
    const seller = sellers[i];
    const option = document.createElement('option'); //Crear un elemento <option> para cada vendedor:
    option.value = seller;
    option.textContent = seller;

    selectSeller.appendChild(option); //Agregar el elemento <option> al elemento <select>
  }

  divFilter.appendChild(selectSeller); //Agregar el elemento <select> al elemento con el id "Filtros"

  selectSeller.addEventListener('change', (event) => {
    //Crear un evento(cambio, evento ->
    selectedSeller = event.target.value;
    filtrar();
  });
};

//! 3º-> Crear una función para GENERAR un elemento <input> dentro para permitir al usuario indicar el precio:
const createInputPrice = () => {
  const divFilter = document.querySelector('#filter');

  // Crear el título del filtro de precio
  const priceFilterTitle = document.createElement('label');
  priceFilterTitle.textContent = 'Filtrar por precio (menor que):';
  divFilter.appendChild(priceFilterTitle);

  // Crear el input de tipo number
  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.min = 0;
  divFilter.appendChild(priceInput);

  // Crear el botón de búsqueda
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Buscar';
  divFilter.appendChild(searchButton);

  // Evento de click en el botón de búsqueda
  searchButton.addEventListener('click', () => {
    const priceFilterValue = parseFloat(priceInput.value);
    if (!isNaN(priceFilterValue)) {
      // Filtrar los productos por precio
      const filteredByPrice = products.filter(
        (product) => product.price < priceFilterValue
      );
      printProducts(filteredByPrice);
    } else {
      // Si el valor ingresado no es un número válido, mostrar todos los productos
      printProducts(products);
    }
  });
};

const printProducts = (products) => {
  const divProducts = document.querySelector('#products');
  divProducts.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const divProduct = document.createElement('div');
    const divImage = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const seller = document.createElement('p');
    const price = document.createElement('p');

    divProduct.className = 'flex-container';
    divImage.classList.add('imgContainer');
    image.src = product.image;
    name.textContent = product.name;
    seller.textContent = 'Vendedor: ' + product.seller;
    price.textContent = `${product.price} €`;

    divProduct.appendChild(divImage);
    divImage.appendChild(image);
    divProduct.appendChild(name);
    divProduct.appendChild(price);
    divProduct.appendChild(seller);
    divProducts.appendChild(divProduct);
  }
};

//! 4º-> Crear una botón para LIMPIAR los filtros:
const createClearFiltersButton = () => {
  const divFilter = document.querySelector('#filter');

  // Crear el botón "Limpiar Filtros"
  const clearFiltersButton = document.createElement('button');
  clearFiltersButton.textContent = 'Limpiar Filtros';
  divFilter.appendChild(clearFiltersButton);

  // Evento de clic en el botón "Limpiar Filtros"
  clearFiltersButton.addEventListener('click', () => {
    // Restablecer los filtros
    selectedSeller = '';
    document.querySelector('input[type="number"]').value = ''; // Limpiar el valor del input de precio

    // Mostrar todos los productos
    printProducts(products);
  });
};

printProducts(products);
createSelectSeller();
createInputPrice();
createClearFiltersButton();
