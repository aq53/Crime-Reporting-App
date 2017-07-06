import React from 'react';
import * as actions from '.././actions.jsx';
import { connect } from 'react-redux';
import Nav from './Nav.jsx';

class FileReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repType: '',
            area: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var { repType } = this.state;
        var { area } = this.state;
        var title = this.refs.title.value;
        var desc = this.refs.desc.value;
        var { dispatch, user } = this.props;
        var reportedBy = user.name;
        if ((repType === '' || repType === '0') || (area === '' || area === '0')) {
            alert('Please insert all fields correctly');
        } else {
            dispatch(actions.startFileReport(repType, area, title, desc, reportedBy));
            this.setState({
                repType: '',
                area: '',
            });
            this.refs.title.value = '';
            this.refs.desc.value = '';
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-offset-2">
                            <div className="callout-auth">
                                <h3>File a Report</h3>
                                <div className="content">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Report Type</label>
                                            <select className="form-control form-control-selectpicker"
                                                value={this.state.repType}
                                                onChange={(e) => { this.setState({ repType: e.target.value }) }} >
                                                <option value="0">Type</option>
                                                <option value="Crime">Crime</option>
                                                <option value="Missing">Missing</option>
                                                <option value="Complaint">Complaint</option>
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label>Area</label>
                                            <select className="form-control form-control-selectpicker"
                                                value={this.state.area}
                                                onChange={(e) => { this.setState({ area: e.target.value }) }} >
                                                <option value="0">Select any City</option>
                                                <option value="Karachi">Karachi</option>
                                                <option value="Lahore">Lahore</option>
                                                <option value="Multan">Multan</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Sukkhur">Sukkhur</option>
                                                <option value="Islamabad">Islamabad</option>
                                                <option value="Peshawar">Peshawar</option>
                                                <option value="Quetta">Quetta</option>
                                            </select>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Title</label>
                                                    <input type="text" ref="title" required className="form-control border-input" placeholder="Enter report title here" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <textarea rows="5" ref="desc" required style={{ resize: 'none' }} className="form-control border-input" placeholder="Enter report description here." ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <input type="Submit" className="btn btn-info btn-fill btn-wd" value='Report' />
                                        </div>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            user: state.userInfo
        }
    }
)(FileReport);