import React,{useState, useEffect} from 'react';
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';

export default function EditBanner() {

  useEffect((item)=>{

  },[])
  
  const getbannerimage = async()=>{

  }
  const submitHandler = async() =>{
    try{

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
