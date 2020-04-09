import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h2>Oops! The page you are looking is not found!</h2>
        </div>
    );
};

export default NotFound;

// const disableFullyBookedDates =(service)=>{
//     //for live server
//     // const data = {service: service}
//     // axios.post(config.apiEndPoint+'/disablefullybookeddates.php',data)
//     // .then(response =>{
//     //     console.log(response.data);
//     //     response.data.forEach(eachDate =>{
//     //         disableBookedDates.push(addDays(new Date(),eachDate));
//     //     })
//     // });

//     axios({
//             method: 'post',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             url: config.apiEndPoint+'/disablefullybookeddates.php',
//             data: {service: service}
//         })
//         .then(response =>{
//             console.log(response.data);
//             response.data.forEach(eachDate =>{
//                 disableBookedDates.push(addDays(new Date(),eachDate));
//             })
//         });
    
// }