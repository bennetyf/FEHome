import axios from 'axios';

export default (method,url,option={}) => {
    let config = {
        method: method.toLowerCase(),
        url: url,
        withCredentials:true,
        ...option
    };

    return axios(config)
            .then(res=>({data:res.data,headers:res.headers}))
            .catch((error)=>{console.log(error)});
}
