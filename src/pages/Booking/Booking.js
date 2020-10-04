import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { datVeActionApi, layDanhSachGheApi } from '../../redux/actions/QuanLyPhongVeAction';

export default function Booking(props) {
    const dispatch = useDispatch();
    const {maLichChieu} = useParams();
    // console.log('param',param);
    const {danhSachGhe} = useSelector(state => state.QuanLyPhongVeReducer);
    useEffect(()=>{
        //call API
        
        dispatch(layDanhSachGheApi(maLichChieu))
    },[])
    const handleClassName = (ghe)=>{
        if (ghe.daDat){
            return 'btn bg-danger text-white m-2'
           
        }else{
           
            if(ghe.dangChon){
                return 'btn bg-success text-white m-2'
            }
            else{
                 //chua dat
                 return 'btn bg-dark text-white m-2'
            }
            
        }
    }

    const rederDanhSachGhe = ()=>{
        return danhSachGhe.map((ghe, index)=>{
            return (
            <button 
            className={handleClassName(ghe)} 
            key={index} 
            disabled={ghe.daDat}
            onClick ={()=>{
                dispatch({
                    type: 'TOGGLE_GHE',
                    ghe
                })
            }}
            >{ghe.tenGhe}</button>
            )
        })
    }
    const handleBooking = () =>{
        //call api
        let gheDaChon = danhSachGhe.filter((ghe)=> ghe.dangChon)
        gheDaChon = gheDaChon.map((ghe) =>({ maGhe: ghe.maGhe, giaVe : ghe.giaVe}));
        console.log('ghedaCHon', gheDaChon);
        dispatch(datVeActionApi(maLichChieu,gheDaChon))
    }
    if(localStorage.getItem('userLogin')){
        return (
            <div className="text-center">
               <h2 >Danh Sach Ghe</h2>
               <div>
                   {rederDanhSachGhe()}
               </div>
               <div>
                   <button className="btn btn-success" onClick={() => {
handleBooking()
                   }}>Dat ghe</button>
               </div>
            </div>
        )
    }
    return <Redirect to='/login' />;
}
