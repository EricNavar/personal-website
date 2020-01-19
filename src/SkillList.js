import React from 'react';
import SkillItem from './SkillItem';
import Section from './Section';

export default function SimpleList() {
  const contents = (
    <div>
      <SkillItem skill="C++" value="4"/>
      <SkillItem skill="Java" value="3"/>
      <SkillItem skill="React" value="2"/>
      <SkillItem skill="Git" value="3"/>
    </div>
  );
  return(
    <Section
      title = "Skills"
      details = {contents}
    />
  );
}