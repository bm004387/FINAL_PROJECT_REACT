import React, { Component } from 'react';
import ReactBoardService from '../service/ReactBoardService';

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
            console.log("get result => "+ JSON.stringify(res.data));
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
                    console.log("delete result => "+ JSON.stringify(res));
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
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                            <div className = "row">      
                                <label> Title </label> : {this.state.rt_board.title}
                            </div>

                            <div className = "row">
                                <label> Content </label> : <br></br>
                                <textarea value={this.state.rt_board.content} readOnly/> 
                            </div >

                            <div className = "row">
                                <label> writer  </label>: 
                                {this.state.rt_board.writer}
                            </div>

                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
                            <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}>글 삭제</button>
                    </div>
                </div>

            </div>
        );
    }
}





export default ReadBoard;