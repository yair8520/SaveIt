import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import { LangModal } from "@/Components/LangModal";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export const sideBarPages = [
  { Icon: PermIdentityIcon, text: "account", modal: LangModal },
  { Icon: CreditCardIcon, text: "cards", modal: LangModal },
  { Icon: SettingsIcon, text: "settings", modal: LangModal },
  { Icon: LanguageIcon, text: "language", modal: LangModal },
];
