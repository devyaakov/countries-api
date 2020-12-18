import React, {Component} from 'react';

class Header extends Component{
    changeTheme = () =>{
        this.props.changeTheme();
    }
    render(){
        return (
            <header>
                <div>Where in the world?</div>
                <div onClick={this.changeTheme} className="mode">Light Mode</div>
            </header>
        )
    }
}

export default Header;