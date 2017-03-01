package foodapp

import grails.rest.RestfulController

class SigninController extends RestfulController{

    SigninController(){
        super(UserAccount)
    }
    def index() { }

    def signinUser(){
        System.out.println('Signing in...')
        def userName = params.userName
        def password = params.password
        def loginUser = UserAccount.findByUserName(userName)

        if (loginUser != null ) {
            if (password == loginUser.getPassword()) {
                System.out.println('Signin good!!')
                loginUser.authenticated = true
                //Setup some kind of response....
                //respond loginUser.getProfile()
                response.status = 200
            }
            else{
                System.out.println('PW no bueno')
                // Get a real status for this later...idk!
                response.status = 404
            }
        }
        else{
            System.out.println('USERNAME no bueno')
            // Get a real status for this later...idk!
            response.status = 404
        }
    }
}

