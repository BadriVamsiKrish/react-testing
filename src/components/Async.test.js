import { render ,screen} from "@testing-library/react";
import Async from "./Async";
describe('render async component',()=>{
  test('render test for elements of list',async()=>{
    render(<Async/>);
    const ele=await screen.findAllByRole('listitem');
    expect(ele).not.toHaveLength(0);
  });
  test('render test for elements of list',async()=>{
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async()=>[{id:'p1',title:'first post'}],
    });
    render(<Async/>);
    const ele=await screen.findAllByRole('listitem');
    expect(ele).not.toHaveLength(0);
  });
});