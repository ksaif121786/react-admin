import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function SideBar() {
  const navigate = useNavigate();
  const logoutHandler = async() =>{
    navigate('/');
  }
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a href="index.php" className="brand-link">
    {/* <img src=""  class="brand-image img-circle elevation-3" >  */}
    <span className="brand-text"> Admin </span>
  </a>
  <div className="sidebar">
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p> Dashboard </p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/banners" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p> Banner </p>
          </Link>
        </li>


        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p> Users </p>
          </Link>
        </li>


        {/* <li className="nav-item">
          <a href="table.php" className="nav-link ">
            <i className="nav-icon fas fa-user" />
            <p> Table </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="form.php" className="nav-link ">
            <i className="nav-icon fas fa-user" />
            <p> Form </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              {" "}
              Elements <i className="fas fa-angle-left right" />{" "}
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="button.php" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Button</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="modal.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> Modal </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="tagInputs.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> tag Inputs </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="addMore.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> Add More </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="chart.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> Charts </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="uploadImage.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> Upload Image </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="fullCalendar.php" className="nav-link">
                {" "}
                <i className="far fa-circle nav-icon" />
                <p> Full Calendar </p>
              </a>
            </li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a href="javascript:;" className="nav-link" onClick={logoutHandler}>
            {" "}
            <i className="nav-icon fas fa-th" />
            <p> Logout </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>

  )
}
