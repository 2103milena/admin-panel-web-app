import React from 'react';

import axios from 'axios';

class ReportItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReports: [],
            
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3333/api/reports')
            .then(response => {
                this.setState({ allReports: response.data })
            })
    }


    render() {
        console.log(this.state.allReports);

        return (
            
                <div>
                    {this.state.allReports.map((report) => {
                        return (
                            <div>
                               
                                <div className="container-table">
                                    <div className="row">
                                        <div className="col-md-3 text-center" key={report.toString()}>
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
                                        <button className="col-md-1 text-center">
                                            More Detail
                                        </button>
                                        <button className="col-md-1 text-center" onClick={this.handleDelete}>
                                            Delete
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                            </div>
                        )
                    })}

                </div>
           
        )
    }
}

export default ReportItem;