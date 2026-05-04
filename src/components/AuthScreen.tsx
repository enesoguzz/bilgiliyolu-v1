import { FormEvent, useState } from 'react';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';
import { isSupabaseConfigured } from '@/lib/supabase';

interface AuthScreenProps {
  loading: boolean;
  error: string | null;
  notice: string | null;
  onSignIn: (email: string, password: string) => Promise<void>;
  onSignUp: (email: string, password: string, displayName: string) => Promise<void>;
}

export default function AuthScreen({ loading, error, notice, onSignIn, onSignUp }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === 'login') {
      await onSignIn(email, password);
    } else {
      await onSignUp(email, password, displayName);
    }
  };

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 safe-bottom">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5">
          <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold text-foreground">Supabase ayarı gerekli</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Login ve bulut kayıt için `.env` dosyasına `VITE_SUPABASE_URL` ve `VITE_SUPABASE_ANON_KEY` eklemelisin.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Örnek dosya: `.env.example`. Veritabanı tabloları için `supabase/schema.sql` içindeki SQL'i Supabase SQL Editor'da çalıştır.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 safe-bottom">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-foreground">Bilgi Yolu</h1>
          <p className="text-sm text-muted-foreground mt-1">Hesabına gir, ilerlemen kaybolmasın</p>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-muted p-1 rounded-xl mb-4">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-lg py-2 text-sm font-bold transition-all ${mode === 'login' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
          >
            Giriş
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`rounded-lg py-2 text-sm font-bold transition-all ${mode === 'register' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
          >
            Kayıt
          </button>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-4 space-y-3">
          {mode === 'register' && (
            <label className="block">
              <span className="text-xs font-bold text-muted-foreground">Ad Soyad</span>
              <input
                value={displayName}
                onChange={event => setDisplayName(event.target.value)}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Örn. Ece Yılmaz"
                autoComplete="name"
              />
            </label>
          )}

          <label className="block">
            <span className="text-xs font-bold text-muted-foreground">E-posta</span>
            <input
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="ornek@mail.com"
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="text-xs font-bold text-muted-foreground">Şifre</span>
            <input
              value={password}
              onChange={event => setPassword(event.target.value)}
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="En az 6 karakter"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              minLength={6}
              required
            />
          </label>

          {error && (
            <p className="rounded-xl bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">{error}</p>
          )}
          {notice && (
            <p className="rounded-xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">{notice}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {mode === 'login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
            {loading ? 'İşleniyor...' : mode === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
          </button>
        </form>
      </div>
    </div>
  );
}
