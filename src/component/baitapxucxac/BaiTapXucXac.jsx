import React, { Component } from "react";
import { connect } from "react-redux";
import { XucXacReducer } from "../../redux/Reducers/XucXacReducer";

class BaiTapXucXac extends Component {
  state = { rolling: "" };

  thayDoiCuoc = (giatri) => {
    this.props.dispatch({
      type: "THAY_DOI_CUOC",
      payload: giatri,
    });
  };

  ketQua = () => {
    this.props.dispatch({
      type: "KET_QUA",
    });

    this.setState({
      rolling: "rollss",
    });

    setTimeout(() => {
      this.setState({ rolling: "" });
    }, 1000);
  };

  render() {
    let { rolling } = this.state;
    let { isTai, arrayKetQua, ketQua, soBanThang, tongBanChoi } =
      this.props.xucXacReducer;

    return (
      <div
        className="w-[100%] h-screen"
        style={{ backgroundImage: `url(./ImgXucXac/bgGame.png)` }}
      >
        <h1 className="font-bold p-5">GAME ĐỔ XÚC XẮC</h1>
        <div className="container flex justify-between">
          <button
            onClick={() => this.thayDoiCuoc(true)}
            className={`${
              isTai ? "bg-red-500" : "bg-blue-500"
            } w-[200px] text-white text-[30pt]`}
          >
            Tài
          </button>
          <img className={rolling} src={arrayKetQua[0]} alt="" />
          <img className={rolling} src={arrayKetQua[1]} alt="" />
          <img className={rolling} src={arrayKetQua[2]} alt="" />
          <button
            onClick={() => this.thayDoiCuoc(false)}
            className={`${
              !isTai ? "bg-red-500" : "bg-blue-500"
            } w-[200px] text-white text-[30pt]`}
          >
            Xỉu
          </button>
        </div>
        <div>
          <h1 className="font-bold">Kết quả nút: {ketQua}</h1>
          <h1 className="font-bold">Bạn chọn: {isTai ? "Tài" : "Xỉu"}</h1>
          <h1 className="font-bold">Số bàn thắng: {soBanThang}</h1>
          <h1 className="font-bold">Tổng số bàn chơi: {tongBanChoi}</h1>

          <button
            onClick={() => this.ketQua()}
            className="rounded-none bg-blue-500 w-20 h-20 text-white"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXacReducer: state.XucXacReducer,
  };
};

export default connect(mapStateToProps, null)(BaiTapXucXac);
