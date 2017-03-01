package foodapp

class FriendList {
    static mapWith = "mongo"
    static belongsTo = [friendListOwner : FriendList]
    static hasMany = [friends : Friends]

    static constraints = {
        friends nullable: true
    }
}
