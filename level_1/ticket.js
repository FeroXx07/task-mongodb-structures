db.createCollection("ticket", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "ticket",
      "required": ["lenses", "clients", "employee", "created_at"],
      "properties": {
        "lenses": {
          "bsonType": "objectId"
        },
        "clients": {
          "bsonType": "objectId"
        },
        "employee": {
          "bsonType": "objectId"
        },
        "created_at": {
          "bsonType": "timestamp"
        }
      }  
    } 
  }
});
