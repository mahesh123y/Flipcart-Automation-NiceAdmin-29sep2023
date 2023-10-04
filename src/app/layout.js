import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../../public/assets/vendor/quill/quill.snow.css";
import "../../public/assets/vendor/quill/quill.bubble.css";
import "../../public/assets/vendor/remixicon/remixicon.css";
import "../../public/assets/vendor/simple-datatables/style.css";
import "../../public/assets/css/style.css";
import "./globals.css";

import Script from "next/script";

// import { importnamed1, importnamed2, .....} from 'somelibrary/some location'

import { Open_Sans, Nunito, Poppins } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ['300', '400', '500', '600', '700'],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ['200', '300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Dashboard - NiceAdmin Bootstrap Template",
  description: "content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${nunito.className} ${poppins.className}`}
      >
        {children}

        
      </body>
    </html>
  );
}
