/**
 * File: northAmerica.js
 * Purpose: Cuisine map for the North American and Caribbean region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'


class NorthAmerica extends Component{

    constructor(){
        super();
        this.state = {jsonData: []};
    }


    fetchFromAPI(regionName) {
        fetch('http://localhost:8080/Search/SearchRestaurants?' + 'searchTerm=' + regionName + '&location=' + 'toronto')
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        let results = [];
                        for (let i = 0; i < json.length; i++) {
                            results.push(<div><Status status={json[i]}/><br /></div>);
                        }
                        this.setState({jsonData: JSON.stringify(json)});
                    });
                }
                else {
                    this.setState({jsonData: []});
                }
            })
    }

    componentDidMount() {
        var self = this;
        const el = ReactDOM.findDOMNode(this.display);
        var map = new jvm.Map({
            container: jQuery(el),
            map: 'north_america_mill',
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
                //  let jsonData = this.props.jsonData;
                var region = map.getRegionName(code);
                self.fetchFromAPI(region);

            }
        });
      //  let jsonData = this.props.jsonData;
        //      this.fetchFromAPI(region);
    }

    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}/></button>
                <h1 id="discover_header">/ NORTH AMERICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
                <div id="info"><p> Restarants:</p><br /><p> {this.state.jsonData}</p></div>
            </div>
        )
    }
}

export class northAmerica extends React.Component{
    render(){
        return(<NorthAmerica/>);
    }
}