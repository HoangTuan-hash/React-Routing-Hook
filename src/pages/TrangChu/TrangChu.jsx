import Axios from 'axios';
import React, { Component } from 'react'

export default class TrangChu extends Component {
    state = {
        dsPhim :[]
    }
    getFilm = () => {
        // Axios({
        //     url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
        //     method:'GET'
        // }).then(res => {
        //     console.log('Ket qua',res.data);
        //     this.setState(
        //         {dsPhim : res.data}
        //         )
        // }).catch(err =>{
        //     console.log('error', err.reponse.data);
        // })
    }
    renderPhim = () => {
        return this.state.dsPhim.map((phim, index)=>{
            return (
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} style={{height:400}} alt="" onError={(e)=> {
                            e.target.src = "http://picsum.photos/300/300"
                        }} />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text" style={{height:200}}>{phim.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <button className="btn btn-success" onClick={()=>{
                    this.getFilm();
                }}>Lay danh sach pim</button>
                <h3>D</h3>
                <div className="row">                   
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
    componentDidMount(){
        //lifecycle này dùng để gọi api
        Axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
            method:'GET'
        }).then(res => {
            console.log('Ket qua',res.data);
            this.setState(
                {dsPhim : res.data}
                )
        }).catch(err =>{
            console.log('error', err.reponse.data);
        })
    }
}
