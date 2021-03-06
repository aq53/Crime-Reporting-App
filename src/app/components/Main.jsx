import React from 'react';
import Nav from './Nav.jsx';
import Crime from './crime.jsx';
import Total from './total.jsx';
import Missing from './missing.jsx';
import Complaint from './complaint.jsx';
import FilterReport from './FilterReport.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions.jsx';

class Main extends React.Component {
    render() {
        var {dispatch}= this.props;
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="callout-auth">
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <Total />
                                    <Crime />
                                    <Missing />
                                    <Complaint />
                                    <FilterReport />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect()(Main);