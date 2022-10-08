import React, { Component } from "react";
import FormDangKy from "./FormDangKy";
import TableQuanLyNguoiDung from "./TableQuanLyNguoiDung";

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className="container text-left text-lg">
        <FormDangKy />
        <TableQuanLyNguoiDung />
      </div>
    );
  }
}
