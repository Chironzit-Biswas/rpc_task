export const Footer =()=>{
    return(
        <div>
            <div className={'md:grid grid-cols-5 bg-yellow-400 px-8 mx-auto items-start  my-5 py-8 '}>

                <div className={'col-span-2 md:text-xl mb-5 text-justify md:w-[500px]'}>
                    <h1 className={''}>Spanning from the bustling energy of New York to over 300 cities worldwide, RPC Limo is your
                        trusted partner in sophisticated travel logistics. We pledge to provide a smooth transition from
                        the outset of your journey to its conclusion, ensuring every leg of your trip is executed with
                        precision and elegance.</h1>
                    <button className={'bg-black text-white p-5 my-5 hover:bg-gray-900'}>Book Now Pay Later</button>
                </div>

                <div>
                    <h1 className={'text-2xl'}>QUICK LINKS</h1>
                    <div className={'flex flex-col justify-start items-start mb-10'}>
                        <button className={'hover:text-white py-1'}>Our Fleet</button>
                        <button className={'hover:text-white py-1'}>Our Gallery</button>
                        <button className={'hover:text-white py-1'}>Contact Us</button>
                        <button className={'hover:text-white py-1'}>Privacy Policy</button>
                        <button className={'hover:text-white py-1'}>Book A Ride</button>
                    </div>

                </div>

                <div>
                    <h1 className={'text-2xl'}>OUR Services</h1>
                    <div className={'flex flex-col justify-start items-start mb-10'}>
                        <button className={'hover:text-white py-1'}>Corporate Travel</button>
                        <button className={'hover:text-white py-1'}>Airport Transfer</button>
                        <button className={'hover:text-white py-1'}>Wedding Transfer</button>
                        <button className={'hover:text-white py-1'}>Charter Service</button>
                        <button className={'hover:text-white py-1'}>Cruise Port Transfer</button>
                    </div>

                </div>

                <div>
                    <div className={'mb-10'}>
                        <button>
                            <img src="/appicon.png" alt=""/>
                        </button>
                    </div>
                    <h1>
                        If you are a rider or want to use our platform to ride please download RPC LIMO app.
                    </h1>
                    <h1 className={'py-5'}>
                        If you are a driver or want to drive with us please download RPC DRIVER app.
                    </h1>
                </div>
                <div className={'col-span-5 justify-center mx-auto items-center '}>
                    <p className={'text-center font-semibold'}>
                        Copyright © Chironzit 2024 - Developed by Chironzit Biswas
                    </p>
                </div>
            </div>


        </div>
    )
}