import axios from 'axios';
import {LAY_DANH_SACH_PHIM,LAY_CHI_TIET_PHIM} from '../constants/QuanLyPhimConstant'

//Action có 2 loại:
//+Action bình thường
//+Action asynnc (các action dùng để gọi api)


// export const layDanhSachPhimApiAction = () => {
//     //thay vì return về object => midddlewarre thunk cho phép mình return về 1 function có tham số là 1 hàm dispatch
//     return dispatch => {
//         axios({
//             url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
//             method:'GET'
//         }).then(res => {
//             console.log('Ket qua',res.data);
//             //set laij state dsPhim
//             //dispatch lần 1 tại component gọi action này thực thi
//             //dispatch lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer
//             const action={
//                 type: LAY_DANH_SACH_PHIM,
//                 dsPhim : res.data
//             }
//             dispatch(action);
//         }).catch(err =>{
//             console.log('error', err.reponse.data);
//         })
//     }
// }

export const layDanhSachPhimApiAction = () => {
    //thay vì return về object => midddlewarre thunk cho phép mình return về 1 function có tham số là 1 hàm dispatch
    return async dispatch => {
        const {data} = await axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
            method:'GET'
        });
        const action={
            type: LAY_DANH_SACH_PHIM,
            dsPhim : data
        }
        dispatch(action);
    }
}
export const layChiTietPhimApiAction = (maPhim) => {
    //thay vì return về object => midddlewarre thunk cho phép mình return về 1 function có tham số là 1 hàm dispatch
    return async dispatch => {
        const {data} = await axios({
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method:'GET'
        });
        const action={
            type: LAY_CHI_TIET_PHIM,
            dsPhim : data
        }
        dispatch(action);
    }
}