package foodapp

class Profile {
    UserAccount ownerAccount
    String email
    String phoneNumber
    String location
    String tastes = []

    static belongsTo = [ownerAccount: UserAccount]

    static constraints = {
        ownerAccount nullable: false
    }

}
