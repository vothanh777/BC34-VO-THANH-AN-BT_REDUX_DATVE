const stateDefault = { gioHang: [] };

export const GioHangReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THEM_GIO_HANG":
      let gioHangNew = [...state.gioHang];

      //kiểm tra sp đã có trong giỏ hàng chưa?
      let sanPham = gioHangNew.find((sp) => sp.maSP == payload.maSP);
      if (sanPham) {
        //TH1:SP đã có trong GioHang
        sanPham.soLuong += 1;
      } else {
        //TH2: Sp chưa có trong GioHang
        gioHangNew.push({ ...payload, soLuong: 1 });
      }

      return { ...state, gioHang: gioHangNew };

    default:
      return { ...state };
  }
};
