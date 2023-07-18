import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {

    const [selected , setSelected] = useState(null);

    const list = [
        {
            'type' : 'normal',
            'title' : 'Dashboard',
            'link' : '/dashboard'
        },
        {
            'type' : 'dropdown',
            'title' : 'Salons',
            'items' : [{ 'title': 'List Salons', 'link': '/listsalons' }, { 'title': 'Add Salon', 'link': '/addsalon' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Therapies',
            'items' : [{ 'title': 'List Therapies', 'link': '/listtherapies' }, { 'title': 'Add Therapy', 'link': '/addtherapies' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Offers',
            'items' : [{ 'title': 'List Offers', 'link': '/listoffer' }, { 'title': 'Add Offer', 'link': '/addoffer' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Services',
            'items' : [{ 'title': 'List Services', 'link': '/listservices' }, { 'title': 'Add Service', 'link': '/addservices' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Cities',
            'items' : [{ 'title': 'List Cities', 'link': '/listcities' }, { 'title': 'Add City', 'link': '/addcity' }, { 'title': 'List Areas', 'link': '/listareas' }, { 'title': 'Add Area', 'link': '/addarea' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Inquiries',
            'items' : [{ 'title': 'Book Now', 'link': '/booknow' }, { 'title': 'Call now', 'link': '/callnow' }]
        },
        {
            'type' : 'dropdown',
            'title' : 'Blogs',
            'items' : [{ 'title': 'List Blogs', 'link': '/listblogs' }, { 'title': 'Add Blog', 'link': '/addblog' }]
        },
        {
            'type' : 'dropdown',
            'title' : "FAQ's",
            'items' : [{ 'title': "List FAQ's", 'link': '/listfaqs' }]
        }
    ]



    return (
        <>
            <div className='sidebar-container'>
                <div className='sidebar-item'>
                    <div className='logo'>Trakky</div>
                </div>
                {
                    list.map((item , index) => {
                        if (item.type === 'normal'){
                            return <SidebarItem title={item.title} link={item.link} key={index} />
                        }
                        else{
                            return <SidebarDropdown selected={selected} setSelected={setSelected} title={item.title} items={item.items} key={index} index={index}/>
                        }
                    })
                }                

            </div>
        </>
    )
}

export default Sidebar

const SidebarItem = (props) => {
    return (
        <Link to={props.link} className='sidebar-item' >
            <div className='single'>{props.title}</div>
        </Link>
    )
}

const SidebarDropdown = (props) => {

    const handleClick = () => {
        if(props.selected === props.index){
            props.setSelected(null);
            
        }
        props.setSelected(props.index);
    }

    return (
        <div className='sidebar-item sidebar-dropdown'>
            <div className='dropdown-title' onClick={handleClick}>
                <div className='dropdown-item-title'>{props.title}</div>
                <div className='dropdown-item-icon'>{(props.selected === props.index) ? 'Up' : 'Down'}</div>
            </div>
            {
                (props.selected === props.index) && <div className='dropdown-description' >
                    {
                        props.items.map((item, key) => {
                            return <DropdownItem title={item.title} link={item.link} key={key} />
                        })
                    }
                </div>
            }
        </div>
    )
}

const DropdownItem = (props) => {
    return (
        <Link to={props.link} className='dropdown-item'>
            {props.title}
        </Link>
    )
}