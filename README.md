# Bilgi Yolu

Bilgi Yolu, 1-12. sınıf öğrencileri için mobil öncelikli bir öğrenme yolu uygulamasıdır. Öğrenci sınıfını ve dersini seçer, üniteler arasında ilerler, kısa konu anlatımı slaytlarını tamamlar ve quiz sonucuna göre ilerleme kazanır.

## Özellikler

- E-posta/şifre ile kullanıcı kaydı ve giriş
- Supabase ile bulut ilerleme senkronizasyonu
- 1-12. sınıf seçimi
- Sınıfa göre uygun ders listesi
- Her ders ve sınıf için örnek ünite yolu
- Her ünite için konu anlatımı slaytları
- Her ünite için 7 soruluk quiz
- Kilitli/açık/tamamlandı ünite durumları
- En iyi quiz skorunu saklama
- Tarayıcı `localStorage` yedeği
- Türkçe arayüz ve yayın metadata ayarları

## Teknoloji

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui ve Radix UI
- Supabase
- Vitest

## Kurulum

```bash
npm install
npm run dev
```

Windows'ta `.env` dosyasını oluşturmak için:

```powershell
Copy-Item .env.example .env
```

Varsayılan geliştirme sunucusu:

```text
http://localhost:8080
```

## Supabase Kurulumu

1. Supabase'te yeni bir proje oluştur.
2. Project Settings > API bölümünden Project URL ve anon public key değerlerini al.
3. `.env` dosyasına şu değerleri gir:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Supabase SQL Editor'da [supabase/schema.sql](./supabase/schema.sql) dosyasındaki SQL'i çalıştır.
5. Authentication > Providers bölümünde Email provider'ın açık olduğundan emin ol.

Bu kurulumdan sonra kullanıcılar e-posta/şifre ile kayıt olabilir. Kullanıcı profili `profiles`, ilerleme bilgileri `user_progress` tablosunda saklanır.

## Yayına Hazırlık

```bash
npm run lint
npm test
npm run build
```

Build çıktısı `dist/` klasörüne üretilir. Bu klasör Vercel, Netlify, Cloudflare Pages veya statik hosting destekleyen herhangi bir ortamda yayınlanabilir.

## İçerik Notu

Uygulamada tüm sınıf ve derslerde örnek içerik vardır. Bu içerik MVP ve ürün doğrulama için hazırlanmıştır. Yayın öncesinde gerçek MEB kazanımlarına, telif durumuna ve pedagojik doğruluğa göre nihai içerik kontrolü yapılmalıdır.
