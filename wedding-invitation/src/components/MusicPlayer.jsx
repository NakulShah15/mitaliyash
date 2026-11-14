import { motion } from "framer-motion";
import { Music2, VolumeX } from "lucide-react";
import { useMusic } from "../context/MusicContext";
import { useLanguage } from "../context/LanguageContext";

// The underlying <audio> element lives in MusicProvider and is never remounted,
// so toggling language or navigating never restarts it.
export default function MusicPlayer() {
  const { isPlaying, toggle } = useMusic();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? t.music.nowPlaying : t.music.tapToPlay}
      title={isPlaying ? t.music.nowPlaying : t.music.tapToPlay}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-maroon text-gold shadow-md shadow-black/20 transition-transform hover:scale-105 active:scale-95 ${
        isPlaying ? "animate-pulse-glow" : ""
      }`}
    >
      {isPlaying ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center"
        >
          <Music2 size={22} />
        </motion.span>
      ) : (
        <VolumeX size={22} />
      )}
    </button>
  );
}
