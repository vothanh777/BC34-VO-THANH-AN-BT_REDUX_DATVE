import React, { Component } from "react";
import "./BaiTapDatVeXemPhim.css";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 text-left">
          <button className="gheDuocChon"></button>
          <span className="text-white" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-white" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe ml-0"></button>
          <span className="text-white" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table text-left">
            <thead>
              <tr className="text-white" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.dispatch({
                            type: "HUY_GHE",
                            payload: gheDangDat.soGhe,
                          })
                        }
                        className="btn btn-danger"
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps, null)(ThongTinDatGhe);
