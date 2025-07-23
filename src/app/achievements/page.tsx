interface Achievement {
  date: string;
  title: string;
  category: 'competition' | 'certification' | 'research' | 'leadership' | 'project';
  description?: string;
  link?: string;
}

const achievements: Achievement[] = [
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
    category: 'competition'
  },
  {
    date: '2024.05',
    title: 'American Computer Science league (ACSL) | Intermediate Finalist',
    category: 'competition'
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
    category: 'competition'
  },
  {
    date: '2025.06.11',
    title: 'Published Research Paper on Quantum Error Correction (QEC) and Quantum Computing',
    category: 'research',
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
  competition: 'bg-red-500/20 text-red-300 border-red-500/30',
  certification: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  research: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  leadership: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  project: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
};

const categoryLabels = {
  competition: 'Competition',
  certification: 'Certification',
  research: 'Research',
  leadership: 'Leadership',
  project: 'Project'
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Achievements</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Awards, competitions, recognitions, and academic excellence throughout my journey.
          </p>
        </div>

        {/* Exam Scores Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Exam Scores</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standardized Tests */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Standardized Tests</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">SAT</h4>
                  <div className="text-4xl font-bold text-white">1590</div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">TOEFL</h4>
                  <div className="text-4xl font-bold text-white">111</div>
                </div>
              </div>
            </div>

            {/* AP Scores */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">AP Scores</h3>
              
              <div className="space-y-4">
                {/* Freshman 22-23 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Freshman 22-23</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Chemistry</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Microeconomics</span>
                      <span className="text-2xl font-bold text-blue-400">4</span>
                    </div>
                  </div>
                </div>

                {/* Sophomore 23-24 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Sophomore 23-24</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Macroeconomics</span>
                      <span className="text-2xl font-bold text-blue-400">4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Seminar</span>
                      <span className="text-2xl font-bold text-blue-400">4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP CSP</span>
                      <span className="text-2xl font-bold text-blue-400">4</span>
                    </div>
                  </div>
                </div>

                {/* Junior 24-25 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Junior 24-25</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Calc BC</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Calc AB</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">APUSH</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Research</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Physics 1</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Physics C E&M</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP Physics C Mechanics</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AP CSA</span>
                      <span className="text-2xl font-bold text-emerald-400">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Awards & Achievements</h2>
          
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
            
            {achievements.map((achievement, index) => (
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
                        {achievement.date}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          categoryStyles[achievement.category]
                        }`}
                      >
                        {categoryLabels[achievement.category]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 transition-colors">
                      {achievement.link ? (
                        <a 
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-white hover:text-white"
                        >
                          {achievement.title}
                        </a>
                      ) : (
                        achievement.title
                      )}
                    </h3>
                    {achievement.description && (
                      <p className="text-sm text-gray-400 italic">
                        {achievement.link && achievement.description.includes('*See pg.') ? (
                          <a 
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors hover:underline"
                          >
                            {achievement.description}
                          </a>
                        ) : (
                          achievement.description
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
