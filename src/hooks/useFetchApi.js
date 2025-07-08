import { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);

  // useEffect(() => )
  // api call
  // based on url

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        setData(respData);
      });
  }, [url]);

  return data
};

export default useFetchApi;
