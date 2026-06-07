'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/app/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Handles reading the hash link from the homepage on mount
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
    setIsInitialized(true);
  }, []);

  // Updates the browser hash when a card is manually opened or closed
  useEffect(() => {
    if (!isInitialized) return; // Block execution until initial mount check finishes

    if (openCardId) {
      window.history.replaceState(null, '', `#${openCardId}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [openCardId, isInitialized]);

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