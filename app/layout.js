import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <nav className="flex h-20 items-center justify-between border-2 border-black bg-black p-8 text-white">
          <div className="logo">LOGO</div>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
