import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-slate-800 text-sm font-semibold mb-2 pointer-events-none hidden md:block"
                    >
                        WhatsApp Kontakt
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/4915141389442"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1.5
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Contact via WhatsApp"
            >
                {/* Ambient Ripple Effect */}
                <motion.div
                    className="absolute inset-0 bg-[#25D366] rounded-full"
                    animate={{
                        scale: [1, 1.4, 1.6],
                        opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />

                {/* Secondary Ripple */}
                <motion.div
                    className="absolute inset-0 bg-[#25D366] rounded-full"
                    animate={{
                        scale: [1, 1.25, 1.45],
                        opacity: [0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.7
                    }}
                />

                {/* Main Button */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/40 flex items-center justify-center overflow-hidden">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 md:w-9 md:h-9 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.031 6.172c-2.32 0-4.582.991-6.21 2.726-3.274 3.489-3.274 9.15 0 12.639.851.905 1.892 1.612 3.033 2.104L8 27l3.522-1.127c.502.13 1.011.192 1.524.192 2.32 0 4.582-.99 6.21-2.726 3.274-3.489 3.274-9.15 0-12.639-1.628-1.735-3.89-2.726-6.21-2.726zM9.47 14.997c-.006-.114-.01-.347.028-.496.037-.148.144-.24.262-.346.12-.106.533-.442.533-.442l.742-.623c.054-.044.177-.147.23-.194.054-.047.18-.158.232-.204.102-.092.19-.177.184-.293-.005-.118-.121-.242-.227-.35-.106-.108-.944-.954-1.104-1.116-.16-.162-.437-.08-.567.012-.132.09-.619.62-.619.62-.128.14-.245.26-.26.438-.015.178.04.414.282.784.24.37.585.83.585.83.74 1.155 1.712 1.838 2.378 2.228.667.39 1.115.545 1.487.622.37.078.696.03 1.002-.127.306-.157.734-.693.734-.693.111-.144.153-.306.07-.428-.083-.122-.724-.866-.724-.866-.082-.101-.22-.123-.334-.05-.114.074-.323.238-.45.319-.127.081-.237.06-.35-.02-.112-.08-.501-.303-.501-.303-.78-.44-1.396-1.12-1.762-1.92z" transform="translate(0 -3)" />
                        <path d="M17.507 14.307c-.41-1.987-1.33-3.805-2.617-5.228C13.262 7.344 11.233 6.4 9.056 6.4 4.062 6.4 0 10.462 0 15.456c0 1.6.415 3.126 1.154 4.453L0 25.408l5.652-1.482c1.033.513 2.193.805 3.42.805 4.993 0 9.056-4.062 9.056-9.056 0-.455-.034-.903-.102-1.336-.006-.037-.013-.07-.019-.11zm-8.451 8.353c-1.34 0-2.623-.37-3.733-1.025l-.268-.157-3.328.873.888-3.243-.173-.275a7.352 7.352 0 011.123-9.083c2.812-3.001 7.362-3.001 10.174 0 1.405 1.498 2.204 3.461 2.25 5.514.001.076.002.152.002.229 0 4.14-3.37 7.508-7.51 7.508-.475-.001-.94-.047-1.393-.134l-.031-.007zM14.04 15.111c-.13-.065-.774-.382-.894-.426-.12-.043-.207-.065-.294.065-.087.13-.338.426-.414.512-.077.087-.153.098-.283.033-.13-.065-.55-.203-1.047-.647-.387-.345-.648-.771-.724-.9-.076-.13-.008-.2.057-.264.06-.057.13-.152.196-.228.065-.076.087-.13.13-.217.044-.087.022-.163-.01-.228-.033-.065-.294-.707-.404-.972-.107-.258-.215-.224-.294-.228-.076-.004-.163-.004-.25-.004-.087 0-.228.033-.348.163-.12.13-.457.446-.457 1.087 0 .641.467 1.261.533 1.348.065.087.919 1.402 2.228 1.967.311.135.554.215.744.275.313.1.598.086.823.053.25-.037.774-.316.883-.62.11-.304.11-.565.076-.62-.033-.054-.12-.087-.25-.152z" fillRule="evenodd" />
                    </svg>
                </div>
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
