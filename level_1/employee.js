db.createCollection("employee", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employee",
      "properties": {
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
