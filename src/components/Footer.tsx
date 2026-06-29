export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex justify-center items-center text-[10px] font-mono text-neutral-600">
        <p>&copy; {currentYear} Eyerusalem Habte. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
