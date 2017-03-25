package foodapp

import grails.rest.RestfulController
import grails.converters.*

class ViewAccountController extends RestfulController{

    static allowedMethods = [view: 'GET']
    static responseFormats = ['json']

    ViewAccountController(){
        super(UserAccount)
    }

    def index() { }

    def view(){
        def userName = params.userName
        UserAccount account = UserAccount.find{userName == userName}

        if (account != null){
            def profile = account.userProfile
            def infoFromProfile = profile.info
            def result = [result: infoFromProfile, tastes: infoFromProfile.tastes]
            response.setContentType("application/json")

            response.status = 200

            render result as JSON
        }
        else{
            System.out.print('User not found')
            response.status = 404
        }
    }


}