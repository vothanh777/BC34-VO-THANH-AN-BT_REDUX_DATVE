import { data } from "autoprefixer";
import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    nhanVien: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      soDienThoai: "",
      email: "",
      loaiNguoiDung: "0",
    },
    error: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      soDienThoai: "",
      email: "",
    },
  };

  changeValue = (event) => {
    const { nhanVien, error } = this.state;
    const { value, name, title } = event.target;
    const dataType = event.target.getAttribute("data-type");
    //cách 1
    // nhanVien.taiKhoan = value;
    //cách 2:
    // nhanVien["taiKhoan"] = value;

    //check validation
    //kiểm tra rỗng
    if (value == "") {
      error[name] = `${title} không được rỗng!`;
    } else {
      error[name] = "";
    }

    //xử lý validation theo trường hợp đặc biệt
    if (dataType == "email") {
      let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (regexEmail.test(value) == false) {
        error[name] = `${title} không đúng định dạng!`;
      }
    }
    // if (dataType == "number") {
    // }

    nhanVien[name] = value;

    this.setState({
      nhanVien,
      error,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let { taiKhoan, hoTen, email, soDienThoai, matKhau } = this.state.nhanVien;
    let taiKhoanErr = this.state.error.taiKhoan;
    let hoTenErr = this.state.error.hoTen;
    let emailErr = this.state.error.email;
    let soDienThoaiErr = this.state.error.soDienThoai;
    let matKhauErr = this.state.error.matKhau;
    if (
      taiKhoan != "" &&
      hoTen != "" &&
      email != "" &&
      soDienThoai != "" &&
      matKhau != "" &&
      taiKhoanErr == "" &&
      hoTenErr == "" &&
      emailErr == "" &&
      soDienThoaiErr == "" &&
      matKhauErr == ""
    ) {
      this.props.dispatch({
        type: "THEM_NHAN_VIEN",
        payload: { nhanVien: this.state.nhanVien },
      });
    }

    this.setState({
      nhanVien: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        soDienThoai: "",
        email: "",
        loaiNguoiDung: "0",
      },
    });
  };

  static getDerivedStateFromProps(newProps, currentState) {
    if (
      newProps.nhanVienUpdate != "" &&
      newProps.nhanVienUpdate.taiKhoan != currentState.nhanVien.taiKhoan
    ) {
      return { ...currentState, nhanVien: newProps.nhanVienUpdate };
    }
  }

  render() {
    const { taiKhoan, hoTen, email, matKhau, soDienThoai } = this.state.error;
    return (
      <div className="row ">
        <div className="col-12 p-2 bg-dark">
          <span className="text-white font-bold">Form đăng ký</span>
        </div>

        <form className="col-12 row" onSubmit={this.onSubmit}>
          <div className="col-6">
            <label>Tài khoản</label>
            <input
              value={this.state.nhanVien.taiKhoan}
              title="Tài khoản"
              name="taiKhoan"
              className="form-control"
              onChange={this.changeValue}
            />
            <small className="text-danger">{taiKhoan}</small>
          </div>

          <div className="col-6">
            <label>Họ tên</label>
            <input
              value={this.state.nhanVien.hoTen}
              name="hoTen"
              className="form-control"
              onChange={this.changeValue}
            />
            <small className="text-danger">{hoTen}</small>
          </div>
          <div className="col-6">
            <label>Mật khẩu</label>
            <input
              value={this.state.nhanVien.matKhau}
              name="matKhau"
              className="form-control"
              onChange={this.changeValue}
            />
            <small className="text-danger">{matKhau}</small>
          </div>
          <div className="col-6">
            <label>Số điện thoại</label>
            <input
              value={this.state.nhanVien.soDienThoai}
              data-type="number"
              title="số điện thoại"
              name="soDienThoai"
              className="form-control"
              onChange={this.changeValue}
            />
            <small className="text-danger">{soDienThoai}</small>
          </div>
          <div className="col-6">
            <label>Email</label>
            <input
              value={this.state.nhanVien.email}
              data-type="email"
              title="email"
              name="email"
              className="form-control"
              onChange={this.changeValue}
            />
            <small className="text-danger">{email}</small>
          </div>
          <div className="col-6">
            <label>Mã loại người dùng</label>
            <select
              value={this.state.nhanVien.loaiNguoiDung}
              name="loaiNguoiDung"
              className="form-control"
              onChange={this.changeValue}
            >
              <option value="0">Khách hàng</option>
              <option value="1">Nhân viên</option>
              <option value="2">Boss</option>
            </select>
            <small className="text-danger"></small>
          </div>
          <button className="btn btn-success m-2">Đăng ký</button>

          <button className="btn btn-primary m-2">Cập nhật</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsNhanVien: state.NhanVienReducer.dsNhanVien,
    nhanVienUpdate: state.NhanVienReducer.nhanVienUpdate,
    isSignUp: state.NhanVienReducer.isSignUp,
  };
};
export default connect(mapStateToProps, null)(FormDangKy);
