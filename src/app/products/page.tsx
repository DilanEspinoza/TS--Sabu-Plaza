"use client";
import { Header } from "@/components/Header/Header";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { ProductCard } from "./_components/ProductCard/ProductCard";
import { SkeletonProduct } from "./_components/SkeletonProduct/SkeletonProduct";

export default function Products() {
	const { products, isLoading, error } = useFetchProducts();
	console.log(products && products);
	console.log(isLoading);
	console.log(error && error);

	return (
		<>
			<Header />
			<main className='flex gap-3 w-11/12 mx-auto'>
				<aside className='w-1/4 p-2'>
					<p className='flex items-center gap-3 text-xl'>
						<span>{/* <RiMenuSearchLine /> */}</span>
						Categories
					</p>
					<hr className='border border-black dark:border-white' />
					<ul className='w-full  flex flex-col  mt-4'>
						{/*     {data.length > 0 ? data.map((category) => (
                    <li key={category.id} className="hover:bg-neutral-100 p-1 cursor-pointer dark:hover:bg-neutral-700">{category.name}</li>
                )) :
                    ""
                } */}
					</ul>
				</aside>

				<section className='w-9/12 flex flex-col gap-6 mx-auto items-center '>
					<h1 className='text-start text-3xl'>Featured Products</h1>
					<div className='flex flex-wrap gap-5 justify-center '>
						{isLoading ? (
							<>
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
								<SkeletonProduct />
							</>
						) : (
							products &&
							products.map((product) => (
								<ProductCard
									key={product.id}
									product_id={product.id}
									title={product.title}
									image={product.image}
								/>
							))
						)}
					</div>
				</section>
			</main>
		</>
	);
}
