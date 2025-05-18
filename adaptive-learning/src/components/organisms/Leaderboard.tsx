import React from 'react';
import styled from '@emotion/styled';

const LeaderboardContainer = styled.div`
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
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li<{ top?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ top, theme }) => top ? theme.colors.primary[100] : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ top, theme }) => top ? theme.spacing.sm : '0'};
  box-shadow: ${({ top, theme }) => top ? theme.shadows.sm : 'none'};
  font-weight: ${({ top }) => top ? 600 : 400};
  transition: background 0.2s;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const Name = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const Score = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: 600;
`;

const users = [
  { name: 'Alex', avatar: 'https://i.pravatar.cc/100?img=1', score: 1200 },
  { name: 'Priya', avatar: 'https://i.pravatar.cc/100?img=2', score: 1100 },
  { name: 'Sam', avatar: 'https://i.pravatar.cc/100?img=3', score: 950 },
  { name: 'Jordan', avatar: 'https://i.pravatar.cc/100?img=4', score: 900 },
  { name: 'Taylor', avatar: 'https://i.pravatar.cc/100?img=5', score: 850 },
];

export const Leaderboard: React.FC = () => {
  return (
    <LeaderboardContainer>
      <Title>Leaderboard</Title>
      <List>
        {users.map((user, idx) => (
          <ListItem key={user.name} top={idx < 3} style={idx < 3 ? { animation: 'pop 0.5s' } : {}}>
            <Avatar src={user.avatar} alt={user.name} />
            <Name>{user.name}</Name>
            <Score>{user.score}</Score>
          </ListItem>
        ))}
      </List>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </LeaderboardContainer>
  );
}; 