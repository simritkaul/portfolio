import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeAnime from '../../assets/home_anime.gif';
import Modal from '../Modal/Modal';

class Home extends Component {

    state = {
        showModal: false
    }

    // Lifecycle method // (Same as useEffect?)
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showModal: true
            })
        }, 2500)
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="home-container">
                {/* <Modal /> */}
                {this.state.showModal && <Modal closeModal= {this.closeModal}/>}
                <div className="header-text">
                    <h1>Welcome to my Portfolio</h1>
                    <p>I am Simrit! A learner</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className= "btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className= "btn btn-transparent">
                        <p className="btn-text">Get in touch with me</p>
                    </Link>
                </div>
                <div className="splash-img">
                    <img src={homeAnime} className="home-anime" alt="animation"/>
                </div>
            </div>
        )
    }
}

export default Home;