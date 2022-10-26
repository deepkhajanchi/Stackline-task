import React, { Component } from 'react';
import Image from '../stackline_logo.png';

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <img src={Image} alt='stackline_logo' width='150px'/> 
            </div>
        )
    }
}