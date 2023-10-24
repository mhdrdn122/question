import { Accordion, Button } from 'react-bootstrap';
import './List.css'
const List = ({Q,A ,index, deleteItem}) => {

 
  const onDelete = () => {
    deleteItem(index)
  } 


  return (
    <div className='w-100 my-2'>

        
    <Accordion  defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className='m-auto'>
             {Q}

          </div>
        </Accordion.Header>
        
        <Accordion.Body>
            <div className='d-flex '>
                <p>- {A}</p>
              
              <Button onClick={onDelete} className='h-30 btnDel mx-5' >مسح</Button>
          
            </div>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

     
    </div>
  );
}

export default List;
