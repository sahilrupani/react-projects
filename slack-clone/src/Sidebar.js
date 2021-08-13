import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftIcon from '@material-ui/icons/Drafts'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import AddIcon from '@material-ui/icons/Add'
import db from './firebase'
import { UserStateValue } from './StateProvider'


function Sidebar() {

    const [channels,setChannels] = useState([])

    const[{ user}] = UserStateValue()

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc =>({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Spyne</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="threads"/>
            <SidebarOption Icon={InboxIcon} title="Mention & reactions"/>
            <SidebarOption Icon={DraftIcon} title="Drafts"/>
            <SidebarOption title="Saved Items"/>
            <SidebarOption title="Channel browser"/>
            <SidebarOption title="People & user groups "/>
            <SidebarOption title="Apps"/>
            <SidebarOption title="File browser"/>
            <SidebarOption title="Show less"/>
            <hr />
            <SidebarOption title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels"/>
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
