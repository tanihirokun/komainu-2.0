import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlagIcon from '@mui/icons-material/Flag';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AlarmIcon from '@mui/icons-material/Alarm';
import SettingsIcon from '@mui/icons-material/Settings';



export const SidebarData = [

  {
    icon: HomeIcon,
    title: 'トップ',
    url: '/top'
  },
  {
    icon: VisibilityIcon,
    title: '状態監視',
    url: '/dailyshift'
  },
  {
    icon: WorkIcon,
    title: '案件一覧',
    url: '/projectlist'
  },
  {
    icon: AssignmentIndIcon,
    title: '配置',
    url: "/assignmentbydate"
  },
  {
    icon: DateRangeIcon,
    title: '月間シフト',
    url: "/monthlyshift"
  },
  {
    icon: FlagIcon,
    title: '月間受注発注',
    url: "/monthlyorder"
  },
  {
    icon: ScheduleIcon,
    title: '実稼働実績',
    url: "/worktimelist"
  },
  {
    icon: PeopleIcon,
    title: '隊員一覧',
    url: "/guardlist"
  },
  {
    icon: BusinessIcon,
    title: '顧客一覧',
    url: "/customerslist"
  },
  {
    icon: SportsKabaddiIcon,
    title: '協力会社一覧',
    url: "/partnerslist"
  },
  {
    icon: AirlineSeatIndividualSuiteIcon,
    title: '休暇申請',
    url: "/holidayrequestlist"
  },
  {
    icon: AnnouncementIcon,
    title: 'お知らせ',
    url: "/newslist"
  },
  {
    icon: AlarmIcon,
    title: 'アラート',
    url: "/alertlist"
  },
  {
    icon: SettingsIcon,
    title: '設定',
    margin: 5,
    url: "/settings"
  },
];
