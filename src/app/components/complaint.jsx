import React from 'react';
import complaint from '.././images/complaint1.png';
import {connect} from 'react-redux';

class Complaint extends React.Component {
    render() {
        
        var totalComplaintRep=()=>{
            var {reports,selectedArea}=this.props;
            var count=0;
            if(selectedArea==='')
                count=0;
            for(var i=0;i<reports.length;i++){
                if(reports[i].area===selectedArea && reports[i].repType==='Complaint'){
                     ++count;
                }
            }
             return count;
        }
        return (
            /*complaint div starts here */
            <div className="col-lg-3 col-sm-6">
                <div className="card">
                    <div className="content">
                        <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                    <img src={complaint} alt="complaint" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                    <p>Complaint <br />
                                        <span>{totalComplaintRep()}</span>
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
)(Complaint);