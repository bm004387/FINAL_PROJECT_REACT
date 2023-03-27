import React, { Component } from 'react';
import ReactBoardService from '../service/ReactBoardService';
import Table from 'react-bootstrap/Table';
import '../css/createBoard.css'

class ReadBoard extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            bno: this.props.match.params.bno,
            rt_board: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        ReactBoardService.getOneBoard(this.state.bno).then( res => {
            this.setState({rt_board: res.data});
        });
    }

    goToList() {
        this.props.history.push('/board');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.bno}`);
    }

    deleteView = async function () {
        try {
            if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
                ReactBoardService.deleteBoard(this.state.bno).then( res => {
                    if (res.status == 200) {
                        this.props.history.push('/board');
                    } else {
                        alert("글 삭제가 실패했습니다.");
                    }
                });
    
            }
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                        <h2 className="title">
                            <span class="title-word title-word-1">{this.state.rt_board.title} </span>
                            <span class="title-word title-word-2">의 </span>
                            <span class="title-word title-word-3">글 </span>
                            <span class="title-word title-word-4">조 </span>
                            <span class="title-word title-word-5">회 </span>
                        </h2>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>제목</th>
                                            <td><input className='form-control' type="text" value={this.state.rt_board.title  || ""} readOnly/></td>
                                            <th>이름</th>
                                            <td><input className='form-control' type="text" value={this.state.rt_board.writer || ""} readOnly/></td>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>내용</th>
                                            <td colSpan={3}><textarea className="form-control" rows={10} cols={30} value={this.state.rt_board.content  || ""} readOnly/> </td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            <div className='btnForm'>
                                <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>목록으로</button>
                                <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
                                <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}>글 삭제</button>
                            </div>
                </div>
        );
    }
}





export default ReadBoard;