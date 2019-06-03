import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import * as routerConst from './router.const';

const routes: Routes = [
  // DANG_NHAP = 'dang-nhap',
  { path: '', loadChildren: './pages/dang-nhap/dang-nhap.module#DangNhapPageModule' },
  //   NHAP_SDT ='nhap-sdt',
  { path: `${routerConst.RouterUrl.NHAP_SDT}`, loadChildren: './pages/nhap-sdt/nhap-sdt.module#NhapSdtPageModule' },
  //   NHAP_MA_XAC_NHAN_SDT ='nhap-ma-xac-nhan-sdt',
  { path: `${routerConst.RouterUrl.NHAP_MA_XAC_NHAN_SDT}`, loadChildren: './pages/nhap-ma-xac-nhan-sdt/nhap-ma-xac-nhan-sdt.module#NhapMaXacNhanSdtPageModule' },
  // //   TABS='app', 
  { path: `${routerConst.RouterUrl.TABS}`, loadChildren: './tabs/tabs.module#TabsPageModule' },
  //   TRANG_CHU = 'trang-chu',
  { path: `${routerConst.RouterUrl.TRANG_CHU}`, loadChildren: './tabs/trang-chu/trang-chu.module#TrangChuPageModule' },
  //   TAO_MOI_HO_SO ='tao-moi-ho-so',
  { path: `${routerConst.RouterUrl.TAO_MOI_HO_SO}`, loadChildren: './pages/tao-moi-ho-so/tao-moi-ho-so.module#TaoMoiHoSoPageModule' },
  //   THONG_TIN_CA_NHAN ='thong-tin-ca-nhan',
  { path: `${routerConst.RouterUrl.THONG_TIN_CA_NHAN}`, loadChildren: './pages/thong-tin-ca-nhan/thong-tin-ca-nhan.module#ThongTinCaNhanPageModule' },
  //   CHINH_SUA_THONG_TIN_CA_NHAN ='chinh-sua-thong-tin-ca-nhan',
  { path: `${routerConst.RouterUrl.CHINH_SUA_THONG_TIN_CA_NHAN}`, loadChildren: './pages/chinh-sua-thong-tin-ca-nhan/chinh-sua-thong-tin-ca-nhan.module#ChinhSuaThongTinCaNhanPageModule' },
  // 'ho-so-kham'
  { path: `${routerConst.RouterUrl.HO_SO_KHAM}`, loadChildren: './pages/ho-so-kham/ho-so-kham.module#HoSoKhamPageModule' },
  // 'dat-lich-kham'
  { path: `${routerConst.RouterUrl.DANG_KY_KHAM_NGAY}`, loadChildren: './pages/dat-lich-kham/dat-lich-kham.module#DatLichKhamPageModule' },
  // 'tim-kiem-benh-nhan'
  { path: `${routerConst.RouterUrl.TIM_KIEM_BENH_NHAN}`, loadChildren: './pages/tim-kiem-benh-nhan/tim-kiem-benh-nhan.module#TimKiemBenhNhanPageModule' },
  // 'ho-so-benh-nhan'
  { path: `${routerConst.RouterUrl.HO_SO_BENH_NHAN}`, loadChildren: './pages/ho-so-benh-nhan/ho-so-benh-nhan.module#HoSoBenhNhanPageModule' },
  // 'chon-ngay-kham'
  { path: `${routerConst.RouterUrl.CHON_NGAY_KHAM}`, loadChildren: './pages/chon-ngay-kham/chon-ngay-kham.module#ChonNgayKhamPageModule' },
  // 'ds-dkkham'
  { path: `${routerConst.RouterUrl.DS_DK_KHAM}`, loadChildren: './pages/ds-dkkham/ds-dkkham.module#DsDkkhamPageModule' },
  // 'modal'
  { path: `${routerConst.RouterUrl.MODAL_CHUYEN_KHOA}`, loadChildren: './pages/modal/modal.module#ModalPageModule' },
  //  'thongtinkb'
  { path: `${routerConst.RouterUrl.THONG_TIN_KB}`, loadChildren: './pages/thongtinkb/thongtinkb.module#ThongtinkbPageModule' },
  //  'taohsnb'
  { path: `${routerConst.RouterUrl.TAO_HS_NB}`, loadChildren: './pages/taohsnb/taohsnb.module#TaohsnbPageModule' },
 //  'thongtinngbenh'
  { path: `${routerConst.RouterUrl.THONG_TIN_NGUOI_BENH}`, loadChildren: './pages/thongtinngbenh/thongtinngbenh.module#ThongtinngbenhPageModule' },
//'dang-nhap'
  { path: `${routerConst.RouterUrl.DANG_NHAP}`, loadChildren: './pages/dang-nhap/dang-nhap.module#DangNhapPageModule' },
  // 'kiem-tra-thong-tin'
  { path:`${routerConst.RouterUrl.KIEM_TRA_THONG_TIN}` , loadChildren: './pages/kiem-tra-thong-tin/kiem-tra-thong-tin.module#KiemTraThongTinPageModule' },
  // 'xac-nhan-thong-tin'
 { path:`${routerConst.RouterUrl.XAC_NHAN_THONG_TIN}` , loadChildren: './pages/xac-nhan-thong-tin/xac-nhan-thong-tin.module#XacNhanThongTinPageModule' },
  // 'chonbacsi'
  { path:`${routerConst.RouterUrl.CHON_PHONG}` , loadChildren: './pages/chonbacsi/chonbacsi.module#ChonbacsiPageModule' },
  //'dang-ky-bac-si-kham'
  { path:`${routerConst.RouterUrl.DANG_KY_KHAM_BAC_SI}` , loadChildren: './pages/dang-ky-bac-si-kham/dang-ky-bac-si-kham.module#DangKyBacSiKhamPageModule' },
//CHON_BAC_SI='dang-ky-theo-bac-si'
  { path:`${routerConst.RouterUrl.CHON_BAC_SI}` , loadChildren: './pages/dang-ky-theo-bac-si/dang-ky-theo-bac-si.module#DangKyTheoBacSiPageModule' },
  { path: `${routerConst.RouterUrl.DANG_KY_KHAM}`, loadChildren: './pages/dang-ky-kham/dang-ky-kham.module#DangKyKhamPageModule' },
  { path: `${routerConst.RouterUrl.TODO_DETAIL}`, loadChildren: './pages/todo/todo.module#TodoPageModule' },
  { path: `${routerConst.RouterUrl.LIST_TODO}`, loadChildren: './pages/todo-list/todo-list.module#TodoListPageModule' },
  // 'xac-nhan-thong-tin-nguoi-benh' =XAC_NHAN_THONG_TIN_NG_BENH
  { path: `${routerConst.RouterUrl.XAC_NHAN_THONG_TIN_NG_BENH}` , loadChildren: './pages/xac-nhan-thong-tin-nguoi-benh/xac-nhan-thong-tin-nguoi-benh.module#XacNhanThongTinNguoiBenhPageModule' },
  // `${routerConst.RouterUrl.TAO_HO_SO}` 'tao-ho-so'
  { path:  `${routerConst.RouterUrl.TAO_HO_SO}`, loadChildren: './pages/tao-ho-so/tao-ho-so.module#TaoHoSoPageModule' },
  // `${routerConst.RouterUrl.THONG_TIN_PHIEU_KHAM}` 'thong-tin-phieu-kham'
  { path: `${routerConst.RouterUrl.THONG_TIN_PHIEU_KHAM}` , loadChildren: './pages/thong-tin-phieu-kham/thong-tin-phieu-kham.module#ThongTinPhieuKhamPageModule' },
  // `${routerConst.RouterUrl.TAO_MOI_HO_SO_KHAM_BENH}` 'tao-moi-ho-so-kham-benh'
  { path: `${routerConst.RouterUrl.TAO_MOI_HO_SO_KHAM_BENH}` , loadChildren: './pages/tao-moi-ho-so-kham-benh/tao-moi-ho-so-kham-benh.module#TaoMoiHoSoKhamBenhPageModule' },
  //them-khoa
  { path: `${routerConst.RouterUrl.THEM_KHOA}` , loadChildren: './pages/them-khoa/them-khoa.module#ThemKhoaPageModule' },
  // THONG_TIN_PHIEU_HUY = 'thong-tin-phieu-huy',
  { path: `${routerConst.RouterUrl.THONG_TIN_PHIEU_HUY}` , loadChildren: './pages/thong-tin-phieu-huy/thong-tin-phieu-huy.module#ThongTinPhieuHuyPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
