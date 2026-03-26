import React, { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace with your server's URL (e.g., http://localhost:5000)
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Could not fetch projects:", err));
  }, []);

  return (
    <section className="py-16 bg-slate-900 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project._id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition shadow-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-slate-700 text-slate-200 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;