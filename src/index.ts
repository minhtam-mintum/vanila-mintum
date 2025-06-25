import Input from './Input/index';
const handleInit = (name: string, label: string) => {
  const input = new Input(`#${name}`, {
    label: {
      text: label,
    },
    input: {
      type: name === 'age' ? 'number' : 'text',
      name,
    },
    onChange: (event) => {
      console.log('check event', name, event);
    },
  });
  input.init();
};
handleInit('lastname', 'Last Name');
handleInit('firstname', 'First Name');
handleInit('age', 'Age');
