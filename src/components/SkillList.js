import React from 'react';
import SkillItem from './SkillItem';
import Section from './Section';
import JavaIcon from './../assets/images/java.png';
import ReactIcon from './../assets/images/React.png';
import CppIcon from './../assets/images/Cpp.png';
import GitIcon from './../assets/images/Git.png';

//icons must be PNGs
export default function SkillList() {
  return(
    <Section title = "Skills">
      <SkillItem skill="C++" value={4} icon={CppIcon}/>
      <SkillItem skill="Java" value={3} icon={JavaIcon}/>
      <SkillItem skill="React" value={2} icon={ReactIcon}/>
      <SkillItem skill="Git" value={3} icon={GitIcon}/>
    </Section>
  );
}