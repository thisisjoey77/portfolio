export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let&apos;s connect and discuss opportunities in computer science and research.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:thisisjoey77@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                  >
                    thisisjoey77@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/thisisjoey77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                  >
                    @thisisjoey77
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Feel free to reach out for collaboration opportunities, research discussions, 
                or any questions about my projects and achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
