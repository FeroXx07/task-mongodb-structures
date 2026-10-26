db.createCollection("lenses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "lenses",
      "required": ["brands", "graduation", "frame", "price"],
      "properties": {
        "brands": {
          "bsonType": "objectId"
        },
        "graduation": {
          "bsonType": "object",
          "title": "object",
          "required": ["left", "right"],
          "properties": {
            "left": {
              "bsonType": "decimal"
            },
            "right": {
              "bsonType": "decimal"
            }
          }  
        },
        "frame": {
          "bsonType": "object",
          "title": "object",
          "required": ["material", "color"],
          "properties": {
            "material": {
              "enum": 
            },
            "color": {
              "bsonType": "string"
            }
          }  
        },
        "lens": {
          "bsonType": "object",
          "title": "object",
          "properties": {
            "color_left": {
              "bsonType": "string"
            },
            "color_right": {
              "bsonType": "string"
            }
          }  
        },
        "price": {
          "bsonType": "decimal"
        },
        "last_buyers": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
