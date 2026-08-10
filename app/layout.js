import "./global.css";

export const metadata = {
  title: "Happy Birthday Special 🌸",
  description: "Website ucapan ulang tahun spesial bertema bunga dan foto kartu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#FFF0F5] text-[#92003A] antialiased selection:bg-[#F62477] selection:text-white">
        {children}
      </body>
    </html>
  );
}
