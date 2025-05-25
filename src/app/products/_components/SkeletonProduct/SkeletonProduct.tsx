export const SkeletonProduct = () => {
	return (
		<article className='p-2 w-56 flex-col gap-2 animate-pulse'>
			<div className='w-52 h-44 bg-neutral-100 dark:bg-neutral-600'></div>
			<div className='flex flex-col gap-2'>
				<p className='bg-neutral-100 p-2.5 dark:bg-neutral-600'></p>
				<p className='bg-neutral-100 p-2.5 dark:bg-neutral-600'></p>
			</div>
		</article>
	);
};
