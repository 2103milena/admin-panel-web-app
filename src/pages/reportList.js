import React from 'react';
import Search from './search';
import axios from 'axios';
import MoreDetailModal from './moreDetailModal';


class ReportList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            allReports: [],
            displayFilteredReports: [],

        }
        this.handleDelete = this.handleDelete.bind(this);
        this.filterListReports = this.filterListReports.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3333/api/reports')
            .then(response => {
                this.setState({ allReports: response.data })
                this.setState({ displayFilteredReports: response.data });
            })
    }

    handleDelete(index) {
        // axios.delete('http://localhost:3333/api/reports', { candidateId: this.state.allReports[index].candidateId, companyId: this.state.allReports[index].companyId })
        axios.delete('http://localhost:3333/api/reports', { params: { candidateId: this.state.allReports[index].candidateId, companyId: this.state.allReports[index].companyId } })
            .then(res => {
                console.log(res)
                console.log('it works')
            })
            .catch(function (error) {
                console.log(error);
            });
        let allReports = this.state.allReports;


        allReports.splice(index, 1);

        this.setState({ allReports: allReports })

    }

    filterListReports(searchString) {
        // console.log(searchString);
        let filteredReports = this.state.allReports;
        //   filteredReports = this.state.displayFilteredReports;

        filteredReports = filteredReports.filter((report) => {
            if (report.candidateName != null) {

                console.log(searchString.toLowerCase())
                console.log(report.candidateName.toLowerCase())
                console.log(report.candidateName.toLowerCase().includes(searchString.toLowerCase()))
                return (
                    report.candidateName.toLowerCase().includes(searchString.toLowerCase())
                )
            }
            else return false;

        });
        this.setState({ displayFilteredReports: filteredReports })
        // console.log(filteredReports)
        // this.setState({ filteredReports : pomocnaLista})

    }

    render() {
        // console.log(this.state.allReports);

        return (
            <div>

                <div>

                    <Search filterListReports={this.filterListReports} instant={true} />
                </div>
                <br />
                <br />
                <br />
                <br />


                <div>
                    {this.state.displayFilteredReports.map((report, index) => {
                        return (
                            <div>

                                <div className="container-table">
                                    <div className="row">
                                        <div className="col-md-2 text-center" key={report.toString()}>
                                            {report.companyName}
                                        </div>
                                        <div className="col-md-3 text-center" key={report.toString()}>
                                            {report.candidateName}
                                        </div>
                                        <div className="col-md-2 text-center" key={report.toString()}>
                                            {report.interviewDate}
                                        </div>
                                        <div className="col-md-2 text-center" key={report.toString()}>
                                            {report.status}
                                        </div>
                                        <MoreDetailModal persoInfo={report} className="col-md-1 text-center" />

                                        <button className="col-md-1 text-center" id="delete" onClick={() => this.handleDelete(index)}>
                                            Delete
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default ReportList;