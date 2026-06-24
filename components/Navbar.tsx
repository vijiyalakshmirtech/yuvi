const cvUrl = "/Yuvaraj-Ramalingam-Profile.pdf";

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToSection = (e: React.MouseEvent, id: string) => {
e.preventDefault();
setMobileMenuOpen(false);

const element = document.getElementById(id);

if (element) {
const offset = 100;

```
window.scrollTo({
  top: element.offsetTop - offset,
  behavior: 'smooth'
});
```

}
};

return (
<>
<nav
className={`fixed top-6 left-1/2 -translate-x-1/2 z-[110] w-[95%] max-w-6xl px-4 sm:px-6 py-3.5 flex justify-between items-center transition-all duration-300 rounded-2xl border ${
        scrolled
          ? 'bg-brand-surface/80 border-brand-border backdrop-blur-xl shadow-2xl'
          : 'bg-transparent border-transparent'
      }`}
>

```
  <div
    className="flex items-center gap-3 cursor-pointer group shrink-0"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >

    <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-lg rounded-xl transition-all group-hover:bg-brand-primary group-hover:text-white shadow-lg">
      YR
    </div>

    <div className="hidden sm:block">
      <h3 className="font-display font-bold text-white tracking-tight text-lg">
        Yuvaraj
      </h3>

      <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
        Founder
      </p>
    </div>

  </div>

  <div className="hidden lg:flex items-center gap-8">

    {[
      'About',
      'Skills',
      'Experience',
      'Projects',
      'Contact'
    ].map((item) => (
      <button
        key={item}
        onClick={(e) =>
          scrollToSection(e, item.toLowerCase())
        }
        className="text-xs font-semibold tracking-wide text-neutral-500 hover:text-white transition-all"
      >
        {item}
      </button>
    ))}

    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-wide text-white hover:text-brand-primary transition-all flex items-center gap-2"
    >
      Founder Profile
      <Icons.FileText />
    </a>

  </div>

  <div className="flex items-center gap-2 sm:gap-3">

    <button
      onClick={(e) => scrollToSection(e, 'contact')}
      className="px-4 sm:px-5 py-2.5 bg-brand-primary text-white font-bold text-xs rounded-xl hover:bg-brand-secondary transition-all active:scale-95 shadow-lg shadow-brand-primary/20 shrink-0"
    >
      Let's Connect
    </button>

    <button
      className="lg:hidden p-1 text-white shrink-0 ml-1"
      onClick={() =>
        setMobileMenuOpen(!mobileMenuOpen)
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

  </div>

</nav>

<div
  className={`fixed inset-0 z-[105] bg-brand-dark lg:hidden transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
    mobileMenuOpen
      ? 'opacity-100'
      : 'opacity-0 pointer-events-none'
  }`}
>

  <h2 className="text-3xl font-display font-bold text-brand-primary">
    Yuvaraj Ramalingam
  </h2>

  {[
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Contact'
  ].map((item) => (
    <button
      key={item}
      onClick={(e) =>
        scrollToSection(e, item.toLowerCase())
      }
      className="text-3xl font-display font-bold text-neutral-500 hover:text-white transition-all"
    >
      {item}
    </button>
  ))}

  <a
    href={cvUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl font-display font-bold text-white hover:text-brand-primary transition-all flex items-center gap-3"
  >
    View Founder Profile
    <Icons.FileText />
  </a>

</div>
```

</>
);

