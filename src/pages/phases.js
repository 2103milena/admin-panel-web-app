import React from 'react';
import { Link } from 'react-router-dom';
import SelectedItems from './selectedItems';

class Phases extends React.Component {

    render() {
        return (
            <div id="MainSectionOne" className="col-md-4" >
                <ul>
                    <Link to="/candidates"><li><img src="https://image.flaticon.com/icons/png/128/56/56735.png" alt="" />Select Candidate</li></Link>
                    <Link to="/companies"><li><img src="https://image.flaticon.com/icons/png/128/56/56647.png" alt="" />Select Company</li></Link>
                    <Link to="/details"><li><img src="http://dormiente.sg/wp-content/uploads/2015/12/three-icon.jpg" alt="" />Fill Report Details</li></Link>
                </ul >
                <hr className="hrStyle" />

                <SelectedItems />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



            </div >
        )
    }
}

export default Phases;