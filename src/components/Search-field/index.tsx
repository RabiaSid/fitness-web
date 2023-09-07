import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import color from "../../constant";


const onSearch = (value: string) => console.log(value);

export default function SearchField() {
  return (
      
          <Form className="d-flex my-3" style={{height:'8vh'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className=" searchfield rounded-0"
              aria-label="Search"
            />
            <Button className="rounded-0 px-3" style={{background:color.pink, border:`1px solid ${color.pink}`}}>
              <AiOutlineSearch size={18}/>
            </Button>
          </Form>
  )
}


