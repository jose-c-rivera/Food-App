/**
 * File: africa.js
 * Purpose: Cuisine map for the African region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
import { NavBar } from '../navbar'
class Africa extends Component{

    constructor(){
        super();
        this.state = {
            name: []
        };
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
                        this.setState({name: json.businesses[0].name});
                    });
                }
                else {
                    this.setState({name: []});
                }
            })
    }

    componentDidMount() {
        var self = this;
        const el = ReactDOM.findDOMNode(this.display);
        var map = new jvm.Map({
            container: jQuery(el),
            map: 'africa_mill',
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
            }
        });
    }

    render(){
        return(
            <div>
                < NavBar />
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ AFRICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
                <div id="info"><p> Restaurants:</p><p> {this.state.name}</p></div>
            </div>
        )
    }
}
export class africa extends React.Component{
    render(){
        return(<Africa/>);
    }
}