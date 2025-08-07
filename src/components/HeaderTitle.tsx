// HeaderTitle.tsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HeaderTitle() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ['Ramiro Garcia', '<RamiroGarcia/>', './Ramiro-portfolio', 'RG.'],
      typeSpeed: 120,
      backSpeed: 70,
      loop: true,
      smartBackspace: true,
      backDelay: 20000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="header-title" />;
}
