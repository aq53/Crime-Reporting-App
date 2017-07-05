var $ = require('jquery');
module.exports={
    filterReports(reports,reqArea,reqType){
        var filteredReports=reports;
        // console.log(reports);
        if(reqType==="all"){
        filteredReports=filteredReports.filter((report)=>{
            return report.area===reqArea;
        });
    }else{
        filteredReports=filteredReports.filter((report)=>{
        return report.area===reqArea && report.repType===reqType;
        });
    }

        return filteredReports;
    }
}