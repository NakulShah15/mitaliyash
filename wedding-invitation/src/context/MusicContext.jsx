import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { weddingConfig } from "../config/weddingConfig";

const MusicContext = createContext(undefined);

// A single <audio> element lives for the lifetime of the whole app (mounted
// once here, never unmounted by section/language changes) so that:
//   - playback is never interrupted by scrolling between sections
//   - toggling the Gujarati/English language never restarts the track
//   - the loop + play/pause state is controlled from one place
export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      })
      .catch(() => {
        // Mobile browsers block autoplay until a genuine user gesture occurs.
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  // Start playback automatically on the very first user interaction
  // anywhere on the page, to respect mobile browser autoplay restrictions.
  useEffect(() => {
    let started = false;
    const startOnInteraction = () => {
      if (started) return;
      started = true;
      play();
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
    window.addEventListener("click", startOnInteraction, { once: true });
    window.addEventListener("touchstart", startOnInteraction, { once: true });
    window.addEventListener("keydown", startOnInteraction, { once: true });
    return () => {
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
  }, [play]);

  return (
    <MusicContext.Provider
      value={{ isPlaying, toggle, play, pause, autoplayBlocked }}
    >
      <audio ref={audioRef} src={weddingConfig.music.src} loop preload="auto" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return ctx;
}

export default MusicContext;
