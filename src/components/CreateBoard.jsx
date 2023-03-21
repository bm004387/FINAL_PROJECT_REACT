import React, { Component } from 'react';
import ReactBoardService from '../service/ReactBoardService';

class CreateBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bno: this.props.match.param.bno,
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
        console.log("rt_Board => "+ JSON.stringify(rt_Board));
        if (this.state.bno === '_create') {
            ReactBoardService.createBoard(rt_Board).then(res => {
                this.props.history.push('/board');
            });
        } else{
            ReactBoardService.updateBoard(this.state.bno, rt_Board).then(res=>{
                this.props.history.push('/board');
            })
        }
    }

    cancel() {
        this.props.history.push('/board');
    }

    getTitle() {
        if (this.state.bno === '_create') {
            return <h3 className="text-center">새글을 작성해주세요</h3>
        } else {
            return <h3 className="text-center">{this.state.bno}글을 수정 합니다.</h3>
        }
    }
    componentDidMount() {
        if (this.state.bno === '_create') {
            return
        } else {
            ReactBoardService.getOneBoard(this.state.bno).then( (res) => {
                let rt_Board = res.data;
                console.log("board => "+ JSON.stringify(rt_Board));
                
                this.setState({
                        title: rt_Board.title,
                        content: rt_Board.content,
                        writer: rt_Board.writer
                    });
            });
        }
    }


    render() {
        if(this.state.title == null){
            alert("널")
        }
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Content  </label>
                                        <textarea placeholder="content" name="content" className="form-control" 
                                        value={this.state.content} onChange={this.changeContentHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> writer  </label>
                                        <input placeholder="writer" name="writer" className="form-control" 
                                        value={this.state.writer} onChange={this.changeWriterHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default CreateBoard;

