import React, { Component } from 'react';
import ReactBoardService from '../service/ReactBoardService';
import Table from 'react-bootstrap/Table';
import '../css/createBoard.css'
import { right } from '@popperjs/core';

class CreateBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bno: this.props.match.params.bno,
            title: '',
            content: '',
            writer: '',
            regDate:'',
            updateDate:''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.changeWriterHandler = this.changeWriterHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }
    changeContentHandler = (event) => {
        this.setState({content: event.target.value});
    }
    changeWriterHandler = (event) => {
        this.setState({writer: event.target.value});
    }

    createBoard = (event) => {
        event.preventDefault();
        let rt_Board = {
            title: this.state.title,
            content: this.state.content,
            writer: this.state.writer,
            regDate: this.state.regDate,
            updateDate: this.state.updateDate
        };
        if (this.state.bno === '_create') {
            ReactBoardService.createBoard(rt_Board).then(res => {
                alert("게시글을 작성하시겠습니까?")
                this.props.history.push('/board');
            });
        } else{
            ReactBoardService.updateBoard(this.state.bno, rt_Board).then(res=>{
                alert("게시글을 수정하시겠습니까?")
                this.props.history.push('/board');
            })
        }
    }

    cancel() {
        this.props.history.push('/board');
    }

    getTitle() {
        if (this.state.bno === '_create') {
            return <h2 className="title">
                        <span class="title-word title-word-1">게 </span>
                        <span class="title-word title-word-2">시 </span>
                        <span class="title-word title-word-3">글 </span>
                        <span class="title-word title-word-4">작 </span>
                        <span class="title-word title-word-5">성 </span>
                    </h2>
        } else {
            return <h2 className="title">
                        <span class="title-word title-word-1">{this.state.title} </span>
                        <span class="title-word title-word-2">글 </span>
                        &nbsp;
                        <span class="title-word title-word-3">수 </span>
                        <span class="title-word title-word-4">정 </span>
                    </h2>
        }
    }
    componentDidMount() {
        if (this.state.bno === '_create') {
            return
        } else {
            ReactBoardService.getOneBoard(this.state.bno).then( (res) => {
                let rt_Board = res.data;
                
                this.setState({
                        title: rt_Board.title,
                        content: rt_Board.content,
                        writer: rt_Board.writer,
                        updateDate: rt_Board.updateDate
                    });
            });
        }
    }


    render() {
        return (
                <div className = "container">
                            {
                               this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <Table striped bordered hover>
                                        <tr>
                                            <th>제목</th>
                                            <td><input type="text" placeholder="title" name="title" className="form-control" 
                                            value={this.state.title} onChange={this.changeTitleHandler}/></td>
                                            <th>이름</th>
                                            <td><input placeholder="writer" name="writer" className="form-control" 
                                            value={this.state.writer} onChange={this.changeWriterHandler}/></td>
                                        </tr>
                                        <tr>
                                            <th>내용</th>
                                            <td colspan="3"><textarea placeholder="content" name="content" className="form-control" rows={10} cols={30}
                                            value={this.state.content} onChange={this.changeContentHandler}/></td>
                                        </tr>
                                    </Table>
                                    <div className='btnForm'>
                                        <button className="btn btn-success" onClick={this.createBoard} style={{marginRight:"10px"}}>완료</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} >취소</button>
                                    </div>
                                </form>
                            </div>
                </div>
        );
    }
}
export default CreateBoard;

