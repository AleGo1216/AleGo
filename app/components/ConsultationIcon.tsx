"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export default function ConsultationIcon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 200);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", right: 28, bottom: 28, zIndex: 1200 }}>
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<MessageOutlined />}
        className={`consultation ${visible ? "show" : ""}`}
        aria-label="Consultation"
        onClick={() => {
          // 这里可以触发打开聊天窗或滚动至联系表单
          const el = document.querySelector("#contact");
          if (el && el instanceof HTMLElement) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}