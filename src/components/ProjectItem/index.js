import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {
    projectId,
    imageURL,
    description,
    sentence,
    sentences,
    title,
  } = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <p className="project-item-sentence">{sentence}</p>
          <p className="project-item-sentence">{sentences}</p>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
