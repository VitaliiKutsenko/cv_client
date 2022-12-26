import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CvNavigationBar } from './components/cvNavigationBar';
import styled from 'styled-components';
import { ResumePage } from './pages/resumePage';
import { AboutMyselfPage } from './pages/aboutMyselfPage';
import { PortfolioPage } from './pages/portfolioPage';
import { ContactsPage } from './pages/contactsPage';
import { CvHeader } from './cvHeader';
import { CvMain } from './cvMain';
import CvMenu_v2 from './menu_v2/cvMenu_v2';

export const CvPage = () => {
  return (
    <CvPageWrapper>
      <CvHeader />
      <PageContainer>
        <CvNavigationBar />
        <CvMain>
          <Routes>
            <Route path="resume" element={<ResumePage />} />
            <Route path="about_myself" element={<AboutMyselfPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Routes>
        </CvMain>
      </PageContainer>
    </CvPageWrapper>
  );
};

export const CvPageWrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  position: relative;
`;
export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
