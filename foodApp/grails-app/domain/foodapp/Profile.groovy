package foodapp

class Profile {
    UserAccount ownerAccount
    ProfileInfo info

    static constraints = {
        ownerAccount nullable: false
        info unique: true
        info nullable: true
    }
}
