import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';
export default function Login(props) {
    // const [state,setState] = useState({
    //     userLogin:{
    //         userName:'',
    //         passWord:''
    // }});
    let dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState({
        userName:'',
        passWord:''
    })
    console.log(userLogin);
    const handleChange = (e) =>{
        const {value,name} = e.target;
        
        setUserLogin({
            ...userLogin,[name]:value
        })
    }

    const login =(e) =>{
        e.preventDefault();//ngăn sự kiện submit reload lại trang
        //kiểm tra user name
        

           //Gọi api đăng nhập
            dispatch(dangNhapApiAction(userLogin));
       
    }
    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>user name</p> 
                <input name="userName" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <p>pass word</p> 
                <input name="passWord" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit" >Login</button>
            </div>
        </form>
    )
}
