const stateDefault = {
  danhSachGheDangDat: [],
};

export const BaiTapDatVeReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DAT_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDatUpdate) => gheDangDatUpdate.soGhe == payload.soGhe
      );
      if (index != -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(payload);
      }

      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }

    case "HUY_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDatUpdate) => gheDangDatUpdate.soGhe == payload
      );
      if (index != -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(payload);
      }

      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }

    default:
      return { ...state };
  }
};
