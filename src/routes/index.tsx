import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Food4You" },
      { name: "description", content: "Rezepte entdecken, swipen und kochen." },
      { property: "og:title", content: "Food4You" },
      { property: "og:description", content: "Rezepte entdecken, swipen und kochen." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#121212", color: "#fff" }}>
      Lade Food4You…
    </div>
  );
}
