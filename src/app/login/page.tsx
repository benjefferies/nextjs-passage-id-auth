"use client";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);

  return (
    <main>
      <passage-auth app-id="Q3igMGfhyBLKp5UpCfCZoJYD"></passage-auth>
    </main>
  );
}
