package foodapp

import grails.rest.RestfulController

class EventController extends RestfulController{

    static responseFormats = ['json']

    EventController() {
        super(Event)
    }

    def createEvent(){
        def userName = params.userName
        UserAccount account = UserAccount.find{userName == userName}
        if(account != null){
            account.profile.info.currentEvent.name = params.eventName
            System.out.print("You changed your event name to: " + account.profile.info.currentEvent.name)
            response.status = 200
        }
        else{
            System.out.print('already there')
            response.status = 422
        }
    }

    def getAllEvents(){
        respond Event.findAll()
    }

    def deleteEvent(int id){
        def temp = Event.get(id)
        temp.delete()
    }
}
