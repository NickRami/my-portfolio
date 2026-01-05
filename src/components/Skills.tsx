import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Cpu, ChevronsRight } from "lucide-react";

export default function Skills() {
  const { t } = useApp();

  // Helper to safely get array from translations
  const getList = (key: string) => {
    const items = t(key);
    return Array.isArray(items) ? items : [];
  };

  const categories = [
    { title: t('skills.frontend'), items: getList('skills.frontend.items') },
    { title: t('skills.backend'), items: getList('skills.backend.items') },
    { title: t('skills.data'), items: getList('skills.data.items') },
    { title: t('skills.practices'), items: getList('skills.practices.items') },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-t border-white/5">

      <div className="max-w-4xl mx-auto">
        {/* Header Compacto */}
        <div className="flex items-center gap-3 mb-12">
          <span className="p-2 rounded bg-yellow-500/10 text-yellow-500">
            <Cpu size={20} />
          </span>
          <h2 className="text-2xl md:text-3xl font-medium">
            Technical Expertise
          </h2>
        </div>

        {/* Lista Limpia de Skills */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground/90 border-b border-white/10 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cat.items.map((item: string, i: number) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors cursor-default">
                    <ChevronsRight size={12} className="text-yellow-500 opacity-50" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
