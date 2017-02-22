package foodapp

class Profile {
    UserAccount ownerAccount
    ProfileInfo info
    FriendList friendList

    static belongsTo = [ownerAccount: UserAccount]

    static hasOne = [friendList : FriendList,
                     info : ProfileInfo]

    static hasMany = [outFriendRequests : FriendRequest,
                      inFriendRequests : FriendRequest]

    static constraints = {
        ownerAccount nullable: false
        friendList nullable: true
        friendList unique: true
        profileInfo nullable: true
        profileInfo unique: true
        outFriendRequests nullable: true
        outFriendRequests nullable: true
    }

    def getFriendList(){
        return friendList
    }

    def getProfileInfo(){
        return info
    }
}
