import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll } from 'framer-motion';
import { theme, CustomTheme } from '../../../styles/theme';
import { ErrorBoundary } from '../../ErrorBoundary';

type ThemedProps = { theme: CustomTheme };
type MotionProps = React.ComponentProps<typeof motion.div>;
type ThemedMotionProps = ThemedProps & MotionProps;

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  category: string;
  progress?: number;
  tags: string[];
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0A192F;
  padding: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(17, 34, 64, 0.5);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);

  h1 {
    font-size: 4.5rem;
    color: #E6F1FF;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    color: #8892B0;
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const FilterBar = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background: #112240;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)<{ active?: boolean }>`
  background: ${props => props.active ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#64FFDA' : '#8892B0'};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 1px solid ${props => props.active ? '#64FFDA' : 'rgba(100, 255, 218, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    color: #64FFDA;
    border-color: #64FFDA;
    transform: translateY(-2px);
  }
`;

const SearchBar = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  position: relative;

  input {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    padding-left: 3rem;
    background: rgba(17, 34, 64, 0.5);
    border: 1px solid rgba(100, 255, 218, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.full};
    color: #E6F1FF;
    font-size: ${({ theme }) => theme.typography.fontSize.md};

    &::placeholder {
      color: #8892B0;
    }

    &:focus {
      outline: none;
      border-color: #64FFDA;
      box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
    }
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #8892B0;
    font-size: 1.2rem;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

const CourseCard = styled(motion.div)`
  background: #112240;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-10px);
    border-color: #64FFDA;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .course-image {
      transform: scale(1.1);
    }

    .course-image::after {
      opacity: 1;
    }

    .course-content {
      transform: translateZ(20px);
    }

    .course-title {
      color: #64FFDA;
    }

    .course-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CourseImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: transform 0.5s ease;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const CourseContent = styled.div`
  transition: transform 0.3s ease;
`;

const CourseTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;
`;

const CourseDescription = styled.p`
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #64FFDA;
`;

const CourseActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ActionButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &.primary {
    background: #64FFDA;
    color: #0A192F;

    &:hover {
      background: #4CD8B2;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: #64FFDA;
    border: 1px solid #64FFDA;

    &:hover {
      background: rgba(100, 255, 218, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const CourseProgress = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-top: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)<{ progress: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary[500]};
  width: ${props => props.progress}%;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const CourseTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const courses = [
  {
    id: 1,
    title: 'Advanced Machine Learning',
    description: 'Master the latest ML algorithms and techniques with hands-on projects.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'Data Science',
    progress: 80,
    tags: ['Machine Learning', 'Data Science']
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Build modern web applications from scratch using the latest technologies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    duration: '16 weeks',
    level: 'Intermediate',
    category: 'Web Development',
    progress: 70,
    tags: ['Web Development', 'JavaScript']
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and statistical methods.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    duration: '10 weeks',
    level: 'Beginner',
    category: 'Data Science',
    progress: 50,
    tags: ['Data Analysis', 'Statistics']
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Create powerful mobile applications for iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    duration: '14 weeks',
    level: 'Intermediate',
    category: 'Mobile Development',
    progress: 60,
    tags: ['Mobile Development', 'iOS', 'Android']
  },
  {
    id: 5,
    title: 'Cloud Computing & DevOps',
    description: 'Master cloud platforms and modern DevOps practices.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'Cloud & DevOps',
    progress: 75,
    tags: ['Cloud Computing', 'DevOps', 'AWS']
  },
  {
    id: 6,
    title: 'UI/UX Design Masterclass',
    description: 'Learn to create beautiful and user-friendly interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Design',
    progress: 55,
    tags: ['UI/UX Design', 'User Experience']
  }
];

const categories = ['All', 'Data Science', 'Web Development', 'Mobile Development', 'Cloud & DevOps', 'Design'];

export const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollYProgress } = useScroll();

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ErrorBoundary>
      <PageContainer>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Explore Our Courses</h1>
          <p>
            Discover a wide range of courses designed to help you master new skills
            and advance your career with our AI-powered learning platform.
          </p>
        </Header>

        <FilterBar
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchBar>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterBar>

        <CoursesGrid>
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <CourseImage className="course-image">
                <img src={course.image} alt={course.title} />
              </CourseImage>
              <CourseContent className="course-content">
                <CourseTitle className="course-title">{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
                <CourseMeta>
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </CourseMeta>
                <CourseProgress>
                  <ProgressBar
                    progress={course.progress || 0}
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress || 0}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </CourseProgress>
                <CourseTags>
                  {course.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </CourseTags>
                <CourseActions className="course-actions">
                  <ActionButton
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Continue Learning</span>
                  </ActionButton>
                  <ActionButton
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Details</span>
                  </ActionButton>
                </CourseActions>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
      </PageContainer>
    </ErrorBoundary>
  );
}; 