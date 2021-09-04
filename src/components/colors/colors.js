import React, {Component} from 'react';
import Button from '../button/button';

export default class Colors extends Component{

    render(){
        return(
            <>
                <div className="small-title">Colors</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button color="primary"/&gt;</div>
                        <Button color="primary" >Primary Color</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button color="secondary"/&gt;</div>
                        <Button color="secondary" >Secondary Color</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder" >&lt;Button color="danger"/&gt;</div>
                        <Button color="danger" >Danger Color</Button>
                    </div>
                </div>

            </>
        )
    }
}