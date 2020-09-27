import React, { Component } from 'react'
import Login from '../Login/Login'
import ModalHOC from './ModalHOC'

export default class DemoHOC extends Component {
    render() {
        //this.props.children dùng để nhận giá truyền từ cha sang con thông qua phần inerHtml của thẻ component (Thường dùng để truyền giao diện)
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Open Login
                </button>

                <ModalHOC Component={Login}  />
               
               
            </div>
        )
    }
}
