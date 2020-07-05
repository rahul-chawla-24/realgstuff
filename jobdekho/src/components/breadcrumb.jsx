import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
const BreadcrumbPage = () => {
  return (
    <MDBContainer>
      <MDBBreadcrumb>
        <Link to="/candidate">
          <MDBBreadcrumbItem className="mr-2">Candidates</MDBBreadcrumbItem>
        </Link>
        <strong className="mr-2">/</strong>
        <Link to="/application">
          <MDBBreadcrumbItem className="mr-2">Applications</MDBBreadcrumbItem>
        </Link>
        <strong className="mr-2">/</strong>
        <Link to="/question">
          <MDBBreadcrumbItem className="mr-2">Questions</MDBBreadcrumbItem>
        </Link>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default BreadcrumbPage;
