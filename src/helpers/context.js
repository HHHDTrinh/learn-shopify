import { useContext, createContext } from 'react';

export const CartsContext = createContext();
export const LoadingContext = createContext();

export const useCarts = () => useContext(CartsContext);
export const useLoading = () => useContext(LoadingContext);
