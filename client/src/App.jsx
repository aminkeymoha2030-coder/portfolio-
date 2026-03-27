import { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setError(data.message || "Unexpected data format");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Could not connect to backend.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="animate-pulse">Loading Amin's Projects...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-12 border-b border-gray-700 pb-6">
        <h1 className="text-4xl font-bold text-blue-400">Amin's ICT Portfolio</h1>
        <p className="text-gray-400">Full-Stack Developer | Technical University of Mombasa</p>
      </header>

      {error && (
        <div className="bg-red-900/20 border border-red-500 text-red-200 p-4 rounded mb-6">
          {error}
        </div>
      )}

      <main>
        {projects.length === 0 && !error ? (
          <p className="text-center text-gray-500 italic">
            No projects found in the database.
          </p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs border border-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;