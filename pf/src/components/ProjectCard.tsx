'use client';

// No longer needs useState
import type { projectsData } from '@/app/data/projects';

type Project = typeof projectsData[0];

// Update the props to receive isOpen and onToggle
export default function ProjectCard({ project, isOpen, onToggle }: { project: Project; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      id={project.id}
      className="p-8 rounded-lg shadow-2xl cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: 'var(--delft-blue)',
        color: 'var(--ghost-white)',
      }}
      onClick={onToggle} // Use the onToggle function passed from the parent
    >
      <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--orange-web)' }}>
        {project.title}
      </h2>
      <p className="text-lg mb-4" style={{ color: isOpen ? 'var(--periwinkle)' : 'var(--ghost-white)' }}>
        {project.shortDescription}
      </p>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0px' }}
      >
        <div className="pt-4 border-t border-periwinkle/20">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full" style={{backgroundColor: 'var(--space-cadet)', color: 'var(--periwinkle)'}}>
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg mb-6">
            {project.detailedDescription}
          </p>

          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--ghost-white)', color: 'var(--delft-blue)'}}
              onClick={(e) => e.stopPropagation()}
            >
              View Code (GitHub)
            </a>
            <a
              href={project.googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--orange-web)', color: 'var(--space-cadet)'}}
              onClick={(e) => e.stopPropagation()}
            >
              View Assets (Drive)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}