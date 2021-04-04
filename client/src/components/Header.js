import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return null;
            case false: 
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link
                        className='left brand-logo'
                        to={this.props.auth ? '/surveys' : '/'}
                    >
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({auth}, ownProps) => {
    return {
        auth
    };
};

export default connect(mapStateToProps)(Header);