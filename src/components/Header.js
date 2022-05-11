import React from 'react';
import nav from '../settings/main.json';
import { Link } from 'gatsby';

export default function Header() {
  console.log(nav);
  return (
    <header className='h-16 flex dark:bg-black bg-white dark:text-white text-black'>
      <div className='container m-auto px-4 flex gap-20 items-center'>
        <Link to='/' className='text-2xl font-bold'>
          Henlo.
        </Link>
        <nav className='flex gap-4 '>
          {nav.nav.map((item, i) => (
            <Link to={item.permalink} key={i}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
