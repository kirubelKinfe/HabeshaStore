import Image from 'next/image'
import FeaturedImage from '@public/men1.png'


const Featured = () => {
    return (
        <div className='px-32'>
            <h2 className='text-center font-bold text-blue-500 text-5xl'>Featured Product</h2>
            <p className='text-center mt-2 mb-10'>This is the best product of this year</p>

            <div className='bg-[#121633] shadow-xl w-full h-[400px] p-5 rounded-2xl relative'>
                <div className='flex flex-col justify-center gap-6'>
                    <p className='text-white font-bold'>Nike Shoe</p>
                    <p className='text-white font-bold text-5xl'>Just Do It</p>
                    <p className='text-white font-bold text-9xl'>Shoe</p>
                    <button type='button' className='self-start text-white font-bold p-3 rounded-xl bg-red-600 hover:scale-105 transition-all'>Add to cart</button>
                </div>
                <Image className='w-[500px] absolute top-[-2%] right-[25%]' src={FeaturedImage} alt='featured' />
                <div className='absolute w-56 right-[5%] bottom-[5%]'>
                    <p className='mb-3 text-white font-bold'>Description</p>
                    <p className='text-white'>
                        {"Get laced up for training, sport and lifestyle with the latest designs of men's shoes and sneakers."}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Featured