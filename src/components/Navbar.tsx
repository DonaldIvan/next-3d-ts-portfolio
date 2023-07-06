'use client';
import { useState } from 'react';
import Image from 'next/image';
import { styles } from '@/lib/styles';
import { navLinks } from '@/constants';
import { logo, menu, close } from '@/assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className="item-center mx-auto flex w-full max-w-7xl justify-between">
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="cursor-pointer text-[18px] font-bold text-white">
            Donald Ivan
          </p>
        </div>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(link.title)}
              aria-hidden="true"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle((prev) => !prev)}
            aria-hidden="true"
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                  aria-hidden="true"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
