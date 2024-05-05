import React from 'react';
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';

export default function AddBanner() {
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
                <form action="/action_page.php">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pwd" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>
                    <div className="col-md-12 mb-3 ">
                      <label htmlFor="comment">Comments:</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        id="comment"
                        name="text"
                        defaultValue={""}
                      />
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
