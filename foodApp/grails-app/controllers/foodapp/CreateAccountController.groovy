package foodapp

import grails.rest.RestfulController


class CreateAccountController extends RestfulController {

    static allowedMethods = [create: 'POST']
    static responseFormats = ['json']

    CreateAccountController(){
        super(UserAccount)
    }

    // Add default behavior?
    def index() { }

    def create(){
        def userName = params.userName
        def password = params.password
        // We would search for the account in the DB here
        //def account = UserAccount.find{userName == userName}
        def account = UserAccount.find{userName == userName}
        if(account == null){
            account = new UserAccount(userName: userName, password: password ).save()
            new Profile(ownerAccount: account).save()
            System.out.print('created')
            response.status = 200
        }
        else{
            //just for testing take out later
            System.out.print('already there')
            // Unprocessable Entity --> request was understood, syntax good but still failed
            response.status = 422
        }
    }


}
