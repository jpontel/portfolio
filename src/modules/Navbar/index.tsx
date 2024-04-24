export default function Navbar() {
    return (
        <div className="w-full h-full inline-flex 2xl:px-[300px] 2xl:py-[15px] bg-[#1A0B2E]">
            <div className="w-[190px] h-full mt-2 text-left text-white text-sm font-bold">
                José Rodrigo Pontel
            </div>
            <div className="w-full h-full self-stretch justify-center items-center gap-16 inline-flex">
                <button className="w-20 h-8 text-center text-white text-[13px] font-semibold leading-[13px]">
                    Home
                </button>
                <button className="w-20 h-8 text-center text-white text-[13px] font-semibold leading-[13px]">
                    About
                </button>
                <button className="w-[98px] h-8 text-center text-white text-[13px] font-semibold leading-[13px]">
                    Skills
                </button>
                <button className="w-20 h-8 text-center text-white text-[13px] font-semibold leading-[13px]">
                    Contact
                </button>
            </div>
        </div>
    )
}