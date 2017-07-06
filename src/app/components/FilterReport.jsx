import React from 'react';
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReportApi from '../api/ReportApi.jsx';
import * as actions from '../actions.jsx';
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        backgroundColor: 'white'
    },
};

class FilterReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repType: 'all',
            area: ''
        };
        this.handleAreaChange = this.handleAreaChange.bind(this);
        // this.handleTypeChange=this.handleTypeChange.bind(this);
    }
    handleAreaChange(e) {
        this.setState({ area: e.target.value })
    }
    render() {
        var renderReports = () => {
            var { reports, dispatch } = this.props;
            var { area } = this.state;
            var { repType } = this.state;
            dispatch(actions.getSelArea(area));
            if (area === '' || area === "0") {
                return (
                    <h3>Please select any city</h3>
                );
            }
            return ReportApi.filterReports(reports, area, repType).map((report) => {
                // console.log(ReportApi.filterReports(reports, area, repType))
                return (
                    <div className="report-body" key={report.id}>
                        <h4>{report.reportedBy}</h4>
                        {repType === "all" ? <h5><b>Type:</b> {report.repType}</h5> : null}

                        <b>Title:</b> {report.title} <br />
                        <p><b>Description:</b> {report.desc}</p>

                    </div>
                )
            });
        };
        return (
            <div className="form-group">
                <h2>Filter Report</h2><br />
                {/*<p>By City</p>*/}
                <select className="form-control form-control-selectpicker"
                    value={this.state.area}
                    onChange={this.handleAreaChange}
                >
                    <option value="0">Select any City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Multan">Multan</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Sukkhur">Sukkhur</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                </select><br />
                <Tabs
                    value={this.state.repType}
                //onTouchTap={this.handleTypeChange}
                >
                    <Tab label="All" value='all' onClick={() => { this.setState({ repType: 'all' }) }}  >
                        <div className='tabs-div'>{renderReports()}</div>
                    </Tab>
                    <Tab label="Crime" value='Crime' onClick={() => { this.setState({ repType: 'Crime' }) }} >
                        <div className='tabs-div'>{renderReports()}</div>
                    </Tab>
                    <Tab label="Missing" value='Missing' onClick={() => { this.setState({ repType: 'Missing' }) }} >
                        <div className='tabs-div'>{renderReports()}</div>
                    </Tab>
                    <Tab label='Complaint' value='Complaint' onClick={() => { this.setState({ repType: 'Complaint' }) }} >
                        <div className='tabs-div'>{renderReports()}</div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(FilterReport);