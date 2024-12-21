"use client"

import { Provider } from "react-redux";
import "../(main)/globals.css";
import store from "@/store/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
