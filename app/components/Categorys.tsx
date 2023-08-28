import Image from "next/image"
import Link from "next/link"
import { PiArrowUpRightBold } from 'react-icons/pi'

const Categorys = async () => {
    return (
        <div className="py-10 px-5">
            <div className='text-center mb-10 md:mb-20'>
                <h2 className='text-5xl md:text-5xl font-bold mb-5'>Categorys</h2>
                <p className='font-medium text-gray-600'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 justify-center">
                <Link className="group relative w-[300px] h-[500px] bg-red-400" href='/category/Mercedes-Benz'>
                    <p className="absolute top-8 font-semibold left-4 text-white z-10 text-3xl">Mercedes-Benz</p>
                    <Image
                        className="object-cover"
                        src='/mercedes.jpg'
                        alt="mercedes"
                        fill
                    />
                    <div className="absolute bottom-4 right-8 p-3 text-xl bg-white rounded-full group-hover:bg-blue-500 group-hover:text-white duration-300">
                        <PiArrowUpRightBold />
                    </div>
                </Link>
                <Link className="group relative w-[300px] h-[500px] bg-red-400" href='/category/BMW'>
                    <p className="absolute top-8 font-semibold left-4 text-white z-10 text-3xl">BMW</p>
                    <Image
                        className="object-cover"
                        src='/BMW.jpg'
                        alt="BMW"
                        fill
                    />
                    <div className="absolute bottom-4 right-8 p-3 text-xl bg-white rounded-full group-hover:bg-blue-500 group-hover:text-white duration-300">
                        <PiArrowUpRightBold />
                    </div>
                </Link>
                <Link className="group relative w-[300px] h-[500px] bg-red-400" href='/category/Audi'>
                    <p className="absolute top-8 font-semibold left-4 text-white z-10 text-3xl">Audi</p>
                    <Image
                        className="object-cover"
                        src='/audi.jpg'
                        alt="audi"
                        fill
                    />
                    <div className="absolute bottom-4 right-8 p-3 text-xl bg-white rounded-full group-hover:bg-blue-500 group-hover:text-white duration-300">
                        <PiArrowUpRightBold />
                    </div>
                </Link>
                <Link className="group relative w-[300px] h-[500px] bg-red-400" href='/category/Porsche'>
                    <p className="absolute top-8 font-semibold left-4 text-white z-10 text-3xl">Porsche</p>
                    <Image
                        className="object-cover"
                        src='/porsche.jpg'
                        alt="Porsche"
                        fill
                    />
                    <div className="absolute bottom-4 right-8 p-3 text-xl bg-white rounded-full group-hover:bg-blue-500 group-hover:text-white duration-300">
                        <PiArrowUpRightBold />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Categorys