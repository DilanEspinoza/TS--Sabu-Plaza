"use client";

import { IProduct } from "@/interfaces/ProductInterface";
import { useEffect, useState } from "react";

export function useFetchProduct(id: number) {
	const [product, setProduct] = useState<IProduct>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await fetch(
					`https://api.escuelajs.co/api/v1/products/${id}`
				);
				const data = await res.json();
				setProduct(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setError("Hubo un error al traer las imagenes");
				setIsLoading(false);
			}
		};
		getProduct();
	}, [id]);

	return { product, isLoading, error };
}
