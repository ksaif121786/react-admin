import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';
import {Modal,Button} from 'react-bootstrap';

import 'datatables.net-dt'
import $ from 'jquery';


import axios from '../../axios/axios'

export default function ListBanner() {
   const [bannerlist,setbannerlist] = useState([]);
   const [bannerId,setBannerId] = useState(0);
   const [showDeleteModal,setShowDeleteModal]  = useState(false);
   
    useEffect(() => {
        getbannerlist();
        bannerdatatable();
    }, []);
    
    const bannerdatatable = async() =>{
        setTimeout(()=>{
            $('#bannertable').DataTable({destroy:true});
        },2000)
    }
    const getbannerlist = async() =>{
     var config = {
        headers:{
            'Authorization':`Bearer `+localStorage.getItem('token'),
            // 'Access-Control-Allow-Origin': '*'
        }
     };
     var result = await axios.post('/get-banner',{},config);
     if(result.data.status==true){
        // console.log(result.data.data.banner)
        setbannerlist(result.data.data.banner);
     }else{
        console.log(result)
     }
    }

    const openDeleteModal = async(id) => {
        setBannerId(id)
        setShowDeleteModal(true)
    }

    const DeleteBanner = async()=>{
       
        var config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        }
        var result = await axios.post('/delete-banner',{id:bannerId},config);
        if(result.data.status==true){
        getbannerlist();
        setShowDeleteModal(false)
        }else{
            setShowDeleteModal(false)
            alert(result.data.message)
        }
    }
    return (
        <>
            <Header />
            <SideBar />
            <main>
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
                                            <h3 className="card-title">Banners</h3>
                                            
                                         
                                          <Link to='/banner-add'  className="btn btn-primary ms-auto">
                                                Add{" "}
                                         </Link>
                                       
                                        </div>
                                        <div className="card-body">
                                            <table
                                                id="bannertable"
                                                className="table table-striped"
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Image</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { bannerlist.map((item,index) =>{
                                                    return <tr>
                                                        <td>{++index}</td>
                                                        <td>
                                                            <img src={'https://mobidudes.com/SK/pitsleep/'+item.image} style={{height:60,width:60}}/>
                                                        </td>
                                                        <td className="table_action text-center">
                                                      
                                                            <a href="javascript:;" className='btn btn-danger' onClick={()=>openDeleteModal(item.id)}>
                                                                {" "}
                                                                <i className="fa fa-trash"  style={{color:'white'}}/>{" "}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    })
                                                    }
                                                    
                                                </tbody>
                                            </table>


                                        <Modal show={showDeleteModal} onHide={() =>setShowDeleteModal(false)} animation={false}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Do you want to Delete Banner ?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Footer>
                                        <Button type="submit" className="btn btn-submit mr-2" onClick={() =>DeleteBanner()}>Delete</Button>
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
        </>
    )
}
