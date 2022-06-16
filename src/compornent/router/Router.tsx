import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { AlertsList } from "../../pages/alertList/AlertsList";
import { AssignmentByDate } from "../../pages/assignmentBydate/AssignmentByDate";
import { CustomersList } from "../../pages/customersList/CustomersList";
import { DailySift } from "../../pages/dailySihit/DailySift";
import { GuardsList } from "../../pages/guardsList/GuardsList";
import { HolidayRequestList } from "../../pages/holidayRequestList/HolidayRequestList";
import { MonthlyOrder } from "../../pages/monthlyOrder/MonthlyOrder";
import { MonthlyShift } from "../../pages/monthlyShift/MonthlyShift";
import { NewsList } from "../../pages/newsList/NewsList";
import { PartnersList } from "../../pages/partnersList/PartnersList";
import { ProjectList } from "../../pages/projectList/ProjectList";
import { Setting } from "../../pages/settings/Setting";
import { Top } from "../../pages/top/Top";
import { WorkTimeList } from "../../pages/workTimeList/WorkTimeList";
// import Header from "../header/Header";

export const Router: FC = memo(() => {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/top" element={<Top />} />
        <Route path="/dailyshift" element={<DailySift />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/assignmentbydate" element={<AssignmentByDate />} />
        <Route path="/monthlyshift" element={<MonthlyShift />} />
        <Route path="/monthlyorder" element={<MonthlyOrder />} />
        <Route path="/worktimelist" element={<WorkTimeList />} />
        <Route path="/guardlist" element={<GuardsList />} />
        <Route path="/customerslist" element={<CustomersList />} />
        <Route path="/partnerslist" element={<PartnersList />} />
        <Route path="/holidayrequestlist" element={<HolidayRequestList />} />
        <Route path="/newslist" element={<NewsList />} />
        <Route path="/alertlist" element={<AlertsList />} />
        <Route path="/settings" element={<Setting />} />
    </Routes>
  );
});
