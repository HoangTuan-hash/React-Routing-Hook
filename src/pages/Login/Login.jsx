import React,{useState} from 'react'

export default function Login(props) {
    // const [state,setState] = useState({
    //     userLogin:{
    //         userName:'',
    //         passWord:''
    // }});
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
        if(userLogin.userName === 'cybersoft' && userLogin.passWord ==='cybersoft'){
            // props.history.goBack();//goBack chuyển hướng về trang trước khi link đến

            props.history.push('/home');//push chuyển hướng về trang (path) chỉ định =>home

            props.history.replace('/home');//thay đổi thành route tương ứng

        }
        else{
            alert('Login fail!')
        }
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
