interface TimelineEvent {
  date: string;
  title: string;
  category: 'education' | 'certification' | 'competition' | 'research' | 'leadership' | 'quantum' | 'informatics' | 'collaboration' | 'project';
  description?: string;
  link?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '2019.08',
    title: 'Enrolled to Korea International School Jeju (KISJ) MS',
    category: 'education'
  },
  {
    date: '2021.07.18',
    title: 'YBM COS Pro Python 2급 시험 합격',
    category: 'certification'
  },
  {
    date: '2021.11.13',
    title: '상명대학교 AR/VR 컨탠츠 아이디어 공모전 작품 입선',
    category: 'competition',
    link: 'https://github.com/thisisjoey77/Visual-Disorder-VR'
  },
  {
    date: '2021.02.04',
    title: 'USACO Bronze (978/1000)',
    category: 'informatics'
  },
  {
    date: '2022.08',
    title: 'Enrolled to KISJ HS',
    category: 'education'
  },
  {
    date: '2023.08',
    title: 'Joined EaSy Computing Club (ESC), KISJ',
    category: 'leadership'
  },
  {
    date: '2024.05',
    title: 'American Computer Science league (ACSL) | Intermediate Finalist',
    category: 'informatics'
  },
  {
    date: '2024.09',
    title: 'HIR Academic Writing Contest | Bronze',
    category: 'competition'
  },
  {
    date: '2025.01.22',
    title: 'Korea Science Engineering Fair (KSEF) | Silver Prize',
    category: 'competition'
  },
  {
    date: '2024.12-2025.05',
    title: 'ACSL Student Coordinator/Advisor for KISJ',
    category: 'leadership'
  },
  {
    date: '2025.05',
    title: 'ACSL | Senior Finalist',
    category: 'informatics'
  },
  {
    date: '2025.06.11',
    title: 'Published Research Paper on Quantum Error Correction (QEC) and Quantum Computing',
    category: 'quantum',
    description: '*See pg.403',
    link: 'https://www.curieuxacademicjournal.com/_files/ugd/99711c_b9c94e709d8e431c8847be35f309df86.pdf'
  },
  {
    date: '2025.07.02',
    title: 'International Greenwich Olympiad (IGO) | Bronze Prize',
    category: 'competition',
    description: '*Online Participation'
  },
  {
    date: '2025.06',
    title: 'Joined The Coala as Researcher / Intern',
    category: 'research'
  },
  {
    date: '2025.06',
    title: 'Collaborative Project on Mobile Tennis Application for School Tennis coach',
    category: 'project',
    link: 'https://github.com/thisisjoey77/Tennix'
  },
  {
    date: '2025.06',
    title: '"Multicult" Mobile Application Project',
    category: 'project',
    link: 'https://github.com/thisisjoey77/MultiCult'
  },
  {
    date: '2025.07.18',
    title: 'Collaborative project with Neulbom School of Seoul, South Korea',
    category: 'collaboration'
  },
  {
    date: '2025.07',
    title: 'Co-authored Textbook for Primary School students on Algorithmic CS',
    category: 'research'
  },
  {
    date: '2025.07',
    title: 'School Web Forum Platform',
    category: 'project',
    link: 'https://github.com/thisisjoey77/schoolWeb'
  }
];

const categoryStyles = {
  education: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  certification: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  competition: 'bg-red-500/20 text-red-300 border-red-500/30',
  research: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  leadership: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  quantum: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  informatics: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  collaboration: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  project: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
};

const categoryLabels = {
  education: 'Education',
  certification: 'Certification',
  competition: 'Competition',
  research: 'Research',
  leadership: 'Leadership',
  quantum: 'Quantum Computing',
  informatics: 'Informatics',
  collaboration: 'Collaboration',
  project: 'Project'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My journey through Middle School and High School Computer Science achievements, 
            competitions, and research endeavors.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            My Timeline
          </h2>
          
          {/* Legend */}
          <div className="mb-12 p-6 glass rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <span
                  key={key}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    categoryStyles[key as keyof typeof categoryStyles]
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full timeline-line"></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 timeline-dot rounded-full z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                        {event.date}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          categoryStyles[event.category]
                        }`}
                      >
                        {categoryLabels[event.category]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 transition-colors">
                      {event.link ? (
                        <a 
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-white hover:text-white"
                        >
                          {event.title}
                        </a>
                      ) : (
                        event.title
                      )}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-gray-400 italic">
                        {event.link && event.description.includes('*See pg.') ? (
                          <a 
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors hover:underline"
                          >
                            {event.description}
                          </a>
                        ) : (
                          event.description
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
