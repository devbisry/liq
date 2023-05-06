"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";

export default function Header({ children, lng }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <Navbar open={open} handleDrawerOpen={() => setOpen(!open)}/> */}
      <Sidebar open={open} setOpen={setOpen} lng={lng}>
        {children}
      </Sidebar>
    </div>
  );
}
