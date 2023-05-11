import { useState } from "react";

const useFetch = (client, url, isPaging) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);

  if (isPaging) {
    url += page;
  }

  const fetchMore = () => {
    setIsLoading(true);
    client
      .get(url)
      .then(({ data }) => {
        setPage((cur) => cur + 1);
        setIsLoading(false);
        setFetchedData((cur) => [...cur, ...data]);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err);
      });
  };

  return [fetchedData, setFetchedData, isLoading, isError, fetchMore];
};

export default useFetch;
