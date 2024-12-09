import { Component } from "react";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            log: false
        };
    }

    render() {
        return (
            <header className="header">
                {this.state.log ? (
                    <div className="header-container">
                        <div className="logo-titulo">
                            <img 
                                src="/LogoCTPOBA.jpg" 
                                alt="Logo del sistema" 
                                className="header-logo" 
                            />
                            <h1 className="header-titulo">Planilla Virtual</h1>
                        </div>
                    </div>
                ) : (
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#logout">Logout</a></li>
                        </ul>
                    </nav>
                )}
            </header>
        );
    }
}