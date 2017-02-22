package foodapp
import grails.rest.Resource

@Resource(uri='/api/friendlist', formats=['json'])
class FriendList {

    static belongsTo = [friendListOwner : FriendList]
    static hasMany = [friends : Friends]

    static constraints = {
        friends nullable: true
    }
}
