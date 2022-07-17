import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Ticket from "src/components/assets/img/Ticket.png";
import { StarFill ,Star ,EyeFill} from 'react-bootstrap-icons';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";
const TicketList = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const {state} = useLocation();
    const [support,setSupport]=useState([])
    const [text,setText]=useState("")
    const [titleSup,setTitleSup]=useState("")

    const GetData=()=>{
        const axios = require("axios");
      
    
        axios.post(apiUrl + "ReadCustomer",{CustomerID:1})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)
            console.log(response.data.Data)
            console.log(response.data.Data[0]?.Name)
            setData(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
        
        axios.post(apiUrl + "CustomerSupport",{CustomerID:1})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777);
            setSupport(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
  
      }

      const AddSupport=()=>{
        const axios = require("axios");
      
    
        axios.post(apiUrl + "InsertSupport",{CustomerID:1,Text:text,Title:titleSup})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)
  
            handleClose()
            GetData()
        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
        
     
  
      }
    useEffect(() => {
        GetData();

      }, []);
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
    <Row>
        <Col md={3}>
       <RightPanelMenu data={data}/>
        </Col>
        <Col md={9}>
        
        <div className="whiteBox">
               
        <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex align-items-center">
                  <img src={Ticket} width="30px"/>
                   <p className="panelTitle">
                   تیکت ها و پشتیبانی
                   </p>
                   </div>
                   <div>
                   <Button className="editProfileBtn"  onClick={handleShow}> 
                   + ایجاد پیام جدید
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
                                                className="ticketModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    ایجاد تیکت جدید
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      موضوع پیام  
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setTitleSup(e.target.value)} className="inputCLass" type="text"/>
                                            <br/>
                                            <p className="modalText mb-0">
                                                    <span>
                                                    متن پیام
                                                    </span>
                                                    
                                                </p>
                                                <textarea onChange={(e)=>setText(e.target.value)} className="inputCLass" type="text" style={{height:150,resize:"none"}}/>
                                            
                                                </Form>
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>AddSupport()} className="modalSaveBtn" >ارسال پیام</Button>
                                                </Modal.Footer>
                                             </Modal>
               
                   </div>
                   </div>
       {/* <div className="ticketListBox">
       <div>
       <p className="productName">
            1
        </p>
       </div>
       <div>
       <p className="productName">
            عنوان پیام اینجا قرار میگیرد...
        </p>
       </div>
       <div>
       <p className="productVolume">
           تاریخ ایجاد : 01/04/04
        </p>
       </div>
       <div>
        <div className="ticketStatus" id="answered">
            <span>پاسخ داده شده</span>
        </div>
       </div>
        <div>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
       </div> */}
       {
        support?.map((item,index)=>{
            return(
       <div className="ticketListBox">
       <div>
       <p className="productName">
            {index+1}
        </p>
       </div>
       <div>
       <p className="productName">
{item.Title}        </p>
       </div>
       <div>
       <p className="productVolume">
           تاریخ ایجاد : {item.Date}
        </p>
       </div>
       <div>
   {    item.Status==2?

        <div className="ticketStatus" id="waiting">
            <span>در انتظار پاسخ</span>
        </div>
    :
    item.Status==1?
    <div className="ticketStatus" id="answered">
    <span>پاسخ داده شده</span>
</div>
    :
    <div className="ticketStatus" id="closed">
    <span>بسته شده</span>
</div>
    }
       </div>
        <div>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
       </div>
       
            )
        })
       }
       {/* <div className="ticketListBox">
       <div>
       <p className="productName">
            3
        </p>
       </div>
       <div>
       <p className="productName">
            عنوان پیام اینجا قرار میگیرد...
        </p>
       </div>
       <div>
       <p className="productVolume">
           تاریخ ایجاد : 01/04/04
        </p>
       </div>
       <div>
        <div className="ticketStatus" id="closed">
            <span>بسته شده</span>
        </div>
       </div>
        <div>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
       </div> */}
                  </div> 
                  
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default TicketList;