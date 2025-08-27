import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
      return response;
    } catch (error) {
      const errorMessage = error?.message || "An unexpected error occurred";
      setError(error);
      toast.error(errorMessage);
      throw error; // Re-throw to allow calling code to handle if needed
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
