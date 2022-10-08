import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  render() {
    let { dataPhoneProps, handleChiTiet, themGioHang } = this.props;
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
                onClick={() => themGioHang(phone)}
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
