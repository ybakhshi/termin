export const asyncValidate = async(values) =>{
    const sleep =ms=>new Promise(resolve =>setTimeout
        (resolve,ms));
    await sleep(1000);
    if(['y.bakhshi@mfa.af','yonus.bakhshi@gmail.com','bakhshi@gmail.com'].includes
    (values.email)){
        return Promise.reject({
            email: 'There is already an active appointment'
        })
    }
    
}