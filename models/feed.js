var mongoose = require("mongoose");
var passportLocalMongoose  =require("passport-local-mongoose");
var FeedSchema = new mongoose.Schema({
    username : String,
    image : String,
    description  : String,
    address : String,
    age     : {type : Date },
    created : {type: Date, default:Date.now },
    gender: {type: String, possibleValues: ['male','female']},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Comment"
    }]

});
FeedSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("Feed",FeedSchema);