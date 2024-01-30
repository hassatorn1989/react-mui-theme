import { useState } from 'react'
import Layout from './Layout'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
