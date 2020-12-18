import { Component } from 'react';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';
import Options from './components/Options';
import Resultados from './components/Resultados';


class App extends Component {
    
    filterCountriesTmp = [];
    isFilter = false;

    constructor(props){
        super(props);
        this.state =  {
            region: "",
            countries: [],
            showDetails: false,
            selectedCountry: null,
            theme: ""
        }
    }

    componentDidMount(){
        this.getCountriesAll();
    }
    
    filterCountries = (value) => {
        
        if(value === ""){
            this.isFilter = false;
            this.setState({countries: this.filterCountriesTmp}, ()=>{ this.filterCountriesTmp = [] });
        }else{
            if(!this.isFilter)
                this.filterCountriesTmp = this.state.countries;

            let filter = this.filterCountriesTmp.filter(c => c.name.toUpperCase().includes(value.toUpperCase()));
            
            this.isFilter = true;
            this.setState({countries: filter});
        }
        
    }

    changeTheme = () => {
        document.querySelector('body').classList.toggle('dark');
        if(document.querySelector('body').classList.contains('dark'))
            document.querySelector('header .mode').innerHTML = "Dark Mode";
        else
            document.querySelector('header .mode').innerHTML = "Light Mode";
    }

    changeSelection = (value)=> {
        this.setState({ region: value}, () => this.getCountriesByRegion());
    }

    getCountriesAll = () => {
        const url = "https://restcountries.eu/rest/v2/all";

        fetch(url).then(response => response.json()).then(data => this.setState({ countries: data }) );
    }

    getCountriesByRegion = () =>{
        
        const region = this.state.region;

        if (region === "") return null;

        const url = `https://restcountries.eu/rest/v2/region/${region}`;
        
        fetch(url).then(response => response.json()).then(data => this.setState({countries: data }));

    }
    
    openDetails = (country)=> {
        this.setState({selectedCountry: country},()=> this.setState({ showDetails: true}));
    }

    closeDetails = () => {
        this.setState({showDetails: false}, ()=> this.setState({ selectedCountry: null}))
    }

    render(){
        if(!this.state.showDetails)
            return (
                <div className="App">
                <Header changeTheme={this.changeTheme}/>
                <main>
                    <Options changeSelection={this.changeSelection} filterCountry={this.filterCountries}/>
                    <Resultados countries={this.state.countries} openDetails={this.openDetails} />
                </main>
                </div>
            );
        else
            return (
                <div className="App">
                <Header changeTheme={this.changeTheme}/>
                <main>
                    <CountryDetails key={this.state.selectedCountry.name} country={this.state.selectedCountry} closeDetails={this.closeDetails}/>
                </main>
                </div>
            );
    }
}

export default App;
