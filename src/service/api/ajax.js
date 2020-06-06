import axios from 'axios'

export default function ajax(url = '', parmas = {}, type = 'GET') {
    let promise;

    return new Promise((resolve, reject) => {
        if (type.toUpperCase() === 'GET') {
            let paramsStr = '';
            Object.keys(parmas).forEach(key => {
                paramsStr += key + '=' + parmas[key] + '&'
            })
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            url += '?' + paramsStr;
            promise = axios.get(url)
        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, parmas)
        }
        promise.then((res) => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })

    //    return promise
    //    promise.then()
}