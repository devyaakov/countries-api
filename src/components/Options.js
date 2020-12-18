import React, { Component } from 'react';

class Options extends Component{
    
    change = (e) =>{
        e.preventDefault();
        const value = e.target.value;

        this.props.changeSelection(value);
    }

    keyPress = (e) =>{
        if(e.charCode === 13){
            const value = e.target.value;
            this.props.filterCountry(value);
        }
    }
    
    render(){
        return(
            <div className="options">
                <div className="search">
                    <input type="text" placeholder="Search for a country..." onKeyPress={this.keyPress}/>
                </div>
                <div className="filter">
                    <select onChange={this.change}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Options;