import { achievementsData } from '@/app/data/achievements';

export default function AchievementsPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--orange-web)' }}>
          My Achievements
        </h1>
        <p className="text-lg mt-2" style={{ color: 'var(--periwinkle)' }}>
          A timeline of my key accomplishments and certifications.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-periwinkle/30 ml-6 md:ml-0">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="mb-10 ml-8">
            {/* Timeline Dot */}
            <div 
              className="absolute w-4 h-4 rounded-full -left-2 border-2 border-periwinkle" 
              style={{backgroundColor: 'var(--space-cadet)'}}
            ></div>
            
            {/* Timeline Content */}
            <time className="text-sm font-normal leading-none" style={{ color: 'var(--periwinkle)' }}>
              {achievement.date}
            </time>
            <h3 className="text-2xl font-semibold mt-1" style={{ color: 'var(--orange-web)' }}>
              {achievement.title}
            </h3>
            <p className="text-lg font-normal" style={{ color: 'var(--ghost-white)' }}>
              from <span className="font-semibold">{achievement.organization}</span>
            </p>
            <p className="my-4 text-base font-normal" style={{ color: 'var(--periwinkle)' }}>
              {achievement.description}
            </p>
            {achievement.certificateLink && (
              <a 
                href={achievement.certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm rounded-full font-semibold transition-transform duration-300 hover:scale-105"
                style={{backgroundColor: 'var(--ghost-white)', color: 'var(--delft-blue)'}}
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}