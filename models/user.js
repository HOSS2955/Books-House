const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const time = {
  timestamps: {
    currentTime: () => new Date().setHours(new Date().getHours() + 2),
  },
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    avatar: {
      type: Buffer,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
    },
    refreshToken: [String],
  },

  time
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    parseInt(process.env.saltRounds)
  );

  next();
});

// userSchema.pre('findByIdAndUpdate',async function (next){
//     const hookData=await this.model.findOne(this.getQuery()).select("__v")
//     console.log(hookData);
//     this.set({__v:hookData.__v+1})
//     if(hookData.__v>3){

// res.json({message:'sorry no more req'})

//     }else{

//         next()

//     }

//     })

const User = mongoose.model("user", userSchema);
module.exports = User;
