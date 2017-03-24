package foodapp
import grails.rest.RestfulController

class EventController extends RestfulController{

    static responseFormats = ['json','xml']

    EventController() {
        super(Event)
    }

    def newEvent = new Event(date:"Today",restaurant:"Chili's").save()
    def newEvent2 = new Event(date:"Tomorrow",restaurant:"AppleBees").save()


    def getAllEvents(){
        respond Event.findAll()
    }

    def deleteEvent(){
        def temp = Event.get(1)
        temp.delete()
    }
}
