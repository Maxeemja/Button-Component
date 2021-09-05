import React, {Component} from 'react';
import Button from '../button/button';
export default class Icons extends Component {

    render(){
        return(
            <>
                <div className="small-title">Icons (from Font Awesome)</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button color="primary" startIcon="fa-shopping-cart"/&gt;</div>
                        <Button color="primary" startIcon="fa-shopping-cart">Shopping Cart</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button variant="outline" startIcon="fa-check"/&gt;</div>
                        <Button variant="outline" startIcon="fa-check">Check</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button color="primary" startIcon="fa-ambulance"/&gt;</div>
                        <Button color="primary" startIcon="fa-ambulance">Ambulance</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder" >&lt;Button color="danger" endIcon="fa-shopping-cart"/&gt;</div>
                        <Button color="danger" endIcon="fa-shopping-cart">Shopping Cart</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder" >&lt;Button variant="outline" endIcon="fa-check"/&gt;</div>
                        <Button variant="outline" endIcon="fa-check">Check</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder" >&lt;Button color="danger" endIcon="fa-ambulance"/&gt;</div>
                        <Button color="danger" endIcon="fa-ambulance">Ambulance</Button>
                    </div>
                </div>

            </>
        )
    }
}