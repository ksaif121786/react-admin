import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';
import {Modal,Button,Spinner} from 'react-bootstrap';
import $ from 'jquery'
import 'datatables.net-dt'



import axios from '../../axios/axios'

export default function ListUser() {
   const [loading,setloading] = useState(false);
   const [userlist,setuserlist] = useState([]);
   const [showDeleteModal,setShowDeleteModal]  = useState(false);
   const [userId,setUserId] = useState(0);
   const [userName,setUserName] = useState("");
   
   
    useEffect(() => {
        getuserlist();
        userdatatable();
    }, []);
   
    const userdatatable = async() => {
        setTimeout(function () {
          $('#listuser').DataTable({destroy:true});
        }, 3000);
      }

    const getuserlist = async() =>{
     var config = {
        headers:{
            'Authorization':`Bearer `+localStorage.getItem('token'),
            // 'Access-Control-Allow-Origin': '*'
        }
     };
     var result = await axios.post('/get-user',{},config);
     if(result.data.status==true){
        // console.log(result.data.data.banner)
        setuserlist(result.data.data.user);
        setloading(true)
     }else{
        console.log(result)
     }
    }
   
    const openDeleteModal = async(id,name) =>{
        setUserName(name)
        setUserId(id);
        setShowDeleteModal(true)
    }
    const DeleteUser = async()=>{
       
        var config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        }
        var result = await axios.post('/delete-user',{id:userId},config);
        if(result.data.status==true){
            getuserlist();
            setShowDeleteModal(false)
        }else{
            setShowDeleteModal(false)
            alert(result.data.message)
        }
    }
    return (
        <>
         {/* loading ? */}
          <main>
            <Header />
            <SideBar />
           
            
                   <div className="content-wrapper">
                   <div className="content-header">
                       <div className="container-fluid">
                    
                       </div>
                   </div>
                   <section className="content">
                       <div className="container-fluid">
                           <div className="row">
                               <div className="col-lg-12">
                                   <div className="card">
                                       <div className="card-header d-flex justify-content-between align-items-center">
                                           <h3 className="card-title">Users</h3>
                                           
                                        
                                         {/* <Link to='/user-add'  className="btn btn-primary ms-auto">
                                               Add{" "}
                                        </Link> */}
                                      
                                       </div>
                                       <div className="card-body">
                                           <table
                                               id="listuser"
                                               className="table table-striped"
                                               style={{ width: "100%" }}
                                           >
                                               <thead>
                                                   <tr>
                                                       <th>S.No</th>
                                                       <th>Image</th>
                                                       <th>Name</th>
                                                       <th>Surname</th>
                                                       <th>Email</th>
                                                       <th>Phone</th>
                                                       <th>Action</th>
                                                   </tr>
                                               </thead>
                                               <tbody>
                                                   { userlist.map((item,index) =>{
                                                   return <tr>
                                                       <td>{++index}</td>
                                                       <td>
                                                           <img src={'https://mobidudes.com/SK/pitsleep/'+item.image} style={{height:60,width:60}}/>
                                                       </td>
                                                       <td>{item.name}</td>
                                                       <td>{item.surname}</td>
                                                       <td>{item.email}</td>
                                                       <td>{item.country_code? item.country_code+item.phone:'-'}</td>
                                                       <td className="table_action text-center">
                                                          {/* <a href="javascript:;" className='btn btn-warning mr-3' onClick={()=>{}}>
                                                               {" "}
                                                               <i className="fa fa-edit" style={{color:'white'}}/>{" "}
                                                           </a> */}

                                                           <Link to={`/user-show/${item.id}`} className='btn btn-primary mr-3'>
                                                               {" "}
                                                               <i className="fa fa-eye"  style={{color:'white'}}/>{" "}
                                                           </Link>
                                                           <a href="javascript:;" className='btn btn-danger' onClick={()=>openDeleteModal(item.id,item.name+' '+item.surname)}>
                                                               {" "}
                                                               <i className="fa fa-trash" style={{color:'white'}} />{" "}
                                                           </a>
                                                       </td>
                                                   </tr>
                                                   })
                                                   }
                                                   
                                               </tbody>
                                           </table>



                                       <Modal show={showDeleteModal} onHide={() =>setShowDeleteModal(false)} animation={false}>
                                           <Modal.Header closeButton>
                                           <Modal.Title>Do you want to Delete {userName} ?</Modal.Title>
                                           </Modal.Header>
                                       <Modal.Footer>
                                           <Button type="submit" className="btn btn-submit mr-2" onClick={() =>DeleteUser()}>Delete</Button>
                                           <Button className="btn btn-light" onClick={() =>setShowDeleteModal(false)}>Cancel</Button>
                                       </Modal.Footer>
                                       </Modal>

                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
               </div>
            </main>
             {/* <div className="normalspinner" style={{ width: "100%", marginLeft: "8%" }}>
             <Spinner animation="border"></Spinner><p className="spineer_load">Loading...</p> */}
         

        </>
    )
}
