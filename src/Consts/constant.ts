import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import { LangModal } from "@/Components/LangModal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { TCategory } from "@/types/Expenses";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AttractionsIcon from "@mui/icons-material/Attractions";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

type ModalType = string | (() => React.JSX.Element);

type SideBarPage = {
  Icon: React.ElementType;
  text: string;
  modal: ModalType;
};

export const sideBarPages: SideBarPage[] = [
  { Icon: DashboardIcon, text: "dashBoard", modal: "/dashBoard" },
  { Icon: PermIdentityIcon, text: "account", modal: "/dashBoard" },
  { Icon: CreditCardIcon, text: "cards", modal: "/dashBoard" },
  { Icon: SettingsIcon, text: "settings", modal: "/dashBoard/settings" },
  { Icon: LanguageIcon, text: "language", modal: LangModal },
];
export const categories: Record<string, TCategory> = {
  Groceries: {
    color: "#ff0000",
    text: "Groceries",
  },
  Entertainment: {
    color: "#00ff00",
    text: "Entertainment",
  },
  Utilities: {
    color: "#0000ff",
    text: "Utilities",
  },
  "Dining Out": {
    color: "#ff9900",
    text: "Dining Out",
  },
  Travel: {
    color: "#6600cc",
    text: "Travel",
  },
  Health: {
    color: "#ff66b2",
    text: "Health",
  },
  Shopping: {
    color: "#ffa500",
    text: "Shopping",
  },
  Fitness: {
    color: "#008080",
    text: "Fitness",
  },
  Hobbies: {
    color: "#800080",
    text: "Hobbies",
  },
  Work: {
    color: "#008000",
    text: "Work",
  },
  Bills: {
    color: "#800000",
    text: "Bills",
  },
  Education: {
    color: "#800080",
    text: "Education",
  },
};

export const categoryIcons: Record<string, any> = {
  Groceries: KitchenIcon,
  Entertainment: AttractionsIcon,
  "Dining Out": DeliveryDiningIcon,
  Travel: ConnectingAirportsIcon,
  Health: LocalHospitalIcon,
  Shopping: LocalMallIcon,
  Fitness: FitnessCenterIcon,
  Hobbies: FitnessCenterIcon,
  Work: FitnessCenterIcon,
  Bills: FitnessCenterIcon,
  Education: FitnessCenterIcon,
};
export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
