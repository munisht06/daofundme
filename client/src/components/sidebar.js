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

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
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
              <Modal open={open} onClose={handleClose}>
                <FundraiserModal />
              </Modal>
              Create Fundraiser
            </Button>
          </Box>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
