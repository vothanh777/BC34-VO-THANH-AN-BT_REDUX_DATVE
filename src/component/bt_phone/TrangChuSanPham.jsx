import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataPhone from "./DataPhone.json";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class TrangChuSanPham extends Component {
  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./ImagePhone/vsphone.jpg",
    },
    gioHang: [],
  };

  handleChiTiet = (phone) => {
    this.setState({
      statePhone: phone,
    });
  };

  thongTinGioHangTam = () => {
    let { gioHang } = this.state;
    let soLuongSanPham = gioHang.length;

    let tongTien = 0;
    // gioHang.map((sanPham) => {
    //   tongTien += sanPham.soLuong * sanPham.donGia;
    // });

    console.log(gioHang);

    tongTien = gioHang.reduce((tong, sanPham) => {
      return tong + sanPham.giaBan * sanPham.soLuong;
    }, 0);

    return `(${soLuongSanPham} sp - ${tongTien.toLocaleString()} VNĐ)`;
  };

  themGioHang = (sanPham) => {
    let { statePhone, gioHang } = this.state;

    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find((item) => item.maSP == sanPham.maSP);
    //1. đã có trong giỏ hàng
    if (sanPhamGH) {
      sanPhamGH.soLuong += 1;
    } else {
      //2. chưa có trong giỏ hàng
      let sanPhamThem = { ...sanPham, soLuong: 1 };
      gioHangNew.push(sanPhamThem);
    }

    this.setState({
      gioHang: gioHangNew,
    });
  };

  xoaGioHang = (sanPham) => {
    let { gioHang } = this.state;
    let gioHangNew = [...gioHang];

    // let index = gioHangNew.findIndex((item) => item.maSP == sanPham.maSP);
    // if (index != -1) {
    //   gioHangNew.splice(index, 1);
    // }
    gioHangNew = gioHangNew.filter((item) => item.maSP != sanPham.maSP);
    this.setState({
      gioHang: gioHangNew,
    });
  };

  thayDoiSoLuong = (sanPham, slThayDoi) => {
    let { gioHang } = this.state;
    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find((item) => item.maSP == sanPham.maSP);

    sanPhamGH.soLuong += slThayDoi;

    if (sanPhamGH.soLuong == 0) {
      let index = gioHangNew.findIndex((item) => item.maSP == sanPham.maSP);
      gioHangNew.splice(index, 1);
    }

    this.setState({
      gioHang: gioHangNew,
    });
  };

  render() {
    let { statePhone, gioHang } = this.state;

    return (
      <div className="container">
        <GioHang
          thongTinGioHangTam={this.thongTinGioHangTam}
          gioHang={this.state.gioHang}
          thayDoiSoLuong={this.thayDoiSoLuong}
          xoaGioHang={this.xoaGioHang}
        />

        <DanhSachSanPham
          dataPhoneProps={dataPhone}
          handleChiTiet={this.handleChiTiet}
          themGioHang={this.themGioHang}
        />

        <SanPham statePhone={statePhone} />
      </div>
    );
  }
}
