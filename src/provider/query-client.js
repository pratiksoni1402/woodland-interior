'use client';

// const { QueryClient, QueryClientProvider } = require('@tanstack/react-query');
// const { useState } = require('react');
// const { ReactQueryDevtools } = require('@tanstack/react-query-devtools');
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import React from "react";

export default function QueryClientProviders({ children }) {
    const [queryClient] = useState(() => new QueryClient());
  
    return (
      React.createElement(QueryClientProvider, { client: queryClient },
        children,
        React.createElement(ReactQueryDevtools, { initialIsOpen: false })
      )
    );
  }
  
//   module.exports = QueryClientProviders;
  