import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';

import axios from '../../axios/axios'

export default function AddBanner() {
  const navigate = useNavigate();
  const submitHandler = async(e) =>{
   e.preventDefault();
   
   try{

    const config = {
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'multipart/form-data'
      }
    };
    const formData = new FormData();
    formData.append('image', e.target.image.files[0]);
    var result = await axios.post('/add-banner',formData,config);
    if(result.data.status==true){
      navigate('/banners');
    }else{
      alert(result.data.message)
    }
   }catch(err){
     console.log(err)
   }
  }


  return (
    <>
    <Header/>
    <SideBar/>
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
                <form encType="multipart/form-data" onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Image:
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                     
                    </div>
                    <div className="col-md-12 mb-3 ">
                     
                    </div>
                   
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
