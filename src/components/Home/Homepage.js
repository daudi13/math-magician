import React from 'react';
import './Homepage.css';

const paragraphs = [
  {
    id: 1,
    text: "Mathematics (from Ancient Greek μάθημα (máthēma) 'knowledge, study, learning') is an area of knowledge, which includes the study of such topics as numbers (arithmetic and number theory),[1] formulas and related structures (algebra),[2] shapes and spaces in which they are contained (geometry),[1] and quantities and their changes (calculus and analysis).[3][4][5] There is no general consensus about its exact scope or epistemological status.[6][7]",
  },
];

const HomePage = () => (
  <div className="wrapper">
    <h1>Welcome to the home of Mathematics</h1>
    <h2 className="sub-title">Mathematics</h2>
    {paragraphs.map((paragraph) => (<p key={paragraph.id}>{paragraph.text}</p>))}
  </div>
);
export default HomePage;
