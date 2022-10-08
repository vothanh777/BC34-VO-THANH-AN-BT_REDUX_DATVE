import React, { Component } from "react";
import dataFilm from "./DataFilms.json";

export default class BaiTapMovie extends Component {
  state = {
    movieDetail: {
      maPhim: 1283,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa: "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  };

  render() {
    let { movieDetail } = this.state;
    return (
      <div className="container row">
        <div className="card col-md-12 m-4" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src={movieDetail.hinhAnh}
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">{movieDetail.tenPhim}</h4>
            <p className="card-text">{movieDetail.moTa}</p>
            <p className="card-text">ngày khởi chiếu</p>
            <p className="card-text">đánh giá</p>
            <iframe src="" frameborder="0"></iframe>
          </div>
        </div>
        {dataFilm.map((movie, index) => {
          return (
            <div
              key={index}
              className="card col-md-3 m-4"
              style={{ width: 400 }}
            >
              <img
                className="card-img-top"
                src={movie.hinhAnh}
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">{movie.tenPhim}</h4>
                <p className="card-text">{movie.moTa}</p>
              </div>
              <button className="btn btn-success">Detail</button>
            </div>
          );
        })}
      </div>
    );
  }
}
