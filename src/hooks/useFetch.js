import { useEffect, useState } from "react"; 

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setisPending] = useState(true)

    useEffect(()=> {

        const abortController = new AbortController(); // associated with fetch, abort fetch 

        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok){
                    throw Error('Could not fetch data. Try refreshing')
                }
                return res.json()
            })
            .then((data) => {
                setData(data.data);
                setError(null);
                setisPending(false)
            })
            .catch(err=> {
                setisPending(false)
                setError(err.message)
            })
            
        return () => abortController.abort();

    }, [url])

    return { data, isPending, error }

}

export default useFetch;