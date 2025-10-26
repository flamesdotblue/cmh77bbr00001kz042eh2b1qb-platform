export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950 py-10 text-neutral-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-white">Astra IAS Academy</div>
          <p className="mt-2 text-sm">Empowering aspirants with structured learning and modern tools.</p>
        </div>
        <div>
          <div className="text-white">Contact</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Email: hello@astra-ias.example</li>
            <li>Phone: +91 98XX-XX-XXXX</li>
            <li>Address: Patel Nagar, New Delhi</li>
          </ul>
        </div>
        <div>
          <div className="text-white">Legal</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-neutral-500">
        © {new Date().getFullYear()} Astra IAS Academy. All rights reserved.
      </div>
    </footer>
  );
}
