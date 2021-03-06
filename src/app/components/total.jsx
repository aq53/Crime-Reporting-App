import React from 'react';
import total from '.././images/total1.png';
import { connect } from 'react-redux';
class Total extends React.Component {
    render() {
        var totalRep = () => {
            var { reports, selectedArea } = this.props;
            var count = 0;
            if (selectedArea === '')
                count = 0;
            for (var i = 0; i < reports.length; i++) {
                if (reports[i].area === selectedArea) {
                    ++count;
                }
            }
            return count;
        }
        return (
            /*total div starts here */
            <div className="col-lg-3 col-sm-6">
                <div className="card">
                    <div className="content">
                        <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                    <img src={total} alt="total" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                    <p>Total <br />
                                        <span>{totalRep()}</span>
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
)(Total);