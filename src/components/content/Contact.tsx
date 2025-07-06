import React from 'react';
import github from '../../assets/github.svg'
import naverblog from '../../assets/naverblog.svg'
import blogger from '../../assets/blogger.svg'
import youtube from '../../assets/youtube.svg'

const Contact: React.FC = () => {

const contactIcons  = [
  { name: 'GitHub', icon: github, link: 'https://github.com/2eo2yeo' },
  { name: 'Blogger', icon: blogger, link: 'https://2eo2yeo.github.io/' },
  { name: 'NaverBlog', icon: naverblog, link: 'https://blog.naver.com/2eo2yeo/' },
  { name: 'YouTube', icon: youtube, link: 'https://www.youtube.com/@리옹-2eo' },
];

    return (
          <div className="flex gap-5">
      {contactIcons.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          className="w-13 h-13 flex items-center justify-center rounded-full border-2 border-white cursor-pointer"
        >
          <img src={icon} alt={name} className="w-8 h-8" />
        </a>
      ))}
    </div>
    );
}

export default Contact;