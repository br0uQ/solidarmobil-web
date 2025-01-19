import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-primary text-white p-5 flex justify-center underline text-sm">
      {/*
        <Link href="/kontakt" className="link link-hover">Kontakt</Link>
        <a href={"./satzung.pdf"} className="link link-hover">Satzung</a>
      */}
      <Link href="/doc/Satzung.pdf" className="link link-hover">
        Satzung
      </Link>
      <Link href="/doc/Beitragsordnung_15_01_25.pdf" className="link link-hover">
        Beitragsordnung
      </Link>
      <Link href="/datenschutz" className="link link-hover">
        Datenschutzhinweise
      </Link>
      <Link href="/impressum" className="link link-hover">
        Impressum
      </Link>
    </footer>
  );
}
