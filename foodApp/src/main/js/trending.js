/**
 * File: trending.js
 * Purpose: Lets the user see all the restaurants that are trending on social media sites like Instagram and Twitter
 * @AUTHOR: Scott Lavelle
 * Course: CS 2212
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
import AccountStore from "./stores/accountStore"

//import { NavBar } from '../navbar'
class Trending extends Component{

    constructor(){
        super();
        this.state = {
            location: ["London"],
            name1: [],
            image1: [],
            phone1: [],
            address1: [],
            name2: [],
            image2: [],
            phone2: [],
            address2: [],
            name3: [],
            image3: [],
            phone3: [],
            address3: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchFromAPI() {
        let userName = accountStore.getUser();

        fetch('http://localhost:8080/viewAccount/view?' + 'userName=' + userName, {
                method: 'GET',
                dataType: 'json',
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then((response) => {
            return response.json();
        }).then((responseData) => {
            this.setState({location: responseData.result.location});
            //accountStore.changeLocation(responseData.result.location)
            //console.log(accountStore.getLocation());
        });

        //console.log(accountStore.getLocation());
        var location = this.state.location;

        fetch('http://localhost:8080/Search/SearchPopularRestaurants?&searchTerm=Restaurant food'+ '&location=' + location)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        let results = [];
                        for (let i = 0; i < json.length; i++) {
                            results.push(<div><Status status={json[i]}/><br /></div>);
                        }
                        if (json.businesses[0]){
                            this.setState({name1: json.businesses[0].name});
                            this.setState({image1: json.businesses[0].image_url});
                            this.setState({phone1: json.businesses[0].display_phone});
                            this.setState({address1: json.businesses[0].location.display_address});
                        }
                        else{
                            this.setState({name1: ["There are no restaurants in your area that serve this food"]});
                            this.setState({image1: []});
                            this.setState({phone1: []});
                            this.setState({address1: []});
                        }
                        if (json.businesses[1]){
                            this.setState({name2: json.businesses[1].name});
                            this.setState({image2: json.businesses[1].image_url});
                            this.setState({phone2: json.businesses[1].display_phone});
                            this.setState({address2: json.businesses[1].location.display_address});
                        }
                        else{
                            this.setState({name2: []});
                            this.setState({image2: []});
                            this.setState({phone2: []});
                            this.setState({address2: []});
                        }
                        if (json.businesses[2]){
                            this.setState({name3: json.businesses[2].name});
                            this.setState({image3: json.businesses[2].image_url});
                            this.setState({phone3: json.businesses[2].display_phone});
                            this.setState({address3: json.businesses[2].location.display_address});
                        }
                        else{
                            this.setState({name3: []});
                            this.setState({image3: []});
                            this.setState({phone3: []});
                            this.setState({address3: []});
                        }
                    });
                }
            })
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({location : event.target.value });
    }

   handleSubmit(event) {
     event.preventDefault();
     var location = this.state.location;
     alert('Now searching trending restaurants in ' + location);

        fetch('http://localhost:8080/Search/SearchPopularRestaurants?&searchTerm=Restaurant food'+ '&location=' + location)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(json)
                        let results = [];
                        for (let i = 0; i < json.length; i++) {
                            results.push(<div><Status status={json[i]}/><br /></div>);
                        }
                        if (json.businesses[0]){
                            this.setState({name1: json.businesses[0].name});
                            this.setState({image1: json.businesses[0].image_url});
                            this.setState({phone1: json.businesses[0].display_phone});
                            this.setState({address1: json.businesses[0].location.display_address});
                        }
                        else{
                            this.setState({name1: ["There are no restaurants in your area that serve this food"]});
                            this.setState({image1: []});
                            this.setState({phone1: []});
                            this.setState({address1: []});
                        }
                        if (json.businesses[1]){
                            this.setState({name2: json.businesses[1].name});
                            this.setState({image2: json.businesses[1].image_url});
                            this.setState({phone2: json.businesses[1].display_phone});
                            this.setState({address2: json.businesses[1].location.display_address});
                        }
                        else{
                            this.setState({name2: []});
                            this.setState({image2: []});
                            this.setState({phone2: []});
                            this.setState({address2: []});
                        }
                        if (json.businesses[2]){
                            this.setState({name3: json.businesses[2].name});
                            this.setState({image3: json.businesses[2].image_url});
                            this.setState({phone3: json.businesses[2].display_phone});
                            this.setState({address3: json.businesses[2].location.display_address});
                        }
                        else{
                            this.setState({name3: []});
                            this.setState({image3: []});
                            this.setState({phone3: []});
                            this.setState({address3: []});
                        }
                    });
                }
            })
   }
    componentDidMount() {
        //var self = this;
        //const el = ReactDOM.findDOMNode(this.display);
        this.fetchFromAPI();
    }
    /*This renders the screen showing trending restaurants.
     */
    render(){
        var image1 = this.state.image1;
        var image2 = this.state.image2;
        var image3 = this.state.image3;
        return(
            <div>
                <h1 id="discover_header">TRENDING</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <div></div>
                <li><Link to="/">LOG OUT</Link></li>
                <div id="trendingInfo">
                      <p id="text-color"> Currently displaying popular restaurants in {this.state.location} </p>
                      <div>
                      <form onSubmit={this.handleSubmit}>
                        <label id="text-color">
                          City to Search:
                          <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                      </form>
                      </div>
                           <div>
                                <br/>
                                <br/>
                                <img id = "trendingRest" src={image1} />
                                <p id="text-color"><b> {this.state.name1}</b></p>
                                <p id="text-color">{this.state.phone1}</p>
                                <p id="text-color">{this.state.address1[0]}</p>
                                <p id="text-color">{this.state.address1[2]}</p>
                                <br/>
                                <br/>
                            </div>

                            <div>
                                <img id = "trendingRest" src={image2} />
                                <p id="text-color"><b> {this.state.name2}</b></p>
                                <p id="text-color">{this.state.phone2}</p>
                                <p id="text-color">{this.state.address2[0]}</p>
                                <p id="text-color">{this.state.address2[2]}</p>
                                <br/>
                                <br/>
                            </div>

                            <div>
                                <img id = "trendingRest" src={image3} />
                                <p id="text-color"><b> {this.state.name3}</b></p>
                                <p id="text-color">{this.state.phone3}</p>
                                <p id="text-color">{this.state.address3[0]}</p>
                                <p id="text-color">{this.state.address3[2]}</p>
                            </div>
                </div>
            </div>
                )
                }

}

                export class TrendingApp extends React.Component{
                render(){
                return(<Trending/>);
            }
            }

