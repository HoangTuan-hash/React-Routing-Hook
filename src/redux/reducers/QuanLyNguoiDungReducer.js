import { USER_LOGIN } from "../../ultity/ConfigWeb";

let userLocal = {};

if(localStorage.getItem(USER_LOGIN)){
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}
//Nếu local storages có tồn tại userLogin => chứng tỏ người dùng đã đăn nhập => gán lại giá trị mặc định của redex khi trang vừa load lên
const initialState = {
    userLogin: userLocal
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'DANG_NHAP':{
        state.userLogin = action.userLogin;
        return{...state}
    }

    default:
        return state
    }
}
