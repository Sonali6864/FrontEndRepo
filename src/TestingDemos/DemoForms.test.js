import { fireEvent, render ,screen, waitFor } from "@testing-library/react"
import { DemoForms } from "./DemoForms"
import { wait } from "@testing-library/user-event/dist/utils";


jest.setTimeOut(10000);

test("Testing button disable" ,()=>{

    render (<DemoForms />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(btn).toBeDisabled();


})

test("Testing input with valid data" ,async() =>{

    render (<DemoForms />);
    const inputData = screen.getByPlaceholderText('Enter name');

    fireEvent.change(inputData,{target:{value:"hello"}});
    const msg = await screen.findByTestId('success');
     expect(msg).toHaveTextContent('');

})


test("Testing button click",() =>{
render ( <DemoForms /> )
const btn = screen.getByRole("button");

const msg= screen.getByTestId("success");

fireEvent.click(btn);
expect(msg).toHaveTextContent('Added');

})

test("Invalid data:",()=>{

    render(<DemoForms />);
 
    const msg = screen.getByTestId("success")

    const inputValue = screen.getByPlaceholderText("Enter name");
    fireEvent.change(inputValue,{target:{value:12443}})

    expect(msg).toHaveTextContent('Not a number');
})

test("Get list data" ,async()=>{

    render (<DemoForms />)

    const btn = screen.getByRole("button")
    fireEvent.click(btn);

    // const liEvent = screen.getByTestId("li-01")
    await waitFor(()=>screen.getByTestId("li-01") ,{timeout:10000})
    expect(screen.getByTestId("li-01")).toHaveTextContent("Test List1");







})