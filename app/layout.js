import {
  Caudex,
  Hammersmith_One,
  Montserrat_Alternates,
  Nothing_You_Could_Do,
  Palanquin,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const nothing_you_could_do = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nothing-you-could-do",
});

const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caudex",
});

const palanquin = Palanquin({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-palanquin",
});

const montserrat_alternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates",
});

const hammersmith_one = Hammersmith_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hammersmith-one",
});

const work_sans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata = {
  title: "SolidarMobil e.V.",
  description:
    "Als Gemeinnütziger Verein wollen wir die Mobilität auf dem Land (v.a. Hersbrucker Umland) voranbringen.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark_blue_green" lang="de">
      <body
        className={`
            ${nothing_you_could_do.variable}
            ${caudex.variable}
            ${palanquin.variable}
            ${montserrat_alternates.variable}
            ${hammersmith_one.variable}
            ${work_sans.variable}
        `}
      >
        <Navbar />
        <main className="bg-base-100 min-h-screen w-full text-base-content">
          {children}
        </main>
      </body>
    </html>
  );
}
