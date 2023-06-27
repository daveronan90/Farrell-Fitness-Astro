import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import TextLogo from "./FFTextLogo";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <a className="relative z-50" href="/">
        <TextLogo />
      </a>
      <div onClick={() => setToggled(!toggled)} className="md:hidden">
        <div className="relative z-50 mr-2">
          <Hamburger toggled={toggled} toggle={setToggled} size={20} />
        </div>
        {toggled && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-orange-600"
          >
            <div className="flex h-full flex-col items-center justify-evenly">
              <a className="hover:text-orange-800" href="/">
                Home
              </a>
              <a className="hover:text-orange-800" href="/pricing">
                Membership
              </a>
              <a className="hover:text-orange-800" href="/classes">
                Classes
              </a>
              <a className="hover:text-orange-800" href="/results">
                results
              </a>
            </div>
          </motion.div>
        )}
      </div>
      <div className="md:flex hidden w-full justify-end items-center text-xl relative z-20 space-x-6">
        <a className="hover:text-orange-800" href="/">
          home
        </a>
        <a className="hover:text-orange-800" href="/pricing">
          membership
        </a>
        <a className="hover:text-orange-800" href="/classes">
          classes
        </a>
        <a className="hover:text-orange-800" href="/results">
          results
        </a>
      </div>
    </nav>
  );
}
