import React from 'react';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';

import HomeServices from './components/HomeServices';
import CONCIERGE from './components/Concerige';
import Equipment from './components/Equipments';


class App extends React.Component {

    state={
        homeServices:[ "NURSE", "PHYSIOTHERAPIST", "COOK"],
        concerigeServices:["AMBULANCE", "HEARSE"],
        equipments:[{service:"OXYGEN", price:1000}, {service:"CYLINDER", price:2000}, {service:"PACE MAKER", price:10000}, {service:"WHEELCHAIR",price:5000}]
    }

 
    
    render() {
        return (
            <div className="app">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab className="mt-4" eventKey="home" title="Home">
                    <HomeServices homeServices={this.state.homeServices}/>

                    </Tab>
                    <Tab className="mt-4" eventKey="CONCIERGE" title="CONCIERGE">
                    <CONCIERGE concerigeServices={this.state.concerigeServices} />
                    </Tab>
                    <Tab className="mt-4" eventKey="EQUIPMENT" title="EQUIPMENT">
                    <Equipment equipments={this.state.equipments}/>
                    </Tab>
                </Tabs>
               
               
            </div>
        )
    }
}

export default App