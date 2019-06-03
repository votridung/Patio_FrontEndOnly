import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'trang-chu',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/tabs/trang-chu/trang-chu.module#TrangChuPageModule'
                    }
                ]
            },
            {
                path: 'quan-ly-lich-hen',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/tabs/quan-ly-lich-hen/quan-ly-lich-hen.module#QuanLyLichHenPageModule'
                    }
                ]
            },
            {
                path: 'thong-bao',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/tabs/thong-bao/thong-bao.module#ThongBaoPageModule'
                    }
                ]
            },
            {
                path: 'cai-dat',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/app/tabs/cai-dat/cai-dat.module#CaiDatPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/trang-chu',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/trang-chu',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
