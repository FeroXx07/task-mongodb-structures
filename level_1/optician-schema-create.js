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
  }
});
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
              "enum": ["floating","paste","metal"]
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












