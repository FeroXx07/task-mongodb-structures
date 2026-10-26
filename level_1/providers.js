db.createCollection("providers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "providers",
      "required": ["name", "addresses"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "addresses": {
          "bsonType": "object",
          "title": "object",
          "required": ["country", "city", "postal_code", "street", "clients"],
          "properties": {
            "country": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "postal_code": {
              "bsonType": "string"
            },
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "string"
            },
            "level": {
              "bsonType": "string"
            },
            "apartment": {
              "bsonType": "string"
            },
            "clients": {
              "bsonType": "objectId"
            }
          }  
        }
      }  
    } 
  },
  "validationLevel":"strict",
  "validationAction":"warn"
});
