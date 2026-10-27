db.createCollection("addresses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "addresses",
      "required": ["postal_code", "full_address", "localities"],
      "properties": {
        "postal_code": {
          "bsonType": "string"
        },
        "full_address": {
          "bsonType": "string"
        },
        "localities": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
db.createCollection("clients", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "clients",
      "required": ["address_Id", "name", "phone"],
      "properties": {
        "address_Id": {
          "bsonType": "objectId"
        },
        "name": {
          "bsonType": "object",
          "title": "object",
          "required": ["first", "last"],
          "properties": {
            "first": {
              "bsonType": "string"
            },
            "last": {
              "bsonType": "string"
            }
          }  
        },
        "phone": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "orders",
      "required": ["createdAt", "isDelivery", "totalPrice", "client_Id", "item", "employee_nif", "restaurant_Id"],
      "properties": {
        "createdAt": {
          "bsonType": "timestamp"
        },
        "isDelivery": {
          "bsonType": "bool"
        },
        "totalPrice": {
          "bsonType": "decimal"
        },
        "client_Id": {
          "bsonType": "objectId"
        },
        "item": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "properties": {
              "product_Id": {
                "bsonType": "objectId"
              },
              "name": {
                "bsonType": "string"
              },
              "quantity": {
                "bsonType": "int"
              }
            }
          }  
        },
        "employee_nif": {
          "bsonType": "string"
        },
        "delivery": {
          "bsonType": "object",
          "title": "object",
          "required": ["employee_nif"],
          "properties": {
            "employee_nif": {
              "bsonType": "string"
            },
            "delivery_time": {
              "bsonType": "timestamp"
            }
          }  
        },
        "restaurant_Id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "products",
      "required": ["name", "description", "category"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "image": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "category": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
db.createCollection("category", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "category",
      "required": ["name"],
      "properties": {
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
db.createCollection("restaurants", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "restaurants",
      "required": ["address_Id"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "employee": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["nif", "name", "phone", "role"],
            "properties": {
              "nif": {
                "bsonType": "string"
              },
              "name": {
                "bsonType": "string"
              },
              "phone": {
                "bsonType": "string"
              },
              "role": {
                "enum": ["kitchen", "staff", "delivery"]
              }
            }
          }  
        },
        "address_Id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
db.createCollection("provinces", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "provinces",
      "required": ["name"],
      "properties": {
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
db.createCollection("localities", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "localities",
      "required": ["provinces_Id", "name"],
      "properties": {
        "provinces_Id": {
          "bsonType": "objectId"
        },
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});












