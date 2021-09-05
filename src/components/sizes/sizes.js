import React, {Component} from 'react';
import Button from '../button/button';
export default class Sizes extends Component {

    render(){

        return(
            <>
                <div className="small-title">Sizes</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button size='sm'/&gt;</div>
                        <Button size='sm'>Small</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button size='md'/&gt;</div>
                        <Button size="md">Medium</Button>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Button size='lg'/&gt;</div>
                        <Button size="lg">Large</Button>
                    </div>
                </div>

            </>
        )
    }

}