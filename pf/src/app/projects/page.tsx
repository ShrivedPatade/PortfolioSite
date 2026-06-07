'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/app/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  // This useEffect runs only once on initial page load to handle the link from the homepage
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenCardId(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  // ==> NEW CODE BLOCK <==
  // This new useEffect runs whenever the openCardId changes
  useEffect(() => {
    // If a card is open, update the URL hash to match its ID
    if (openCardId) {
      window.history.replaceState(null, '', `#${openCardId}`);
    } else {
      // If no card is open, remove the hash from the URL
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [openCardId]); // The dependency array ensures this runs only when openCardId changes

  const handleToggle = (projectId: string) => {
    setOpenCardId(openCardId === projectId ? null : projectId);
  };

  return (
    <main className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--orange-web)' }}>
          My Projects
        </h1>
        <p className="text-lg mt-2" style={{ color: 'var(--periwinkle)' }}>
          Click on any card to expand for more details.
        </p>
      </div>

      <div className="space-y-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openCardId === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </main>
  );
}