import React from 'react';
import { withRouter } from 'react-router-dom';
import HomeWhite from '../../assets/home_white.png';
import HomeBlack from '../../assets/home_black.png';
import './GoHome.css';

// This component is just to understand programmatic navigation
// Normally we would have done it using Link
// But here we want to learn how history objects are used
class GoHome extends React.Component {

    navToHome = () => {
        const {history} = this.props;
        history.push('/');

        // The history object is like a stack
        // So it now shows the topmost element that is the home page
    }

    render() {

        const { pathname } = this.props.location;
        const whiteBtn = pathname === '/'; 

        return (
        <button onClick={this.navToHome} className={`go-home-btn ${whiteBtn?'white-bg':'grad-bg'}`}>
            <img src={whiteBtn ? HomeBlack : HomeWhite} alt="home-icon" className='btn-img' />
        </button>
        )
    }
}


export default withRouter(GoHome);