import React, { Component } from 'react';
import './App.css';
import ReportList from './pages/reportList';
import Header from './pages/common/header';
import { Switch, Route } from 'react-router';
import CreateReport from './pages/createReport';
import Candidates from './pages/candidates';
import Companies from './pages/companies';
import Details from './pages/details';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidateId: null,
      companyId: null,
      date: null,
      status: null,
      phase: null,
      note: null,
      candidateName: null,
      companyName: null,

    }
    this.handleNextCandidate = this.handleNextCandidate.bind(this);
    this.handleNextCompany = this.handleNextCompany.bind(this);
    this.handleNextDetails = this.handleNextDetails.bind(this);
    this.handleReportsCreate = this.handleReportsCreate.bind(this);
  }

  handleReportsCreate() {
    this.state = {
      candidateId: null,
      companyId: null,
      date: null,
      status: null,
      phase: null,
      note: null,
      candidateName: null,
      companyName: null,
    }
  }

  handleNextCandidate(id, name) {

    this.state.candidateId = id;
    this.state.candidateName = name
    // console.log(this.state.candidateName);
  }

  handleNextCompany(id, name) {

    this.state.companyId = id;
    this.state.companyName = name;
  }

  handleNextDetails(note, phase, status, date) {
    this.state.note = note;
    this.state.phase = phase;
    this.state.status = status;
    this.state.date = date;

    let report =
      {
        candidateId: this.state.candidateId,
        companyId: this.state.companyId,
        date: this.state.date,
        status: this.state.status,
        phase: this.state.phase,
        note: this.state.note,
        candidateName: this.state.candidateName,
        companyName: this.state.companyName,
      }

    axios.post('http://localhost:3333/api/reports', report).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <div>
          <Header handleReportsCreate={this.handleReportsCreate} />
          <Switch>
            <Route exact path="/" component={ReportList} />
            <Route path="/create" component={CreateReport} />
            <Route path="/candidates" render={props => <Candidates handleNextCandidate={this.handleNextCandidate} name={this.state.candidateName} id={this.state.candidateId} />} />
            <Route path="/companies" render={props => <Companies handleNextCompany={this.handleNextCompany} name={this.state.companyName} id={this.state.companyId} />} />
            <Route path="/details" render={props => <Details handleNextDetails={this.handleNextDetails} />} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
