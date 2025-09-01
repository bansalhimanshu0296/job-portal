import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import '@mantine/carousel/styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FindJobsPage from './pages/FindJobs/FindJobsPage';
import FindTalentPage from './pages/FindTalent/FindTalentPage';
import TalentProfilePage from './pages/TalentProfile/TalentProfilePage';
import PostJobPage from './pages/PostJob/PostJobPage';
import JobDescPage from './pages/JobDesc/JobDescPage';
import ApplyJobPage from './pages/ApplyJob/ApplyJobPage';
import ScrollToTop from './components/Common/ScrollToTop';
import OrganizationPage from './pages/OrganizationProfile/OrganizationPage';
import PostedJobPage from './pages/PostedJob/PostedJobPage';

function App() {
  
  const theme = createTheme({
    colors:{
      brightSun: [
        '#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b75006',
        '#943c0c',
        '#7a330d',
        '#461902',
      ],
      mineShaft: [
        '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d',
      ],
    },
    fontFamily: "poppins, sans-serif",
    focusRing: "never",
    primaryColor: 'brightSun',
    primaryShade: 4
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter >
        <ScrollToTop />
        <div className="relative">
          <Header />
          <Divider size="xs" mx="md"/>
          <Routes>
            <Route path='/find-jobs' element={<FindJobsPage />} />
            <Route path='/job' element={<JobDescPage />} />
            <Route path='/find-talents' element={<FindTalentPage />} />
            <Route path='/talent-profile' element={<TalentProfilePage />} />
            <Route path='/post-job' element={<PostJobPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/organization-page" element={<OrganizationPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path='*' element={<HomePage/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
