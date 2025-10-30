import React from "react";
import { Typography } from "antd";
import { BgColorsOutlined, HighlightOutlined, ClockCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function Features() {
  const cards = [
    { icon: <BgColorsOutlined style={{ fontSize: 36 }} />, title: "Unique Design", desc: "One-of-a-kind concepts" },
    { icon: <HighlightOutlined style={{ fontSize: 36 }} />, title: "Artisan Painted", desc: "Skilled craftsmen painting" },
    { icon: <ClockCircleOutlined style={{ fontSize: 36 }} />, title: "Limited Release", desc: "Short availability" },
    { icon: <SafetyCertificateOutlined style={{ fontSize: 36 }} />, title: "Quality Guarantee", desc: "Trusted service" }
  ];

  return (
    <section className="features container" aria-label="features">
      {cards.map((c) => (
        <div key={c.title} className="feature-card" role="article">
          {c.icon}
          <h3>{c.title}</h3>
          <span  style={{ fontSize: 13 }}>{c.desc}</span>
        </div>
      ))}
    </section>
  );
}