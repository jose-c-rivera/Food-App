package foodapp

class ProfileInfo {
    static mapWith = "mongo"
    String firstName
    String lastName
    String email
    String location
    String cuisineTypes = []
    String flavorTypes = []

    static belongsTo = [profile : Profile]

    static constraints = {
    }

    def getFirstName(){
        return firstName
    }

    def getLastName(){
        return lastName
    }

    def getEmail(){
        return email
    }

    def getLocation(){
        return location
    }

    def getcuisineTypes(){
        return cuisineTypes
    }

    def getFlavorTypes(){
        return flavorTypes
    }
}
