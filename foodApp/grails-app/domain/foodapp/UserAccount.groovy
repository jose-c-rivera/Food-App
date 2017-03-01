package foodapp

class UserAccount {
    static mapWith = "mongo"
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
