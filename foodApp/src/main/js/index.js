import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { CreateAccount } from './createaccount'
import { Menus } from './menu'
import { DiscoverApp } from './discover'
import { northAmerica } from './northAmerica'
import { southAmerica } from './southAmerica'
import { europe } from './europe'
import { africa } from './africa'
import { asia } from './asiaME'
import { australia } from './australia'
import { UserSignIn } from './signin'


ReactDOM.render((

    <Router history = {browserHistory}>
        <Route path="/" component={UserSignIn}/>
        <Route path="/menu" component={Menus}/>
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/discover" component={DiscoverApp}/>

                <Route path="/NorthAmerica" component={northAmerica}/>
                <Route path="/SouthAmerica" component={southAmerica}/>
                <Route path="/Europe" component={europe}/>
                <Route path="/Asia" component={asia}/>
                <Route path="/Africa" component={africa}/>
                <Route path="/Australia" component={australia}/>
    </Router>

), document.getElementById('root'));

