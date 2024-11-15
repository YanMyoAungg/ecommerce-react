import { useCallback, useEffect, useState } from "react";
import { Product } from "../types/Product";
import axiosInstance from "../libs/axiosInstance";

const useFetchProductDetail = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProductDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  return {
    product,
    error,
    isLoading,
    refetch: fetchProductDetail,
  };
};

export default useFetchProductDetail;
