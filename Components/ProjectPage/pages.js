// pages/projects/[id].js
"use client";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import React from "react";
import styles from "@/styles/ProjectPage.module.css"; // Import custom styles

const ProjectPage = ({ projects, id }) => {
  // Find the project that matches the given ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  // Example dynamic styling based on project attributes
  const backgroundStyle = {
    backgroundColor: project.bgColor || "#fff", // default background
  };

  const textStyle = {
    color: project.textColor || "#000", // default text color
  };

  return (
    <div style={backgroundStyle} className={styles.projectContainer}>
      <h1 style={textStyle} className={styles.projectTitle}>
        {project.name}
      </h1>
      <p style={textStyle} className={styles.projectDescription}>
        {project.description}
      </p>
      {/* Add any other project-specific content */}
    </div>
  );
};

// Server-side fetching of projects
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
