import WhatsAppWidget from "./components/WhatsAppWidget";
import "./globals.css";

export const metadata = {
  title: "Rishav Enterprise",
  description: "Blasting and Coating Services",
  icons: {
    icon: "/images/logo1.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
            <WhatsAppWidget/>
        {children}
      </body>
    </html>
  );
}