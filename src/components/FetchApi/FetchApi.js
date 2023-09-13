import { useState, useEffect } from "react";
import axios from "axios";

function FetchApi(url, isbolen) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        async function fetchApi() {
            try {
                let res = await axios.get(url);
                let data = (res && res.data) ? res.data : [];
                if (isbolen) {
                    let newData = data.data
                    newData = newData.slice(781)
                    setData(newData)

                } else {
                    setData(data)
                }
                setIsLoading(false);
                setIsErr(false);
            } catch (error) {
                setIsErr(true);
                setIsLoading(false);
                setMessage(`${error.name}: ${error.message}`);
            }
        }
        setTimeout(() => {
            fetchApi();
        }, 3000)
    }, [url, isbolen]);

    return {
        data,
        isErr,
        isLoading,
        message,
    };
}

export default FetchApi;
