import Link from "next/link";
import { CartIcon } from "../ui/icons/CartIcon";
import { SearchIcon } from "../ui/icons/SearchIcon";

export const Header = () => {
	return (
		<header className='flex m-2 p-2 justify-around gap-10 items-center'>
			{/* logo */}
			<div>
				<Link href='/' className='text-4xl'>
					Pixly
				</Link>
			</div>

			<div className='flex-1  '>
				<form
					action=''
					className='w-full flex gap-3 py-2 px-4 rounded-2xl bg-neutral-800 border border-neutral-600 outline-none '>
					<input
						type='text'
						placeholder='Search for anything'
						className='w-full outline-none bg-neutral-800'
					/>
					<div className='border-r border-neutral-600'></div>
					<div>
						<SearchIcon />
					</div>
				</form>
			</div>

			<div className='mr-4'>
				<ul className='flex gap-5 items-center'>
					<li>
						<Link href='/products'>Products</Link>
					</li>
					<li>
						<div>
							<div className='relative group inline-block'>
								<button>
									<CartIcon />
								</button>
								<div className='z-50 absolute  right-0  p-4 bg-white text-black  rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 w-[500px] h-[500px]'>
									<div className='flex flex-col justify-between h-full '>
										<div className='flex flex-col gap-2'>
											<h1 className='text-2xl'>Shopping Cart</h1>
											<hr className='border border-neutral-300' />
										</div>

										<button className='bg-indigo-600 p-2 w-full text-white'>
											Checkout
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className='flex gap-3'>
							<button className='py-2 px-4 hover:bg-neutral-700 rounded-3xl'>
								Sing in
							</button>
							<button className='py-2 px-4 bg-neutral-700 rounded-3xl hover:bg-neutral-600 border border-neutral-300 font-bold hover:text-neutral-50'>
								Register
							</button>
						</div>
					</li>
				</ul>
			</div>
		</header>
	);
};
