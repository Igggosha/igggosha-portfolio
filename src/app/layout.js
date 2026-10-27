import "./globals.css";

export const metadata = {
  title: "Igggosha | Roblox Lua Developer",
  description:
    "Roblox scripter portfolio for Igggosha: gameplay systems, procedural worlds, physics, vehicles, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
