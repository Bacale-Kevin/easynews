import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'form-short-news',
    loadChildren: () => import('./pages/admin/form-short-news/form-short-news.module').then( m => m.FormShortNewsPageModule)
  },
  {
    path: 'ad-analytic',
    loadChildren: () => import('./pages/auth/ad-analytic/ad-analytic.module').then( m => m.AdAnalyticPageModule)
  },
  {
    path: 'ad-audience',
    loadChildren: () => import('./pages/auth/ad-audience/ad-audience.module').then( m => m.AdAudiencePageModule)
  },
  {
    path: 'ad-dashboard',
    loadChildren: () => import('./pages/auth/ad-dashboard/ad-dashboard.module').then( m => m.AdDashboardPageModule)
  },
  {
    path: 'ad-payment',
    loadChildren: () => import('./pages/auth/ad-payment/ad-payment.module').then( m => m.AdPaymentPageModule)
  },
  {
    path: 'ad-portal',
    loadChildren: () => import('./pages/auth/ad-portal/ad-portal.module').then( m => m.AdPortalPageModule)
  },
  {
    path: 'ad-post',
    loadChildren: () => import('./pages/auth/ad-post/ad-post.module').then( m => m.AdPostPageModule)
  },
  {
    path: 'ad-preview',
    loadChildren: () => import('./pages/auth/ad-preview/ad-preview.module').then( m => m.AdPreviewPageModule)
  },
  {
    path: 'ad-signup',
    loadChildren: () => import('./pages/auth/ad-signup/ad-signup.module').then( m => m.AdSignupPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/auth/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'partner-confirm',
    loadChildren: () => import('./pages/auth/partner-confirm/partner-confirm.module').then( m => m.PartnerConfirmPageModule)
  },
  {
    path: 'partner-form',
    loadChildren: () => import('./pages/auth/partner-form/partner-form.module').then( m => m.PartnerFormPageModule)
  },
  {
    path: 'partner-payment',
    loadChildren: () => import('./pages/auth/partner-payment/partner-payment.module').then( m => m.PartnerPaymentPageModule)
  },
  {
    path: 'paying-without-pub',
    loadChildren: () => import('./pages/auth/paying-without-pub/paying-without-pub.module').then( m => m.PayingWithoutPubPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/auth/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'without-pub',
    loadChildren: () => import('./pages/auth/without-pub/without-pub.module').then( m => m.WithoutPubPageModule)
  },
  {
    path: 'about-user',
    loadChildren: () => import('./pages/news/about-user/about-user.module').then( m => m.AboutUserPageModule)
  },
  {
    path: 'main-home',
    loadChildren: () => import('./pages/news/main-home/main-home.module').then( m => m.MainHomePageModule)
  },
  {
    path: 'news-search',
    loadChildren: () => import('./pages/news/news-search/news-search.module').then( m => m.NewsSearchPageModule)
  },
  {
    path: 'short-news',
    loadChildren: () => import('./pages/news/short-news/short-news.module').then( m => m.ShortNewsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
