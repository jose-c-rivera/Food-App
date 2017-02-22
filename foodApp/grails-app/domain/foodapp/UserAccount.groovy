package foodapp

import grails.rest.Resource


@Resource(uri='/api/useraccount', formats=['json'])
class UserAccount {

    String userName
    String password

    static hasOne = [userProfile : Profile]

    def getProfile(){
        return userProfile
    }

    static constraints = {
        userProfile nullable: true
        userProfile unique: true
    }
}
