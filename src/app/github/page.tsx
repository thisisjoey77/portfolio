'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

// Constants moved outside component to avoid re-creation on every render
const FEATURED_REPOS = ['schoolWeb', 'Tennix', 'NeulBom', 'MultiCult'];
const OTHER_REPOS = ['CSLessons', 'BaksetballStatTracker', 'Visual-Disorder-VR', 'thisisjoey77'];

export default function GitHubPage() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your GitHub username
  const GITHUB_USERNAME = 'thisisjoey77';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch all repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const allRepos = await reposResponse.json();
        
        // Filter and sort featured repositories
        const featuredRepos = FEATURED_REPOS.map(name => 
          allRepos.find((repo: Repository) => repo.name === name)
        ).filter(Boolean);
        
        // Get specific other repositories
        const otherRepos = OTHER_REPOS.map(name => 
          allRepos.find((repo: Repository) => repo.name === name)
        ).filter(Boolean);
        
        setRepos([...featuredRepos, ...otherRepos]);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Swift: '#fa7343',
      Kotlin: '#A97BFF',
    };
    return colors[language] || '#8b949e';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass p-8 rounded-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading GitHub data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass p-8 rounded-lg text-center">
          <p className="text-red-400 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">GitHub Profile</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my open source projects and contributions
          </p>
        </div>

        {user && (
          <>
            {/* Profile Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="glass p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={user.avatar_url}
                      alt={user.name || user.login}
                      width={150}
                      height={150}
                      className="rounded-lg border border-white/10"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {user.name || user.login}
                    </h2>
                    <p className="text-blue-400 text-lg mb-4">@{user.login}</p>
                    
                    {user.bio && (
                      <p className="text-gray-300 mb-4 leading-relaxed">{user.bio}</p>
                    )}
                    
                    {user.location && (
                      <p className="text-gray-400 mb-4 flex items-center justify-center md:justify-start">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {user.location}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{user.public_repos}</div>
                        <div className="text-gray-400 text-sm">Repositories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{user.followers}</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{user.following}</div>
                        <div className="text-gray-400 text-sm">Following</div>
                      </div>
                    </div>

                    <Link
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-lg inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Repositories Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h3>
              
              {/* Timeline Layout for Featured Repos */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block"></div>
                
                {repos.slice(0, FEATURED_REPOS.length).map((repo) => (
                  <div key={repo.id} className="relative mb-12 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 w-4 h-4 timeline-dot rounded-full z-10 transform -translate-x-1/2 top-8 hidden md:block"></div>
                    
                    {/* Content Card */}
                    <div className="md:ml-20 ml-0">
                      <div className="glass p-8 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="mb-4 lg:mb-0">
                            <Link
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-3xl font-bold text-white hover:text-blue-400 transition-colors group-hover:text-blue-300"
                            >
                              {repo.name}
                            </Link>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                              {repo.language && (
                                <div className="flex items-center">
                                  <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                                  ></div>
                                  {repo.language}
                                </div>
                              )}
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {repo.stargazers_count}
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7a2 2 0 010-2.828l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {repo.forks_count}
                              </div>
                              <div className="text-xs">
                                Updated {new Date(repo.updated_at).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          
                          <Link
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-6 py-3 rounded-lg inline-flex items-center self-start lg:self-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            View Project
                          </Link>
                        </div>
                        
                        {repo.description && (
                          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {repo.description}
                          </p>
                        )}

                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {repo.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Repositories Section */}
            {repos.length > FEATURED_REPOS.length && (
              <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-white text-center mb-12">Other Projects</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {repos.slice(FEATURED_REPOS.length).map((repo) => (
                    <div key={repo.id} className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                      <div className="mb-4">
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                          {repo.name}
                        </Link>
                      </div>
                      
                      {repo.description && (
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {repo.description}
                        </p>
                      )}

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          {repo.language && (
                            <div className="flex items-center">
                              <div
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                              ></div>
                              {repo.language}
                            </div>
                          )}
                          
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {repo.stargazers_count}
                          </div>
                          
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7a2 2 0 010-2.828l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {repo.forks_count}
                          </div>
                        </div>
                        
                        <div className="text-xs">
                          Updated {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-8 py-4 rounded-lg font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 border border-white/20 inline-block"
              >
                View All Repositories
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
