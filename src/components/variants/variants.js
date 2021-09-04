import React, {Component} from 'react';
import Button from '../button/button';
export default class Variants extends Component {

    render(){
    
        return(
            <>
                <div className="small-title">Variants</div>
                <div className="grid">
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button /&gt;</div>
                        <Button>Default</Button>
                    </div>
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button variant="outline" /&gt;</div>
                        <Button variant='outline'>Outline</Button>
                    </div>
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button variant="text" /&gt;</div>
                        <Button variant='text'>Default</Button>
                    </div>
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button disabled /&gt;</div>
                        <Button disabled>Disabled</Button>
                    </div>
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button disableShadow /&gt;</div>
                        <Button disableshadow>No shadow</Button>
                    </div>
                    <div className="grid-item">   
                        <div className="placeholder">&lt;Button variant="text" disabled /&gt;</div>
                        <Button variant="text" disabled>Text</Button>
                    </div>
                </div>
            </>
        )
    }
}