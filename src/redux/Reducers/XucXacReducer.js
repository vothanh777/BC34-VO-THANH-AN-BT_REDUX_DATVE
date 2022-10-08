const stateDefault = {
  isTai: true,
  arrayHinh: [
    "./ImgXucXac/1.png",
    "./ImgXucXac/2.png",
    "./ImgXucXac/3.png",
    "./ImgXucXac/4.png",
    "./ImgXucXac/5.png",
    "./ImgXucXac/6.png",
  ],
  arrayKetQua: ["./ImgXucXac/1.png", "./ImgXucXac/1.png", "./ImgXucXac/1.png"],
  ketQua: 0,
  soBanThang: 0,
  tongBanChoi: 0,
};

export const XucXacReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THAY_DOI_CUOC": {
      state.isTai = payload;
      return { ...state };
    }

    case "KET_QUA": {
      let { isTai, soBanThang, tongBanChoi } = state;
      let arrayHinh = [...state.arrayHinh];
      let arrayNew = [];
      let tong = 0;
      for (let index = 0; index < 3; index++) {
        let randomIndex = Math.floor(Math.random() * 6);
        arrayNew.push(arrayHinh[randomIndex]);
        tong += randomIndex + 1;
      }

      let soBanThangNew = soBanThang;
      if (isTai) {
        if (tong % 2) {
          soBanThangNew += 1;
        }
      } else {
        if (tong % 2 != 0) {
          soBanThangNew += 1;
        }
      }

      return {
        ...state,
        arrayKetQua: arrayNew,
        ketQua: tong,
        soBanThang: soBanThangNew,
        tongBanChoi: tongBanChoi + 1,
      };
    }

    default:
      return { ...state };
  }
};
