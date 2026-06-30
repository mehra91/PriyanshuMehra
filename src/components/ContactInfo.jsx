import React from 'react';

export default function ContactInfo() {
  const contacts = [
    { img:'/linkedin-svgrepo-com.svg',link:'https://www.linkedin.com/in/priyanshu-mehra-70b044229/', bg: 'bg-white', label: 'Linkedin', id: 'linkedin' },
    { img: '/github-142-svgrepo-com.svg',link:'https://github.com/mehra91', bg: 'bg-white', label: 'Github', id: 'github' },
    { img: '/whatsapp-svgrepo-com.svg',link:'https://wa.me/919058044137?text=Hi%20Priyanshu', bg: 'bg-green-500', label: 'WhatsApp', id: 'whatsapp' },
    { img: '/gmail-svgrepo-com.svg',link:'mailto:pm7300779625@gmail.com?subject=Portfolio%20Contact', bg: 'bg-white', label: 'Mail', id: 'mail', textColor: 'text-slate-900' },
  ];

  return (
    <div className="bg-black/85 backdrop-blur rounded-2xl p-6 border border-black/50 ">
      <p className="text-slate-400 text-md font-semibold mb-6">Contact Info</p>
      
      <div className="grid grid-cols-2 gap-2 ">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            className={`${contact.bg} ${contact.textColor || 'text-white'} rounded-lg p-4 flex items-center justify-center font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer`}
            aria-label={contact.label}
          >
            <a href={contact.link}>
              <img src={contact.img} alt={contact.label} className='hover:scale-130 ease-in-out duration-700'  />
            </a>
          </button>
        ))}
      </div>
    </div>
  );
}