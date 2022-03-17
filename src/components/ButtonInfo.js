function Buttons() {
  const ButtonData = [
    [
      { name: 'AC' },
      { name: '+/-' },
      { name: '%' },
      { className: 'orange', name: '/' },
    ],
    [
      { name: '7' },
      { name: '8' },
      { name: '9' },
      { className: 'orange', name: 'x' },
    ],
    [
      { name: '4' },
      { name: '5' },
      { name: '6' },
      { className: 'orange', name: '-' },
    ],
    [
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { className: 'orange', name: '+' },
    ],
    [
      { className: 'span-two', name: '0' },
      { name: '.' },
      { className: 'orange', name: '=' },
    ],
  ];

  return ButtonData;
}

export default Buttons;
