db.createCollection("users", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "users",
      "required": ["email", "password", "date_birth", "gender", "country", "postal_code"],
      "properties": {
        "email": {
          "bsonType": "string"
        },
        "password": {
          "bsonType": "string"
        },
        "date_birth": {
          "bsonType": "string"
        },
        "gender": {
          "bsonType": "string"
        },
        "country": {
          "bsonType": "string"
        },
        "postal_code": {
          "bsonType": "string"
        },
        "playlist": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["name", "created_at", "visibility", "video_Id"],
            "properties": {
              "name": {
                "bsonType": "string"
              },
              "created_at": {
                "bsonType": "timestamp"
              },
              "visibility": {
                "enum": ["public","private"]
              },
              "video_Id": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              }
            }
          }  
        }
      }  
    } 
  }
});
db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "videos",
      "required": ["users", "title", "description", "resolution", "file_name", "duration", "thumbnail", "stats", "state", "tags"],
      "properties": {
        "users": {
          "bsonType": "objectId"
        },
        "title": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "resolution": {
          "bsonType": "object",
          "title": "object",
          "required": ["width", "height"],
          "properties": {
            "width": {
              "bsonType": "string"
            },
            "height": {
              "bsonType": "string"
            }
          }  
        },
        "file_name": {
          "bsonType": "string"
        },
        "duration": {
          "bsonType": "double"
        },
        "thumbnail": {
          "bsonType": "string"
        },
        "stats": {
          "bsonType": "object",
          "title": "object",
          "required": ["likes", "number_likes", "number_dislikes", "number_views", "dislikes", "views"],
          "properties": {
            "likes": {
              "bsonType": "array",
              "items": {
                "title": "object",
                "required": ["user_Id", "update_at"],
                "properties": {
                  "user_Id": {
                    "bsonType": "objectId"
                  },
                  "update_at": {
                    "bsonType": "timestamp"
                  }
                }
              }  
            },
            "number_likes": {
              "bsonType": "long"
            },
            "number_dislikes": {
              "bsonType": "long"
            },
            "number_views": {
              "bsonType": "long"
            },
            "dislikes": {
              "bsonType": "object",
              "title": "object",
              "required": ["user_Id", "update_at"],
              "properties": {
                "user_Id": {
                  "bsonType": "objectId"
                },
                "update_at": {
                  "bsonType": "timestamp"
                }
              }  
            },
            "views": {
              "bsonType": "object",
              "title": "object",
              "required": ["user_Id", "update_at"],
              "properties": {
                "user_Id": {
                  "bsonType": "objectId"
                },
                "update_at": {
                  "bsonType": "timestamp"
                }
              }  
            }
          }  
        },
        "state": {
          "bsonType": "object",
          "title": "object",
          "required": ["visibility", "create_at", "update_at"],
          "properties": {
            "visibility": {
              "enum": ["public","private","hidden"]
            },
            "create_at": {
              "bsonType": "timestamp"
            },
            "update_at": {
              "bsonType": "timestamp"
            }
          }  
        },
        "tags": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "comments": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_Id", "create_at", "text"],
            "properties": {
              "user_Id": {
                "bsonType": "objectId"
              },
              "create_at": {
                "bsonType": "timestamp"
              },
              "text": {
                "bsonType": "string"
              }
            }
          }  
        }
      }  
    } 
  }
});
db.createCollection("channels", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "channels",
      "required": ["users", "name", "description", "create_at"],
      "properties": {
        "users": {
          "bsonType": "objectId"
        },
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "create_at": {
          "bsonType": "timestamp"
        },
        "subscribers": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_Id", "update_at"],
            "properties": {
              "user_Id": {
                "bsonType": "objectId"
              },
              "update_at": {
                "bsonType": "timestamp"
              }
            }
          }  
        }
      }  
    } 
  }
});












