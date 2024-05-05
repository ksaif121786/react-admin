import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';

import axios from '../../axios/axios';

import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';

export default function ShowUser() {
 const {id} = useParams();
 
 const [name,setName]             = useState("");
 const [surname,setSurname]       = useState("");
 const [email,setEmail]           = useState("");
 const [phone,setPhone]           = useState("");
 const [frontProof,setFrontProof] = useState("");
 const [backProof,setBackProof]   = useState("");
 

 useEffect(()=>{
    getUserDetails();
 },[])


 const getUserDetails = async() =>{
   var config = {
    headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'application/json'
    }
   }

   var response = await axios.post('/edit-user',{id:id},config);
   if(response.data.status==true){
    var  result = response.data.data.user;
    setName(result.name)
    setSurname(result.surname)
    setEmail(result.email)
    setPhone(result.country_code+result.phone)
    setFrontProof(result.front_proof_of_government_issued_identity);
    setBackProof(result.back_proof_of_government_issued_identity);
   }else{
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
        {/* <div class="row mb-2">
          <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
          </div>
          <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard</li>
              </ol>
          </div>
      </div> */}
      </div>
    </div>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h3>Details</h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>Name</label>
                    <h6 className="detail-ttl">{name}</h6>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Surname</label>
                    <h6 className="detail-ttl">{surname}</h6>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Email</label>
                    <h6 className="detail-ttl">{email} </h6>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Phone</label>
                    <h6 className="detail-ttl">{phone ? phone:'not Added'}</h6>
                  </div>


                  <div className="col-md-4 mb-3">
                    <label>Document ID (Front)</label>
                    <h6 className="detail-ttl">
                    {
                        frontProof != "" ? <img src={`https://mobidudes.com/SK/pitsleep/${frontProof}`} style={{height:80,width:80}}/>:'not uploaded'
                    }
                    </h6>
                  </div>

           
                  <div className="col-md-4 mb-3">
                    <label>Document ID (Back)</label>
                    <h6 className="detail-ttl">
                    {
                        backProof != "" ?  <img src={`https://mobidudes.com/SK/pitsleep/${backProof}`} style={{height:80,width:80}}/>:'not uploaded'
                    }
                    </h6>
                  </div>
                  {/* <div className="col-md-4 mb-3">
                    <label>Status</label>
                    <div>
                      <h6 className="detail-ttl badge badge-danger d-inline-block">
                        pending
                      </h6>
                    </div>
                  </div> */}
                </div>
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
