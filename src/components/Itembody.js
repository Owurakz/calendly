import React from "react";
import Items from "./Items";

function Itembody() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h3 className="h3 head">Easy</h3>
          <p className="ahead">
            {" "}
            <strong> ahead</strong>{" "}
          </p>
          <p>
            We take the work out of connecting with others so you can accomplish
            more{" "}
          </p>
          <br />
          <br />

          <div className="dropdown">
            <a
              className="btn btn-light dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </a>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <h3 className="h3 mb-3 head">About</h3>
          <ul className="list-unstyled">
            <li>About Calendly</li>
            <li>Contact Sales</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="col">
          <h3 className="h3 mb-3 head">Solutions</h3>
          <ul className="list-unstyled">
            <li> Customer Success</li>
            <li>Sales</li>
            <li>Recruiting</li>
            <li>Education</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div className="col">
          <h3 className="h3 head mb-3">Popular Features</h3>
          <ul className="list-unstyled">
            <li> Embed Calendly</li>
            <li>Availability</li>
            <li>Sending Notifications</li>
            <li>Using Calendly Mobile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Itembody;
