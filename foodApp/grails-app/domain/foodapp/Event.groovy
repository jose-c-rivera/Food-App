package foodapp

class Event {
    String name
    String date
    String restaurant
    String party = []

    Event(){
        this.date = "Select Date"
        this.restaurant = "Select Restaurant"
    }

    static constraints = {
    }

}
