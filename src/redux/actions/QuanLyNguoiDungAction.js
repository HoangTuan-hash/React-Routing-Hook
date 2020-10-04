import axios from 'axios';
import { DOMAIN, TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb';

export const dangNhapApiAction = (userLogin, history)=>{
    return async dispatch => {
        try
        {
            let{data,status} = await axios({
                url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                method:'POST',
                data:{
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.passWord
                }
            });
            if(status === 200){
                dispatch({
                    type:'DANG_NHAP',
                    userLogin : data
                });
                //luu vao localStorae
                localStorage.setItem(TOKEN,data.accessToken);
                localStorage.setItem(USER_LOGIN,JSON.stringify( data));
                // history.push('/home');
                history.goBack();
            }
            //Sau khi gọi api => dispatch lên redux
            
        }catch(err){
            console.log(err.response.data);
        }
    }
}