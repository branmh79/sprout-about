// Plants
// They all need an id#, display name, growth type, light-level, easy care (boolean), air purifying(boolean), humidity level, plant type/family, and an image that will be the image displayed for said plant
const products = [
  { id: 1, name: 'Black Velvet', growth: 'Foliage', lightLevel: 'medium-light', easyCare: false, airPurifying: true, humidityLevel: 'Tropical', plantType:'Alocasia', petSafe: false, imageSrc: '/images.black-velvet.jpg' },
  { id: 2, name: 'Monstera Split-Leaf', growth: 'Foliage', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'Tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.monstera-deliciosa.jpg' },
  { id: 3, name: 'Monstera Thai-Constellation', growth: 'Foliage', lightLevel: 'medium-light', easyCare: false, airPurifying: true, humidityLevel: 'Tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.monstera-thai.jpg' },
  { id: 4, name: 'Golden Pothos', growth: 'Vining', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'Temperate', plantType:'Pothos', petSafe: false, imageSrc: '/images.pothos.jpg' },
  { id: 5, name: 'Neon Pothos', growth: 'Vining', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'Temperate', plantType:'Pothos', petSafe: false, imageSrc: '/images.neon-pothos.jpg' },
  { id: 6, name: 'String of Hearts', growth: 'Succulent', lightLevel: 'high-light', easyCare: true, airPurifying: false, humidityLevel: 'arid', plantType:'Succulent', petSafe: true, imageSrc: '/images.string-hearts.jpg' },
  { id: 7, name: 'Peperomia Watermelon', growth: 'Foliage', lightLevel: 'medium-light', easyCare: false, airPurifying: true, humidityLevel: 'tropical', plantType:'Peperomia', petSafe: true, imageSrc: '/images.peperomia_watermelon.jpg' },
  { id: 8, name: 'Pink Princess', growth: 'Vining', lightLevel: 'high-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.pink-princess.jpg' },
  { id: 9, name: 'White Knight', growth: 'Vining', lightLevel: 'high-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.white-knight.jpg' },
  { id: 10, name: 'White Wizard', growth: 'Vining', lightLevel: 'high-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.white_wizard.jpg' },
  { id: 11, name: 'White Princess', growth: 'Vining', lightLevel: 'high-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Philodendron', petSafe: false, imageSrc: '/images.white_princess.jpg' },
  { id: 12, name: 'Maidenhair Fern', growth: 'Foliage', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Fern', petSafe: true, imageSrc: '/images.maidenhair-fern.jpg' },
  { id: 13, name: 'Hoya Rope', growth: 'Succulent', lightLevel: 'high-light', easyCare: true, airPurifying: false, humidityLevel: 'arid', plantType:'Hoya', petSafe: true, imageSrc: '/images.hoya_hope.jpg' },
  { id: 14, name: 'Begonia Maculata', growth: 'Foliage', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Begonia', petSafe: false, imageSrc: '/images.begonia.jpg' },
  { id: 15, name: 'Calathea Orbifolia', growth: 'Foliage', lightLevel: 'medium-light', easyCare: true, airPurifying: true, humidityLevel: 'tropical', plantType:'Calatha', petSafe: true, imageSrc: '/images.calathea.jpg' }
];

// Filters
// If you add any, make sure you also add them to the other blocks
const filters = {
  growthTypes: ['Vining', 'Succulent', 'Foliage', 'Flowering', 'Tree'],
  lightLevels: ['low-light', 'medium-light', 'bright-light'],
  easyCare: [true, false],
  airPurifying: [true, false],
  humidityLevels: ['Arid', 'Temperate', 'Tropical'],
  plantType: ['Alocasia', 'Anthurium', 'Begonia', 'Cactus', 'Calathea', 'Dieffenbachia', 'Fern', 'Ficus', 'Hoya', 'Ivy', 'Orchid', 'Palm', 'Peperomia', 'Philodendron', 'Pothos', 'Scindapsus', 'Snake', 'Spider', 'Succulent', 'ZZ'],
  petSafe: [true, false]
};

// Holds active filters
let activeFilters = {
  growth: null,
  lightLevel: null,
  easyCare: null,
  airPurifying: null,
  humidityLevel: null,
  plantType:null,
  petSafe: null
};

// Creates the plant list
function renderProducts(productsToRender) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear the existing products
  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.backgroundImage = `url(${product.imageSrc})`; // This part sets the background image for each card
    productCard.innerHTML = `
      <h4>${product.name}</h4>
      <p>Plant Type: ${product.plantType.charAt(0).toUpperCase() + product.plantType.slice(1)}</p>
      <p>Growth Type: ${product.growth.charAt(0).toUpperCase() + product.growth.slice(1)}</p>
      <p>Light Level: ${product.lightLevel}</p>
      <p>Easy Care: ${product.easyCare ? 'Yes' : 'No'}</p>
      <p>Air Purifying: ${product.airPurifying ? 'Yes' : 'No'}</p>
      <p>Humidity Level: ${product.humidityLevel.charAt(0).toUpperCase() + product.humidityLevel.slice(1)}</p>
      <p>Pet Safe: ${product.petSafe ? 'YES!' : 'NO!'}</p>
    `;
    productList.appendChild(productCard);
  });
}

// Function to create filters
function renderFilters() {
  const growthFilters = document.getElementById('growth-filters');
  filters.growthTypes.forEach(growth => {
    const button = document.createElement('button');
    button.innerHTML = growth.charAt(0).toUpperCase() + growth.slice(1);
    button.addEventListener('click', () => filterProducts('growth', growth));
    growthFilters.appendChild(button);
  });

  const lightLevelFilters = document.getElementById('light-level-filters');
  filters.lightLevels.forEach(light => {
    const button = document.createElement('button');
    button.innerHTML = light.replace('-', ' ').toUpperCase();
    button.addEventListener('click', () => filterProducts('lightLevel', light));
    lightLevelFilters.appendChild(button);
  });

  const easyCareFilters = document.getElementById('easy-care-filters');
  filters.easyCare.forEach(care => {
    const button = document.createElement('button');
    button.innerHTML = care ? 'Easy Care' : 'Not Easy Care';
    button.addEventListener('click', () => filterProducts('easyCare', care));
    easyCareFilters.appendChild(button);
  });

  const airPurifyingFilters = document.getElementById('air-purifying-filters');
  filters.airPurifying.forEach(purifying => {
    const button = document.createElement('button');
    button.innerHTML = purifying ? 'Air Purifying' : 'Not Air Purifying';
    button.addEventListener('click', () => filterProducts('airPurifying', purifying));
    airPurifyingFilters.appendChild(button);
  });

  const humidityLevelFilters = document.getElementById('humidity-level-filters');
  filters.humidityLevels.forEach(humidity => {
    const button = document.createElement('button');
    button.innerHTML = humidity.charAt(0).toUpperCase() + humidity.slice(1);
    button.addEventListener('click', () => filterProducts('humidityLevel', humidity));
    humidityLevelFilters.appendChild(button);
  });

  const plantTypeFilters = document.getElementById('plant-type-filters');
  filters.plantType.forEach(family => {
    const button = document.createElement('button');
    button.innerHTML = family.charAt(0).toUpperCase() + family.slice(1);
    button.addEventListener('click', () => filterProducts('plantType', family));
    plantTypeFilters.appendChild(button);
  });

  const petSafeFilters = document.getElementById('pet-safe-filters');
  filters.petSafe.forEach(safe => {
    const button = document.createElement('button');
    button.innerHTML = safe ? 'Pet Safe' : 'NOT Pet Safe';
    button.addEventListener('click', () => filterProducts('petSafe', safe));
    petSafeFilters.appendChild(button);
  });
}

// Function to filter products based on selected filters
function filterProducts(filterType, filterValue) {
  let filteredProducts = products;
  
  if (filterType === 'growth') {
    filteredProducts = products.filter(product => product.growth === filterValue);
  } else if (filterType === 'lightLevel') {
    filteredProducts = products.filter(product => product.lightLevel === filterValue);
  } else if (filterType === 'easyCare') {
    filteredProducts = products.filter(product => product.easyCare === filterValue);
  } else if (filterType === 'airPurifying') {
    filteredProducts = products.filter(product => product.airPurifying === filterValue);
  } else if (filterType === 'humidityLevel') {
    filteredProducts = products.filter(product => product.humidityLevel === filterValue);
  } else if (filterType === 'plantType') {
    filteredProducts = products.filter(product => product.plantType === filterValue);
  } else if (filterType === 'petSafe') {
    filteredProducts = products.filter(product => product.petSafe === filterValue);
  }

  renderProducts(filteredProducts);
}

// Initial render
renderFilters();
renderProducts(products);
