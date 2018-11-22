const initState = {
  projects: [
    {id: 1, title: 'help me find peach', content: 'bla bla bla bla bla bla'},
    {id: 2, title: 'you kill me everytime', content: 'bla bla bla bla bla bla'},
    {id: 3, title: 'what i have done', content: 'bla bla bla bla bla bla'},
  ]
};
const ProjectReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR': 
      console.log('create project error', action.err);
      return state;
    default : 
    return state;
  }
};
export default ProjectReducer;