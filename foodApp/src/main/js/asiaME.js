/**
 * File: asiaME.js
 * Purpose: Cuisine map for the Asian and Middle Eastern region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
class Asia extends Component{


    constructor(){
        super();
        this.state = {jsonData: []};
    }
    fetchFromAPI(regionName) {
        alert('hi')
        fetch('http://localhost:8080/Search/SearchRestaurants?' + 'searchTerm=' + regionName + '&location=' + 'toronto')
            .then(response => {
                if (response.ok) {
                    alert('woohoo')
                    response.json().then(json => {
                        let results = [];
                        for (let i = 0; i < json.length; i++) {
                            results.push(<div><Status status={json[i]}/><br /></div>);
                        }
                        this.setState({jsonData: results});
                        console.log(json)
                        console.log(results[0])
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
        jQuery(el).vectorMap({
            map: 'asia_mill',
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
                var region = code;
                self.fetchFromAPI(region);

            }
        });
        let jsonData = this.props.jsonData;
  //      this.fetchFromAPI(region);
    }


    render(){
        return(
            <div>
                {this.state.jsonData}
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ ASIA & M.E.</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    }
}
export class asia extends React.Component{
    render(){
        return(<Asia/>);
    }
}