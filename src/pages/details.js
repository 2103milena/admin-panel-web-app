import React from 'react';
import Phases from './phases';
import DatePicker from './datePicker';
import { Link } from 'react-router-dom';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            note: null,
            phase: null,
            status: null,
            date: null,
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleNote = this.handleNote.bind(this);
        this.handleChangePhase = this.handleChangePhase.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }



    handleDate(event) {
        this.state.date = event.target.value.toString();
        this.setState({ date: event.target.value.toString()});
    }


    handleNote(event) {
        this.state.note = event.target.value;
        this.setState({ note: event.target.value});
    }

    handleChangePhase(event) {
        this.state.phase = event.target.value;
        this.setState({ phase: event.target.value});
    }

    handleChangeStatus(event) {
        this.state.status = event.target.value;
        this.setState({ status: event.target.value});
    }

    render() {
        if (this.state.date != null && this.state.note != null && this.state.phase != null && this.state.status != null)
            return (
                <div>
                    <Phases />
                    <div className="details">
                        <form>
                            <div>
                                <div><span className="gray">Interview date:</span><span className="gray">Phase:</span><span className="gray">Status:</span></div>

                                {/* <DatePicker /> */}
                                <input type="date" id="dt" onChange={this.handleDate} />

                                <select className="selectPhase" onChange={this.handleChangePhase}>

                                    <option selected value="null">select</option>
                                    <option value="cv">cv</option>
                                    <option value="hr">hr</option>
                                    <option value="tech">tech</option>
                                    <option value="final">final</option>
                                </select>


                                <select className="selectStatus" onChange={this.handleChangeStatus}>

                                    <option selected value="null">select</option>
                                    <option value="passed">passed</option>
                                    <option value="declined">declined</option>

                                </select>
                            </div>
                            <div>
                                <div className="notes">Notes:</div>
                                <textarea rows="10" cols="50" onChange={this.handleNote} />
                            </div>
                            <Link to="/companies"><button className="back">BACK</button></Link>

                            <Link to='/reports'><button className="submit" onClick={() => { this.props.handleNextDetails(this.state.note, this.state.phase, this.state.status, this.state.date) }}>SUBMIT</button></Link>
                        </form>
                    </div>
                </div>
            )
        else
            return (
                <div>
                    <Phases />
                    <div className="details">
                        <form>
                            <div>
                                <div><span className="gray">Interview date:</span><span className="gray">Phase:</span><span className="gray">Status:</span></div>

                                {/* <DatePicker /> */}
                                <input type="date" id="dt" onChange={this.handleDate} />

                                <select className="selectPhase" onChange={this.handleChangePhase}>

                                    <option selected value="null">select</option>
                                    <option value="cv">cv</option>
                                    <option value="hr">hr</option>
                                    <option value="tech">tech</option>
                                    <option value="final">final</option>
                                </select>


                                <select className="selectStatus" onChange={this.handleChangeStatus}>

                                    <option selected value="null">select</option>
                                    <option value="passed">passed</option>
                                    <option value="declined">declined</option>

                                </select>
                            </div>
                            <div>
                                <div className="notes">Notes:</div>
                                <textarea rows="10" cols="50" onChange={this.handleNote} />
                            </div>
                            <Link to="/companies"><button className="back">BACK</button></Link>

                            <button className="submit" onClick={() => {alert('Morate selektovati sve opcije.');}}>SUBMIT</button>
                            <div>Unesite SVE podatke</div>
                        </form>
                    </div>
                </div>
            )
    }
}

export default Details;