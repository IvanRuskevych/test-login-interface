import instance from '../api/instance.js';
import {useEffect, useState} from "react";

export const useApiPostRequest = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendData = async (url, data) => {
        setIsLoading(true);
        try {
            const {data: result} = await instance.post(url, data);
            setData(result);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (data) {
            sendData();
        }
    }, [data]);

    return {data, isLoading, error, sendData};
};
