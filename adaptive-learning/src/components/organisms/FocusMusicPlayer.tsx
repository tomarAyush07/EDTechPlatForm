import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  min-width: 280px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CoverArt = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.neutral[200]};
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const TrackInfo = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TrackName = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
`;

const Artist = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[50]};
  }

  &.play {
    width: 60px;
    height: 60px;
    background: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    font-size: 2rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ progress }: { progress: number }) => `${progress}%`};
    background: ${({ theme }) => theme.colors.primary[500]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: width 0.1s linear;
  }
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Playlist = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const PlaylistItem = styled.div<{ isPlaying?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ isPlaying, theme }) => isPlaying ? theme.colors.primary[50] : 'transparent'};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

const PlaylistItemInfo = styled.div`
  flex: 1;
`;

const PlaylistItemTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const PlaylistItemArtist = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  url: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Focus Flow",
    artist: "Study Beats",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    url: "https://example.com/track1.mp3"
  },
  {
    id: 2,
    title: "Deep Concentration",
    artist: "Mind Waves",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    url: "https://example.com/track2.mp3"
  },
  {
    id: 3,
    title: "Productive Mindset",
    artist: "Focus Flow",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    url: "https://example.com/track3.mp3"
  }
];

export const FocusMusicPlayer: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0);
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  const updateProgress = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTrackClick = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = track.url;
      audioRef.current.play();
    }
  };

  return (
    <PlayerContainer>
      <Title>
        <span role="img" aria-label="music">🎵</span>
        Focus Music
      </Title>
      <CoverArt
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={currentTrack.cover} alt={currentTrack.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </CoverArt>
      <TrackInfo>
        <TrackName>{currentTrack.title}</TrackName>
        <Artist>{currentTrack.artist}</Artist>
      </TrackInfo>
      <ProgressBar progress={progress} />
      <TimeInfo>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </TimeInfo>
      <Controls>
        <ControlButton>⏮</ControlButton>
        <ControlButton className="play" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </ControlButton>
        <ControlButton>⏭</ControlButton>
      </Controls>
      <Playlist>
        {tracks.map(track => (
          <PlaylistItem
            key={track.id}
            isPlaying={track.id === currentTrack.id}
            onClick={() => handleTrackClick(track)}
          >
            <PlaylistItemInfo>
              <PlaylistItemTitle>{track.title}</PlaylistItemTitle>
              <PlaylistItemArtist>{track.artist}</PlaylistItemArtist>
            </PlaylistItemInfo>
          </PlaylistItem>
        ))}
      </Playlist>
      <audio ref={audioRef} src={currentTrack.url} />
    </PlayerContainer>
  );
}; 