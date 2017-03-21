package foodapp

class Profile {
    UserAccount ownerAccount
    String email
    String phoneNumber
    String location
    String tastes = []

    static constraints = {
        ownerAccount nullable: false
    }

}
