package foodapp

class ProfileInfo {

    String firstName
    String lastName
    String email
    String phoneNumber
    String location
    String tastes = []
    Event currentEvent = new Event(name: "Default")
    String eventName = currentEvent.name

    static belongsTo = [profile : Profile]

    static constraints = {
    }
}