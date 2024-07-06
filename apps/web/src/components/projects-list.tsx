import { getMyPortfolioContent } from "services";
import ProjectCard from "./project-card";
import { Grid } from "@mui/material";

export async function generateStaticParams() {
  const posts = await getMyPortfolioContent();

  return posts.results.map((post) => ({
    slug: post.id,
  }));
}

const projects = [
  {
    imageUrl: "/projects/machinecode.webp",
    projectName: "Machine Code Technologies",
    projectLiveUrl: "https://machinecode.in",
  },
  {
    imageUrl: "/projects/avahi.webp",
    projectName: "Avahi Pvt Limited",
    projectLiveUrl: "https://avahi.netlify.app",
  },
  {
    imageUrl: "/projects/telnewz.webp",
    projectName: "TelNewz",
    projectLiveUrl: "https://telnewz.in",
  },
  {
    imageUrl: "/projects/notion_to_md_converter.webp",
    projectName: "Notion To MD Converter",
    projectLiveUrl: "https://notion-to-md-converter.vercel.app",
  },
  {
    imageUrl: "/projects/lokesh_doppasani.webp",
    projectName: "Lokesh Doppasani",
    projectLiveUrl: "https://lokesh-doppasani.vercel.app",
  },
  {
    imageUrl: "/projects/gangababu.webp",
    projectName: "Ganga Babu",
    projectLiveUrl: "https://gangababu.vercel.app/",
  },
  {
    imageUrl: "/projects/raja_reddy.webp",
    projectName: "Raja Reddy",
    projectLiveUrl: "https://rajareddy.vercel.app/",
  },
];
export default function ProjectsList() {
  return (
    <div className="container flex gap-10 justify-center self-center mt-20 md:mt-3">
      <div>
        <h3 className="font-['Inter'] text-xl md:text-2xl font-bold py-4 underline">
          Freelance Projects
        </h3>
        <Grid container spacing={5} justifyContent="start">
          {projects?.slice(0, 2).map((project, key) => (
            <Grid item xs={12} sm={10} key={`project-${key}`}>
              <ProjectCard
                imageUrl={project?.imageUrl}
                projectName={project?.projectName}
                projectLiveUrl={project?.projectLiveUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="font-['Inter'] text-xl md:text-2xl font-bold py-4 underline">
          Own Projects
        </h3>
        <Grid container spacing={5} justifyContent="center">
          {projects?.slice(2)?.map((project, key) => (
            <Grid item xs={12} sm={6} key={`project-${key}`}>
              <ProjectCard
                imageUrl={project?.imageUrl}
                projectName={project?.projectName}
                projectLiveUrl={project?.projectLiveUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
