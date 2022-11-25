const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  let user=this
if (!user.isModified('password')) return 333;
if(user.isModified("password")){console.log('yes modified')}

user.password = await bcrypt.hash(
  user.password,
    parseInt(process.env.saltRounds)
  );
  console.log('pre save password: ' + user.password);
  if(user.isModified("password")){console.log('yes modifieddd')}



  next();
});


// userSchema.pre('save',async function(next){
//     if (!this.isModified('password')) return next();

//     const user = this;
    
//      bcrypt.genSalt(5, function(err, salt){
//         if (err){ return next(err) }

//          bcrypt.hash(user.password, salt, null, function(err, hash){
//             if(err){return next(err)}

//             user.password = hash;
//             next();
//         })
//    })
// })


// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };

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
