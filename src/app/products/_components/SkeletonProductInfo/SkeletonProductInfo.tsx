export const SkeletonProductInfo = () => {
	return (
		<div className='p-5 px-12 rounded-md flex flex-col gap-8 flex-1'>
			<div className='bg-neutral-100 dark:bg-neutral-700 py-6'></div>
			<div className='flex justify-between'>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2 w-2/6'></p>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2 w-2/6'></p>
			</div>

			<div className=' flex flex-wrap gap-5'>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
				<button className='bg-neutral-100 dark:bg-neutral-700  px-10 py-5 rounded-lg'></button>
			</div>

			<button className='py-5  w-full rounded-md bg-neutral-700 text-white'></button>
			<p className='bg-neutral-100 dark:bg-neutral-700 py-2 w-2/6'></p>
			<div className='flex flex-col gap-4'>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2'></p>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2'></p>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2'></p>
				<p className='bg-neutral-100 dark:bg-neutral-700 py-2'></p>
			</div>
		</div>
	);
};
