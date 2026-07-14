import React from 'react'
import './Projects.css';
import spacebook from "../../assets/spacebook.png"
import budget from "../../assets/budget.png"
import directory from "../../assets/reactdirectory.png"
import notetaker from "../../assets/notetaker.png"
import perfectpairings from "../../assets/ppshot.jpg"
import cue1 from "../../assets/CUE1.jpg"
import cue3 from "../../assets/CUE3.PNG"
import wordsmith1 from "../../assets/Wordsmith1.PNG"
import wordsmith2 from "../../assets/Wordsmith2.PNG"

const Projects = () => {
    const projectCards = [
      {
        title: 'CUE',
        images: [cue1, cue3],
        url: null,
        status: 'Coming Summer 2026',
        summary: 'Cross-platform social app built to foster real-world, face-to-face human connection. iOS & Android. Currently in development.',
        stack: ['React Native', 'Node.js', 'MongoDB']
      },
      {
        title: 'Wordsmith',
        images: [wordsmith1, wordsmith2],
        url: null,
        status: 'In Development',
        summary: 'Mobile learning app built to boost engagement through spaced-repetition study sessions. Upload documents, set deadlines, and absorb material through focused micro-reading.',
        stack: ['React Native', 'Node.js', 'MongoDB']
      },
      {
        title: 'Spacebook',
        image: spacebook,
        url: 'https://spacebookx.herokuapp.com/',
        summary: 'Social-style application with authentication, dynamic posting, and full-stack routing.',
        stack: ['React', 'Node', 'MongoDB']
      },
      {
        title: 'Budget Tracker',
        image: budget,
        url: 'https://agile-mountain-15348.herokuapp.com/',
        summary: 'Expense tracking app designed for quick updates and practical financial visibility.',
        stack: ['JavaScript', 'Express', 'MongoDB']
      },
      {
        title: 'User Directory',
        image: directory,
        url: 'https://react-user-directory-x.netlify.app/',
        summary: 'React-based directory experience with filtering and high-speed client-side interactions.',
        stack: ['React', 'Hooks', 'Bootstrap']
      },
      {
        title: 'Notetaker',
        image: notetaker,
        url: 'https://notetaker-express-x.herokuapp.com/',
        summary: 'Structured note management app with simple CRUD workflows and API-backed persistence.',
        stack: ['Node', 'Express', 'REST API']
      },
      {
        title: 'Perfect Pairings',
        image: perfectpairings,
        url: 'https://ckzard.github.io/perfectpairings/',
        summary: 'Interactive recommendation concept connecting food and drink pairings in a clean UI.',
        stack: ['JavaScript', 'APIs', 'UI/UX']
      },
    ];

    return (
      <section className="section-shell" id="projects">
        <div className="section-inner">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Builds That Blend Utility and User Experience</h2>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                {project.images
                  ? <div className="phone-screenshots">
                      {project.images.map((img, i) => (
                        <img key={i} src={img} alt={`${project.title} screen ${i + 1}`} />
                      ))}
                    </div>
                  : <img src={project.image} alt={`${project.title} preview`} />
                }
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-tags">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {project.url
                    ? <a href={project.url} target="_blank" rel="noreferrer" className="btn-secondary">View Live</a>
                    : <span className="project-status-badge">{project.status}</span>
                  }
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Projects
