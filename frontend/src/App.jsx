import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Logs from './pages/Logs';
import Account from './pages/Account';
import Header from './components/Header';
import Edit from './pages/Edit';

export default function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/log" element={<Logs />} />
        <Route path="/acc" element={<Account />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
