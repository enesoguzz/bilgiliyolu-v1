# Keççi Google Girişi Kurulumu

Uygulamada Google giriş butonu `supabase.auth.signInWithOAuth({ provider: 'google' })` ile bağlıdır. Butonun çalışması için Supabase ve Google Cloud tarafında sağlayıcının aktif edilmesi gerekir.

## 1. Google Cloud OAuth Client Oluştur

1. Google Cloud Console içinde projenin OAuth ayarlarına gir.
2. OAuth client tipi olarak `Web application` seç.
3. Authorized JavaScript origins alanına şu adresleri ekle:
   - Lokal geliştirme: `http://127.0.0.1:8080`
   - Canlı site: Vercel domainin, örn. `https://bilgiliyolu-v1-...vercel.app`
4. Authorized redirect URIs alanına Supabase'in Google provider ekranında verdiği callback URL'yi ekle:
   - Format: `https://PROJECT_REF.supabase.co/auth/v1/callback`
5. Client ID ve Client Secret değerlerini kopyala.

## 2. Supabase Google Provider Aç

1. Supabase Dashboard > Authentication > Providers bölümüne gir.
2. Google provider'ı aktif et.
3. Google Cloud'dan aldığın Client ID ve Client Secret değerlerini gir.
4. Kaydet.

## 3. Supabase Redirect URL Ayarları

Supabase Dashboard > Authentication > URL Configuration bölümünde:

- Site URL: canlı Vercel adresin.
- Redirect URLs:
  - `http://127.0.0.1:8080`
  - `http://localhost:8080`
  - canlı Vercel adresin

## 4. Vercel Ortam Değişkeni

Vercel project settings içinde:

```text
VITE_AUTH_REDIRECT_URL=https://canli-vercel-adresin
```

Bu ayar, Google girişinden sonra kullanıcının canlı uygulamaya dönmesini sağlar.

Kaynaklar:
- https://supabase.com/docs/guides/auth/social-login/auth-google
- https://supabase.com/docs/guides/auth/redirect-urls
