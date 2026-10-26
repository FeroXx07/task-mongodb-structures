db.createCollection("clients", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "clients",
      "required": ["name", "phone", "email", "register_date", "ticket"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "phone": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "register_date": {
          "bsonType": "timestamp"
        },
        "recommended_by": {
          "bsonType": "objectId"
        },
        "last_pruchases": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["ticket_id", "lenses_id"],
            "properties": {
              "ticket_id": {
                "bsonType": "objectId"
              },
              "lenses_id": {
                "bsonType": "objectId"
              }
            }
          }  
        },
        "ticket": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
