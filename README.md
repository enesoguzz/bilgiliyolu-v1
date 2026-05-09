# Keççi

Keççi, 1-12. sınıf öğrencileri için mobil öncelikli bir öğrenme yolu uygulamasıdır. Öğrenci sınıfını ve dersini seçer, üniteler arasında ilerler, kısa konu anlatımı slaytlarını tamamlar ve quiz sonucuna göre ilerleme kazanır.

## Özellikler

- E-posta doğrulama bağlantısı veya SMS kodu ile giriş
- Kayıt sırasında telefon numarası ve 8+ karakter şifre belirleme
- Kayıt sırasında e-posta doğrulama bağlantısı
- Şifremi unuttum ve şifre yenileme akışı
- Supabase Phone provider açıkken SMS OTP denemesi
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
6. Kayıt sırasında e-posta doğrulama istiyorsan Authentication > Sign In / Providers bölümünde email confirmation ayarını açık tut.
7. SMS OTP kullanmak istiyorsan Supabase Phone provider ve SMS sağlayıcı ayarlarını ayrıca etkinleştir. Uygulama Türkiye numaralarını ülke kodu yazdırmadan `5551112233` formatında alır ve Supabase'e `+905551112233` olarak gönderir.

Bu kurulumdan sonra kullanıcılar e-posta, telefon ve şifre ile kayıt olabilir; girişte e-posta doğrulama bağlantısı veya kayıtlı telefon numarasına gelen SMS kodu kullanılır. Kullanıcı profili `profiles`, ilerleme bilgileri `user_progress` tablosunda saklanır.

## Admin Panel

Admin paneli sadece `profiles.is_admin = true` olan kullanıcılarda görünür. İlk admin hesabını Supabase SQL Editor'da şu sorguyla yetkilendirebilirsin:

```sql
update public.profiles
set is_admin = true
where email = 'senin-epostan@example.com';
```

Admin panelden ünite, slayt ve soru eklenebilir veya aynı `id` ile mevcut içerik güncellenebilir. Supabase içerikleri öğrenci ekranlarında statik örnek içeriklerin üzerine yazılır; yeni `id` ile eklenen kayıtlar ek içerik olarak görünür.

## Yayına Hazırlık

```bash
npm run lint
npm test
npm run build
```

Build çıktısı `dist/` klasörüne üretilir. Bu klasör Vercel, Netlify, Cloudflare Pages veya statik hosting destekleyen herhangi bir ortamda yayınlanabilir.

## İçerik Notu

Uygulamada tüm sınıf ve derslerde örnek içerik vardır. Bu içerik MVP ve ürün doğrulama için hazırlanmıştır. Yayın öncesinde gerçek MEB kazanımlarına, telif durumuna ve pedagojik doğruluğa göre nihai içerik kontrolü yapılmalıdır.
