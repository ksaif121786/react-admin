import React from 'react'
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';

export default function Dashboard() {
  return (
   <>
   <Header/>
    <SideBar/>
    <main>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box ">
                <a href="javascript:;">
                  <div className="inner">
                    <div className="icon1">
                      <i className="fa-solid fa-chart-column" />
                    </div>
                    <h3>$236.18k</h3>
                    <p>Total Revenue</p>
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="ion ion-bag" />{" "}
                  </div>
                </a>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box ">
                <a href="javascript:;">
                  <div className="inner">
                    <div className="icon1">
                      <i className="fa-solid fa-cube" />
                    </div>
                    <h3>13,461</h3>
                    <p>Total Orders</p>
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="ion ion-bag" />{" "}
                  </div>
                </a>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box ">
                <a href="javascript:;">
                  <div className="inner">
                    <div className="icon1">
                      <i className="fa-solid fa-truck" />
                    </div>
                    <h3>13,461</h3>
                    <p>Delivered</p>
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="ion ion-bag" />{" "}
                  </div>
                </a>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* <div class="col-lg-3 col-6">
                <div class="small-box ">
                    <div class="inner">
                        <h3>65</h3>
                        <p>Unique Visitors</p>
                    </div>
                    <div class="icon"> <i class="ion ion-pie-graph"></i> </div> 
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  </main>
   </>
  
  )
}
