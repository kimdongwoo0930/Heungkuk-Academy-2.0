import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';

export const Root = () => {
  return (
    <Layout>
      <Navigation />
      <Outlet />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
`;
