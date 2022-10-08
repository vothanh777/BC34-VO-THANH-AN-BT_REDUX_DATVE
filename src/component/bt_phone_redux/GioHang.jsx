import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    let { thongTinGioHangTam, gioHang } = this.props;

    return (
      <div>
        <h3
          className="text-danger p-5"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Giỏ hàng {thongTinGioHangTam()}
        </h3>

        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng {thongTinGioHangTam()}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Nội dung giỏ hàng */}
                  <table>
                    <thead>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng đặt</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </thead>
                    <tbody>
                      {gioHang &&
                        gioHang.length > 0 &&
                        gioHang.map((sanPham) => {
                          return (
                            <tr>
                              <td>{sanPham.maSanPham}</td>
                              <td>
                                <img
                                  src={sanPham.hinhAnh}
                                  alt=""
                                  className="img-fluid"
                                  style={{ height: "50px" }}
                                />
                              </td>
                              <td>{sanPham.tenSanPham}</td>
                              <td>
                                <button className="btn btn-secondary btn-sm">
                                  +
                                </button>
                                {sanPham.soLuong}
                                <button className="btn btn-secondary btn-sm">
                                  -
                                </button>
                              </td>
                              <td>{sanPham.donGia}</td>
                              <td>
                                {(
                                  sanPham.giaBan * sanPham.soLuong
                                ).toLocaleString()}{" "}
                                VNĐ
                              </td>
                              <td>
                                <button className="btn btn-danger">Xoá</button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps, null)(GioHang);
