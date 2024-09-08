'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import { motion } from 'framer-motion';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const [project, setProject] = useState([]);
  const [page, setPage] = useState(search ? parseInt(search, 10) : 0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "newProjects"]');
      const projects = data;
      projects.sort((a, b) => a.id - b.id);
      setProject(projects);
      setPage(search ? parseInt(search, 10) : 0);
    };

    fetchData();
  }, [search]);

  function urlFor(source) {
    return source ? builder.image(source) : null;
  }

  if (project.length === 0) return <div>Loading...</div>;

  const currentProject = project[page - 1];

  return (
    <div style={{ backgroundColor: "#000016",color:"white" }}
 className="flex flex-col items-center justify-center min-h-screen p-4">
      {currentProject ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center uppercase font-[Archivo] font-bold text-2xl mb-4"
          >
            {currentProject?.title}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden mb-4"
          >
            <motion.img
              src={urlFor(currentProject?.image)?.width(800).url() || '/default-image.jpg'}
              alt={currentProject?.title}
              className="object-center object-cover w-80 h-80 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lowwercase font-[Archivo] font-small text-lg mt-4 mb-6 px-4"
          >
            {currentProject?.description}
          </motion.p>
        </>
      ) : (
        <div className="text-center">Project not found</div>
      )}
    </div>
  );
}
