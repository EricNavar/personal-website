import React from 'react';
import Project from './Project';
import Section from './Section';

export default function ProjectList(props) {
  const contents = (
    <div>
      <Project
        title = "ARM simulator"
        description = "A simulator that takes in binary instructions and can output and execute the equivalent ARM assembly instructions"
        link="https://github.com/EricNavar/ARMSimulator"
      />
    </div>
  );
  
  return (
    <Section
      title = "Projects"
      details = {contents}
    />
  );
}