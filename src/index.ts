import Input from "./Input/index";
const input = new Input('vanila-input', {
  label: {
    text: 'Label'
  },
  input: {
    type: 'string',
    name: 'test'
  },
  onChange: (event) => {
    console.log('check event', event);
  },
})
input.init();
