import BannerImage from '../../assets/banner1.jpg'
function Banner(){
    return (
        <div className='w-full h-[25rem] relative'>
            <img 
            className='w-full h-full'
            src={BannerImage} alt="" />
                
            <div className='absolute left-0 right-0 mx-auto top-20 w-[20rem]'>
                <div className='flex flex-col gap-4'>
                    <div className='text-5xl font-semibold text-white '>
                        Crypto Tracker
                    </div>
                    <div className='text-sm font-semibold text-center text-white'>
                        Get All info regarding Cryptocurrencies
                    </div>
                </div>
            </div>
        </div>

        
        
    )
}
export default Banner;