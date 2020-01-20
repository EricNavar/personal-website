import React from 'react';
import SkillItem from './SkillItem';
import Section from './Section';
import JavaIcon from './images/java.svg'
import ReactIcon from './images/React.svg'
import CppIcon from './images/C++.svg'
import GitIcon from './images/Git.png'

export default function SimpleList() {
  const contents = (
    <div>
      <SkillItem skill="C++" value="4" icon={CppIcon}/>
      <SkillItem skill="Java" value="3" icon={JavaIcon}/>
      <SkillItem skill="React" value="2" icon={ReactIcon}/>
      <SkillItem skill="Git" value="3" icon={GitIcon}/>
    </div>
  );
  return(
    <Section
      title = "Skills"
      details = {contents}
    />
  );
}