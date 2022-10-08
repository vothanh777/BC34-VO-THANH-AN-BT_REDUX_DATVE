import React, { Component } from "react";
import "./BaiTapDatVeXemPhim.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "./dataDanhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapDatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./ImageDatVeXemPhim/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h2 className="text-warning" style={{ fontWeight: "bold" }}>
                  BÀI TẬP ĐẶT VÉ XEM PHIM
                </h2>
                <h4 className="text-white mt-2">Màn hình</h4>
                <div
                  className="mt-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4 text-center">
                <h3
                  className="text-warning mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  DANH DÁCH GHẾ BẠN CHỌN
                </h3>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
