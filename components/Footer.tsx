import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-white">
          Gurjeet Kaur<span className="text-teal">.</span>
        </p>
        <p className="text-muted text-xs">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
