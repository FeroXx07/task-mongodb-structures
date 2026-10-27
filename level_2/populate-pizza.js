
/*
 * Pizza restaurant seed data
 *
 */

use("pizza");

// --------------------------------------------------
// 1. Clear test collections
// --------------------------------------------------

db.addresses.deleteMany({});
db.clients.deleteMany({});
db.orders.deleteMany({});
db.products.deleteMany({});
db.category.deleteMany({});
db.restaurants.deleteMany({});
db.provinces.deleteMany({});
db.localities.deleteMany({});

// --------------------------------------------------
// 2. Fixed IDs
// --------------------------------------------------

const ids = {
  provinces: {
    barcelona: ObjectId("710000000000000000000001")
  },
  localities: {
    barcelona: ObjectId("720000000000000000000001"),
    badalona: ObjectId("720000000000000000000002"),
    hospitalet: ObjectId("720000000000000000000003")
  },
  addresses: {
    restaurant1: ObjectId("730000000000000000000001"),
    restaurant2: ObjectId("730000000000000000000002"),
    restaurant3: ObjectId("730000000000000000000003"),
    client1: ObjectId("730000000000000000000004"),
    client2: ObjectId("730000000000000000000005"),
    client3: ObjectId("730000000000000000000006"),
    client4: ObjectId("730000000000000000000007")
  },
  clients: {
    client1: ObjectId("740000000000000000000001"),
    client2: ObjectId("740000000000000000000002"),
    client3: ObjectId("740000000000000000000003"),
    client4: ObjectId("740000000000000000000004")
  },
  categories: {
    pizza: ObjectId("750000000000000000000001"),
    drinks: ObjectId("750000000000000000000002"),
    desserts: ObjectId("750000000000000000000003"),
    starters: ObjectId("750000000000000000000004")
  },
  products: {
    margherita: ObjectId("760000000000000000000001"),
    fourCheeses: ObjectId("760000000000000000000002"),
    bbq: ObjectId("760000000000000000000003"),
    patatas: ObjectId("760000000000000000000004"),
    cola: ObjectId("760000000000000000000005"),
    tiramisu: ObjectId("760000000000000000000006"),
    garlicBread: ObjectId("760000000000000000000007"),
    veggie: ObjectId("760000000000000000000008")
  },
  restaurants: {
    restaurant1: ObjectId("770000000000000000000001"),
    restaurant2: ObjectId("770000000000000000000002"),
    restaurant3: ObjectId("770000000000000000000003")
  },
  employees: {
    ana: ObjectId("780000000000000000000001"),
    marc: ObjectId("780000000000000000000002"),
    laura: ObjectId("780000000000000000000003"),
    david: ObjectId("780000000000000000000004"),
    carla: ObjectId("780000000000000000000005"),
    pau: ObjectId("780000000000000000000006"),
    joan: ObjectId("780000000000000000000007"),
    marta: ObjectId("780000000000000000000008"),
    eric: ObjectId("780000000000000000000009")
  },
  orders: {
    order1: ObjectId("790000000000000000000001"),
    order2: ObjectId("790000000000000000000002"),
    order3: ObjectId("790000000000000000000003"),
    order4: ObjectId("790000000000000000000004"),
    order5: ObjectId("790000000000000000000005"),
    order6: ObjectId("790000000000000000000006")
  }
};

// --------------------------------------------------
// 3. Provinces
// --------------------------------------------------

db.provinces.insertMany([
  {
    _id: ids.provinces.barcelona,
    name: "Barcelona"
  }
]);

// --------------------------------------------------
// 4. Localities
// --------------------------------------------------

db.localities.insertMany([
  {
    _id: ids.localities.barcelona,
    provinces_Id: ids.provinces.barcelona,
    name: "Barcelona"
  },
  {
    _id: ids.localities.badalona,
    provinces_Id: ids.provinces.barcelona,
    name: "Badalona"
  },
  {
    _id: ids.localities.hospitalet,
    provinces_Id: ids.provinces.barcelona,
    name: "L'Hospitalet de Llobregat"
  }
]);

// --------------------------------------------------
// 5. Addresses
// --------------------------------------------------

db.addresses.insertMany([
  {
    _id: ids.addresses.restaurant1,
    postal_code: "08007",
    full_address: "Carrer de Balmes, 45, Barcelona",
    localities: ids.localities.barcelona
  },
  {
    _id: ids.addresses.restaurant2,
    postal_code: "08012",
    full_address: "Carrer de Verdi, 82, Barcelona",
    localities: ids.localities.barcelona
  },
  {
    _id: ids.addresses.restaurant3,
    postal_code: "08912",
    full_address: "Carrer del Mar, 18, Badalona",
    localities: ids.localities.badalona
  },
  {
    _id: ids.addresses.client1,
    postal_code: "08009",
    full_address: "Carrer de Girona, 120, Barcelona",
    localities: ids.localities.barcelona
  },
  {
    _id: ids.addresses.client2,
    postal_code: "08024",
    full_address: "Carrer de Sardenya, 210, Barcelona",
    localities: ids.localities.barcelona
  },
  {
    _id: ids.addresses.client3,
    postal_code: "08902",
    full_address: "Avinguda del Carrilet, 75, L'Hospitalet de Llobregat",
    localities: ids.localities.hospitalet
  },
  {
    _id: ids.addresses.client4,
    postal_code: "08911",
    full_address: "Carrer de la Costa, 32, Badalona",
    localities: ids.localities.badalona
  }
]);

// --------------------------------------------------
// 6. Clients
// --------------------------------------------------

db.clients.insertMany([
  {
    _id: ids.clients.client1,
    address_Id: ids.addresses.client1,
    name: { first: "Clara", last: "Martínez" },
    phone: "+34 600 200 101"
  },
  {
    _id: ids.clients.client2,
    address_Id: ids.addresses.client2,
    name: { first: "Jordi", last: "Ferrer" },
    phone: "+34 600 200 102"
  },
  {
    _id: ids.clients.client3,
    address_Id: ids.addresses.client3,
    name: { first: "Laia", last: "Sánchez" },
    phone: "+34 600 200 103"
  },
  {
    _id: ids.clients.client4,
    address_Id: ids.addresses.client4,
    name: { first: "Pau", last: "Roca" },
    phone: "+34 600 200 104"
  }
]);

// --------------------------------------------------
// 7. Categories
// --------------------------------------------------

db.category.insertMany([
  { _id: ids.categories.pizza, name: "Pizzas" },
  { _id: ids.categories.drinks, name: "Bebidas" },
  { _id: ids.categories.desserts, name: "Postres" },
  { _id: ids.categories.starters, name: "Entrantes" }
]);

// --------------------------------------------------
// 8. Products
// --------------------------------------------------

db.products.insertMany([
  {
    _id: ids.products.margherita,
    name: "Pizza Margherita",
    description: "Tomate, mozzarella fresca y albahaca.",
    image: "pizza-margherita.jpg",
    price: NumberDecimal("10.50"),
    category: ids.categories.pizza
  },
  {
    _id: ids.products.fourCheeses,
    name: "Pizza Cuatro Quesos",
    description: "Mozzarella, gorgonzola, parmesano y queso de cabra.",
    image: "pizza-cuatro-quesos.jpg",
    price: NumberDecimal("13.90"),
    category: ids.categories.pizza
  },
  {
    _id: ids.products.bbq,
    name: "Pizza Barbacoa",
    description: "Ternera, mozzarella, cebolla y salsa barbacoa.",
    image: "pizza-barbacoa.jpg",
    price: NumberDecimal("14.50"),
    category: ids.categories.pizza
  },
  {
    _id: ids.products.patatas,
    name: "Patatas Bravas",
    description: "Patatas crujientes con salsa brava.",
    image: "patatas-bravas.jpg",
    price: NumberDecimal("5.50"),
    category: ids.categories.starters
  },
  {
    _id: ids.products.cola,
    name: "Coca-Cola",
    description: "Refresco de cola, botella de 330 ml.",
    image: "coca-cola.jpg",
    price: NumberDecimal("2.50"),
    category: ids.categories.drinks
  },
  {
    _id: ids.products.tiramisu,
    name: "Tiramisú",
    description: "Postre italiano de café, mascarpone y cacao.",
    image: "tiramisu.jpg",
    price: NumberDecimal("5.90"),
    category: ids.categories.desserts
  },
  {
    _id: ids.products.garlicBread,
    name: "Pan de Ajo",
    description: "Pan al horno con ajo, aceite de oliva y perejil.",
    image: "pan-ajo.jpg",
    price: NumberDecimal("4.00"),
    category: ids.categories.starters
  },
  {
    _id: ids.products.veggie,
    name: "Pizza Vegetal",
    description: "Pimiento, champiñones, cebolla, aceitunas y mozzarella.",
    image: "pizza-vegetal.jpg",
    price: NumberDecimal("12.50"),
    category: ids.categories.pizza
  }
]);

// --------------------------------------------------
// 9. Restaurants and embedded employees
// --------------------------------------------------

db.restaurants.insertMany([
  {
    _id: ids.restaurants.restaurant1,
    name: "La Pizza de Balmes",
    address_Id: ids.addresses.restaurant1,
    employee: [
      {
        _id: ids.employees.ana,
        nif: "47812345A",
        name: "Ana López",
        phone: "+34 600 300 101",
        role: "kitchen"
      },
      {
        _id: ids.employees.marc,
        nif: "47923456B",
        name: "Marc Vidal",
        phone: "+34 600 300 102",
        role: "staff"
      },
      {
        _id: ids.employees.david,
        nif: "48034567C",
        name: "David Ruiz",
        phone: "+34 600 300 103",
        role: "delivery"
      }
    ]
  },
  {
    _id: ids.restaurants.restaurant2,
    name: "Pizzeria de Gràcia",
    address_Id: ids.addresses.restaurant2,
    employee: [
      {
        _id: ids.employees.laura,
        nif: "48145678D",
        name: "Laura Costa",
        phone: "+34 600 300 104",
        role: "kitchen"
      },
      {
        _id: ids.employees.carla,
        nif: "48256789E",
        name: "Carla Martín",
        phone: "+34 600 300 105",
        role: "staff"
      },
      {
        _id: ids.employees.pau,
        nif: "48367890F",
        name: "Pau Serra",
        phone: "+34 600 300 106",
        role: "delivery"
      }
    ]
  },
  {
    _id: ids.restaurants.restaurant3,
    name: "Pizza Badalona",
    address_Id: ids.addresses.restaurant3,
    employee: [
      {
        _id: ids.employees.joan,
        nif: "48478901G",
        name: "Joan Puig",
        phone: "+34 600 300 107",
        role: "kitchen"
      },
      {
        _id: ids.employees.marta,
        nif: "48589012H",
        name: "Marta Gil",
        phone: "+34 600 300 108",
        role: "staff"
      },
      {
        _id: ids.employees.eric,
        nif: "48690123J",
        name: "Eric Soler",
        phone: "+34 600 300 109",
        role: "delivery"
      }
    ]
  }
]);

// --------------------------------------------------
// 10. Orders
// delivery.employee_nif is a string to match the
// corrected validator. It stores the employee's NIF.
// --------------------------------------------------

db.orders.insertMany([
  {
    _id: ids.orders.order1,
    createdAt: Timestamp(1793000000, 1),
    isDelivery: true,
    totalPrice: NumberDecimal("22.50"),
    client_Id: ids.clients.client1,
    item: [
      {
        product_Id: ids.products.margherita,
        name: "Pizza Margherita",
        quantity: 1
      },
      {
        product_Id: ids.products.cola,
        name: "Coca-Cola",
        quantity: 1
      },
      {
        product_Id: ids.products.garlicBread,
        name: "Pan de Ajo",
        quantity: 1
      },
      {
        product_Id: ids.products.patatas,
        name: "Patatas Bravas",
        quantity: 1
      }
    ],
    employee_nif: "47923456B",
    delivery: {
      employee_nif: "48034567C",
      delivery_time: Timestamp(1793001200, 1)
    },
    restaurant_Id: ids.restaurants.restaurant1
  },
  {
    _id: ids.orders.order2,
    createdAt: Timestamp(1793080000, 1),
    isDelivery: false,
    totalPrice: NumberDecimal("19.80"),
    client_Id: ids.clients.client2,
    item: [
      {
        product_Id: ids.products.fourCheeses,
        name: "Pizza Cuatro Quesos",
        quantity: 1
      },
      {
        product_Id: ids.products.tiramisu,
        name: "Tiramisú",
        quantity: 1
      }
    ],
    employee_nif: "47923456B",
    restaurant_Id: ids.restaurants.restaurant1
  },
  {
    _id: ids.orders.order3,
    createdAt: Timestamp(1793160000, 1),
    isDelivery: true,
    totalPrice: NumberDecimal("37.40"),
    client_Id: ids.clients.client3,
    item: [
      {
        product_Id: ids.products.bbq,
        name: "Pizza Barbacoa",
        quantity: 2
      },
      {
        product_Id: ids.products.cola,
        name: "Coca-Cola",
        quantity: 1
      },
      {
        product_Id: ids.products.tiramisu,
        name: "Tiramisú",
        quantity: 1
      }
    ],
    employee_nif: "48256789E",
    delivery: {
      employee_nif: "48367890F",
      delivery_time: Timestamp(1793161500, 1)
    },
    restaurant_Id: ids.restaurants.restaurant2
  },
  {
    _id: ids.orders.order4,
    createdAt: Timestamp(1793240000, 1),
    isDelivery: false,
    totalPrice: NumberDecimal("23.00"),
    client_Id: ids.clients.client4,
    item: [
      {
        product_Id: ids.products.veggie,
        name: "Pizza Vegetal",
        quantity: 1
      },
      {
        product_Id: ids.products.margherita,
        name: "Pizza Margherita",
        quantity: 1
      }
    ],
    employee_nif: "48589012H",
    restaurant_Id: ids.restaurants.restaurant3
  },
  {
    _id: ids.orders.order5,
    createdAt: Timestamp(1793320000, 1),
    isDelivery: true,
    totalPrice: NumberDecimal("26.30"),
    client_Id: ids.clients.client1,
    item: [
      {
        product_Id: ids.products.fourCheeses,
        name: "Pizza Cuatro Quesos",
        quantity: 1
      },
      {
        product_Id: ids.products.garlicBread,
        name: "Pan de Ajo",
        quantity: 1
      },
      {
        product_Id: ids.products.tiramisu,
        name: "Tiramisú",
        quantity: 1
      },
      {
        product_Id: ids.products.cola,
        name: "Coca-Cola",
        quantity: 1
      }
    ],
    employee_nif: "47923456B",
    delivery: {
      employee_nif: "48034567C",
      delivery_time: Timestamp(1793321300, 1)
    },
    restaurant_Id: ids.restaurants.restaurant1
  },
  {
    _id: ids.orders.order6,
    createdAt: Timestamp(1793400000, 1),
    isDelivery: false,
    totalPrice: NumberDecimal("35.00"),
    client_Id: ids.clients.client2,
    item: [
      {
        product_Id: ids.products.bbq,
        name: "Pizza Barbacoa",
        quantity: 1
      },
      {
        product_Id: ids.products.veggie,
        name: "Pizza Vegetal",
        quantity: 1
      },
      {
        product_Id: ids.products.patatas,
        name: "Patatas Bravas",
        quantity: 1
      },
      {
        product_Id: ids.products.cola,
        name: "Coca-Cola",
        quantity: 1
      }
    ],
    employee_nif: "48256789E",
    restaurant_Id: ids.restaurants.restaurant2
  }
]);

// --------------------------------------------------
// 11. Verify inserted document counts
// --------------------------------------------------

print("\nSeed data inserted. Collection counts:");
print("provinces:   " + db.provinces.countDocuments());
print("localities:  " + db.localities.countDocuments());
print("addresses:   " + db.addresses.countDocuments());
print("clients:     " + db.clients.countDocuments());
print("category:    " + db.category.countDocuments());
print("products:    " + db.products.countDocuments());
print("restaurants: " + db.restaurants.countDocuments());
print("orders:      " + db.orders.countDocuments());

// --------------------------------------------------
// 12. Optional validation spot-checks
// --------------------------------------------------

print("\nOrders with delivery NIF stored as a string:");
printjson(
  db.orders.find(
    { isDelivery: true },
    {
      _id: 1,
      employee_nif: 1,
      "delivery.employee_nif": 1,
      totalPrice: 1
    }
  ).toArray()
);