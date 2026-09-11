import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="text-white mb-10 mt-1">
            ← Back
        </button>
    );
}

export default BackButton;