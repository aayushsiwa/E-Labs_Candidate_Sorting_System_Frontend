import React from "react";
import { Card, CardMedia, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/material/Container";
import DomainCard from "./DomainCard";
import CodeIcon from "@mui/icons-material/Code";
import AndroidIcon from "@mui/icons-material/Android";
import LanguageIcon from "@mui/icons-material/Language";
import GifIcon from "@mui/icons-material/Gif";

const DomainCardContainer = () => {
  const domains = [
    {
      icon: (
        <LanguageIcon
          sx={{
            fontSize: "24px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Web-Development",
      title: "Web Development",
      desc: "A successful website does three things:\nIt attracts the right kinds of visitors.\nGuides them to the main services or product you offer.\nCollect Contact details for future ongoing relation.",
    },
    {
      icon: (
        <AndroidIcon
          sx={{
            fontSize: "24px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Android-Development",
      title: "Android Development",
      desc: "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites",
    },
    {
      icon: (
        <CodeIcon
          sx={{
            fontSize: "24px",
            color: "#ffffff",
          }}
        />
      ),
      id: "java",
      title: "JAVA",
      desc: "Unleash the power of Java and unlock a world of endless possibilities with incredible Java team of Elabs",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Content-Writing",
      title: "Content Writing",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Graphics-Design",
      title: "Graphics Design",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Videography&Editing",
      title: "Videography & Editing",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "UI&UX",
      title: "UI/UX",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "AR&VR-Game-Development",
      title: "AR/VR & Game Development",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "AI&Machine-Learning",
      title: "AI&MachineLearning",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Embedded-IOT",
      title: "Embedded Systems&IOT",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Cloud-Computing",
      title: "Cloud Computing",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
    {
      icon: (
        <GifIcon
          sx={{
            fontSize: "36px",
            color: "#ffffff",
          }}
        />
      ),
      id: "Marketing",
      title: "Marketing",
      desc: "The creative mind behind each and every post of ELabs are here...",
    },
  ];
  return (
    <Grid
      container
      sx={{
        padding: "60px",
      }}
      spacing={5}
    >
      {domains.map((domain) => (
        <Grid item>
          <DomainCard
            id={domain.id}
            icon={domain.icon}
            title={domain.title}
            desc={domain.desc}
          />
        </Grid>
      ))}

      <Grid item>
        <DomainCard />
      </Grid>
    </Grid>
  );
};

export default DomainCardContainer;
