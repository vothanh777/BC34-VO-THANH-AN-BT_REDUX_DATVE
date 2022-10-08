import { bindActionCreators } from "redux";

const stateDefault = {
  isSignUp: true,
  dsNhanVien: [],
  nhanVienUpdate: "",
};

export const NhanVienReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THEM_NHAN_VIEN": {
      const dsNhanVien = [...state.dsNhanVien];

      const nhanVienNew = dsNhanVien.find(
        (nhanVien) => nhanVien.taiKhoan == payload.nhanVien.taiKhoan
      );
      if (nhanVienNew) {
        alert("Tài khoản đã tồn tại!");
      } else {
        dsNhanVien.push(payload.nhanVien);
      }
      console.log(dsNhanVien);

      return { ...state, dsNhanVien };
    }

    case "XOA_NHAN_VIEN": {
      let dsNhanVien = [...state.dsNhanVien];
      dsNhanVien = dsNhanVien.filter(
        (nhanVien) => nhanVien.taiKhoan != payload
      );

      return { ...state, dsNhanVien };
    }

    case "LAY_NHAN_VIEN": {
      let dsNhanVien = [...state.dsNhanVien];
      let nhanVienTam = dsNhanVien.find(
        (nhanVien) => nhanVien.taiKhoan == payload
      );

      return { ...state, nhanVienUpdate: nhanVienTam };
    }

    default:
      return { ...state };
  }
};
