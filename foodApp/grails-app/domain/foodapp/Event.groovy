package foodapp

class Event {
    String date
    String restaurant
    LinkedList<String> party = new LinkedList<String>()

    Event(){
        this.date = "Select Date"
        this.restaurant = "Select Restaurant"
        this.party.add("Jason")
        this.party.add("Christine")
    }

    static constraints = {
    }

    def setRestaurant(String location){
        this.restaurant = location
    }

    def resetRestaurant(){
        this.restaurant = null
    }

    def addToParty(String friend){
        party.add(friend)
        party.sort()
    }

    def removeFromParty(String friend){
        party.remove(friend)
        party.sort()
    }

    def partySize(){
        return party.size()
    }
}
