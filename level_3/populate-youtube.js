// YouTube-style MongoDB seed data


use("youtube");

// 1. Clear collections
db.users.deleteMany({});
db.videos.deleteMany({});
db.channels.deleteMany({});

// 2. Fixed ObjectIds
const ids = {
  users: {
    alba: ObjectId("810000000000000000000001"),
    marc: ObjectId("810000000000000000000002"),
    laia: ObjectId("810000000000000000000003"),
    pau: ObjectId("810000000000000000000004"),
    nuria: ObjectId("810000000000000000000005"),
    oriol: ObjectId("810000000000000000000006")
  },
  channels: {
    barcelonaBites: ObjectId("820000000000000000000001"),
    codeCat: ObjectId("820000000000000000000002"),
    routesCatalonia: ObjectId("820000000000000000000003"),
    indieMusic: ObjectId("820000000000000000000004")
  },
  videos: {
    tapas: ObjectId("830000000000000000000001"),
    sagrada: ObjectId("830000000000000000000002"),
    mongo: ObjectId("830000000000000000000003"),
    python: ObjectId("830000000000000000000004"),
    costaBrava: ObjectId("830000000000000000000005"),
    guitar: ObjectId("830000000000000000000006"),
    paAmbTomaquet: ObjectId("830000000000000000000007"),
    cycling: ObjectId("830000000000000000000008")
  }
};

// 3. Users
// Password values are test placeholders, not usable credentials.
// In a real app, store a strong password hash, never plain text.
db.users.insertMany([
  {
    _id: ids.users.alba,
    email: "alba.martin@example.com",
    password: "TEST_HASH_ALBA_ONLY",
    date_birth: "1995-04-12",
    gender: "female",
    country: "Spain",
    postal_code: "08012",
    playlist: [
      {
        name: "Barcelona food spots",
        created_at: Timestamp(1760000000, 1),
        visibility: "public",
        video_Id: [ids.videos.tapas, ids.videos.paAmbTomaquet]
      },
      {
        name: "Watch later",
        created_at: Timestamp(1760100000, 1),
        visibility: "private",
        video_Id: [ids.videos.costaBrava, ids.videos.cycling]
      }
    ]
  },
  {
    _id: ids.users.marc,
    email: "marc.vidal@example.com",
    password: "TEST_HASH_MARC_ONLY",
    date_birth: "1991-09-23",
    gender: "male",
    country: "Spain",
    postal_code: "08009",
    playlist: [{
      name: "Learn MongoDB",
      created_at: Timestamp(1760200000, 1),
      visibility: "public",
      video_Id: [ids.videos.mongo, ids.videos.python]
    }]
  },
  {
    _id: ids.users.laia,
    email: "laia.costa@example.com",
    password: "TEST_HASH_LAIA_ONLY",
    date_birth: "2000-02-18",
    gender: "female",
    country: "Spain",
    postal_code: "08024",
    playlist: [{
      name: "Weekend in Catalonia",
      created_at: Timestamp(1760300000, 1),
      visibility: "public",
      video_Id: [ids.videos.sagrada, ids.videos.costaBrava, ids.videos.cycling]
    }]
  },
  {
    _id: ids.users.pau,
    email: "pau.serra@example.com",
    password: "TEST_HASH_PAU_ONLY",
    date_birth: "1988-11-05",
    gender: "male",
    country: "Spain",
    postal_code: "08001",
    playlist: [{
      name: "Guitar inspiration",
      created_at: Timestamp(1760400000, 1),
      visibility: "private",
      video_Id: [ids.videos.guitar]
    }]
  },
  {
    _id: ids.users.nuria,
    email: "nuria.garcia@example.com",
    password: "TEST_HASH_NURIA_ONLY",
    date_birth: "1997-06-30",
    gender: "female",
    country: "Spain",
    postal_code: "08912",
    playlist: []
  },
  {
    _id: ids.users.oriol,
    email: "oriol.roca@example.com",
    password: "TEST_HASH_ORIOL_ONLY",
    date_birth: "1993-12-14",
    gender: "male",
    country: "Spain",
    postal_code: "08911",
    playlist: [{
      name: "Food and travel",
      created_at: Timestamp(1760500000, 1),
      visibility: "public",
      video_Id: [ids.videos.tapas, ids.videos.paAmbTomaquet, ids.videos.costaBrava]
    }]
  }
]);

// 4. Channels; subscriber user_Id values reference users._id.
db.channels.insertMany([
  {
    _id: ids.channels.barcelonaBites,
    users: ids.users.alba,
    name: "Barcelona Bites",
    description: "Cuina catalana, tapes i llocs per menjar a Barcelona.",
    create_at: Timestamp(1740000000, 1),
    subscribers: [
      { user_Id: ids.users.marc, update_at: Timestamp(1761000000, 1) },
      { user_Id: ids.users.laia, update_at: Timestamp(1761100000, 1) },
      { user_Id: ids.users.oriol, update_at: Timestamp(1761200000, 1) }
    ]
  },
  {
    _id: ids.channels.codeCat,
    users: ids.users.marc,
    name: "CodeCat",
    description: "Tutorials de programació, MongoDB i desenvolupament web.",
    create_at: Timestamp(1741000000, 1),
    subscribers: [
      { user_Id: ids.users.alba, update_at: Timestamp(1761300000, 1) },
      { user_Id: ids.users.pau, update_at: Timestamp(1761400000, 1) },
      { user_Id: ids.users.nuria, update_at: Timestamp(1761500000, 1) }
    ]
  },
  {
    _id: ids.channels.routesCatalonia,
    users: ids.users.laia,
    name: "Rutes per Catalunya",
    description: "Excursions, escapades i rutes de cap de setmana per Catalunya.",
    create_at: Timestamp(1742000000, 1),
    subscribers: [
      { user_Id: ids.users.alba, update_at: Timestamp(1761600000, 1) },
      { user_Id: ids.users.oriol, update_at: Timestamp(1761700000, 1) }
    ]
  },
  {
    _id: ids.channels.indieMusic,
    users: ids.users.pau,
    name: "Indie Sessions BCN",
    description: "Sessions de guitarra i música independent a Barcelona.",
    create_at: Timestamp(1743000000, 1),
    subscribers: [
      { user_Id: ids.users.marc, update_at: Timestamp(1761800000, 1) },
      { user_Id: ids.users.nuria, update_at: Timestamp(1761900000, 1) }
    ]
  }
]);

// 5. Videos
// Schema has likes as an array, but dislikes and views as single objects.
// number_* counters use BSON long; duration uses BSON double.
db.videos.insertMany([
  {
    _id: ids.videos.tapas,
    users: ids.users.alba,
    title: "Les millors tapes del barri de Gràcia",
    description: "Una ruta de tapes i plats tradicionals pels carrers de Gràcia, Barcelona.",
    resolution: { width: "1920", height: "1080" },
    file_name: "tapes-gracia-barcelona.mp4",
    duration: 642.5,
    thumbnail: "tapes-gracia-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.marc, update_at: Timestamp(1762000000, 1) },
        { user_Id: ids.users.laia, update_at: Timestamp(1762000100, 1) },
        { user_Id: ids.users.oriol, update_at: Timestamp(1762000200, 1) }
      ],
      number_likes: NumberLong("3"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("2450"),
      dislikes: { user_Id: ids.users.pau, update_at: Timestamp(1762000300, 1) },
      views: { user_Id: ids.users.nuria, update_at: Timestamp(1762000400, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1761900000, 1),
      update_at: Timestamp(1762000000, 1)
    },
    tags: ["Barcelona", "Gràcia", "tapes", "gastronomia", "Catalunya"],
    comments: [
      {
        user_Id: ids.users.laia,
        create_at: Timestamp(1762000500, 1),
        text: "Quina bona pinta! M'apunto aquesta ruta."
      },
      {
        user_Id: ids.users.oriol,
        create_at: Timestamp(1762000600, 1),
        text: "Molt bon vídeo, gràcies per les recomanacions."
      }
    ]
  },
  {
    _id: ids.videos.sagrada,
    users: ids.users.laia,
    title: "Barcelona en un dia: ruta a peu",
    description: "Ruta per descobrir la Sagrada Família, el Gòtic i altres racons de Barcelona.",
    resolution: { width: "1920", height: "1080" },
    file_name: "barcelona-en-un-dia.mp4",
    duration: 905.25,
    thumbnail: "barcelona-ruta-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.alba, update_at: Timestamp(1762100000, 1) },
        { user_Id: ids.users.nuria, update_at: Timestamp(1762100100, 1) }
      ],
      number_likes: NumberLong("2"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("5810"),
      dislikes: { user_Id: ids.users.marc, update_at: Timestamp(1762100200, 1) },
      views: { user_Id: ids.users.oriol, update_at: Timestamp(1762100300, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762050000, 1),
      update_at: Timestamp(1762100000, 1)
    },
    tags: ["Barcelona", "Sagrada Família", "turisme", "walking tour"],
    comments: [{
      user_Id: ids.users.alba,
      create_at: Timestamp(1762100400, 1),
      text: "Perfecte per ensenyar la ciutat a uns amics!"
    }]
  },
  {
    _id: ids.videos.mongo,
    users: ids.users.marc,
    title: "MongoDB per a principiants: col·leccions i documents",
    description: "Introducció pràctica a MongoDB amb exemples i consultes bàsiques.",
    resolution: { width: "1920", height: "1080" },
    file_name: "mongodb-principiants.mp4",
    duration: 1180.0,
    thumbnail: "mongodb-basics-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.alba, update_at: Timestamp(1762200000, 1) },
        { user_Id: ids.users.pau, update_at: Timestamp(1762200100, 1) },
        { user_Id: ids.users.nuria, update_at: Timestamp(1762200200, 1) },
        { user_Id: ids.users.laia, update_at: Timestamp(1762200300, 1) }
      ],
      number_likes: NumberLong("4"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("9230"),
      dislikes: { user_Id: ids.users.oriol, update_at: Timestamp(1762200400, 1) },
      views: { user_Id: ids.users.alba, update_at: Timestamp(1762200500, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762150000, 1),
      update_at: Timestamp(1762200000, 1)
    },
    tags: ["MongoDB", "programació", "database", "tutorial", "NoSQL"],
    comments: [
      {
        user_Id: ids.users.pau,
        create_at: Timestamp(1762200600, 1),
        text: "Molt clar. Pots fer un vídeo sobre agregacions?"
      },
      {
        user_Id: ids.users.nuria,
        create_at: Timestamp(1762200700, 1),
        text: "M'ha anat molt bé per començar amb NoSQL."
      }
    ]
  },
  {
    _id: ids.videos.python,
    users: ids.users.marc,
    title: "Python: primers passos",
    description: "Variables, llistes, funcions i un petit projecte en Python.",
    resolution: { width: "1280", height: "720" },
    file_name: "python-primers-passos.mp4",
    duration: 755.75,
    thumbnail: "python-intro-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.laia, update_at: Timestamp(1762300000, 1) },
        { user_Id: ids.users.pau, update_at: Timestamp(1762300100, 1) }
      ],
      number_likes: NumberLong("2"),
      number_dislikes: NumberLong("1"),
      number_views: NumberLong("4170"),
      dislikes: { user_Id: ids.users.oriol, update_at: Timestamp(1762300200, 1) },
      views: { user_Id: ids.users.nuria, update_at: Timestamp(1762300300, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762250000, 1),
      update_at: Timestamp(1762300000, 1)
    },
    tags: ["Python", "programació", "tutorial", "principiants"],
    comments: [{
      user_Id: ids.users.laia,
      create_at: Timestamp(1762300400, 1),
      text: "M'agradaria veure més exercicis pràctics."
    }]
  },
  {
    _id: ids.videos.costaBrava,
    users: ids.users.laia,
    title: "Escapada a la Costa Brava des de Barcelona",
    description: "Idees per a una escapada de cap de setmana amb platges i pobles costaners.",
    resolution: { width: "1920", height: "1080" },
    file_name: "escapada-costa-brava.mp4",
    duration: 845.0,
    thumbnail: "costa-brava-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.alba, update_at: Timestamp(1762400000, 1) },
        { user_Id: ids.users.oriol, update_at: Timestamp(1762400100, 1) },
        { user_Id: ids.users.nuria, update_at: Timestamp(1762400200, 1) }
      ],
      number_likes: NumberLong("3"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("7620"),
      dislikes: { user_Id: ids.users.marc, update_at: Timestamp(1762400300, 1) },
      views: { user_Id: ids.users.pau, update_at: Timestamp(1762400400, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762350000, 1),
      update_at: Timestamp(1762400000, 1)
    },
    tags: ["Catalunya", "Costa Brava", "viatges", "platja", "Barcelona"],
    comments: [{
      user_Id: ids.users.oriol,
      create_at: Timestamp(1762400500, 1),
      text: "Una guia ideal per al pròxim cap de setmana."
    }]
  },
  {
    _id: ids.videos.guitar,
    users: ids.users.pau,
    title: "Sessió acústica al barri del Born",
    description: "Una sessió de guitarra acústica enregistrada a Barcelona.",
    resolution: { width: "1920", height: "1080" },
    file_name: "sessio-acustica-born.mp4",
    duration: 312.4,
    thumbnail: "guitar-born-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.marc, update_at: Timestamp(1762500000, 1) },
        { user_Id: ids.users.nuria, update_at: Timestamp(1762500100, 1) }
      ],
      number_likes: NumberLong("2"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("1890"),
      dislikes: { user_Id: ids.users.laia, update_at: Timestamp(1762500200, 1) },
      views: { user_Id: ids.users.alba, update_at: Timestamp(1762500300, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762450000, 1),
      update_at: Timestamp(1762500000, 1)
    },
    tags: ["guitarra", "música", "acústic", "Born", "Barcelona"],
    comments: [{
      user_Id: ids.users.nuria,
      create_at: Timestamp(1762500400, 1),
      text: "Molt bona atmosfera i so!"
    }]
  },
  {
    _id: ids.videos.paAmbTomaquet,
    users: ids.users.alba,
    title: "Com preparar pa amb tomàquet",
    description: "Recepta catalana clàssica amb pa de pagès, tomàquet, oli i sal.",
    resolution: { width: "1280", height: "720" },
    file_name: "pa-amb-tomaquet.mp4",
    duration: 285.0,
    thumbnail: "pa-amb-tomaquet-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.oriol, update_at: Timestamp(1762600000, 1) },
        { user_Id: ids.users.laia, update_at: Timestamp(1762600100, 1) }
      ],
      number_likes: NumberLong("2"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("3210"),
      dislikes: { user_Id: ids.users.pau, update_at: Timestamp(1762600200, 1) },
      views: { user_Id: ids.users.marc, update_at: Timestamp(1762600300, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762550000, 1),
      update_at: Timestamp(1762600000, 1)
    },
    tags: ["cuina catalana", "recepta", "pa amb tomàquet", "gastronomia"],
    comments: [{
      user_Id: ids.users.oriol,
      create_at: Timestamp(1762600400, 1),
      text: "Amb pa de pagès queda espectacular."
    }]
  },
  {
    _id: ids.videos.cycling,
    users: ids.users.laia,
    title: "Ruta en bicicleta pel litoral de Badalona",
    description: "Un passeig en bicicleta per la costa entre Barcelona i Badalona.",
    resolution: { width: "1920", height: "1080" },
    file_name: "ruta-bici-badalona.mp4",
    duration: 690.0,
    thumbnail: "bici-badalona-thumbnail.jpg",
    stats: {
      likes: [
        { user_Id: ids.users.alba, update_at: Timestamp(1762700000, 1) },
        { user_Id: ids.users.oriol, update_at: Timestamp(1762700100, 1) }
      ],
      number_likes: NumberLong("2"),
      number_dislikes: NumberLong("0"),
      number_views: NumberLong("1460"),
      dislikes: { user_Id: ids.users.marc, update_at: Timestamp(1762700200, 1) },
      views: { user_Id: ids.users.pau, update_at: Timestamp(1762700300, 1) }
    },
    state: {
      visibility: "public",
      create_at: Timestamp(1762650000, 1),
      update_at: Timestamp(1762700000, 1)
    },
    tags: ["Badalona", "bicicleta", "ciclisme", "litoral", "Catalunya"],
    comments: [{
      user_Id: ids.users.alba,
      create_at: Timestamp(1762700400, 1),
      text: "Bona ruta per fer una tarda de cap de setmana."
    }]
  }
]);

// 6. Verify inserted data
print("\nYouTube Barcelona seed data inserted successfully.");
print("Users: " + db.users.countDocuments());
print("Channels: " + db.channels.countDocuments());
print("Videos: " + db.videos.countDocuments());

print("\nVideos by visibility:");
printjson(db.videos.aggregate([
  { $group: { _id: "$state.visibility", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]).toArray());

print("\nMost viewed videos:");
printjson(db.videos.find(
  {},
  { title: 1, "stats.number_views": 1, "stats.number_likes": 1 }
).sort({ "stats.number_views": -1 }).limit(5).toArray());