import React,{useState} from 'react'
import axios from 'axios'

export default function Home(props) {

    const [dsPhim,setDSPhim] = useState([]);

    const getFilm = () => {
        axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
            method:'GET'
        }).then(res => {
            console.log('Ket qua',res.data);
            setDSPhim(res.data)
        }).catch(err =>{
            console.log('error', err.reponse.data);
        })
    }
    const renderPhim = () => {
        return dsPhim.map((phim, index)=>{
            return (
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} style={{height:400}} alt="" onError={(e)=> {
                            e.target.src = "http://picsum.photos/300/300"
                        }} />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text" style={{height:300}}>{phim.moTa}</p>
                        </div>
                    </div>
                </div>
                

            )
        })
    }

    return (
        <div className="container">
            <button onClick={()=>{
                getFilm();
            }}>Lay danh sach pim</button>
            <h3>D</h3>
            <div className="row">
               
                {renderPhim()}
            </div>
        </div>
    )
}
