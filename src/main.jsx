import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router/>
        </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
)


