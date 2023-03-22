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
            <Navbar bg="light" expand="lg" style={{padding:0}}>
            <Container className='hdnav'>
              <Navbar.Brand href="http://localhost:9008/main.do" className='logo'><img src="/images/logo1.png"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="http://localhost:9008/about.do">회사소개</Nav.Link>
                  <Nav.Link href="http://localhost:9008/faq.do">FAQ</Nav.Link>
                  <Nav.Link href="http://localhost:9008/location.do">찾아오시는길</Nav.Link>
                  <Nav.Link href="http://localhost:9008/board.do">공지사항</Nav.Link>
                  <Nav.Link href="http://localhost:3000/board">홍보게시판</Nav.Link>
                  <NavDropdown title="여행상품메뉴" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">여행상품목록</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">카트리스트</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">데이터 업데이트</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className='loginForm'>
					<Nav.Link href="#home">로그인</Nav.Link>
					<Nav.Link href="#home">로그아웃</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
</>
        );
    }
}

export default HeaderComponent;