import About from '@/Component/About';
import Home from '@/Component/Home';
import Projects from '@/Component/Project';
import Qualification from '@/Component/Qualification';
import Skills from '@/Component/Skills';
import Technologies from '@/Component/Technologies';
import React from 'react';

const page = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
     <Technologies></Technologies>
     <Skills></Skills>
     <Qualification></Qualification>
     <Projects></Projects>
    </div>
  );
};

export default page;