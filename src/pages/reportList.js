import React from 'react';

// import Header from './common/header';
import Search from './search';
import axios from 'axios';
import MoreDetailModal from './moreDetailModal';


class ReportList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReports: [],
            showModal: false,

        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3333/api/reports')
            .then(response => {
                this.setState({ allReports: response.data })
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

    render() {
        // console.log(this.state.allReports);

        return (
            <div>

                <div>
                    {/* <Header /> */}
                    <Search />
                </div>
                <br />
                <br />
                <br />
                <br />


                <div>
                    {this.state.allReports.map((report, index) => {
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