import React from 'react'
import logo from '../../assets/images/logo.svg'
import App_store from '../../assets/images/app_store.svg'
import play_market from '../../assets/images/play_market.webp'
import Instagram from '../../assets/images/Instagram.svg'
import Facebook from '../../assets/images/Facebook.svg'
import TikTok from '../../assets/images/TikTok.svg'
import Snapchat from '../../assets/images/Snapchat.svg'

const Footer = ({
  companyInfo = {
    name: 'Order.uk',
    registrationNumber: '40039-445',
    address: 'House of companies.'
  },
  newsletter = {
    title: 'Get Exclusive Deals in your Inbox',
    placeholder: 'youremail@gmail.com',
    buttonText: 'Subscribe',
    legalText: 'we wont spam, read our email policy'
  },
  legalPages = [
    { title: 'Terms and conditions', link: '#' },
    { title: 'Privacy', link: '#' },
    { title: 'Cookies', link: '#' },
    { title: 'Modern Slavery Statement', link: '#' }
  ],
  importantLinks = [
    { title: 'Get help', link: '#' },
    { title: 'Add your restaurant', link: '#' },
    { title: 'Sign up to deliver', link: '#' },
    { title: 'Create a business account', link: '#' }
  ],
  socialLinks = [
    { name: 'Facebook', icon: Facebook, link: '#' },
    { name: 'Instagram', icon: Instagram, link: '#' },
    { name: 'TikTok', icon: TikTok, link: '#' },
    { name: 'Snapchat', icon: Snapchat, link: '#' }
  ],
  appLinks = {
    appStore: '#',
    playStore: '#'
  },
  footerLinks = [
    { title: 'Privacy Policy', link: '#' },
    { title: 'Terms', link: '#' },
    { title: 'Pricing', link: '#' },
    { title: 'Do not sell or share my personal information', link: '#' }
  ],
  copyright = 'Order.uk Copyright 2024, All Rights Reserved.',
  onSubscribe = () => {}
}) => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input').value
    onSubscribe(email)
  }

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt={companyInfo.name} className="w-32 mb-4" />
            <div className="flex gap-3 mb-4">
              <img src={App_store} alt="App Store" className="h-10 cursor-pointer" />
              <img src={play_market} alt="Play Store" className="h-10 cursor-pointer" />
            </div>
            <p className="text-sm text-gray-600">
              Company # {companyInfo.registrationNumber}, Registered with<br />
              {companyInfo.address}
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">{newsletter.title}</h3>
            <form onSubmit={handleSubscribe} className="relative mb-2">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 outline-none pr-32"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                {newsletter.buttonText}
              </button>
            </form>
            <p className="text-xs text-gray-500">{newsletter.legalText}</p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal Pages</h3>
            <ul className="space-y-2">
              {legalPages.map((page, index) => (
                <li key={index}>
                  <a href={page.link} className="text-gray-700 hover:text-orange-500 transition-colors">
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-700 hover:text-orange-500 transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">{copyright}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer