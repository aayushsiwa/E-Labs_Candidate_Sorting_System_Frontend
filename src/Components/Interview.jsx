import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InterviewPage = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [interviewed, setInterviewed] = useState(false);
    const [decision, setDecision] = useState(null);
    const apiUrl = import.meta.env.VITE_APP_URL;

    useEffect(() => {
        // Fetch candidate and interview details
        axios
            .get(`${apiUrl}/domain/${id}/interview/openPopup`)
            .then((response) => {
                setCandidate(response.data.candidate);
                setInterviewed(response.data.interviewDone);
                if (response.data.interviewDone) {
                    setFeedback(response.data.candidate.feedback);
                } else {
                    setFeedback("");
                }
            })
            .catch((error) => {
                console.error("Error fetching candidate data:", error);
            });

        // Fetch the decision status from backend
        fetchDecision();
    }, [id]);

    const fetchDecision = () => {
        axios
            .get(`${apiUrl}/domain/${id}/interview/currentDecision`)
            .then((response) => {
                setDecision(response.data.decision);
            })
            .catch((error) => {
                console.error("Error fetching current decision status:", error);
            });
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${apiUrl}/domain/${id}/interview/submit`, {
                feedback,
            })
            .then(() => {
                setInterviewed(true);
                fetchDecision(); // Fetch the updated decision after submission
            })
            .catch((error) => {
                console.error("Error submitting feedback:", error);
            });
    };

    const handleToggleDecision = () => {
        // Fetch the current decision status from the backend
        axios
            .get(`${apiUrl}/domain/${id}/interview/currentDecision`)
            .then((response) => {
                const currentDecision = response.data.decision;

                // Toggle the decision status
                axios
                    .post(`${apiUrl}/domain/${id}/interview/toggleDecision`, {
                        decision: !currentDecision,
                    })
                    .then(() => {
                        fetchDecision(); // Fetch the updated decision after toggling
                    })
                    .catch((error) => {
                        console.error("Error toggling decision status:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching current decision status:", error);
            });
    };

    return (
        <div>
            <h1>
                Interview Feedback for{" "}
                {candidate ? candidate.name : "Loading..."}
            </h1>
            {!interviewed ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Enter feedback here..."
                    />
                    <br />
                    <button type="submit" disabled={!feedback}>
                        Complete Interview
                    </button>
                </form>
            ) : (
                <div>
                    <p>Feedback: {feedback || "No feedback yet"}</p>
                    <p>Interview completed!</p>
                </div>
            )}

            {/* Decision toggle button */}
            {decision !== null && (
                <button
                    onClick={handleToggleDecision}
                    style={{
                        backgroundColor: decision ? "green" : "red",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {decision ? "Selected" : "Not Selected"}
                </button>
            )}
        </div>
    );
};

export default InterviewPage;
