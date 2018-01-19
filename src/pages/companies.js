import React from 'react';
import Phases from './phases';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            name: this.props.name,
            id: this.props.id,
            chosen: null,
        }
        this.handleClickDiv = this.handleClickDiv.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3333/api/companies')
            .then(response => {
                this.setState({ companies: response.data })
                // console.log(this.state.companies);
            })
    }

    handleClickDiv(name, id) {
        this.state.id = id;
        this.state.name = name;
        this.setState({ id: id });
        this.setState({ name: name });
    }

    render() {
        if (this.state.name != null || this.state.id != null)
            return (
                <div>
                    <Phases />
                    <div>
                        {this.state.companies.map((company, index) => {

                            if (this.state.chosen == index)
                                return (

                                    <div className="container-table" id="reddd" onClick={() => {
                                        this.state.chosen = index;
                                        this.handleClickDiv(company.name, company.id)
                                    }}>
                                        <div className="row">
                                            <div className="col-md-10 text-center" id="candidate">
                                                <div className="candidateInfo"> {company.name.toString()}</div>
                                                <div className="candidateInfo"> {company.email.toString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            else
                                return (

                                    <div className="container-table" onClick={() => {
                                        this.state.chosen = index;
                                        this.handleClickDiv(company.name, company.id)
                                    }}>
                                        <div className="row">
                                            <div className="col-md-10 text-center" id="candidate">
                                                <div className="candidateInfo"> {company.name.toString()}</div>
                                                <div className="candidateInfo"> {company.email.toString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })}

                        <Link to="/candidates" ><button className="back">BACK</button></Link>
                        <Link to="/details"><button className="next" onClick={() => { this.props.handleNextCompany(this.state.id, this.state.name) }}>NEXT</button></Link>

                    </div>
                </div>
            )
        else
            return (
                <div>
                    <Phases />
                    <div>
                        {this.state.companies.map((company, index) => {
                            return (
                                <div className="container-table" onClick={() => {
                                    this.state.chosen = index;
                                    this.handleClickDiv(company.name, company.id)
                                }}>
                                    <div className="row">
                                        <div className="col-md-10 text-center" id="candidate">
                                            <div className="candidateInfo"> {company.name.toString()}</div>
                                            <div className="candidateInfo"> {company.email.toString()}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <Link to="/candidates" ><button className="back">BACK</button></Link>
                        <button className="next">NEXT</button>
                        <div>Unesite SVE podatke </div>
                    </div>
                </div>
            )
    }
}

export default Companies;