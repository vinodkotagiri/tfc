import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Navbar() {

    const [links,setLinks] = React.useState([
        { id: 'home', title: 'Home', active: true, to: '/' },
        { id: 'latest', title: 'Latest', active: false, to: '/latest' },
        { id: 'top', title: 'Top', active: false, to: '/top' },
        { id: 'domestic', title: 'Domestic', active: false, to: '/domestic' },
        { id: 'international', title: 'International', active: false, to: '/international' },
        { id: 'gallery', title: 'Gallery', active: false, to: '/gallery' }
    ])
    const navigate=useNavigate()

    function onLinkClick(id){
        const changedLinks=links.map(link=>{
            if(link.id==id){
                link.active=true
            }else{
                link.active=false
            }
            return link
        })
        setLinks(changedLinks)
        const selectedLink=links.find(link=>link.id==id)
        const routeTo=selectedLink.to
        return navigate(routeTo)
    }
    

    return (
        <nav className='w-full h-full px-4 flex items-center justify-between bg-transparent'>
            <div className='font-semibold text-xl text-slate-100 '>
                <img src={logo} alt='logo' className='h-12 '/>
            </div>
            <div className='flex items-center h-full justify-center gap-4'>
                {links.map(link => (<div key={link.id}  className={`cursor-pointer duration-200 ease-in-out hover:scale-105 ${link.active?'text-primaryOrange font-bold text-xl':'text-slate-400 text-md'}`} onClick={()=>onLinkClick(link.id)}>{link.title}</div>))}
            </div>
        </nav>
    )
}
