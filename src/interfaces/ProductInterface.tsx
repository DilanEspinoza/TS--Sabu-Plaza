export interface IProduct {
	id: number;
	title: string;
	slug?: string;
	price?: number;
	description?: string;
	category?: string;
	image?: string;
}

export interface IProductCard {
	product_id: number;
	title: string;
	image: string;
}
