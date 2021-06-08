import { useState , useEffect } from 'react'


function useFetch(url) {
    const  [data, setdata] = useState(null);
    const  [isPending, setPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                setdata(data);
                setPending(false);
                
            })
        }, 10);
    }, [url])
    return {data , isPending}
}

export default useFetch
