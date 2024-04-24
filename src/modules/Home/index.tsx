import arrow from '../../assets/shapes/Arrow.svg';
import img from '../../assets/guigo.png';
import './styles/style.css'

export default function Home() {
    return (
        <div className="w-full h-full flex">
            <div className={"flex-col"}>
                <div className={"inline-flex"}>
                    <span className={"ml-48 flex justify-end "}>
                        <img src={arrow} className={'w-full'}/>
                    </span>
                    <div className={'w-full text-white text-[20px] justify-center mt-6'}>
                        Hello! I am <span style={{color: '#7127BA'}}>{'José Rodrigo Pontel'}</span>
                    </div>
                </div>
                <span className={'w-[350px] ml-[20px] absolute flex rounded-full radial-gradient-bg'}>
                    <img
                        className="w-full h-full"
                        alt="JosePontelPic"
                        src={img}
                    />
                </span>
            </div>
            <div className={"text-white flex-col text-start mt-40"}>
                <div className="flex justify-start text-[30px]">
                    Software Developer
                </div>
                <div className={"flex justify-start font-bold text-[48px]"}>
                    Designing, creating, and maintaining of <br/> mobile and web systems.
                </div>
            </div>
        </div>
    );
}