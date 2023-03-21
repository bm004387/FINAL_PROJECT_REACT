import axios from 'axios';

const RT_BOARD_API_BASE_URL = "http://localhost:9008/api/board"; 
const RT_CREATE_BOARD_API_BASE_URL = "http://localhost:9008/api/create-board"; 
const RT_READ_BOARD_API_BASE_URL = "http://localhost:9008/api/read-board"
const RT_UPDATE_BOARD_API_BASE_URL = "http://localhost:9008/api/update-board"
const RT_DELETE_BOARD_API_BASE_URL = "http://localhost:9008/api/update-board"

class ReactBoardService {

    getReactBoard() {
        return axios.get(RT_BOARD_API_BASE_URL);
    }

    createBoard(rt_board){
        return axios.post(RT_CREATE_BOARD_API_BASE_URL, rt_board);
    }
    getOneBoard(bno){
        return axios.get(RT_READ_BOARD_API_BASE_URL + "/" + bno);
    }
    updateBoard(bno, rt_board) {
        return axios.put(RT_UPDATE_BOARD_API_BASE_URL + "/" + bno, rt_board);
    }
    deleteBoard(bno) {
        return axios.delete(RT_DELETE_BOARD_API_BASE_URL + "/" + bno);
    }

}

export default new ReactBoardService();