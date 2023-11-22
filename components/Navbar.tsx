import Link from "next/link"
import Search from "./Search"
import Cart from "./Cart"
import Image from "next/image"
import CartImage from '@public/cart.png'

const categories = [
    {
        _id: "1",
        name: "All",
        link: "all"
    },
    {
        _id: "2",
        name: "Men",
        link: "men"
    },
    {
        _id: "3",
        name: "Women",
        link: "women"
    },
    {
        _id: "4",
        name: "Children",
        link: "children"
    },
    {
        _id: "5",
        name: "Electronics",
        link: "electronics"
    },
    {
        _id: "6",
        name: "Books",
        link: "books"
    },
    {
        _id: "7",
        name: "Kitchen & Dining",
        link: "kitchenanddining"
    },
    {
        _id: "8",
        name: "Toys & Games",
        link: "toysandgames"
    },
    {
        _id: "9",
        name: "Grocery & Gourmet Food",
        link: "groceryandgourmentfood"
    },
    {
        _id: "10",
        name: "Best Sellers",
        link: "bestsellers"
    },
    {
        _id: "11",
        name: "New Releases",
        link: "newreleases"
    },
]

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 right-0">
            <div className="h-16 bg-[#121921] px-10 flex justify-between items-center">
                <div className="flex gap-7">
                    <div className="p-3 transition-all cursor-pointer text-blue-500 text-lg font-bold border border-[#121921] hover:border hover:border-white active:border active:border-white rounded-sm">
                        <Link href="/">Habesha<span className="text-white"> Store</span></Link>
                    </div>
                </div>

                <div className="flex mx-8">
                    <Search />
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <Link className='text-white underline p-3 font-bold' href="/login"> Sign In </Link>
                    <button type='button' className="w-8 relative cursor-pointer">
                        <Image src={CartImage} alt="cart" />
                        <p className='absolute top-0 -right-1 bg-red-800 text-white font-bold px-1 py-[2px] rounded-full text-xs'>{12}</p>
                    </button>
                </div>

            </div>
            <div className="subNavbar">
                <div className='menu'>Menu</div>
                {categories.map((category) => (
                    <Link key={category._id} href={category.link}>{category.name}</Link>
                ))}
            </div>
            {false && <Cart />}
        </nav >
    )
}

export default Navbar