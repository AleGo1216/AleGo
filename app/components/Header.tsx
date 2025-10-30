"use client";
import React, { useEffect, useState } from "react";
import { Input, Menu, Button, Space, Switch } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  MailOutlined,
  MenuOutlined,
  BulbOutlined
} from "@ant-design/icons";
import { useTheme } from "./ThemeProvider";

const { Search } = Input;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { key: "home", label:  (<a href="/" rel="noopener noreferrer">
   Home
  </a>)},
    { key: "collections", label:(<a href="/shop"  rel="noopener noreferrer">
    Collections
   </a>)  },
    { key: "limited", label: (<><a href="https://ant.design"  rel="noopener noreferrer">
    Limited Masterpieces
    </a> <span className="tooltipText">Discover our exclusive, limited-edition sculptures.</span>
   </>)},
    { key: "guide", label: (<><a href="https://ant.design"  rel="noopener noreferrer">
    Buyer's Guide
    </a>
        <span className="tooltipText">Tips and information for collectors.</span>
       </>) },
    { key: "about", label:(<a href="https://ant.design"  rel="noopener noreferrer">
    About / Contact
   </a>)  }
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div className="logo">ALeToys</div>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <Menu
          mode="horizontal"
          selectable={false}
          items={items.map((it) => ({ key: it.key, label: it.label }))}
          style={{ background: "transparent", border: "none", boxShadow: "none" }}
      
        />
      </nav>

      <div className="icons" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* <Search
          placeholder="Search..."
          allowClear
          prefix={<SearchOutlined />}
          style={{ width: 240 }}
          aria-label="Search"
        /> */}
        <Space size="small">
          <Button type="text" icon={<HeartOutlined />} aria-label="Favorites" />
          <Button type="text" icon={<UserOutlined />} aria-label="Account" />
          <Button type="primary" icon={<MailOutlined />} onClick={() => (location.hash = "#contact")}>
            Contact
          </Button>

          {/* Theme toggle using Antd Switch (plus fallback button) */}
          <Space align="center">
            <BulbOutlined />
            <Switch
              checked={theme === "dark"}
              onChange={(checked) => setTheme(checked ? "dark" : "light")}
              aria-label="Toggle theme"
            />
          </Space>
        </Space>
      </div>
    </header>
  );
}