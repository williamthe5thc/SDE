//src/tests/setup/test-utils.tsx
import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from '@/context/GlobalContext';
import { AuthProvider } from '@/context/AuthContext';

interface WrapperProps {
  children: React.ReactNode;
  route?: string;
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  initialState?: any;
}

function Wrapper({ children, route = '/' }: WrapperProps) {
  return (
    <GlobalContextProvider>
      <AuthProvider>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={route} element={children} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    </GlobalContextProvider>
  );
}

function customRender(
  ui: React.ReactElement,
  { route = '/', initialState, ...renderOptions }: CustomRenderOptions = {}
) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Wrapper route={route}>{children}</Wrapper>
    ),
    ...renderOptions,
  });
}

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };