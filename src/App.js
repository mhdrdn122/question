import './App.css';
import Header from './Componant/Header/header';
import FormInput from './Componant/Form/formInput';
import List from './Componant/List/List';
import { data } from './data';
import React , {useState} from 'react';
import { Container ,Row , Col, Button } from 'react-bootstrap';
import NotFound from './Componant/notfound/NotFound';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App()  {

  const [info ,setInfo] = useState(data)

  const local = JSON.parse(localStorage.getItem("item"))
  let localData ;
  local != null ? localData = local : localData = []

  
  // notify function
   const notify  = (msg ,type) =>  {
    if(type === "erorr"){
      toast.error(msg)
    }
    else{
      toast.success(msg)
    }
  }


  // Add Item 
  const AddItem = (q,a) => {
    if(q==='' || a==='')
    {
      notify("جميع الحقول مطلوبة ","erorr");
      return
    }
    else{
      info.push({id:Math.random(), q,a})
      setInfo([...info])
     localStorage.setItem('item',  JSON.stringify( [...info]) )
        notify("تم اضافة سؤال جديد","success");
    }
   
  }

  // delete one Item 
  const deleteItem = (ind) => {
    const data = info;
    data.splice(data[ind],1)
    setInfo([...data])
    localStorage.setItem('item',JSON.stringify([...data]))
    notify("تم حذف السؤال بنجاح","success");

  }

  // delete All Items
  const deleteAll  =() => {
    setInfo([ ])
    localStorage.removeItem('item')
    localStorage.setItem("item",JSON.stringify([]))
    notify("تم حذف جميع الاسئة بنجاح","success");

  }

  

  return (
    <div className="App">

        <Container fluid >

              <Row className='d-flex p-5 '>

                <Col lg={4} md={4}   className='my-2'>
                  <Header/>

                </Col>

                <Col lg={8} md={8} >
                <FormInput AddItem={AddItem} />

                  {
                    
                            localData.length > 0 ? (
                              localData.map( (item , index) => {
                                return ( <List key={index} deleteItem={deleteItem} index={index} Q={item.q} A={item.a} />)
                                  })
                            
                            ):<NotFound />
                  }
                  {
                    localData.length  ? (<Button className='btnAll w-100' onClick={deleteAll}>مسح الكل </Button>  ):null
                  }
                </Col>
              </Row>

                    <ToastContainer />
        </Container>
    </div>
  );
}

export default App;
