package foodapp

class ProfileInfo {

    String firstName
    String lastName
    String email
    String phoneNumber
    String location
    String tastes = []

    static belongsTo = [profile : Profile]

    static constraints = {
    }
}