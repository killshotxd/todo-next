import "../../styles/app.scss";

export const metadata = {
  title: "Todo App",
  description: "Full Stack To do app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
