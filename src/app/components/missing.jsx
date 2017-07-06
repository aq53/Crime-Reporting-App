import React from 'react';
import missing from '.././images/missing1.png';
import { connect } from 'react-redux';

class Missing extends React.Component {
    render() {
        var totalMissingRep = () => {
            var { reports, selectedArea } = this.props;
            var count = 0;
            if (selectedArea === '')
                count = 0;
            for (var i = 0; i < reports.length; i++) {
                if (reports[i].area === selectedArea && reports[i].repType === 'Missing') {
                    ++count;
                }
            }
            return count;
        }
        return (
            /*missing div starts here */
            <div className="col-lg-3 col-sm-6">
                <div className="card">
                    <div className="content">
                        <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                    <img src={missing} alt="missing" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                    <p>Missing <br />
                                        <span>{totalMissingRep()}</span>
                                    </p>

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
            reports: state.reports,
            selectedArea: state.selectedArea
        }
    }
)(Missing);