import React from 'react';
// import crime from '.././images/crime2.png';
import crime from '.././images/crime1.png';
import {connect} from 'react-redux';

class Crime extends React.Component {
    render() {
        var totalCrimeRep=()=>{
            var {reports,selectedArea}=this.props;
            var count=0;
            if(selectedArea==='')
                count=0;
            for(var i=0;i<reports.length;i++){
                if(reports[i].area===selectedArea && reports[i].repType==='Crime'){
                     ++count;
                }
            }
             return count;
        }
        return (
            /*Crime div starts here */
            <div className="col-lg-3 col-sm-6">
                <div className="card">
                    <div className="content">
                        <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                    <img src={crime} alt="crime" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                    <p>Crime <br />
                                        <span>{totalCrimeRep()}</span>
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
    (state)=>{
        return {
            reports : state.reports,
            selectedArea:state.selectedArea
        }
    }
)(Crime);