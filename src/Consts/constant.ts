import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import { LangModal } from "@/Components/LangModal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardIcon from "@mui/icons-material/Dashboard";
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
