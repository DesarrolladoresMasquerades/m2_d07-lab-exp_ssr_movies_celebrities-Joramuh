const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true,
        unique: true
    },
    plot:{
        type: String,
        required: true,
        unique: true
    },    
    cast: [{type: Schema.Types.ObjectId, ref: "Celebrity"}],
    },
  {
    timestamps: true
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
