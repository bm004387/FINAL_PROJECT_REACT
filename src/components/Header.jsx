import React, { Component } from 'react';
import '../css/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class HeaderComponent extends Component {
constructor(props){
    super(props)

    this.state ={

    }
}
    render() {
        return (
            <>
            <Navbar bg="light" expand="lg">
            <Container className='hdnav'>
              <Navbar.Brand href="http://localhost:9008/main.do" className='logo'><img src="/images/logo1.png"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">회사소개</Nav.Link>
                  <Nav.Link href="#link">FAQ</Nav.Link>
                  <Nav.Link href="#link">찾아오시는길</Nav.Link>
                  <Nav.Link href="#link">공지사항</Nav.Link>
                  <Nav.Link href="#link">홍보게시판</Nav.Link>
                  <NavDropdown title="여행상품메뉴" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">여행상품목록</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">카트리스트</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">데이터 업데이트</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#home">로그인</Nav.Link>
                <Nav.Link href="#home">로그아웃</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            <div className="container header">
	<nav className="navbar navbar-expand-lg bg-light">
	  <div className="container-fluid hdnav">
	    <a className="navbar-brand logo" href="/main.do"><img src="/images/logo1.png"/></a>
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNav">
	      <ul className="navbar-nav">
	        <li className="nav-item">
	          <a className="nav-link active" href="/about.do">회사소개</a>
	        </li>
	        <li className="nav-item">
	           <a className="nav-link active" href="/faq.do">FAQ</a>
	        </li>
	          <li className="nav-item">
	           <a className="nav-link active" href="/location.do">찾아오시는길</a>
	        </li>
	        <li className="nav-item">
	           <a className="nav-link active" href="/board.do">공지사항</a>
	        </li>
	        <li className="nav-item">
	           <a className="nav-link active" href="/react.do">홍보게시판</a>
	        </li>
				<li className="dropdown">
					<a className="dropdown-toggle"data-bs-toggle="dropdown" aria-expanded="false">여행 상품 메뉴 </a>
					<form id="cart" name="cart" method="post" action="tourcartlist.do">
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="tourList.do">여행 상품 목록</a></li>
								<li><button id ="cartlistBtn" form="cart" type="submit" className="" >카트리스트</button></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
									<li><a className="dropdown-item" href="api.do">데이터 업데이트</a></li>
						 	</ul>
					</form>
				</li>
		</ul>
		<ul className="nav justify-content-end">
		  	<li className="nav-item">
		    	<a className="nav-link active" aria-current="page" href="login.do">로그인</a>
		    	<a className="nav-link active" aria-current="page" href="logout.do">로그아웃</a>
		  	</li>
		</ul>
	    </div>
	  </div>
	</nav>
</div>
</>
        );
    }
}

export default HeaderComponent;