import Head from "next/head";
import Link from "next/link";
import imgHero from "../public/img/SolidarMobil_hands_transparent.png";
import imgHelping from "/public/img/undraw/011b28/undraw_fatherhood_eldm.svg";
import imgFriends from "/public/img/undraw/011b28/undraw_coffee-with-friends_ocg2.svg";
import imgJoin from "/public/img/undraw/011b28/undraw_join_6quk.svg";
import imgCarsharing from "/public/img/undraw/011b28/undraw_order-a-car_x5mq.svg";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          SolidarMobil - Teilen von Autos, Fahr- und Lastenrad, etc.
        </title>
        <meta
          name="description"
          content="Unser Carsharing-Verein im oberen und mittleren Pegnitztal
                   bietet dir die Möglichkeit, Mobilität neu zu denken:
                   nachhaltig, kosteneffizient und solidarisch."
          key="desc"
        />
      </Head>
      <div className="hero bg-neutral text-secondary md:py-28 md:px-12 pb-6">
        <div className="hero-content flex-col flex-col-reverse lg:flex-row-reverse">
          <img
            src={imgHero.src}
            className="md:max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              SolidarMobil – Gemeinsam für eine nachhaltige Mobilität!
            </h1>
            <p className="py-6">
              In einer Welt, in der umweltfreundliche Lösungen immer wichtiger
              werden, setzen wir von SolidarMobil auf die Kraft der
              Gemeinschaft. Unser Carsharing-Verein im oberen und mittleren
              Pegnitztal bietet dir die Möglichkeit, Mobilität neu zu denken:
              nachhaltig, kosteneffizient und solidarisch.
            </p>
            {/*
            <button className="btn btn-primary">Mitglied werden</button>
          */}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse ">
        <img
          src={imgCarsharing.src}
          className="md:max-w-md shadow-2xl max-w-sm rounded-lg mb-12 md:my-12 md:mx-16"
          alt=""
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Willkommen bei SolidarMobil!</h1>
          <p>
            Wir freuen uns, Dir unseren neu gegründeten Carsharing-Verein
            SolidarMobil vorzustellen! Obwohl wir derzeit noch keine eigenen
            Vereinsautos zum Verleihen besitzen, haben wir uns zum Ziel gesetzt,
            eine zentrale Anlaufstelle für alle Interessierten in der Umgebung
            zu schaffen. Bei uns findest Du eine Plattform, um gelegentlich ein
            Auto oder Fahrrad/Lastenrad auszuleihen oder anderen die Möglichkeit
            zu bieten, Dein Fahrzeug zu nutzen.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row ">
        <img
          src={imgFriends.src}
          className="md:max-w-md shadow-2xl max-w-sm rounded-lg mb-12 md:my-12 md:mx-16"
          alt=""
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Gemeinsam für nachhaltige Mobilität</h1>
          <p>
            SolidarMobil ist mehr als nur ein Carsharing-Dienst – wir sind eine
            Gemeinschaft, die sich für nachhaltige Mobilität und den Austausch
            von Ressourcen einsetzt. Wir möchten Dir helfen, die Vorteile des
            Carsharings zu entdecken und gleichzeitig einen Beitrag zum
            Umweltschutz zu leisten.
          </p>
          <Link href="/ueber_uns" className="btn btn-primary mt-5">
            Mehr über uns
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse ">
        <img
          src={imgHelping.src}
          className="md:max-w-md shadow-2xl max-w-sm rounded-lg mb-12 md:my-12 md:mx-16"
          alt=""
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Unterstützung und Beratung</h1>
          <p>
            Darüber hinaus stehen wir Dir mit Rat und Tat zur Seite, wenn es um
            rechtliche Fragen und Versicherungen geht. Unser Ziel ist es, Dir
            den Einstieg in die Welt des Carsharings zu erleichtern und Dir alle
            notwendigen Informationen zur Verfügung zu stellen, damit Du sicher
            und sorgenfrei fahren kannst. Zudem haben wir ein Wiki eingerichtet,
            in dem wir alle wichtigen Informationen bereitstellen wollen, damit
            Du jederzeit auf das benötigte Know-How zugreifen kannst.
          </p>
          <Link href="/wiki" className="btn btn-primary mt-5">
            Zum Wiki
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row ">
        <img
          src={imgJoin.src}
          className="md:max-w-md shadow-2xl max-w-sm rounded-lg mb-12 md:my-12 md:mx-16"
          alt=""
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Werde Teil unserer Zukunft</h1>
          <p>
            Gemeinsam arbeiten wir daran, mittelfristig eine eigene Flotte von
            Fahrzeugen aufzubauen, um Dir noch mehr Möglichkeiten zu bieten.
            Werde Teil unserer Gemeinschaft und gestalte mit uns die Zukunft der
            Mobilität!
          </p>
          <div className="divider"></div>
          <h1 className="!text-2xl mb-3">Stammtisch</h1>
          <p>
            Lust auf Austausch bei einem Getränk? Wir treffen uns regelmäßig
            zum Stammtisch – jeden 2. Freitag im Monat ab 19:30 Uhr im
            Kulturbahnhof (KuBa) Hersbruck. Ob Fragen, Ideen oder einfach gute
            Gespräche: Komm einfach vorbei, wir freuen uns auf Dich!
          </p>
          <p>
            <a
              href="https://kulturbahnhof-hersbruck.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-info"
            >
              kulturbahnhof-hersbruck.de
            </a>
          </p>

          <p className="mt-4">Oder schreib uns einfach:</p>
          <p className="flex">
            <FaEnvelope className="me-3" />
            <a className="link-info" href="mailto:{data.EMAIL_ADDR}">
              info@solidarmobil.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
