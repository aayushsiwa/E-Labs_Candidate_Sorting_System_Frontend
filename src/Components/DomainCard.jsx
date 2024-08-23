import React from "react";
import { Card, CardMedia, CardContent, Grid } from "@mui/material";
// import { Container } from '@mui/material';
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
// import CodeIcon from "@mui/icons-material/Code";
import Icon from "@mui/material/Icon";
const DomainCard = ({ id, icon, title, desc }) => {
    const [hovering, sethovering] = useState(false);
    const mouseenterhandler = () => {
        sethovering(true);
    };
    const mouseleavehandler = () => {
        sethovering(false);
    };
    return (
        <Link to={`/domain/${id}`}>
            <Card
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseleavehandler}
                sx={{
                    width: "20vw",
                    scale: hovering ? "1.1" : "1",
                    minHeight: "18vw",
                    transition: "0.2s linear",
                    background: hovering ? "#F1A23A" : "#262626",
                    borderRadius: "10px",
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Icon
                            sx={{
                                marginBottom: "15px",
                                color: hovering ? "white" : "#F1A23A",
                            }}
                        >
                            {icon}
                        </Icon>

                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                textDecoration: "none",
                                fontFamily: "Kiwi-Maru",
                                color: hovering ? "white" : "#F1A23A",
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                color: hovering ? "white" : "#C6C2C2",
                            }}
                        >
                            {desc}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
};

export default DomainCard;
