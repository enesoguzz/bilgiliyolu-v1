import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Eye, EyeOff, KeyRound, LockKeyhole, Mail, Phone, User } from 'lucide-react';
import { isSupabaseConfigured } from '@/lib/supabase';

type AuthMode = 'login' | 'register' | 'forgot' | 'recovery' | 'verify';
type VerificationType = 'email' | 'sms';

interface AuthScreenProps {
  loading: boolean;
  error: string | null;
  notice: string | null;
  passwordRecovery: boolean;
  pendingVerification: { type: VerificationType; identifier: string; purpose?: 'login' | 'signup'; emailOtpType?: 'email' | 'signup' } | null;
  onBeginPasswordVerification: (
    identifier: string,
    password: string,
  ) => Promise<{ ok: boolean; type?: VerificationType; identifier?: string }>;
  onSignUp: (email: string, password: string, displayName: string, phone?: string) => Promise<void>;
  onResetPassword: (email: string) => Promise<void>;
  onUpdatePassword: (password: string) => Promise<void>;
  onSendPhoneOtp: (phone: string) => Promise<void>;
  onVerifyPhoneOtp: (phone: string, token: string) => Promise<void>;
  onVerifyEmailOtp: (email: string, token: string) => Promise<void>;
  onClearPendingVerification: () => void;
  onOAuthSignIn: (provider: 'google' | 'apple') => Promise<void>;
}

const inputShellClass =
  'relative flex h-[72px] items-center rounded-[18px] border border-[#dfd3c7] bg-[#fbfaf8] px-5 transition-all focus-within:border-[#7a3a18] focus-within:ring-2 focus-within:ring-[#f0c879] sm:h-[92px] sm:rounded-[20px] sm:px-7';

function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export default function AuthScreen({
  loading,
  error,
  notice,
  passwordRecovery,
  pendingVerification,
  onBeginPasswordVerification,
  onSignUp,
  onResetPassword,
  onUpdatePassword,
  onSendPhoneOtp,
  onVerifyPhoneOtp,
  onVerifyEmailOtp,
  onClearPendingVerification,
  onOAuthSignIn,
}: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>(passwordRecovery ? 'recovery' : 'login');
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [verificationType, setVerificationType] = useState<VerificationType>('email');
  const [verificationIdentifier, setVerificationIdentifier] = useState('');
  const [verificationPurpose, setVerificationPurpose] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const activeMode = passwordRecovery ? 'recovery' : mode;

  useEffect(() => {
    if (!pendingVerification) return;
    setVerificationType(pendingVerification.type);
    setVerificationIdentifier(pendingVerification.identifier);
    setVerificationPurpose(pendingVerification.purpose ?? 'login');
    setSmsCode('');
    setMode('verify');
  }, [pendingVerification]);

  const title =
    activeMode === 'register'
      ? 'Kayıt Ol'
      : activeMode === 'forgot'
        ? 'Şifremi Unuttum'
        : activeMode === 'recovery'
          ? 'Yeni Şifre'
          : activeMode === 'verify'
            ? 'Doğrulama Kodu'
            : 'Giriş Yap';

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (activeMode === 'login') {
      const identifier = loginIdentifier.trim();

      if (!identifier) {
        setFormError('E-posta adresi ya da telefon numarası yazmalısın.');
        return;
      }

      if (!password) {
        setFormError('Şifreni yazmalısın.');
        return;
      }

      const result = await onBeginPasswordVerification(identifier, password);
      if (result.ok && result.type && result.identifier) {
        setVerificationType(result.type);
        setVerificationIdentifier(result.identifier);
        setSmsCode('');
        setMode('verify');
      }
      return;
    }

    if (activeMode === 'verify') {
      if (!smsCode.trim()) {
        setFormError('Doğrulama kodunu yazmalısın.');
        return;
      }

      if (verificationType === 'email') {
        await onVerifyEmailOtp(verificationIdentifier, smsCode.trim());
      } else {
        await onVerifyPhoneOtp(verificationIdentifier, smsCode.trim());
      }
      return;
    }

    if (activeMode === 'forgot') {
      await onResetPassword(email);
      return;
    }

    if (!isValidPassword(password)) {
      setFormError('Şifre en az 8 karakter olmalı.');
      return;
    }

    if (activeMode === 'recovery') {
      if (password !== passwordConfirm) {
        setFormError('Şifreler aynı olmalı.');
        return;
      }
      await onUpdatePassword(password);
      setPassword('');
      setPasswordConfirm('');
      return;
    }

    await onSignUp(email, password, displayName, phone);
  };

  if (!isSupabaseConfigured) {
    return (
      <AuthLayout>
        <section className="rounded-[40px] bg-white p-7 shadow-[0_12px_24px_rgba(45,90,39,0.08)] sm:rounded-[56px] sm:p-10">
          <h2 className="text-[30px] font-semibold leading-tight text-[#111111] sm:text-[36px]">Supabase ayarı gerekli</h2>
          <p className="mt-6 text-[16px] leading-7 text-[#42493e] sm:text-[18px] sm:leading-8">
            Login ve bulut kayıt için `.env` dosyasına `VITE_SUPABASE_URL` ve `VITE_SUPABASE_ANON_KEY`
            eklemelisin.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-[#42493e]">
            Veritabanı tabloları için `supabase/schema.sql` içindeki SQL'i Supabase SQL Editor'da çalıştır.
          </p>
        </section>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <section className="rounded-[40px] bg-white px-6 py-8 shadow-[0_12px_24px_rgba(45,90,39,0.08)] sm:rounded-[56px] sm:px-11 sm:py-12">
        <h2 className="mb-8 text-[34px] font-semibold leading-none text-[#111111] sm:mb-14 sm:text-[42px]">{title}</h2>

        <form onSubmit={submit} className="flex flex-col gap-6 sm:gap-8">
          {activeMode === 'login' && (
            <>
              <IconInput
                label="E-posta veya Telefon"
                icon={<Mail className="h-6 w-6 sm:h-9 sm:w-9" />}
                value={loginIdentifier}
                onChange={value => {
                  setLoginIdentifier(value);
                  if (value.includes('@')) setSmsCode('');
                }}
                placeholder="E-posta veya telefon"
                type="text"
                autoComplete="username"
              />
              <PasswordInput
                value={password}
                onChange={setPassword}
                visible={showPassword}
                onToggle={() => setShowPassword(current => !current)}
                placeholder="Şifre"
                autoComplete="current-password"
              />
            </>
          )}

          {activeMode === 'verify' && (
            <>
              <p className="-mt-3 rounded-[18px] bg-[#fbfaf8] px-5 py-4 text-[14px] font-semibold leading-6 text-[#5a4538]">
                {verificationPurpose === 'signup'
                  ? 'Kaydını tamamlamak için e-posta adresine gönderilen doğrulama kodunu yaz.'
                  : `Kod ${verificationType === 'email' ? 'e-posta adresine' : 'telefonuna'} gönderildi. Lütfen gelen kodu aşağıya yaz.`}
              </p>
              <IconInput
                label="Doğrulama Kodu"
                icon={<KeyRound className="h-6 w-6 sm:h-9 sm:w-9" />}
                value={smsCode}
                onChange={setSmsCode}
                placeholder="6 haneli kod"
                inputMode="numeric"
              />
            </>
          )}

          {activeMode === 'register' && (
            <>
              <IconInput
                label="Ad Soyad"
                icon={<User className="h-6 w-6 sm:h-9 sm:w-9" />}
                value={displayName}
                onChange={setDisplayName}
                placeholder="Örn. Ece Yılmaz"
                autoComplete="name"
              />
              <IconInput
                label="E-posta Adresi"
                icon={<Mail className="h-6 w-6 sm:h-9 sm:w-9" />}
                value={email}
                onChange={setEmail}
                placeholder="ornek@eposta.com"
                type="email"
                autoComplete="email"
              />
              <PhoneInput value={phone} onChange={setPhone} />
              <PasswordInput
                value={password}
                onChange={setPassword}
                visible={showPassword}
                onToggle={() => setShowPassword(current => !current)}
                placeholder="En az 8 karakter"
                autoComplete="new-password"
              />
            </>
          )}

          {activeMode === 'forgot' && (
            <IconInput
              label="E-posta Adresi"
              icon={<Mail className="h-6 w-6 sm:h-9 sm:w-9" />}
              value={email}
              onChange={setEmail}
              placeholder="ornek@eposta.com"
              type="email"
              autoComplete="email"
            />
          )}

          {activeMode === 'recovery' && (
            <>
              <PasswordInput
                label="Yeni Şifre"
                value={password}
                onChange={setPassword}
                visible={showPassword}
                onToggle={() => setShowPassword(current => !current)}
                placeholder="En az 8 karakter"
                autoComplete="new-password"
              />
              <PasswordInput
                label="Yeni Şifre Tekrar"
                value={passwordConfirm}
                onChange={setPasswordConfirm}
                visible={showPassword}
                onToggle={() => setShowPassword(current => !current)}
                placeholder="Yeni şifreni tekrar yaz"
                autoComplete="new-password"
              />
            </>
          )}

          {(formError || error) && (
            <p className="-mt-2 rounded-[18px] bg-[#ffdad6] px-5 py-4 text-[15px] font-bold leading-6 text-[#93000a]">
              {formError || error}
            </p>
          )}
          {notice && (
            <p className="-mt-2 rounded-[18px] bg-[#f7e5bc] px-5 py-4 text-[15px] font-bold leading-6 text-[#7a3a18]">
              {notice}
            </p>
          )}

          {activeMode === 'login' && (
            <>
              <div className="mt-1 flex flex-col gap-3">
                <SocialButton ariaLabel="Google ile devam et" onClick={() => onOAuthSignIn('google')}>
                  <GoogleMark />
                  <span>Google ile devam et</span>
                </SocialButton>
                <SocialButton ariaLabel="Apple ile devam et" onClick={() => onOAuthSignIn('apple')}>
                  <AppleMark />
                  <span>Apple ile devam et</span>
                </SocialButton>
              </div>
              <div className="-my-2 flex items-center justify-center">
                <span className="text-[11px] font-semibold text-[#8f969f]">veya</span>
              </div>
            </>
          )}

          {!passwordRecovery && activeMode === 'login' && (
            <div className="-mt-3 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => setMode('forgot')}
                className="text-[12px] font-extrabold uppercase text-[#7a3a18] sm:text-[17px]"
              >
                Şifremi Unuttum
              </button>
            </div>
          )}

          {activeMode === 'verify' && (
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setSmsCode('');
                onClearPendingVerification();
              }}
              className="-mt-3 self-start text-[12px] font-extrabold uppercase text-[#7a3a18] sm:text-[17px]"
            >
              Giriş ekranına dön
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#7a3a18] px-5 text-[14px] font-extrabold text-white shadow-sm shadow-[#7a3a18]/20 transition-all hover:bg-[#623016] active:scale-[0.99] disabled:opacity-60 sm:h-14 sm:text-[15px]"
          >
            {buttonLabel(activeMode, loading)}
          </button>

          {activeMode === 'forgot' && (
            <button
              type="button"
              onClick={() => setMode('login')}
              className="text-[18px] font-bold text-[#7a3a18]"
            >
              Giriş ekranına dön
            </button>
          )}
        </form>
      </section>

      {!passwordRecovery && activeMode !== 'forgot' && activeMode !== 'verify' && (
        <footer className="mt-10 text-center text-[20px] leading-7 text-[#5a4538] sm:mt-16 sm:text-[28px] sm:leading-9">
          {activeMode === 'login' ? 'Hesabın yok mu? ' : 'Zaten hesabın var mı? '}
          <button
            type="button"
            onClick={() => setMode(activeMode === 'login' ? 'register' : 'login')}
            className="font-extrabold text-[#7a3a18]"
          >
            {activeMode === 'login' ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </footer>
      )}
    </AuthLayout>
  );
}

function AuthLayout({ children }: { children: ReactNode }) {
  return (
      <div
      className="relative min-h-screen overflow-hidden bg-white px-5 py-8 text-[#2f1d14] safe-bottom sm:px-9 sm:py-14"
      style={{ fontFamily: '"Quicksand", "Nunito", system-ui, sans-serif' }}
    >
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[632px] flex-col justify-center sm:min-h-[calc(100vh-7rem)]">
        <header className="mb-10 text-center sm:mb-16">
          <img
            src="/kecci-logo-thumb.png"
            alt="Keççi logo"
            className="mx-auto h-52 w-52 object-contain sm:h-64 sm:w-64"
          />
        </header>
        {children}
      </main>
    </div>
  );
}

function IconInput({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  inputMode,
  required = true,
}: {
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-3 sm:gap-5">
      <span className="px-2 text-[14px] font-extrabold uppercase text-[#7a3a18] sm:text-[19px]">{label}</span>
      <span className={inputShellClass}>
        <span className="mr-4 text-[#8b7564] sm:mr-6">{icon}</span>
        <input
          value={value}
          onChange={event => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[17px] leading-7 text-[#2f1d14] outline-none placeholder:text-[#8f8176] sm:text-[24px] sm:leading-8"
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required={required}
        />
      </span>
    </label>
  );
}

function PhoneInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="flex flex-col gap-3 sm:gap-5">
      <span className="px-2 text-[14px] font-extrabold uppercase text-[#7a3a18] sm:text-[19px]">Telefon Numarası</span>
      <span className={inputShellClass}>
        <span className="mr-3 flex items-center gap-2 text-[17px] font-extrabold text-[#5a4538] sm:mr-5 sm:gap-4 sm:text-[22px]">
          <Phone className="h-6 w-6 text-[#8b7564] sm:h-8 sm:w-8" />
          +90
        </span>
        <input
          value={value}
          onChange={event => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[17px] leading-7 text-[#2f1d14] outline-none placeholder:text-[#8f8176] sm:text-[24px] sm:leading-8"
          placeholder="5551112233"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required
        />
      </span>
    </label>
  );
}

function PasswordInput({
  value,
  onChange,
  visible,
  onToggle,
  placeholder,
  autoComplete,
  label = 'Şifre',
  required = true,
}: {
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggle: () => void;
  placeholder: string;
  autoComplete: string;
  label?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-3 sm:gap-5">
      <span className="px-2 text-[14px] font-extrabold uppercase text-[#7a3a18] sm:text-[19px]">{label}</span>
      <span className={inputShellClass}>
        <LockKeyhole className="mr-4 h-6 w-6 text-[#8b7564] sm:mr-6 sm:h-8 sm:w-8" />
        <input
          value={value}
          onChange={event => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[17px] leading-7 text-[#2f1d14] outline-none placeholder:text-[#8f8176] sm:text-[24px] sm:leading-8"
          placeholder={placeholder}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          minLength={required ? 8 : undefined}
          required={required}
        />
        <button
          type="button"
          onClick={onToggle}
          className="ml-4 text-[#5a4538] sm:ml-6"
          aria-label={visible ? 'Şifreyi gizle' : 'Şifreyi göster'}
        >
          {visible ? <EyeOff className="h-6 w-6 sm:h-9 sm:w-9" /> : <Eye className="h-6 w-6 sm:h-9 sm:w-9" />}
        </button>
      </span>
    </label>
  );
}

function SocialButton({
  children,
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  ariaLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#d6dfe8] bg-white px-5 text-[14px] font-extrabold text-[#111111] shadow-sm transition-colors hover:bg-[#f7f9fb] active:scale-[0.99] sm:h-14 sm:text-[15px]"
    >
      {children}
    </button>
  );
}

function GoogleMark() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.37c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg className="h-5 w-5 fill-black" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.37 1.43c0 1.03-.42 2.02-1.09 2.77-.72.81-1.91 1.43-2.87 1.35-.13-.99.37-2.05 1.03-2.77.72-.8 1.99-1.41 2.93-1.35zM20.57 17.12c-.47 1.08-.7 1.56-1.31 2.52-.85 1.3-2.04 2.93-3.52 2.94-1.31.01-1.65-.85-3.43-.84-1.78.01-2.15.86-3.46.85-1.48-.02-2.61-1.49-3.46-2.8-2.37-3.62-2.62-7.86-1.16-10.11 1.04-1.6 2.68-2.53 4.22-2.53 1.57 0 2.55.86 3.85.86 1.26 0 2.03-.86 3.85-.86 1.38 0 2.84.75 3.87 2.05-3.4 1.86-2.85 6.72.55 7.92z" />
    </svg>
  );
}

function buttonLabel(activeMode: AuthMode, loading: boolean): string {
  if (loading) return 'İşleniyor...';
  if (activeMode === 'register') return 'Hesap oluştur';
  if (activeMode === 'forgot') return 'Gönder';
  if (activeMode === 'recovery') return 'Kaydet';
  if (activeMode === 'verify') return 'Doğrula';
  return 'Giriş Yap';
}


