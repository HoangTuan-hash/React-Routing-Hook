import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { connect,useSelector,useDispatch } from 'react-redux';
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction'
import { NavLink } from 'react-router-dom';
function Home(props) {

    //dùng useSelector thay cho mapStateToProps lấy danh sách phim từ reducer về
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    //useDispatch thay thees cho this.props.dispatch been react component
    const dispatch = useDispatch();

    const [dsPhim,setDSPhim] = useState([]);

    useEffect(() => {
        // axios({
        //     url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method:'GET'
        // }).then(res => {
        //     console.log('Ket qua',res.data);
        //     setDSPhim(res.data)
        // }).catch(err =>{
        //     console.log('error', err.reponse.data);
        // })
        
        //code tiếp tục chạy tiếp
    }, []) //tham số thứ 2 là mảng rổng => ứng với componentDidMount của react LifeCycle
    const getFilmApi = async () =>{ //async là function bất đồng bộ ki gọi các hàm tiếp theo vẫn tiếp tục đc thực hiện
        try {
        let {data,status} = await axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET'
        });//Lênh await bắt buộc các lệnh phía sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
        if (status === 200){
            setDSPhim(data)
        }
        // console.log(100/0);
        }catch(ex){
            console.log('ex',ex);
        }
        
       
    }

    const getFilm = () => {
        // getFilmApi();

        dispatch(layDanhSachPhimApiAction())
    }
    const renderPhim = () => {
        console.log('dsPhim', props.dsPhim);
        return props.dsPhim.map((phim, index)=>{
            return (
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} style={{height:400}} alt="" onError={(e)=> {
                            e.target.src = "http://picsum.photos/300/300"
                        }} />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text" style={{height:300}}>{phim.moTa}</p>
                            <NavLink className="btn btn-success" to={`detail/${phim.maPhim}`}>Đặt vé</NavLink>
                        </div>
                    </div>
                </div>
                

            )
        })
    }

    return (
        <div className="container">
            <button className="btn btn-success" onClick={()=>{
               getFilm()
            }}>Lay danh sach pim</button>
            <h3>D</h3>
            <div className="row">
               
                {renderPhim()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        dsPhim : state.QuanLyPhimReducer.dsPhim
    }
}

export default connect(mapStateToProps)(Home)