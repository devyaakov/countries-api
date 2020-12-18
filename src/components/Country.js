import React, { Component } from 'react';

class Country extends Component{
    
    selectCountry = (e)=>{
        this.props.openDetails(this.props.country);
    }

    render(){
        const { flag, population, region, capital, name  } = this.props.country;

        return (
            <div className="country" onClick={this.selectCountry}>
                <img src={flag} alt={name} className="country-img"/>
                <p className="name">{name}</p>
                <p className="population">{population}</p>
                <p className="region">{region}</p>
                <p className="capital">{capital}</p>
            </div>
        )
    }
}

export default Country;