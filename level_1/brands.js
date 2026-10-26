db.createCollection("brands", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "brands",
      "required": ["providerId", "name"],
      "properties": {
        "providerId": {
          "bsonType": "objectId"
        },
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
