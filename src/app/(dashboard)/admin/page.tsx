import Announcements from "@/app/components/Announcements"
import AttendanceChart from "@/app/components/AttendanceChart"
import CountChart from "@/app/components/CountChart"
import EventCalendar from "@/app/components/EventCalendar"
import FinanceChart from "@/app/components/FinanceChart"
import UserCard from "@/app/components/UserCard"

const AdminPage=()=>{
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w:full lg:w-2/3 flex flex-col gap-8">
            {/* User cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>    
                    <UserCard type="parent"/>    
                    <UserCard type="staff"/>    
                </div>
                {/* Middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART  */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart/>
                    </div>
                    {/* ATTENDANCE CHART  */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                    <AttendanceChart/>
                    </div>
                </div>
                {/* Bottom charts */}
                <div className="w-full h-[500px]">
                    <FinanceChart/>
                </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <EventCalendar/>
            <Announcements/>
            </div>
        </div>
    )
}
export default AdminPage