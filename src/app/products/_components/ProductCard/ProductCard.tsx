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
					{/* Contenedor fijo para la imagen */}
					<div className='relative w-56 h-56 overflow-hidden  '>
						<Image
							src={image}
							alt={title}
							fill // Aquí le decimos que ocupe todo el contenedor padre
							style={{ objectFit: "contain" }} // Importante: para que la imagen se ajuste sin deformarse
							sizes='224px' // Equivale a 56*4 (w-56)
							priority={true} // Opcional: para cargar rápido
						/>
					</div>

					<div className='card-body mt-2'>
						<h3 className='truncate whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold'>
							{title}
						</h3>
					</div>
				</article>
			</Link>
		</>
	);
};
