import React from 'react';
import {Container} from 'reactstrap';
import Header from '../appHeader/appHeader'
import Variants from '../variants/variants';
import Colors from '../colors/colors'
import Icons from '../icons/icons';
import Sizes from '../sizes/sizes';
import Footer from '../footer/footer';
import '../../styles';

export default class App extends React.Component{
    render(){
        return(
            <Container style={{maxWidth: '1200px'}}>
                <Header/>
                <Variants/>
                <Colors/>
                <Sizes/>
                <Icons/>
                <Footer/>
            </Container>
        )
    }
}