import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "../Test/Home";





test("Testing home page" ,() =>{

    render ( <Home />);

    expect(screen.getByText(/hello welcome to home/i)).toBeInTheDocument();


});

test("Testing button click functionality" , ()=>{

    render(<Home />)
    fireEvent.click(screen.getByText(/click me/i));
    const handleSubmit = jest.fn();
    


})