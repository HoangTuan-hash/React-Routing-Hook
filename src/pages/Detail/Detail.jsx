import React, { useEffect } from 'react'
import{useSelector,useDispatch} from 'react-redux'
import { layChiTietPhimApiAction } from '../../redux/actions/QuanLyPhimAction';

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
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-8">
                    
                </div>
            </div>
        </div>
    )
}
