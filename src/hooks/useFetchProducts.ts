import { useCallback, useEffect, useState } from "react";
import { Product } from "../types/Product";
import axiosInstance from "../libs/axiosInstance";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/products");
      setProducts(response.data);
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
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    error,
    isLoading,
    refetch: fetchProducts,
  };
};

export default useFetchProducts;
