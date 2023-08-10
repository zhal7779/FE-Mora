import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  Children,
  cloneElement,
  ReactElement,
} from 'react';
import styled, { keyframes } from 'styled-components';
import upIcon from '../assets/icons/u_angle-up.svg';
import downIcon from '../assets/icons/u_angle-down.svg';

interface SignInAccordionProps {
  children: ReactNode;
}
interface AccordionButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const SignInAccordion = ({ children }: SignInAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const firstChildRef = useRef<HTMLInputElement>(null);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded && firstChildRef.current) {
      firstChildRef.current.focus();
    }
  }, [expanded]);

  return (
    <AccordionWrapper>
      <AccordionButton onClick={toggleAccordion} expanded={expanded}>
        이메일로 시작하기
        {expanded ? (
          <AccordionIcon src={upIcon} alt='Up Icon' />
        ) : (
          <AccordionIcon src={downIcon} alt='Down Icon' />
        )}
      </AccordionButton>
      <AccordionContent expanded={expanded}>
        {Children.map(children, (child, index) => {
          if (index === 0) {
            return cloneElement(child as ReactElement, { ref: firstChildRef });
          }
          return child;
        })}
      </AccordionContent>
    </AccordionWrapper>
  );
};

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 420px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 420px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const AccordionWrapper = styled.div`
  margin-top: 20px;
`;

const AccordionButton = styled.button<AccordionButtonProps>`
  display: inline-block;
  width: 35.2rem;
  height: 48px;
  margin-top: 0.3rem;
  border-radius: 1.2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background-color: #7353ea;
  color: #ffffff;
  padding: 11px 21px 9px 21px;
  cursor: pointer;

  &:hover {
    background: #5e3de4;
    transition: all 0.2s ease-in-out;
  }
  &:not(:hover) {
    background: #7353ea;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    background: #532eda;
    transition: all 0.2s ease-in-out;
  }
`;

const AccordionIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 0 0.4rem 0.7rem;
`;

const AccordionContent = styled.div<{ expanded: boolean }>`
  background-color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)} 0.3s ease-in-out;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  overflow: hidden;
`;

export default SignInAccordion;
