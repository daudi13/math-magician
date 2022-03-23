import React from 'react';

const paragraphs = [
  {
    id: 1,
    text: "Mathematics (from Ancient Greek μάθημα (máthēma) 'knowledge, study, learning') is an area of knowledge, which includes the study of such topics as numbers (arithmetic and number theory),[1] formulas and related structures (algebra),[2] shapes and spaces in which they are contained (geometry),[1] and quantities and their changes (calculus and analysis).[3][4][5] There is no general consensus about its exact scope or epistemological status.[6][7]",
  },
  {
    id: 2,
    text: 'Most of mathematical activity consists of discovering and proving (by pure reasoning) properties of abstract objects. These objects are either abstractions from nature (such as natural numbers or lines), or (in modern mathematics) abstract entities of which certain properties, called axioms, are stipulated. A proof consists of a succession of applications of some deductive rules to already known results, including previously proved theorems, axioms and (in case of abstraction from nature) some basic properties that are considered as true starting points of the theory under consideration. The result of a proof is called a theorem.',
  },
  {
    id: 3,
    text: "Mathematics is widely used in science for modeling phenomena. This enables the extraction of quantitative predictions from experimental laws. For example, the movement of planets can be predicted with high accuracy using Newton's law of gravitation combined with mathematical computation. The independence of mathematical truth from any experimentation implies that the accuracy of such predictions depends only on the adequacy of the model for describing the reality. So when some inaccurate predictions arise, it means that the model must be improved or changed, not that the mathematics is wrong. For example, the perihelion precession of Mercury cannot be explained by Newton's law of gravitation, but is accurately explained by Einstein's general relativity. This experimental validation of Einstein's theory shows that Newton's law of gravitation is only an approximation (which still is very accurate in everyday life)",
  },
];

const HomePage = () => (
  <div className="wrapper">
    <h1>Welcome to the home of Mathematics</h1>
    <h2>Mathematics</h2>
    {paragraphs.map((paragraph) => (<p key={paragraph.id}>{paragraph.text}</p>))}
  </div>
);
export default HomePage;
