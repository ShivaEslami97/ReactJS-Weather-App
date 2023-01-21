import { useState, useCallback } from "react";
import { toast } from "react-toastify";

const useFetch = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  const fetchData = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      if (!response.ok) {
        const message = "Request failed!";
        throw new Error(message);
      }

      const data = await response.json();
      applyData(data);
      console.log(data);
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, fetchData };
};

export default useFetch;
