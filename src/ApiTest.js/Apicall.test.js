import { render ,screen} from "@testing-library/react"
import { ApiCall } from "./ApiCall"


 test("Testing heading" ,() =>{

    render(<ApiCall />)
    expect(screen.getByText(/test data/i)).toBeInTheDocument();

 })

 test ("Testing mock api" ,async()=>{
    render (<ApiCall/>);
    const el = await screen.findAllByRole("listitem");
    expect (el).toHaveLength(3);
 })