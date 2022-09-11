import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import FundraiserModal from "./fundraiser/fundraiserModal";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { logout } = useAuth0();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">DaoFundMe</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Box textAlign="center">
            <Button
              sx={{ color: "#C66461", border: "#C66461" }}
              variant="outlined"
              onClick={handleOpen}
            >
              Create Fundraiser
            </Button>
            <Modal open={open} onClose={handleClose}>
              <FundraiserModal />
            </Modal>
          </Box>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
