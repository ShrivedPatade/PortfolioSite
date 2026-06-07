import Link from 'next/link';
import { projectsData } from '@/app/data/projects';

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16">
      <div className="space-y-16">
        {/* SECTION 1: ABOUT ME (Updated) */}
        <section
          id="about"
          className="p-8 rounded-lg shadow-2xl"
          style={{ backgroundColor: 'var(--delft-blue)', color: 'var(--ghost-white)' }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--orange-web)' }}>
            Shrived Patade
          </h2>
          <div className="space-y-3 text-lg" style={{ color: 'var(--ghost-white)' }}>
            {/* ==> NEW DESCRIPTION <== */}
            <p>
              I am a dedicated AI & Machine Learning Engineer currently completing my B-Tech in Computer Engineering with a specialization in AIML at Vidyalankar Institute of Technology.
            </p>
            <p>
              With a strong foundation in deep learning, computer vision, and NLP, I am passionate about architecting and deploying intelligent systems that solve complex, real-world problems. My experience includes developing and fine-tuning models, engineering automation bots, and leading projects from concept to completion.
            </p>
          </div>
        </section>

        {/* PROJECTS PREVIEW SECTION */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--orange-web)' }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/projects#${project.id}`}
                className="block rounded-lg p-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(228,217,255,0.4)]"
                style={{ backgroundColor: 'var(--delft-blue)', color: 'var(--ghost-white)' }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="font-bold text-xl" style={{ color: 'var(--periwinkle)' }}>
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/projects" 
              className="inline-block px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              style={{backgroundColor: 'var(--orange-web)', color: 'var(--space-cadet)'}}
            >
              View All Projects
            </Link>
          </div>
        </section>

        {/* ==> NEW CONTACT SECTION <== */}
        <section
          id="contact"
          className="p-8 rounded-lg shadow-2xl text-center"
          style={{ backgroundColor: 'var(--delft-blue)', color: 'var(--ghost-white)' }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--orange-web)' }}>
            Get In Touch
          </h2>
          <p className="text-lg mb-6" style={{ color: 'var(--periwinkle)' }}>
            I'm always open to discussing new projects or opportunities.
          </p>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="inline-block px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--orange-web)', color: 'var(--space-cadet)'}}
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--ghost-white)', color: 'var(--delft-blue)'}}
            >
              LinkedIn
            </a>
             <a 
              href="https://github.com/ShrivedPatade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--ghost-white)', color: 'var(--delft-blue)'}}
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}