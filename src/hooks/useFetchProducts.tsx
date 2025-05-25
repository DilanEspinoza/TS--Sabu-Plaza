"use client";

import { IProduct } from "@/interfaces/ProductInterface";
import { useState, useEffect } from "react";

export function useFetchProducts() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
				const data = await res.json();
				setProducts(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setError("Hubo un error al traer las imagenes");
				setIsLoading(false);
			}
		};
		getProducts();
	}, []);
	return { products, isLoading, error };
}
