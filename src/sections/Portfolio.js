import React from 'react';

const projects = [
    {
        title: 'Sample 1',
        description: 'Stay tuned',
        technologies: ['React', 'JavaScript', 'CSS'],
        link: 'in the works',
    },
    {
        title: 'Sample 2',
        description: 'Stay tuned',
        technologies: ['Also React', 'and JavaScript', 'and CSS'],
        link: 'wait',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Technologies: {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
            </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;