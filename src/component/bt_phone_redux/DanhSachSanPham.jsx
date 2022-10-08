import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  render() {
    let { dataPhoneProps, handleChiTiet } = this.props;
    return (
      <div className="row">
        {dataPhoneProps.map((phone, index) => {
          return (
            <div className="col-4">
              <img
                src={phone.hinhAnh}
                alt=""
                className="img-fluid"
                style={{ height: "400px" }}
              />
              <h3>{phone.tenSP}</h3>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleChiTiet(phone);
                }}
              >
                Xem chi tiết
              </button>

              <button
                className="btn btn-danger ml-2"
                onClick={() =>
                  this.props.dispatch({
                    type: "THEM_GIO_HANG",
                    payload: phone,
                  })
                }
              >
                Thêm giỏ hàng
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(null, null)(DanhSachSanPham);
