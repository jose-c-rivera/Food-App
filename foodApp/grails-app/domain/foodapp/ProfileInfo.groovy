package foodapp

class ProfileInfo {

    String email
    String phoneNumber
    String location
    String tastes = []

    static belongsTo = [profile : Profile]

    static constraints = {
    }
}