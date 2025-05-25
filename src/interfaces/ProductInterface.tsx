export interface IProduct {
	id: number;
	title: string;
	slug?: string;
	price?: number;
	description?: string;
	category?: {
		id?: number;
		name?: string;
		image?: string;
		slug?: string;
	};
	images: string[];
}

export interface IProductCard {
	product_id: number;
	title: string;
	image: string;
}
