import { motion } from "motion/react";
import { Linkedin, User } from "lucide-react";
import type { TeamMember } from "../data/types";
import { useLanguage } from "../context/LanguageContext";

interface TeamMemberCardProps {
    member: TeamMember;
    index?: number;
}

function PlaceholderAvatar({ isLeader }: { isLeader?: boolean }) {
    return (
        <div
            className={`w-full h-full flex flex-col items-center justify-center ${isLeader
                    ? "bg-gradient-to-br from-espresso to-mink"
                    : "bg-gradient-to-br from-linen to-warm-beige"
                }`}
        >
            <User
                className={`${isLeader ? "w-20 h-20 text-cream/40" : "w-14 h-14 text-taupe/40"}`}
            />
        </div>
    );
}

export function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
    const { t } = useLanguage();

    const translatedRole = member.role === "Coordinator" ? t("team.role.coordinator") : t("team.role.member");
    const translatedBio = t("team.bio");

    if (member.isLeader) {
        // Leader card — large, centred, gold-accented
        return (
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group max-w-sm mx-auto"
            >
                <div
                    className="relative rounded-2xl overflow-hidden shadow-[0_12px_60px_rgba(61,43,31,0.18)] border-2"
                    style={{ borderColor: "#B8965E" }}
                >
                    {/* Photo area */}
                    <div className="relative h-80 overflow-hidden group" style={{ background: "linear-gradient(135deg, #FDF8F3 0%, #F5EAE0 35%, #EDE0D4 65%, #E5D4C4 100%)" }}>
                        {/* Animated Aura Background (Persistent) */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-gold/30 via-wine/10 to-transparent mix-blend-multiply" />
                            <motion.div 
                                className="absolute top-0 right-0 w-64 h-64 bg-gold/30 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"
                                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div 
                                className="absolute bottom-0 left-0 w-72 h-72 bg-wine-pale/30 blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            />
                        </div>
                        
                        {member.image ? (
                            <div className="absolute inset-0 pt-8 pb-0 px-4 flex items-end justify-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[95%] object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-700 relative z-10 drop-shadow-2xl"
                                />
                            </div>
                        ) : (
                            <PlaceholderAvatar isLeader />
                        )}

                        {/* Gold gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

                        {/* Leader badge */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                            <span className="bg-gold text-cream text-xs font-medium tracking-[0.15em] uppercase px-4 py-1.5 rounded-full shadow-lg">
                                {t("team.leaderBadge")}
                            </span>
                        </div>

                        {/* Name overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-wine-dark/90 to-transparent z-20">
                            <a 
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gold transition-colors inline-block"
                            >
                                <h3 className="font-heading text-cream text-3xl mb-0.5 drop-shadow-lg">{member.name}</h3>
                            </a>
                            <p className="text-gold-light text-sm tracking-wide mix-blend-plus-lighter">{translatedRole}</p>
                        </div>
                    </div>

                    {/* Bio + LinkedIn */}
                    <div className="bg-espresso p-6">
                        <p className="text-cream/80 text-sm leading-relaxed mb-4">{translatedBio}</p>
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gold text-xs hover:text-gold-light transition-colors tracking-wider uppercase"
                        >
                            <Linkedin className="w-4 h-4" />
                            {t("team.linkedin")}
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Regular member card
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group"
        >
            <div className="luxury-card overflow-hidden">
                {/* Photo */}
                <div className="relative h-64 border-b border-gold/10 overflow-hidden group/photo" style={{ background: "linear-gradient(135deg, #FDF8F3 0%, #F5EAE0 35%, #EDE0D4 65%, #E5D4C4 100%)" }}>
                    {/* Animated Aura Background (Persistent) */}
                    <div className="absolute inset-0">
                        <motion.div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-wine-pale/20 blur-[40px] rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute bottom-0 right-0 w-32 h-32 bg-gold/20 blur-[30px] rounded-full translate-x-1/4 translate-y-1/4"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    {member.image ? (
                        <div className="absolute inset-0 pt-8 pb-0 px-3 flex items-end justify-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[95%] object-contain object-bottom group-hover/photo:scale-[1.03] transition-transform duration-700 relative z-10 drop-shadow-xl"
                            />
                        </div>
                    ) : (
                        <PlaceholderAvatar />
                    )}
                    <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-all duration-400 z-20 pointer-events-none" />

                    {/* LinkedIn on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-espresso hover:bg-wine hover:text-cream transition-colors shadow-xl"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Info */}
                <div className="p-5">
                    <h3 className="font-heading text-espresso text-xl mb-1 leading-tight">{member.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-[0.1em] mb-3">{translatedRole}</p>
                    <p className="text-taupe text-sm leading-relaxed line-clamp-3">{translatedBio}</p>
                </div>
            </div>
        </motion.div>
    );
}
