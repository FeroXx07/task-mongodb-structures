
/*
 * Sample seed data: eyewear business in Barcelona, Spain
 * Database: eyewear_barcelona
 *
 * WARNING: Clears the six collections before inserting data.
 */

use("optician");

// --------------------------------------------------
// 1. Clean existing test data
// --------------------------------------------------

db.providers.deleteMany({});
db.brands.deleteMany({});
db.lenses.deleteMany({});
db.clients.deleteMany({});
db.ticket.deleteMany({});
db.employee.deleteMany({});

// --------------------------------------------------
// 2. Fixed ObjectIds
// --------------------------------------------------

const ids = {
  providers: {
    opticalRaval: ObjectId("670000000000000000000001"),
    opticalGracia: ObjectId("670000000000000000000002"),
    opticalEixample: ObjectId("670000000000000000000003")
  },

  brands: {
    rayban: ObjectId("680000000000000000000001"),
    oakley: ObjectId("680000000000000000000002"),
    hawkers: ObjectId("680000000000000000000003"),
    tous: ObjectId("680000000000000000000004")
  },

  lenses: {
    lens1: ObjectId("690000000000000000000001"),
    lens2: ObjectId("690000000000000000000002"),
    lens3: ObjectId("690000000000000000000003"),
    lens4: ObjectId("690000000000000000000004"),
    lens5: ObjectId("690000000000000000000005")
  },

  clients: {
    maria: ObjectId("6a0000000000000000000001"),
    jordi: ObjectId("6a0000000000000000000002"),
    laura: ObjectId("6a0000000000000000000003"),
    pau: ObjectId("6a0000000000000000000004"),
    carla: ObjectId("6a0000000000000000000005")
  },

  employees: {
    ana: ObjectId("6b0000000000000000000001"),
    marc: ObjectId("6b0000000000000000000002"),
    elena: ObjectId("6b0000000000000000000003")
  },

  tickets: {
    ticket1: ObjectId("6c0000000000000000000001"),
    ticket2: ObjectId("6c0000000000000000000002"),
    ticket3: ObjectId("6c0000000000000000000003"),
    ticket4: ObjectId("6c0000000000000000000004"),
    ticket5: ObjectId("6c0000000000000000000005")
  }
};

// --------------------------------------------------
// 3. Providers
// --------------------------------------------------

db.providers.insertMany([
  {
    _id: ids.providers.opticalRaval,
    name: "Òptica del Raval",
    addresses: {
      country: "Spain",
      city: "Barcelona",
      postal_code: "08001",
      street: "Carrer de l'Hospital",
      number: "42",
      level: "1",
      apartment: "A",
      clients: ids.clients.maria
    }
  },
  {
    _id: ids.providers.opticalGracia,
    name: "Òptica Gràcia",
    addresses: {
      country: "Spain",
      city: "Barcelona",
      postal_code: "08012",
      street: "Carrer Gran de Gràcia",
      number: "85",
      level: "0",
      apartment: "B",
      clients: ids.clients.jordi
    }
  },
  {
    _id: ids.providers.opticalEixample,
    name: "Òptica Eixample",
    addresses: {
      country: "Spain",
      city: "Barcelona",
      postal_code: "08009",
      street: "Carrer de Girona",
      number: "110",
      level: "2",
      apartment: "1",
      clients: ids.clients.laura
    }
  }
]);

// --------------------------------------------------
// 4. Brands
// providerId references providers._id
// --------------------------------------------------

db.brands.insertMany([
  {
    _id: ids.brands.rayban,
    providerId: ids.providers.opticalRaval,
    name: "Ray-Ban"
  },
  {
    _id: ids.brands.oakley,
    providerId: ids.providers.opticalGracia,
    name: "Oakley"
  },
  {
    _id: ids.brands.hawkers,
    providerId: ids.providers.opticalEixample,
    name: "Hawkers"
  },
  {
    _id: ids.brands.tous,
    providerId: ids.providers.opticalRaval,
    name: "TOUS"
  }
]);

// --------------------------------------------------
// 5. Employees
// --------------------------------------------------

db.employee.insertMany([
  {
    _id: ids.employees.ana,
    name: "Ana Martínez"
  },
  {
    _id: ids.employees.marc,
    name: "Marc Soler"
  },
  {
    _id: ids.employees.elena,
    name: "Elena García"
  }
]);

// --------------------------------------------------
// 6. Lenses
// brands references brands._id
// --------------------------------------------------

db.lenses.insertMany([
  {
    _id: ids.lenses.lens1,
    brands: ids.brands.rayban,
    graduation: {
      left: NumberDecimal("-1.50"),
      right: NumberDecimal("-1.25")
    },
    frame: {
      material: "metal",
      color: "Black"
    },
    lens: {
      color_left: "Transparent",
      color_right: "Transparent"
    },
    price: NumberDecimal("189.90"),
    last_buyers: [
      ids.clients.maria,
      ids.clients.jordi
    ]
  },
  {
    _id: ids.lenses.lens2,
    brands: ids.brands.oakley,
    graduation: {
      left: NumberDecimal("-2.00"),
      right: NumberDecimal("-1.75")
    },
    frame: {
      material: "floating",
      color: "Matte Black"
    },
    lens: {
      color_left: "Grey",
      color_right: "Grey"
    },
    price: NumberDecimal("225.50"),
    last_buyers: [
      ids.clients.jordi
    ]
  },
  {
    _id: ids.lenses.lens3,
    brands: ids.brands.hawkers,
    graduation: {
      left: NumberDecimal("0.75"),
      right: NumberDecimal("1.00")
    },
    frame: {
      material: "paste",
      color: "Tortoise"
    },
    lens: {
      color_left: "Transparent",
      color_right: "Transparent"
    },
    price: NumberDecimal("79.95"),
    last_buyers: [
      ids.clients.laura,
      ids.clients.pau
    ]
  },
  {
    _id: ids.lenses.lens4,
    brands: ids.brands.tous,
    graduation: {
      left: NumberDecimal("-0.50"),
      right: NumberDecimal("-0.75")
    },
    frame: {
      material: "metal",
      color: "Rose Gold"
    },
    lens: {
      color_left: "Transparent",
      color_right: "Transparent"
    },
    price: NumberDecimal("159.00"),
    last_buyers: [
      ids.clients.carla
    ]
  },
  {
    _id: ids.lenses.lens5,
    brands: ids.brands.rayban,
    graduation: {
      left: NumberDecimal("-3.00"),
      right: NumberDecimal("-2.75")
    },
    frame: {
      material: "paste",
      color: "Blue"
    },
    lens: {
      color_left: "Green",
      color_right: "Green"
    },
    price: NumberDecimal("199.99"),
    last_buyers: [
      ids.clients.maria,
      ids.clients.carla
    ]
  }
]);

// --------------------------------------------------
// 7. Tickets
// lenses, clients and employee reference their _id
// --------------------------------------------------

db.ticket.insertMany([
  {
    _id: ids.tickets.ticket1,
    lenses: ids.lenses.lens1,
    clients: ids.clients.maria,
    employee: ids.employees.ana,
    created_at: Timestamp(1760000000, 1)
  },
  {
    _id: ids.tickets.ticket2,
    lenses: ids.lenses.lens2,
    clients: ids.clients.jordi,
    employee: ids.employees.marc,
    created_at: Timestamp(1761000000, 1)
  },
  {
    _id: ids.tickets.ticket3,
    lenses: ids.lenses.lens3,
    clients: ids.clients.laura,
    employee: ids.employees.elena,
    created_at: Timestamp(1762000000, 1)
  },
  {
    _id: ids.tickets.ticket4,
    lenses: ids.lenses.lens4,
    clients: ids.clients.carla,
    employee: ids.employees.ana,
    created_at: Timestamp(1763000000, 1)
  },
  {
    _id: ids.tickets.ticket5,
    lenses: ids.lenses.lens5,
    clients: ids.clients.maria,
    employee: ids.employees.marc,
    created_at: Timestamp(1764000000, 1)
  }
]);

// --------------------------------------------------
// 8. Clients
// ticket references ticket._id
// last_pruchases links tickets and lenses
// --------------------------------------------------

db.clients.insertMany([
  {
    _id: ids.clients.maria,
    name: "Maria Fernández",
    phone: "+34 600 111 201",
    email: "maria.fernandez@example.com",
    register_date: Timestamp(1750000000, 1),
    recommended_by: ids.clients.jordi,
    last_pruchases: [
      {
        ticket_id: ids.tickets.ticket1,
        lenses_id: ids.lenses.lens1
      },
      {
        ticket_id: ids.tickets.ticket5,
        lenses_id: ids.lenses.lens5
      }
    ],
    ticket: [
      ids.tickets.ticket1,
      ids.tickets.ticket5
    ]
  },
  {
    _id: ids.clients.jordi,
    name: "Jordi Pujol",
    phone: "+34 600 111 202",
    email: "jordi.pujol@example.com",
    register_date: Timestamp(1751000000, 1),
    last_pruchases: [
      {
        ticket_id: ids.tickets.ticket2,
        lenses_id: ids.lenses.lens2
      }
    ],
    ticket: [
      ids.tickets.ticket2
    ]
  },
  {
    _id: ids.clients.laura,
    name: "Laura Costa",
    phone: "+34 600 111 203",
    email: "laura.costa@example.com",
    register_date: Timestamp(1752000000, 1),
    recommended_by: ids.clients.maria,
    last_pruchases: [
      {
        ticket_id: ids.tickets.ticket3,
        lenses_id: ids.lenses.lens3
      }
    ],
    ticket: [
      ids.tickets.ticket3
    ]
  },
  {
    _id: ids.clients.pau,
    name: "Pau Vila",
    phone: "+34 600 111 204",
    email: "pau.vila@example.com",
    register_date: Timestamp(1753000000, 1),
    last_pruchases: [],
    ticket: []
  },
  {
    _id: ids.clients.carla,
    name: "Carla Romero",
    phone: "+34 600 111 205",
    email: "carla.romero@example.com",
    register_date: Timestamp(1754000000, 1),
    last_pruchases: [
      {
        ticket_id: ids.tickets.ticket4,
        lenses_id: ids.lenses.lens4
      }
    ],
    ticket: [
      ids.tickets.ticket4
    ]
  }
]);

print("Barcelona eyewear seed data inserted successfully.");
print("Providers: " + db.providers.countDocuments());
print("Brands: " + db.brands.countDocuments());
print("Lenses: " + db.lenses.countDocuments());
print("Clients: " + db.clients.countDocuments());
print("Tickets: " + db.ticket.countDocuments());
print("Employees: " + db.employee.countDocuments());
