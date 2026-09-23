import { useNavigate } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="sticky z-52 justify-items-left top-0 x-50 text-white mb-10 mt-1 cursor-pointer">
            <CircleArrowLeft />
        </button>
    );
}

export default BackButton;