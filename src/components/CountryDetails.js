import React, { Component } from 'react';

class CountryDetails extends Component{

    back = ()=>{
        this.props.closeDetails();
    }
    render(){
        
        const {topLevelDomain, population, region, subregion, capital, nativeName, currencies, languages, flag, name, borders} = this.props.country;

        return(
            <div className="details">
                <div className="back">
                    <button onClick={this.back}>Back</button>
                </div>
                <div className="info">
                    <img src={flag} alt={name} className="flag"/>
                    <div className="text">
                        <p className="name-country">{name}</p>
                        <div className="columns">
                            <div>
                                <p className="row native-name">{nativeName}</p>
                                <p className="row population">{population}</p>
                                <p className="row region">{region}</p>
                                <p className="row subregion">{subregion}</p>
                                <p className="row capital">{capital}</p>
                            </div>
                            <div>
                                <p className="row domain">{topLevelDomain.join()}</p>
                                <p className="row currencies">{currencies.map(cu => cu.name).join()}</p>
                                <p className="row languages">{languages.map(la => la.name).join()}</p>
                            </div>
                        </div>
                        <div className="border-countries">{borders.map(bo => ( <div className="borders">{bo}</div>) )}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryDetails;