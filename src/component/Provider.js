import { useEffect } from "react"
import axios from "axios";

function Provider() {

    useEffect(() => {
        axios.get('http://192.168.0.111:5000/post/getPostInfo')
            .then((res) => {console.log(res.data)})
            .catch((e) => { console.log(e) })
    },[])

}

export default Provider;