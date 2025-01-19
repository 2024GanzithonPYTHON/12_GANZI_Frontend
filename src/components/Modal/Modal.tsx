// ModalWrapper: 모달의 배경
// ModalContent: 모달의 내부 컨텐츠
import React from 'react';
import styled from 'styled-components';
import { NextButton } from '../Button';
import { useNavigate } from 'react-router-dom';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const ModalMessage = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
`;

const CloseButton = styled(NextButton)`
  background: #0066ff;
  color: white;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #0056d1;
  }
`;

interface ModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
    destination: boolean;
    endpoint?: string
}

const Modal = ({ isOpen, title, message, onClose, destination, endpoint}: ModalProps) => {
const navigate = useNavigate();

const handleSubmit = () => {
    if (destination && endpoint) {
      navigate(`/${endpoint}`); // endpoint를 직접 참조
    }
    onClose(); // 모달 닫기
  };
  

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>{title}!</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <CloseButton onClick={handleSubmit}>
            {destination && endpoint ? `${endpoint}로` : "확인"}
        </CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
