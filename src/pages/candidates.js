import React from 'react';
import Phases from './phases';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Candidates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            name: this.props.name,
            id: this.props.id,
            chosenCand: this.props.chosenCand,
        }
        this.handleClickDiv = this.handleClickDiv.bind(this);
        
    }

    handleClickDiv(name, id) {
        this.state.id = id;
        this.state.name = name;
        this.setState({ name: name });
        // console.log(name);
        // console.log(this.state.name);
    }
    componentDidMount() {
        axios.get('http://localhost:3333/api/candidates')
            .then(response => {
                this.setState({ candidates: response.data })
                // console.log(this.state.candidates);
            })
    }


    render() {
        if (this.state.name != null)
            return (
                <div>
                    <Phases />
                    <div>
                        {this.state.candidates.map((candidate, index) => {
                            if (index == this.state.chosenCand)
                                return (
                                    <div className="container-table" id="red" onClick={() => {
                                        this.state.chosenCand = index;
                                        this.handleClickDiv(candidate.name, candidate.id)
                                    }}
                                    >
                                        <div className="row">
                                            <div className="col-md-10 text-center" id="candidate">
                                                <img className="candidateImage" src={candidate.avatar.toString()} alt="candidate" />
                                                <div>
                                                    <div className="candidateInfo"> {candidate.name.toString()}</div>
                                                    <div className="candidateInfo"> {candidate.email.toString()}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            else
                                return (
                                    <div className="container-table" onClick={() => {
                                        this.state.chosenCand = index;
                                        this.handleClickDiv(candidate.name, candidate.id)
                                    }}
                                    >
                                        <div className="row">
                                            <div className="col-md-10 text-center" id="candidate">
                                                <img className="candidateImage" src={candidate.avatar.toString()} alt="candidate" />
                                                <div>
                                                    <div className="candidateInfo"> {candidate.name.toString()}</div>
                                                    <div className="candidateInfo"> {candidate.email.toString()}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })}

                        < Link to="/companies"><button className="next" onClick={() => { this.props.handleNextCandidate(this.state.id, this.state.name, this.state.chosenCand) }}>NEXT</button></Link>
                    </div>
                </div >
            )
        else

            return (
                <div>
                    <Phases />
                    <div>
                        {this.state.candidates.map((candidate, index) => {
                            return (
                                <div className="container-table" onClick={() => {
                                    this.state.chosenCand = index;
                                    this.handleClickDiv(candidate.name, candidate.id)
                                }}
                                >
                                    <div className="row">
                                        <div className="col-md-10 text-center" id="candidate">
                                            <img className="candidateImage" src={candidate.avatar.toString()} alt="candidate" />
                                            <div>
                                                <div className="candidateInfo"> {candidate.name.toString()}</div>
                                                <div className="candidateInfo"> {candidate.email.toString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        < button className="next" onClick={() => {alert('Morate selektovati kandidata.');}} >NEXT</button>                </div>
                  
                </div>
            )
    }
}

export default Candidates;