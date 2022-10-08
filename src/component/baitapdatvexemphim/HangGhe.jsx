import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      //trạng thái ghế đã được đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe == ghe.soGhe
      );
      if (indexGheDangDat != -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.dispatch({
              type: "DAT_GHE",
              payload: ghe,
            });
          }}
          key={index}
          disabled={disabled}
          className={`text-dark ghe ${cssGheDaDat} ${cssGheDangDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe == 0) {
      return (
        <div className="ml-3">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-white text-left ml-5 mt-1"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapsStateToProps, null)(HangGhe);
