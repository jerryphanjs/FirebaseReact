import React, { Component } from 'react';
import Notifications from './Notifications';

import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';

class DashBoard extends Component {
  render() {
   //console.log(props);
   const { projects } = this.props;

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(DashBoard);