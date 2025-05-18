import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const OnboardingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const OnboardingCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: 25px;
  border: 2px solid rgba(100, 255, 218, 0.2);
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 800px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const ProgressStep = styled.div<{ active?: boolean; completed?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ active, completed }) =>
    completed
      ? 'linear-gradient(135deg, #64FFDA, #4FD1C5)'
      : active
      ? 'rgba(100, 255, 218, 0.2)'
      : 'rgba(17, 34, 64, 0.8)'};
  border: 2px solid
    ${({ active, completed }) =>
      completed
        ? 'rgba(100, 255, 218, 0.5)'
        : active
        ? 'rgba(100, 255, 218, 0.3)'
        : 'rgba(100, 255, 218, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active, completed }) =>
    completed ? '#0A192F' : active ? '#64FFDA' : '#8892B0'};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
  }
`;

const StepContent = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  option {
    background: #112240;
    color: #E6F1FF;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const CourseCard = styled(motion.div)<{ selected?: boolean }>`
  background: ${({ selected }) =>
    selected
      ? 'rgba(100, 255, 218, 0.1)'
      : 'rgba(17, 34, 64, 0.8)'};
  border: 2px solid
    ${({ selected }) =>
      selected
        ? 'rgba(100, 255, 218, 0.4)'
        : 'rgba(100, 255, 218, 0.2)'};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.md};
`;

const Button = styled(motion.button)<{ primary?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ primary }) =>
    primary
      ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))'
      : 'rgba(17, 34, 64, 0.8)'};
  border: 2px solid
    ${({ primary }) =>
      primary
        ? 'rgba(100, 255, 218, 0.4)'
        : 'rgba(100, 255, 218, 0.2)'};
  border-radius: 12px;
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
    background: ${({ primary }) =>
      primary
        ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3))'
        : 'rgba(17, 34, 64, 0.9)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(17, 34, 64, 0.9);
    border-color: rgba(100, 255, 218, 0.3);
  }

  input[type="radio"] {
    accent-color: #64FFDA;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const CheckboxOption = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(17, 34, 64, 0.9);
    border-color: rgba(100, 255, 218, 0.3);
  }

  input[type="checkbox"] {
    accent-color: #64FFDA;
  }
`;

const ErrorMessage = styled.div`
  color: #FF6B6B;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const courses = [
  { id: 1, name: 'Mathematics', icon: '📐' },
  { id: 2, name: 'Physics', icon: '⚛️' },
  { id: 3, name: 'Chemistry', icon: '🧪' },
  { id: 4, name: 'Biology', icon: '🧬' },
  { id: 5, name: 'Computer Science', icon: '💻' },
  { id: 6, name: 'English', icon: '📚' },
  { id: 7, name: 'History', icon: '🏛️' },
  { id: 8, name: 'Geography', icon: '🌍' },
];

const learningStyles = [
  { id: 1, name: 'Visual Learner', description: 'Learn best through images and spatial understanding' },
  { id: 2, name: 'Auditory Learner', description: 'Learn best through listening and speaking' },
  { id: 3, name: 'Reading/Writing Learner', description: 'Learn best through reading and writing' },
  { id: 4, name: 'Kinesthetic Learner', description: 'Learn best through hands-on activities' },
];

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    educationLevel: '',
    selectedCourses: [] as number[],
    learningStyle: '',
    studyGoals: '',
    studyHours: '',
    preferredLearningTime: [] as string[],
    learningEnvironment: '',
    previousExperience: '',
    motivation: '',
    challenges: '',
    supportNeeded: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.educationLevel) newErrors.educationLevel = 'Education level is required';
        break;
      case 2:
        if (formData.selectedCourses.length === 0) newErrors.selectedCourses = 'Please select at least one course';
        break;
      case 3:
        if (!formData.learningStyle) newErrors.learningStyle = 'Learning style is required';
        if (!formData.studyHours) newErrors.studyHours = 'Study hours are required';
        if (formData.preferredLearningTime.length === 0) newErrors.preferredLearningTime = 'Please select preferred learning times';
        if (!formData.learningEnvironment) newErrors.learningEnvironment = 'Learning environment is required';
        break;
      case 4:
        if (!formData.studyGoals) newErrors.studyGoals = 'Study goals are required';
        if (!formData.previousExperience) newErrors.previousExperience = 'Previous experience is required';
        if (!formData.motivation) newErrors.motivation = 'Motivation is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCourseSelect = (courseId: number) => {
    setFormData(prev => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(courseId)
        ? prev.selectedCourses.filter(id => id !== courseId)
        : [...prev.selectedCourses, courseId],
    }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      } else {
        setUserData(formData);
        navigate('/dashboard');
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FormGroup>
              <Label>What's your name?</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What's your email?</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What's your age?</Label>
              <Select
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              >
                <option value="">Select your age range</option>
                <option value="13-17">13-17 years</option>
                <option value="18-24">18-24 years</option>
                <option value="25-34">25-34 years</option>
                <option value="35-44">35-44 years</option>
                <option value="45+">45+ years</option>
              </Select>
              {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What's your education level?</Label>
              <Select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="other">Other</option>
              </Select>
              {errors.educationLevel && <ErrorMessage>{errors.educationLevel}</ErrorMessage>}
            </FormGroup>
          </StepContent>
        );
      case 2:
        return (
          <StepContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Label>Select your courses</Label>
            <CourseGrid>
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  selected={formData.selectedCourses.includes(course.id)}
                  onClick={() => handleCourseSelect(course.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{course.icon}</div>
                  <div>{course.name}</div>
                </CourseCard>
              ))}
            </CourseGrid>
            {errors.selectedCourses && <ErrorMessage>{errors.selectedCourses}</ErrorMessage>}
          </StepContent>
        );
      case 3:
        return (
          <StepContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FormGroup>
              <Label>What's your learning style?</Label>
              <RadioGroup>
                {learningStyles.map(style => (
                  <RadioOption key={style.id}>
                    <input
                      type="radio"
                      name="learningStyle"
                      value={String(style.id)}
                      checked={formData.learningStyle === String(style.id)}
                      onChange={handleInputChange}
                    />
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#64FFDA' }}>{style.name}</div>
                      <div style={{ fontSize: '0.9em', color: '#8892B0' }}>{style.description}</div>
                    </div>
                  </RadioOption>
                ))}
              </RadioGroup>
              {errors.learningStyle && <ErrorMessage>{errors.learningStyle}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>How many hours can you study per day?</Label>
              <Select
                name="studyHours"
                value={formData.studyHours}
                onChange={handleInputChange}
              >
                <option value="">Select study hours</option>
                <option value="1-2">1-2 hours</option>
                <option value="2-4">2-4 hours</option>
                <option value="4-6">4-6 hours</option>
                <option value="6+">6+ hours</option>
              </Select>
              {errors.studyHours && <ErrorMessage>{errors.studyHours}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>When do you prefer to study?</Label>
              <CheckboxGroup>
                {['Morning', 'Afternoon', 'Evening', 'Night'].map(time => (
                  <CheckboxOption key={time}>
                    <input
                      type="checkbox"
                      checked={formData.preferredLearningTime.includes(time)}
                      onChange={() => handleCheckboxChange('preferredLearningTime', time)}
                    />
                    {time}
                  </CheckboxOption>
                ))}
              </CheckboxGroup>
              {errors.preferredLearningTime && <ErrorMessage>{errors.preferredLearningTime}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What's your preferred learning environment?</Label>
              <Select
                name="learningEnvironment"
                value={formData.learningEnvironment}
                onChange={handleInputChange}
              >
                <option value="">Select your preference</option>
                <option value="quiet">Quiet and peaceful</option>
                <option value="background-noise">With background noise</option>
                <option value="music">With music</option>
                <option value="group">Group study</option>
                <option value="flexible">Flexible/Adaptable</option>
              </Select>
              {errors.learningEnvironment && <ErrorMessage>{errors.learningEnvironment}</ErrorMessage>}
            </FormGroup>
          </StepContent>
        );
      case 4:
        return (
          <StepContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FormGroup>
              <Label>What are your study goals?</Label>
              <TextArea
                name="studyGoals"
                value={formData.studyGoals}
                onChange={handleInputChange}
                placeholder="e.g., Improve grades, Prepare for exams, Learn new skills"
              />
              {errors.studyGoals && <ErrorMessage>{errors.studyGoals}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What's your previous experience with these subjects?</Label>
              <TextArea
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                placeholder="Tell us about your experience with the subjects you selected"
              />
              {errors.previousExperience && <ErrorMessage>{errors.previousExperience}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What motivates you to learn?</Label>
              <TextArea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Share what drives you to learn and improve"
              />
              {errors.motivation && <ErrorMessage>{errors.motivation}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label>What challenges do you face in learning?</Label>
              <TextArea
                name="challenges"
                value={formData.challenges}
                onChange={handleInputChange}
                placeholder="Tell us about any difficulties you encounter while studying"
              />
            </FormGroup>
            <FormGroup>
              <Label>What kind of support do you need?</Label>
              <TextArea
                name="supportNeeded"
                value={formData.supportNeeded}
                onChange={handleInputChange}
                placeholder="Describe the type of support that would help you learn better"
              />
            </FormGroup>
          </StepContent>
        );
      default:
        return null;
    }
  };

  return (
    <OnboardingContainer>
      <OnboardingCard>
        <ProgressBar>
          {[1, 2, 3, 4].map(step => (
            <ProgressStep
              key={step}
              active={currentStep === step}
              completed={currentStep > step}
            >
              {step}
            </ProgressStep>
          ))}
        </ProgressBar>

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        <ButtonGroup>
          {currentStep > 1 && (
            <Button onClick={handleBack} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Back
            </Button>
          )}
          <Button
            primary
            onClick={handleNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentStep === 4 ? 'Get Started' : 'Next'}
          </Button>
        </ButtonGroup>
      </OnboardingCard>
    </OnboardingContainer>
  );
}; 