import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    const { dataRedux, dispatch } = this.props;
    return (
      <div>
        <h1>
          {dataRedux.data.map((item) => (
            <h2>{item.id}</h2>
          ))}
        </h1>

        <button
          className="btn btn-success"
          onClick={() =>
            dispatch({
              type: "CHANGE_DATA",
              payload: 3,
            })
          }
        >
          Đổi Tên
        </button>
      </div>
    );
  }
}

//lấy dữ liệu từ redux về component
const mapStateToProps = (state) => {
  return {
    dataRedux: state.demoReducer,
  };
};

//type là dữ liệu để nhận biết thay đổi cái state trên redux
//payload: là dữ liệu bạn đưa lên redux để thay đổi state
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeHoTen: () =>
//       dispatch({
//         type: "CHANGE_HO_TEN", //data cứng không thay đổi
//         payload: "Trần Văn B", //bất kì kiểu dữ liệu nào
//       }),
//   };
// };

export default connect(mapStateToProps, null)(DemoRedux);

//Bước 1: import hàm connect từ thư viện react-redux: import { connect } from "react-redux";
//bước 2: tạo hàm mapStateToProps để lấy dữ liệu về và 1 hàm để đưa dữ liệu lên redux
//bước 3: kết nối đến redux bằng cú pháp connect (mapStateToProps, hàm đưa dữ liệu lên redux)([tên component])
//bước 4: xoá export default phía trên class component và copy tên component xuống dưới hàm connect
