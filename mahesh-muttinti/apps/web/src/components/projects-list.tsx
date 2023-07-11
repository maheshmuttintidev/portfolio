import { getMyPortfolioContent } from "services";
import ProjectCard from "./project-card";
import { Grid, Paper } from "@mui/material";

export async function generateStaticParams() {
  const posts = await getMyPortfolioContent();

  return posts.results.map((post) => ({
    slug: post.id,
  }));
}

const projects = [
  {
    imageUrl: "/projects/machinecode.png",
    projectName: "Machine Code Technologies",
    projectLiveUrl: "https://machinecode.in",
  },
  {
    imageUrl: "/projects/telnewz.png",
    projectName: "TelNewz",
    projectLiveUrl: "https://telnewz.in",
  },
  {
    imageUrl: "/projects/notion_to_md_converter.png",
    projectName: "Notion To MD Converter",
    projectLiveUrl: "https://notion-to-md-converter.vercel.app",
  },
  {
    imageUrl: "/projects/lokesh_doppasani.png",
    projectName: "Lokesh Doppasani",
    projectLiveUrl: "https://lokesh-doppasani.vercel.app",
  },
  {
    imageUrl: "/projects/gangababu.png",
    projectName: "Ganga Babu",
    projectLiveUrl: "https://gangababu.vercel.app/",
  },
  {
    imageUrl: "/projects/raja_reddy.png",
    projectName: "Raja Reddy",
    projectLiveUrl: "https://rajareddy.vercel.app/",
  },
];
export default function ProjectsList() {
  return (
    <div className="container mb-10 justify-center self-center">
      <Grid container spacing={5} justifyContent="center">
        {projects?.map((project, key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`project-${key}`}>
              <ProjectCard
                imageUrl={project?.imageUrl}
                projectName={project?.projectName}
                projectLiveUrl={project?.projectLiveUrl}
              />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
