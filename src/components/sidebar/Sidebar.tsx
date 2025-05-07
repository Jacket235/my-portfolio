import "./sidebar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

interface sidebarProps {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

export default function Sidebar({ selectedIndex, setSelectedIndex }: sidebarProps) {
    const icons = [
        <AccountBoxIcon className="aboutMeIcon" />,
        <BuildCircleIcon className="myProjectsIcon" />,
        <SchoolIcon className="myEducationIcon" />,
        <WorkHistoryIcon className="myWorkHistoryIcon" />
    ]

    return (
        <div className="sidebar">
            <div className="sidebarOptions">
                <ul className="sidebarList">
                    {icons.map((icon, index) =>
                        <li key={index} className="sidebarItem" onClick={() => setSelectedIndex(index)}>
                            {icon}
                        </li>
                    )}
                </ul>
                <div className="selectedIndex" style={{ top: `${selectedIndex * 25}%` }}></div>
            </div>
        </div >
    )
}