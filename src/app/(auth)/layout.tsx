import "../(main)/globals.css";
export const metadata = {
  title: "Nexo footwears",
  description: "Step into fashion with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
