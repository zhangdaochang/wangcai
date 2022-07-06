
const ajax =  (method:string,url:string)=>{
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open(method,url)
        request.onreadystatechange=()=> {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.response))
                }else {
                    request.onerror=(err)=>{reject(err)}
                }
            }
        }
        request.send()
    })

}
export default ajax