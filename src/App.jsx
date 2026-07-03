import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AssignmentTrackerPage from "./pages/AssignmentTrackerPage";
import StudyPlannerPage from "./pages/StudyPlannerPage";
import CareerPathwayPage from "./pages/CareerPathwayPage";
import ProfilePage from "./pages/ProfilePage";
import BurnoutCenterPage from "./pages/BurnoutCenterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { PrivacyPage, TermsPage } from "./pages/LegalPages";

// Each Route connects a URL to one page component.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* These pages share the same sidebar and top navigation. */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/assignments" element={<AssignmentTrackerPage />} />
        <Route path="/study-planner" element={<StudyPlannerPage />} />
        <Route path="/career-pathway" element={<CareerPathwayPage />} />
        <Route path="/burnout-center" element={<BurnoutCenterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Unknown URLs return visitors to the landing page. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
