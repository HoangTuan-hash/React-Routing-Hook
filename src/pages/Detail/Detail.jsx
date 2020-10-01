import React, { Fragment, useEffect } from 'react'
import{useSelector,useDispatch} from 'react-redux'
import { layChiTietPhimApiAction } from '../../redux/actions/QuanLyPhimAction';
import moment from 'moment'
import { NavLink } from 'react-router-dom';
export default function Detail(props) {
    const {chiTietPhim} = useSelector(state => state.QuanLyPhimReducer);
    console.log(chiTietPhim);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(layChiTietPhimApiAction(props.match.params.id));
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} onError={(e)=> {
                            e.target.src = "http://picsum.photos/300/300"}} />
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ten Phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mo Ta</th>
                                <th>{chiTietPhim.moTa}</th>
                            </tr>
                            <hr></hr>
                        </thead>
                    </table>
                </div>
            </div>
            <div>
                <h1 className="mt-5 mb-5">Thông Tin Lịch Chiếu</h1>
                <div className="row">
                    <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {
                            chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                                let active= index === 0? 'active' : '';
                                
                                return <a key={index} className={`nav-link ${active}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <img src={heThongRap.logo} style={{width:50, height:50}}/>{heThongRap.tenHeThongRap}
                                    </a>
                                
                            })
                        }
                        

                        {/* <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>

                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>

                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}

                    </div>
                    <div className="tab-content col-9" id="v-pills-tabContent">
                        {
                            chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                                let active= index === 0? 'active' : '';
                        return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                            {heThongRap.cumRapChieu?.map((cumRap,index)=>{
                                return <Fragment key={index}>
                                     <h3>{cumRap.tenCumRap}</h3>
                                     <div className="row">
                                        {cumRap.lichChieuPhim?.map((lichChieu,index)=>{
                                            return <NavLink to={`/booking/${lichChieu.maLichChieu}`} className="col-3">
                                                {moment (lichChieu.ngayChieuGioChieu).format('hh:mm A') }
                                            </NavLink>
                                        })}
                                     </div>
                                     
                                </Fragment>
                            })}

                        </div>
                            })
                        }

                        {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>

                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Messages</div>

                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div> */}

                    </div>
                </div>

            </div>
        </div>
    )
}
