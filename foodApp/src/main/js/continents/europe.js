/**
 * File: europe.js
 * Purpose: Cuisine map for the European region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
import { NavBar } from '../navbar'
class Europe extends Component{

    constructor(props){
        super(props);
        this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
        this.handleCountryClick = this.handleCountryClick.bind(this);
        this.state = {
            name1: [],
            image1: [],
            ratingimg1: [],
            phone1: [],
            address1: [],
            name2: [],
            image2: [],
            ratingimg2: [],
            phone2: [],
            address2: [],
            name3: [],
            image3: [],
            ratingimg3: [],
            phone3: [],
            address3: [],
            country: [],
            capital: [],
            population: [],
            area: [],
            currency: [],
            language: [],
            flag: [],
            displayRestaurants: false,
            faveButton1: '',
            faveButton2: '',
            faveButton3: ''
        };
    }
    printBusiness(business) {
        return <div dangerouslySetInnerHTML={{__html : business}} />;
    }
    getButton(){
        return <button className="favButton"></button>;
    }
    handleRestaurantClick() {
        this.setState({displayRestaurants: true});
        var display = this.state.displayRestaurants;
    }

    handleCountryClick() {
        this.setState({displayRestaurants: false});
    }
    fetchFromAPI(regionName) {
        fetch('http://localhost:8080/Search/SearchRestaurants?' + 'searchTerm=' + 'Restaurant food ' + regionName + '&location=' + 'toronto')
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
                            this.setState({ratingimg1: json.businesses[0].rating_img_url_small});
                            this.setState({phone1: json.businesses[0].display_phone});
                            this.setState({address1: json.businesses[0].location.display_address});
                            this.setState({faveButton1: '<button>Add to Favorites</button>'})
                        }
                        else{
                            this.setState({name1: ["There are no restaurants in your area that serve this food"]});
                            this.setState({image1: []});
                            this.setState({ratingimg1: []});
                            this.setState({phone1: []});
                            this.setState({address1: []});
                            this.setState({faveButton1: ''})
                        }
                        if (json.businesses[1]){
                            this.setState({name2: json.businesses[1].name});
                            this.setState({image2: json.businesses[1].image_url});
                            this.setState({ratingimg2: json.businesses[1].rating_img_url_small});
                            this.setState({phone2: json.businesses[1].display_phone});
                            this.setState({address2: json.businesses[1].location.display_address});
                            this.setState({faveButton2: '<button>Add to Favorites</button>'})
                        }
                        else{
                            this.setState({name2: []});
                            this.setState({image2: []});
                            this.setState({ratingimg2: []});
                            this.setState({phone2: []});
                            this.setState({address2: []});
                            this.setState({faveButton2: ''})
                        }
                        if (json.businesses[2]){
                            this.setState({name3: json.businesses[2].name});
                            this.setState({image3: json.businesses[2].image_url});
                            this.setState({ratingimg3: json.businesses[2].rating_img_url_small});
                            this.setState({phone3: json.businesses[2].display_phone});
                            this.setState({address3: json.businesses[2].location.display_address});
                            this.setState({faveButton3: '<button>Add to Favorites</button>'})
                        }
                        else{
                            this.setState({name3: []});
                            this.setState({image3: []});
                            this.setState({ratingimg3: []});
                            this.setState({phone3: []});
                            this.setState({address3: []});
                            this.setState({faveButton3: ''})
                        }
                    });
                }
            })
    }

    countryInfo(regionName) {
        fetch('https://restcountries.eu/rest/v2/name/'  + regionName)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({country: json[0].name});
                        this.setState({capital: json[0].capital});
                        this.setState({population: json[0].population});
                        this.setState({area: json[0].area});
                        this.setState({currency: json[0].currencies[0].name});
                        this.setState({language: json[0].languages[0].name});
                        this.setState({flag: json[0].flag});
                    });
                }
                else {
                    this.setState({country: ["Select a country on the map! Basic country info and restaurants that serve that type of cuisine will be displayed"]});
                    this.setState({capital: []})
                    this.setState({population: []});
                    this.setState({area: []});
                    this.setState({currency: []});
                    this.setState({language: []});
                    this.setState({flag: []});
                }
            })
    }

    componentDidMount() {
        var self = this;
        const el = ReactDOM.findDOMNode(this.display);
        var map = new jvm.Map({
            container: jQuery(el),
            map: 'europe_mill',
            backgroundColor: 'transparent',
            hoverColor: true,
            regionStyle: {
                initial: {
                    fill: '#245b87'
                },
                hover: {
                    fill: "#76c4ea"
                }
            },
            onRegionClick:function(event, code){
                var region = map.getRegionName(code);
                self.fetchFromAPI(region);
                self.countryInfo(region);
            }
        });
    }
    render(){
        var countryFlag = this.state.flag;
        var image1 = this.state.image1;
        var image2 = this.state.image2;
        var image3 = this.state.image3;
        var rating1 = this.state.ratingimg1;
        var rating2 = this.state.ratingimg2;
        var rating3 = this.state.ratingimg3;
        return(
            <div>
                < NavBar />
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ EUROPE</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
                <div id="info"><p> Restaurants:</p><p> {this.state.name}</p></div>
                    {this.state.displayRestaurants ? (
                        <div id="info">
                            <div id="center">
                                <button onClick={this.handleCountryClick}>Show Country Details </button>
                                <button onClick={this.handleRestaurantClick}>Show Restaurants </button>
                            </div>

                            <div>
                                <img id = "restaurant" src={image1} />
                                <p><b> {this.state.name1}</b></p>
                                <img src={rating1} />
                                <p>{this.state.phone1}</p>
                                <p>{this.state.address1[0]}</p>
                                <p>{this.state.address1[2]}</p>
                                {this.printBusiness(this.state.faveButton1)}
                                <br/>
                                <br/>
                            </div>

                            <div>
                                <img id = "restaurant" src={image2} />
                                <p><b> {this.state.name2}</b></p>
                                <img src={rating2} />
                                <p>{this.state.phone2}</p>
                                <p>{this.state.address2[0]}</p>
                                <p>{this.state.address2[2]}</p>
                                {this.printBusiness(this.state.faveButton2)}
                                <br/>
                                <br/>
                            </div>

                            <div>
                                <img id = "restaurant" src={image3} />
                                <p><b> {this.state.name3}</b></p>
                                <img src={rating3} />
                                <p>{this.state.phone3}</p>
                                <p>{this.state.address3[0]}</p>
                                <p>{this.state.address3[2]}</p>
                                {this.printBusiness(this.state.faveButton3)}
                            </div>
                        </div>
                    ) : (
                        <div id="info">
                            <div id="center">
                                <button onClick={this.handleCountryClick}>Show Country Details </button>
                                <button onClick={this.handleRestaurantClick}>Show Restaurants </button>
                            </div>
                            <p> {this.state.country}</p>
                            <img id = "flag" src={countryFlag} />
                            <p> Capital: {this.state.capital}</p>
                            <p> Population: {this.state.population}</p>
                            <p> Area: {this.state.area}</p>
                            <p> Currency: {this.state.currency}</p>
                            <p> Language: {this.state.language}</p>
                        </div>
                    )}
            </div>
        )
    }
}
export class europe extends React.Component{
    render(){
        return(<Europe/>);
    }
}