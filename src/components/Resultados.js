import React, { Component } from 'react';
import Country from './Country';

class Resultados extends Component {
    obtenerCountries = () => {
        const countries = this.props.countries;
        if(countries.length === 0) return null;

        return(
            <React.Fragment>
                <div className="countries">
                    {countries.map( country => (
                        <Country key={country.numericCode } country={country} openDetails={this.props.openDetails}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }

    render(){
        return (
            <React.Fragment>
                {this.obtenerCountries()}
            </React.Fragment>
        );
    }
}

export default Resultados;