import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils/ticketUtils';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [loading, setLoading] = useState(true);

  // Fetch tickets and users from the API
  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Update grid data when grouping, ordering, or tickets change
  useEffect(() => {
    if (tickets.length) {
      setGridData(loadGrid(tickets, grouping, ordering));
      setLoading(false);
    }
  }, [grouping, ordering, tickets]);

  // Handle grouping change
  const onSetGrouping = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  // Handle ordering change
  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }, []);

  // Load settings from localStorage or default values
  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={onSetGrouping}
        ordering={ordering}
        setOrdering={onSetOrdering}
      />
      {loading ? <Loader /> : <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />}
    </div>
  );
}

export default App;
