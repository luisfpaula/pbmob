Posts = new Mongo.Collection('posts'); 

Posts.publish = function (message) {
    this.insert({
        message: message,
        date: new Date(),
        userId: Meteor.userId()
    });
};

Posts.list = function(userId){
    return this.find({userId: userId});
}