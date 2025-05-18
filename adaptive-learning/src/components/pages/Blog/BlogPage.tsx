import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #64FFDA;
    margin: ${({ theme }) => theme.spacing.md} auto;
    border-radius: 2px;
  }
`;

const SearchBar = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  position: relative;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }

  &::placeholder {
    color: #8892B0;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`;

const CategoryButton = styled(motion.button)<{ active: boolean }>`
  background: ${props => props.active ? '#64FFDA' : 'transparent'};
  color: ${props => props.active ? '#0A192F' : '#E6F1FF'};
  border: 1px solid #64FFDA;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    background: ${props => props.active ? '#64FFDA' : 'rgba(100, 255, 218, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BlogCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

    .blog-image {
      transform: scale(1.1);
    }

    .read-more {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BlogImage = styled.div<{ imageUrl: string }>`
  height: 250px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.9) 100%);
  }
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const BlogCategory = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BlogTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const BlogDescription = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  flex: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ReadMoreButton = styled(motion.button)`
  background: transparent;
  color: #64FFDA;
  border: 1px solid #64FFDA;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  transform: translateY(20px);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  z-index: 2;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const NoResults = styled(motion.div)`
  text-align: center;
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  grid-column: 1 / -1;
`;

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Adaptive Learning',
    description: 'Explore how artificial intelligence is revolutionizing personalized education and creating more effective learning experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Best Practices for Online Learning',
    description: 'Discover proven strategies and techniques to maximize your learning potential in virtual environments.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    date: 'March 12, 2024',
    readTime: '4 min read',
    category: 'Education'
  },
  {
    id: 3,
    title: 'The Psychology of Learning',
    description: 'Understanding how our brains process and retain information can help us become better learners.',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Psychology'
  },
  {
    id: 4,
    title: 'Building Effective Study Habits',
    description: 'Learn how to develop and maintain study habits that lead to academic success and personal growth.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'March 8, 2024',
    readTime: '5 min read',
    category: 'Education'
  },
  {
    id: 5,
    title: 'The Role of AI in Education',
    description: 'How artificial intelligence is transforming traditional education methods and creating new opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    date: 'March 5, 2024',
    readTime: '7 min read',
    category: 'Technology'
  },
  {
    id: 6,
    title: 'Mindfulness in Learning',
    description: 'Discover how mindfulness practices can enhance focus, retention, and overall learning effectiveness.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'March 3, 2024',
    readTime: '4 min read',
    category: 'Psychology'
  }
];

const categories = ['All', 'Technology', 'Education', 'Psychology'];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Articles
      </PageTitle>

      <SearchBar
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SearchInput
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>

      <CategoryFilter>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <BlogGrid>
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogImage imageUrl={post.imageUrl} className="blog-image" />
                <BlogContent>
                  <BlogCategory>{post.category}</BlogCategory>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogDescription>{post.description}</BlogDescription>
                  <BlogMeta>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </BlogMeta>
                  <ReadMoreButton
                    className="read-more"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))
          ) : (
            <NoResults
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No articles found matching your criteria
            </NoResults>
          )}
        </AnimatePresence>
      </BlogGrid>
    </PageContainer>
  );
}; 