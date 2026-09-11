import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="text-white">
            ← Back
        </button>
    );
}

export default BackButton;