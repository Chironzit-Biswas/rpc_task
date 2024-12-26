import { MdOutlineWatchLater } from "react-icons/md";
import { LiaPlaneDepartureSolid } from "react-icons/lia";

export const Price = () => {
    const priceDetails =[
        {title: 'Hourly Price',price:'Start from $60',icon: <MdOutlineWatchLater />},
        {title: 'Lga Airport', price:'Start from $80.00',icon: <LiaPlaneDepartureSolid />},
        {title: 'Jfk Airport', price:'Start from $90.00',icon: <LiaPlaneDepartureSolid />},
        {title: 'Ewr Airport', price:'Start from $100.00',icon: <LiaPlaneDepartureSolid />}
    ]

    return (
        <>

                <div className={'max-w-full mx-auto justify-center items-center my-[100px]'}>

                    <div className={'max-w-[1400px] mx-auto '}>
                        <h1 className={'text-center text-3xl font-bold my-10 '}>Quick Price Check</h1>
                        <div className={'flex gap-2 mx-auto justify-center items-center flex-wrap  '}>
                            {
                                priceDetails.map((item, index) => (
                                    <div key={index}
                                         className={'bg-amber-300 gap-2 w-[300px] h-[100px] p-5 text-center rounded-lg shadow-gray-500 shadow-md hover:scale-110 transition-all duration-300 ease-in-out hover:text-white hover:bg-black'}>

                                        <div className={'flex items-center justify-center px-2'}>
                                            <p className={'text-6xl '}>{item.icon}</p>
                                            <div>
                                                <h2 className={'text-2xl uppercase font-bold'}>{item.title}</h2>
                                                <p className={'font-bold'}>{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className={'flex flex-col justify-center items-center gap-2 my-[100px]'}>
                            <div>
                                <h1 className={'lg:text-6xl text-4xl text-center'}>RPC LIMO NATIONWIDE</h1>
                                <p className={'my-4 text-center lg:text-3xl md:text-xl mt-5'}>Headquarters in New York serving multiple cities.</p>
                            </div>

                            <div className={'flex'}>
                                <button className={'text-xl bg-amber-300 p-5 mx-4 hover:bg-black hover:text-white'}>View
                                    Price & Book A Ride
                                </button>
                                <button className={'text-xl bg-amber-300 p-5 mx-4 hover:bg-black hover:text-white'}>Toll
                                    free: 1-833 711 4606
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'md:grid grid-cols-2 bg-yellow-400 items-center mx-auto w-full p-5 gap-5'}>
                    <div>
                        <h1 className={'text-2xl w-full font-bold] mb-5'}>What We Provide Is The Luxury Transport And Most
                            Comfortable Experience</h1>
                    </div>
                    <div>
                        <h1 className={'md:text-xl text-justify  mb-[80px]'}>Welcome to RPC Limo, emanating from the vibrant core of
                            New York, NY, and extending our esteemed services to over 300 cities worldwide. Entrust us
                            with your transportation intricacies, guaranteeing a smooth voyage from inception to
                            culmination. Our devoted offices are at your service round the clock, every day of the year,
                            poised to fulfill all your transportation needs.</h1>
                    </div>
                </div>

        </>
    )
}