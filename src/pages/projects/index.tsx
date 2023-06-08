import { ProjectsContainer } from "./style";

const projetos = [
  {
    "id": 1,
    "name": "Movies",
    "image": "https://imgur.com/iWaTCxk.png",
    "description": "An Movie App, for searching all movies you want",
    "tags": ["React", "Router", "Axios"],
    "source_code": "https://github.com/Lunatic02/Movies",
  },
  {
    "id": 2,
    "name": "Pomodoro",
    "image": "https://i.imgur.com/yujrnJM.png",
    "description": "A pomodoro timer, to improve your productivity",
    "tags": ["React", "ZOD", "StyledComponents", "Typescript", "Router", "HookForm"],
    "source_code": "https://github.com/Lunatic02/ignite-timer-aulas",
  },
  {
    "id": 3,
    "name": "Crud",
    "image": "https://i.imgur.com/sdkK2S0.png",
    "description": "An Users crud",
    "tags": ["StyledComponents", "Axios", "express", "nodemon", "mysql", "cors", "NodeJS"],
    "source_code": "https://github.com/Lunatic02/Crud",
  },
  {
    "id": 4,
    "name": "nlw-SpaceTime",
    "image": "https://i.imgur.com/kenf3i0.png",
    "description": "The NLW Spacetime - Time Capsule is the project developed during Rocketseat's NLW Spacetime, using NodeJS with Fastify and React with NextJS 13.",
    "tags": ["React", "NodeJS", "Typescript", "Fastify", "Prisma", "NextJS", "Tailwind", "React-Native"],
    "source_code": "https://github.com/Lunatic02/Crud",
  },

]

export function Projects(){
  return(
    <ProjectsContainer>
      <div className="container">
      {projetos.map(project=>{
        return(
          <div className="card">
          <img src={project.image} alt={project.name} />
          <div className="content">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="cta">
              {project.source_code && (
                <a
                  href={project.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
              )
          })}
      </div>
      
    </ProjectsContainer>
  )
}



// <div key={project.id} className='card'>
//             <img src={project.image}/>
//             <div className="content">
//               <h3>{project.name}</h3>
//               <p>{project.description}</p>
//             </div>
//             <div className="tags">
//               {project.tags.map((tag) => (
//                 <span key={tag} className={tag}>
//                   {tag}
//                 </span>
//               ))}
              
//             </div>
//             <div className="cta">
//                     {project.source_code && (
//                       <a
//                         href={project.source_code}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="styles.underline"
//                       >
//                         Source Code
//                       </a>
//                     )}
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="styles.underline"
//                     >
//                       Live Demo
//                     </a>
//               </div>
//             </div>