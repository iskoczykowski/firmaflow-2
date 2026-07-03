import LanguageSwitcher from './LanguageSwitcher';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900">{title}</h1>

          {subtitle ? (
            <p className="mt-2 text-slate-600">{subtitle}</p>
          ) : null}
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
