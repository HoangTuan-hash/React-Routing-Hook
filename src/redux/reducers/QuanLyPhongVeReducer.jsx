import { LAY_DANH_SACH_GHE } from "../constants/QuanLyPhongVeConstant"

const initialState = {
    danhSachGhe : []
}

const QuanLyPhongVeReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_DANH_SACH_GHE:{
        state.danhSachGhe = action.danhSachGhe;
        return { ...state}
    }
    case 'TOGGLE_GHE':{
        const danhSachGhe = [...state.danhSachGhe]
        const index = danhSachGhe.findIndex((ghe)=> ghe.maGhe === action.ghe.maGhe);
        danhSachGhe[index] = {...danhSachGhe[index], dangChon : !danhSachGhe[index].dangChon,};
        console.log('danhSachGhe[index]',danhSachGhe[index]);;
        return { ...state, danhSachGhe}
    }
       
    default:
        return state
    }
}
export default QuanLyPhongVeReducer;