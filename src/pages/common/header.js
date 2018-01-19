import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <span className='title'>REPORTS ADMINISTRATION</span>
                <span className='headerButtons'>
                    <Link to="/"><button className='firstHeaderButton'>Reports</button></Link>
                   
                    <Link to="/create"><button className='secondHeaderButton' onClick={this.props.handleReportsCreate}>Create Reports</button></Link>
                </span>
            </div>
        );
    }
}

export default Header;