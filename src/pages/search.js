import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',

        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {

        this.state.value = event.target.value;
        // this.props.filterListReports(event.target.value);
        const instantSearchEnabled = this.props.instant;
        
                if (instantSearchEnabled) {
                    this.props.filterListReports(event.target.value);
                }

    }

    render() {
        return (
            <div>
                <input type="text" className='inputSearch' placeholder='Search...' value={this.state.value} onChange={this.handleChange} />

            </div>
        );
    }
}

export default Search;