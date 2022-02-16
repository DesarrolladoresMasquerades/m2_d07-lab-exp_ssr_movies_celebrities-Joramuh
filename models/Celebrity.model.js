const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: {
        type: String,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: [true, "What they do? Why are they famous?"],
        detault: "unknown"
    },
    catchPhrase:{
        type: String,
        required: [true, "Every celebrity has a good catchphrase"],
    },    
    },
  {
    timestamps: true
  }
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
