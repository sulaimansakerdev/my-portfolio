"use client";

import React, { useEffect, useState } from "react";
import Header from "./header";

const HeaderWithScroll: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCollapsed(window.scrollY >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Header collapsed={collapsed} />;
};

export default HeaderWithScroll;
