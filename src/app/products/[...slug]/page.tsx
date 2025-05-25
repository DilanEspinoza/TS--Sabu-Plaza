"use client";
import { Header } from "@/components/Header/Header";
import { useFetchProduct } from "@/hooks/useFetchProduct";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SkeletonProductInfo } from "../_components/SkeletonProductInfo/SkeletonProductInfo";
import { SkeletonProductImage } from "../_components/SkeketonProductImage/SkeketonProductImage";

export default function Page() {
	const params = useParams();
	const id_product = Array.isArray(params.slug)
		? parseInt(params.slug[0])
		: parseInt(params.slug);

	const { product, isLoading, error } = useFetchProduct(id_product);

	console.log(isLoading);
	console.log(error && error);
	return (
		<>
			<div className='flex flex-col h-screen'>
				<Header />
				{isLoading ? (
					<section className='flex w-[80%] mx-auto p-6 gap-5 justify-between h-full items-center'>
						<SkeletonProductImage />
						<SkeletonProductInfo />
					</section>
				) : (
					<section className='flex w-[80%] mx-auto p-6 gap-5 justify-between h-full items-center'>
						<div className='relative w-[600px] h-[600px] rounded-3xl overflow-hidden'>
							<Image
								src={product && product.image}
								alt={product?.title || "product image"}
								fill
								style={{ objectFit: "contain" }}
								sizes='(max-width: 768px) 100vw, 600px'
								priority
							/>
						</div>

						<div className='p-5 px-12 rounded-md flex flex-col gap-10 flex-1'>
							<div className='flex  justify-between'>
								<div className=''>
									<h3 className='text-2xl font-bold'>
										{product && product.title}
									</h3>
									<p className='font-light'>{product && product.category}</p>
								</div>
								<div className=''>
									<span className='font-bold text-2xl'>
										$ {product && product.price}
									</span>
								</div>
							</div>

							{/* 				<div className='flex flex-col gap-3'>
								<div className='flex justify-between'>
									<p className='text-gray-300'>Size</p>
									<p className='text-gray-300 flex gap-2 items-center'>
										<span><RiRulerLine /></span>
										Size guide
									</p>
								</div>
								<div className=' flex flex-wrap gap-5'>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										XS
									</button>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										S
									</button>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										M
									</button>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										L
									</button>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										XL
									</button>
									<button className='borderz border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										2XL
									</button>
									<button className='border border-gray-400 rounded-lg px-10 py-2.5 hover:border-sky-600'>
										3XL
									</button>
								</div>
							</div> */}

							<button className='py-2 px-5 w-full rounded-md bg-sky-600 text-white'>
								Add to card
							</button>
							<div className='flex flex-col gap-3'>
								<p className=' font-semibold text-gray-300'>Descriptipn</p>
								<p className=' '>{product && product.description}</p>
							</div>
						</div>
					</section>
				)}
			</div>
		</>
	);
}
