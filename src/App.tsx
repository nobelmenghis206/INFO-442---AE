import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import InterviewDetail from "./pages/InterviewDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Contributions from "./pages/Contributions";
import Interviews from "./pages/Interviews";
import CreateInterview from "./pages/CreateInterview";
import InterviewSubmissionForm from "./components/InterviewSubmissionForm";
// Firebase test
import FirebaseTest from "./pages/FirebaseTest";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (previously cacheTime)
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <Router>
            <main>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/bookmarks" element={
                  <ProtectedRoute>
                    <Bookmarks />
                  </ProtectedRoute>
                } />
                <Route path="/my-contributions" element={
                  <ProtectedRoute>
                    <Contributions />
                  </ProtectedRoute>
                } />
                <Route path="/interviews" element={
                  <ProtectedRoute>
                    <Interviews />
                  </ProtectedRoute>
                } />
                <Route path="/create-interview" element={
                  <ProtectedRoute>
                    <CreateInterview />
                  </ProtectedRoute>
                } />
                <Route path="/interview/:id" element={
                  <ProtectedRoute>
                    <InterviewDetail />
                  </ProtectedRoute>
                } />
                <Route path="/onboarding" element={
                  <ProtectedRoute>
                    <Onboarding />
                  </ProtectedRoute>
                } />
                <Route
                  path="/share-experience"
                  element={
                    <ProtectedRoute>
                      <InterviewSubmissionForm />
                    </ProtectedRoute>
                  }
                />
                
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
