import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";
import axios from "axios";


const DomainDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const apiUrl = import.meta.env.VITE_APP_URL;
    // console.log(apiUrl);

    const title = id.replace("-", " ");

    useEffect(() => {
        axios
            .get(`${apiUrl}/domain/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [id]);

    const btnprops = {
        background: "#262626",
        borderRadius: "10px",
        color: "#F1a23a",
        borderColor: "#F1a23a",
    };

    const handlePickClick = () => {
        const candidateToInterview = data.find(
            (student) => student.present && !student.interviewed
        );

        if (candidateToInterview) {
            navigate(`/domain/${candidateToInterview._id}/interview`);
        } else {
            alert("No available candidate for an interview.");
        }
    };

    const handleAllClick = () => {
        /* Handle All */
    };

    const toggleAttendance = async (studentId, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            await axios.post(`${apiUrl}/domain/${studentId}/attendance`, {
                present: newStatus,
            });
            setData((prevData) =>
                prevData.map((student) =>
                    student._id === studentId
                        ? { ...student, present: newStatus }
                        : student
                )
            );
        } catch (error) {
            setError("Error updating attendance");
        }
    };

    const handleTakeInterviewClick = (studentId) => {
        navigate(`/domain/${studentId}/interview`);
    };

    const handleReviewInterviewClick = (studentId) => {
        navigate(`/domain/${studentId}/interview`);
    };

    return (
        <div style={{ background: "#110F0F" }}>
            <Stack
                direction="row"
                sx={{ justifyContent: "space-around", alignItems: "center" }}
            >
                <Typography
                    sx={{ paddingLeft: "20px" }}
                    color="#F1A23A"
                    variant="h2"
                    fontFamily="Khmer"
                    fontWeight="bold"
                    p={2}
                >
                    {title}
                </Typography>
                <Button
                    size="large"
                    sx={{
                        paddingX: "40px",
                        background: "#F1a23a",
                        borderRadius: "10px",
                        color: "white",
                        borderColor: "white",
                    }}
                    variant="outlined"
                    onClick={handlePickClick}
                >
                    Pick
                </Button>
                <Button
                    size="large"
                    sx={btnprops}
                    variant="outlined"
                    onClick={handleAllClick}
                >
                    All
                </Button>
            </Stack>

            {data.length > 0 ? (
                <ul>
                    {data.map((student) => (
                        <li key={student._id}>
                            <span>{student.name}</span>
                            <Button
                                onClick={() =>
                                    toggleAttendance(
                                        student._id,
                                        student.present
                                    )
                                }
                                style={{
                                    backgroundColor: student.present
                                        ? "green"
                                        : "transparent",
                                    color: student.present
                                        ? "white"
                                        : "#F1A23A",
                                    borderColor: "#F1A23A",
                                }}
                            >
                                {student.present
                                    ? "Present"
                                    : "Mark as Present"}
                            </Button>
                            {!student.interviewed && student.present && (
                                <Button
                                    onClick={() =>
                                        handleTakeInterviewClick(student._id)
                                    }
                                    style={{
                                        marginLeft: "10px",
                                        backgroundColor: "#F1a23a",
                                        color: "white",
                                    }}
                                >
                                    Take Interview
                                </Button>
                            )}
                            {student.interviewed && (
                                <Button
                                    onClick={() =>
                                        handleReviewInterviewClick(student._id)
                                    }
                                    style={{
                                        marginLeft: "10px",
                                        backgroundColor: "#007bff",
                                        color: "white",
                                    }}
                                >
                                    Review Interview
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            ) : error ? (
                <p style={{ color: "red" }}>
                    There was an error loading the content.
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DomainDetail;
