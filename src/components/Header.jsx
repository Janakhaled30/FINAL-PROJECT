import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import style from './css/style.css'
import icon from './assets/logo-hover.png'

class Header extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            sign: false,
            login: false,
            
        }
    }

    onOpenModalSignup = () => {
        this.setState({ signup : true});
    };

    onOpenModalLogin = () => {
        this.setState({ login: true})
    };

}