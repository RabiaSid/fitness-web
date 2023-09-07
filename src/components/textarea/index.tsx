import Form from 'react-bootstrap/Form';

export default function Textarea() {
  return (
    <div>
        <Form.Control as="textarea" className='my-2' placeholder='Enter Message' rows={5} style={{borderRadius:0}} />
    </div>
  )
}
