import icon from './../../assets/shapes/coffee-shape.svg';

interface ExperienceCardProps {
    title: string;
    description: string;
}

export default function ExperienceCard({title, description}: ExperienceCardProps) {
    return (
        <div className={'w-full mt-6 h-full border-t-[#4F228D] border-t-8 rounded-md'}
             style={{
                 background: 'linear-gradient(110deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)',
                 boxShadow: '4px 7px 26px 0px rgba(0, 0, 0, 0.12)'
             }}>
            <div className={'inline-flex justify-between p-12'}>
                <img className={'w-18'} alt={'icon'} src={icon}/>
                <div className={'flex-col'}>
                    <div className={'font-semibold text-[30px] lg:pl-12'}>
                        {title}
                    </div>
                    <div className={'font-normal text-[18px] pl-12 pt-3'}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}