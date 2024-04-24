import ExperienceCard from "../../components/experience-card";
import './../Home/styles/style.css'

export default function Experience() {
    return(
        <div className={'font-bold text-white w-full h-full pt-32 text-[50px] radial-gradient-bg'}>
            Work Experience
            <div className={'flex-col'}>
                <ExperienceCard title={'Data Analyst at PUCPR'} description={'PIBIC Scientific Initiation at PUCPR. Successfully engaged in data processing and the creation of linear regression models using Python, Pandas, and TensorFlow.'}/>
                <ExperienceCard title={'Front End Developer at Ambiensys'} description={'Responsible for the comprehensive development of the SIGRA system, from prototyping the system screens using Figma to its development and effective implementation.'}/>
            </div>
        </div>
    )
}