package foodapp

class UserAccount {
    String userName
    String password

    static hasOne = [userProfile : Profile]

    static constraints = {
        userProfile nullable: true
        userProfile unique: true
    }

   def getProfile(){
        return userProfile
    }

}
