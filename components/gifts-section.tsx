"use client"

import { motion, Variants } from 'framer-motion'
import { useTranslation } from '@/lib/translations'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const scaleIn: Variants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
}

export default function GiftsSection() {
  const t = useTranslation()
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <motion.section
      id="gifts"
      className="relative py-8 px-4 md:py-12 bg-transparent overflow-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fastStaggerContainer}
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div className="mb-8 flex flex-col items-center" variants={fadeIn}>
          <h2 className="font-handwritten text-7xl md:text-9xl text-[#661314] mb-4 tracking-tight">
            {t('giftsTitle')}
          </h2>
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#661314]/25 to-transparent" />
        </motion.div>

        <motion.div className="w-full max-w-2xl" variants={scaleIn}>
          <div className="bg-transparent border border-[#661314]/20 rounded-lg p-8 md:p-12 shadow-sm">
            <motion.div className="flex flex-col items-center" variants={fadeIn}>
              <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[1/1] mb-6 opacity-90">
                <Image
                  src="/gift.png"
                  alt="Gifts"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <p className="font-serif text-base md:text-lg text-[#661314]/80 italic leading-relaxed max-w-[52ch]">
                {t('giftsMessage')}
              </p>

              <div className="mt-10 w-full">
                <p className="font-luxury text-3xl md:text-4xl text-[#661314] italic text-center">
                  {t('withAllOurLove')}
                </p>

                <div className="mt-10 text-center">
                  <p
                    className={`text-xs md:text-sm text-[#661314]/70 font-bold leading-[1.4] ${
                      isRTL ? '' : 'uppercase tracking-[0.45em]'
                    }`}
                  >
                    {t('bankDetailsTitle')}
                  </p>
                  <div className="mt-5 w-24 h-px bg-gradient-to-r from-transparent via-[#661314]/30 to-transparent mx-auto" />
                </div>

                <div className="mt-6 border border-[#661314]/30 rounded-lg p-6 md:p-8">
                  <div className={`space-y-4 text-[#661314] ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="font-serif text-base md:text-lg tracking-wide">
                      <span className="font-semibold">{t('accountHolderLabel')} </span>
                      <span className="font-bold text-sm md:text-base">ALI MOHAMED SHERIF ABDELFATTAH</span>
                    </div>

                    <div className="font-serif text-base md:text-lg tracking-wide">
                      <span className="font-semibold">{t('accountNumberLabel')} </span>
                      <span className="font-bold text-base md:text-lg font-mono tabular-nums lining-nums whitespace-nowrap leading-tight inline-block align-baseline">
                        077010110006080631477
                      </span>
                    </div>

                    <div className="font-serif text-base md:text-lg tracking-wide">
                      <span className="font-semibold">{t('ibanLabel')} </span>
                      <span className="font-bold text-base md:text-lg font-mono tabular-nums lining-nums whitespace-nowrap leading-tight inline-block align-baseline">
                        SA13 8000 0856 6081 1063 1477
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
