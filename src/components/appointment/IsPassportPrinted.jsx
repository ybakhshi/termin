import React,{useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../config.json';
const IsPassportPrinted = ({applicationId}) => {
    const [result, setResult] =useState("");
    useEffect(()=>{
        (async(applicationId)=>{
            const response = await axios({
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: config.apiEndPoint+'/findpassport.php',
                data: {applicationId: applicationId}
            });
        setResult(response.data);
        })(applicationId);
             
    },[applicationId]);
    
    return (
        <div dir ="rtl" className ="text-center">
            {
                result ==="success" ? 
                <div className="text-success">بلی، پاسپورت شما چاپ شده است.</div> 
                :<div className="text-danger">نخیر، پاسپورت شما هنوز چاپ نشده است.</div>
            }
        </div>
    );
};

export default IsPassportPrinted;