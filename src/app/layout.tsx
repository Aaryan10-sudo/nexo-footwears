"use client";
import { Provider } from "react-redux";
import "./(main)/globals.css";
import store from "@/store/store";
import ClientInfo from "@/client/ClientInfo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ClientInfo />
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
