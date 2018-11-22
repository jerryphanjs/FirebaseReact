import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae molestias soluta aspernatur aliquid voluptates unde dolor amet neque nemo?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by author</div>
          <div>2nd November</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
