import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import AppShell from './components/AppShell.jsx'
import KarteScreen from './pages/app/KarteScreen.jsx'
import EventsScreen from './pages/app/EventsScreen.jsx'
import CommunityScreen from './pages/app/CommunityScreen.jsx'
import ExpertsScreen from './pages/app/ExpertsScreen.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<AppShell />}>
        <Route index element={<Navigate to="karte" replace />} />
        <Route path="karte" element={<KarteScreen />} />
        <Route path="events" element={<EventsScreen />} />
        <Route path="community" element={<CommunityScreen />} />
        <Route path="experten" element={<ExpertsScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
