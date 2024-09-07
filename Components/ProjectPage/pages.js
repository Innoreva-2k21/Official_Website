// pages/projects/[id].js
"use client"
import { client } from '@/Helper/context';
import { builder } from '@/Helper/context';

const ProjectPage = ({ projects, id }) => {
  // Find the project that matches the given ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      {/* <h1>{project.title}</h1>
      <img
        src={builder.image(project.image).width(800).url()}
        alt={project.title}
      />
      <p>{project.description}</p> */}
      hllo
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch all projects
  const projects = await client.fetch('*[_type == "newProjects"]');

  // Pass all projects and the id to the component
  return {
    props: {
      projects,
      id, // Pass the id parameter
    },
  };
}

export default ProjectPage;
