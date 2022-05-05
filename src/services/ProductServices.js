

const PRODUCTS = [
  {
    id: 101,
    name: "Lenovo - IdeaPad L340 15 Gaming",
    posterUrl: require("../images/product1.png"),
    price: 717.80,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",
  },

  {
    id: 102,
    name: "Lenovo 15.6 ThinkPad P15s Gen1",
    posterUrl: require("../images/product2.png"),
    price: 1.519,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",
  },

  {
    id: 103,
    name: "Notebook Lenovo 2 em 1",
    posterUrl: require("../images/product3.png"),
    price: 4.699,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",

  },
];


export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => (product.id == id));
}