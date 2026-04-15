import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const DressCode = () => {
  return (
    <section className="py-20 px-6 bg-wedding-ivory relative overflow-hidden">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <p className="font-display text-wedding-purple text-base tracking-[0.3em] uppercase mb-3">
          Dress Code
        </p>

        <h3 className="font-heading text-foreground text-3xl mb-3">
          North Indian Theme
        </h3>

        <p className="font-body text-muted-foreground text-sm mb-10">
          Vibrant colors, rich fabrics, and a touch of regal elegance ✨
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          
          {/* Women */}
          <motion.div
            className="p-6 rounded-xl border border-wedding-gold/20 bg-white/60 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-wedding-gold" />
              <h4 className="font-heading text-lg">Women</h4>
            </div>

            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>Lehenga</li>
              <li>Sharara</li>
              <li>Anarkali</li>
              <li>Traditional attire with intricate embroidery</li>
            </ul>
          </motion.div>

          {/* Men */}
          <motion.div
            className="p-6 rounded-xl border border-wedding-gold/20 bg-white/60 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-wedding-gold" />
              <h4 className="font-heading text-lg">Gentlemen</h4>
            </div>

            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>Sherwani</li>
              <li>Kurta Pyjama</li>
              <li>Regal traditional wear</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 p-5 rounded-xl border border-wedding-gold/20 bg-wedding-dark text-wedding-ivory"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-wide">
            Let your outfit reflect the joy of the celebration with bold colors and timeless elegance ✨
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DressCode;