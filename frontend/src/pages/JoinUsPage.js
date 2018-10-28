import React, {Component} from 'react';

import JoinUsTemplate from 'components/joinUs/JoinUsTemplate';
import JoinUsFormContainer from 'containers/joinUs/JoinUsFormContainer';

class JoinUsPage extends Component{
  render(){
    return(
      <JoinUsTemplate 
        joinUsForm={<JoinUsFormContainer />}
      />
    )
  }
}

export default JoinUsPage;