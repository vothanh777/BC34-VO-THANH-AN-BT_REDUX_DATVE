import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { statePhone } = this.props;
    return (
      <div>
        <div className="col-12 row pt-4">
          <div className="col-5">
            <h2>{statePhone.tenSP}</h2>
            <img
              src={statePhone.hinhAnh}
              alt=""
              className="img-fluid"
              style={{ height: "400px" }}
            />
          </div>
          <div className="col-7">
            <h2>Thông số kỹ thuật</h2>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>{statePhone.manHinh}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{statePhone.heDieuHanh}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{statePhone.cameraTruoc}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{statePhone.cameraSau}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{statePhone.ram}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{statePhone.rom}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
