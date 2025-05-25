import { IProductCard } from "@/interfaces/ProductInterface";
import Image from "next/image";
import Link from "next/link";

export const ProductCard: React.FC<IProductCard> = ({
	product_id,
	title,
	image,
}) => {
	return (
		<>
			<Link href={`/products/${product_id}`}>
				<article className='p-2 w-56'>
					<Image src={image} alt={title} width='200' height='200' />
					<div className='card-body'>
						<h3 className='truncate whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold'>
							{title}
						</h3>
					</div>
				</article>
			</Link>
		</>
	);
};
