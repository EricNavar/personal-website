import React from 'react';
import SkillItem from './SkillItem';
import Section from './Section';
import JavaIcon from './../images/java.png'
import ReactIcon from './../images/React.png'
import CppIcon from './../images/Cpp.png'
import GitIcon from './../images/Git.png'

//icons must be PNGs
export default function SkillList() {
  const contents = (
    <div>
      <SkillItem skill="C++" value={4} icon={CppIcon}/>
      <SkillItem skill="Java" value={3} icon={JavaIcon}/>
      <SkillItem skill="React" value={2} icon={ReactIcon}/>
      <SkillItem skill="Git" value={3} icon={GitIcon}/>
    </div>
  );
  return(
    <Section
      title = "Skills"
      details = {contents}
    />
  );
}