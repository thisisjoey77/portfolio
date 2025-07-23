import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto rounded-2xl shadow-2xl border border-white/10"
              priority
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Joy Kim
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science Student & Researcher
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about Quantum Computing, Informatics, and Educational Technology. 
            Currently exploring the intersection of theoretical computer science and practical applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Journey
            </Link>
            <Link
              href="/projects"
              className="glass px-8 py-4 rounded-lg font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Major Achievements</div>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-gray-300">Competition Awards</div>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2</div>
              <div className="text-gray-300">Research Publications</div>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
              <div className="text-gray-300">Years of Study</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Recent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block border border-purple-500/30">
                Quantum Computing
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">Quantum Research Publication</h3>
              <p className="text-gray-400">Published research paper on Quantum Error Correction (QEC) and Quantum Computing</p>
              <p className="text-sm text-gray-500 mt-2">June 2025</p>
            </div>
            
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block border border-red-500/30">
                Competition
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">KSEF Silver Prize</h3>
              <p className="text-gray-400">Korea Science Engineering Fair (KSEF) Silver Prize winner</p>
              <p className="text-sm text-gray-500 mt-2">January 2025</p>
            </div>
            
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block border border-orange-500/30">
                Leadership
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">ACSL Coordinator</h3>
              <p className="text-gray-400">Student Coordinator/Advisor for ACSL at KISJ</p>
              <p className="text-sm text-gray-500 mt-2">Dec 2024 - May 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
