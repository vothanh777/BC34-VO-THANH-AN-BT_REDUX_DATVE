import { combineReducers } from "redux";
import { createStore } from "redux";

import { demoReducer } from "./Reducers/DemoReducer";
import { GioHangReducer } from "./Reducers/GioHangReducer";
import { XucXacReducer } from "./Reducers/XucXacReducer";
import { NhanVienReducer } from "./Reducers/NhanVienRuducer";
import { BaiTapDatVeReducer } from "./Reducers/BaiTapDatVeReducer";

export const rootReducer = combineReducers({
  demoReducer,
  GioHangReducer,
  XucXacReducer,
  NhanVienReducer,
  BaiTapDatVeReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
