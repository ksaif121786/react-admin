import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';


import axios from '../../axios/axios'

export default function ListBanner() {
   const [bannerlist,setbannerlist] = useState([]);
   
    useEffect(() => {
        getbannerlist();
    }, []);

    const getbannerlist = async() =>{
     const config = {
        headers:{
            'Authorization':`Bearer `+localStorage.getItem('token')
        }
     };
     var result = await axios.post('/get-banner',{},config);
     if(result.data.status==true){
        setbannerlist(result.data.data);
     }else{
        console.log(result)
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
                                            <h3 className="card-title">Table</h3>
                                            
                                         
                                          <Link to='/banner-add'  className="btn btn-primary ms-auto">
                                                Add{" "}
                                         </Link>
                                       
                                        </div>
                                        <div className="card-body">
                                            <table
                                                id="table"
                                                className="table table-striped"
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Image</th>
                                                        <th>Email</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>tiger@gmail.com</td>
                                                        <td>
                                                            <label className="badge badge-danger">pending</label>
                                                        </td>
                                                        <td className="table_action text-center">
                                                            <a href="details.php">
                                                                {" "}
                                                                <i className="fa fa-eye" />{" "}
                                                            </a>
                                                            <a href="#">
                                                                {" "}
                                                                <i className="fa fa-edit" />{" "}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>tiger@gmail.com</td>
                                                        <td>
                                                            <label className="badge badge-warning">
                                                                In Progress
                                                            </label>
                                                        </td>
                                                        <td className="table_action">
                                                            <a href="details.php">
                                                                {" "}
                                                                <i className="fa fa-eye" />{" "}
                                                            </a>
                                                            <a href="#">
                                                                {" "}
                                                                <i className="fa fa-edit" />{" "}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>tiger@gmail.com</td>
                                                        <td>
                                                            <label className="badge badge-info">Fixed</label>
                                                        </td>
                                                        <td className="table_action">
                                                            <a href="details.php">
                                                                {" "}
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                            <a href="#">
                                                                {" "}
                                                                <i className="fa fa-edit" />{" "}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>tiger@gmail.com</td>
                                                        <td>
                                                            <label className="badge badge-success">Completed</label>
                                                        </td>
                                                        <td className="table_action">
                                                            <a href="#">
                                                                {" "}
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                            <a href="#">
                                                                {" "}
                                                                <i className="fa fa-edit" />{" "}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
