import AllAds from "../../components/AllAds";
import AppLayout from "../../components/AppLayout";
import { useParams, useNavigate } from "react-router-dom";
import guideSteps from "../../data/guideData";

function SelectionPage({title, options, nextRoute})
{
    const {step} =useParams();
    const navigate =useNavigate();
    const currentStep=guideSteps[step];

    return(
        <AppLayout>
        <header className="text-center text-xl font-bold text-white">
            {currentStep.title}
        </header>
            <AllAds />
            <section className="mt-8 flex flex-col gap-4">
                {currentStep.options.map((op)=>
                (
                    <button 
                    key={op.title}
                    className="flex h-14 w-full items-center justify-between rounded-xl bg-white px-4 text-left font-bold text-black shadow-md"
                    onClick={()=>
                    navigate(`/guide/${currentStep.next}`)}>
                    <span>{op.title}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-sm text-white">→</span>
                    </button>
                ))}
            </section>
        </AppLayout>
    )
}



export default SelectionPage