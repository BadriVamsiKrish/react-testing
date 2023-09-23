import{render ,screen} from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';
describe('greeting component',()=>{
  test('render hello world as a text',()=>{
    render(<Greeting/>);
    const helloworld= screen.getByText('hello world!');
    expect(helloworld).toBeInTheDocument();
  });
  test('render good to see you before button clicked',()=>{
    render(<Greeting/>);
    const goodtosee=screen.getByText("good to see you",{exact:false});
    expect(goodtosee).toBeInTheDocument();
  });
  test('render changed you after button clicked',()=>{
    render(<Greeting/>);

    const buttonElement=screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('changed!', { exact: false });
    //const outputElement=screen.getByText('clicked',{exact:false});
    expect(outputElement).toBeInTheDocument();
  });
  
});
