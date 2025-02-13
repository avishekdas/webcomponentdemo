import React from 'react';
import UserDashboard from 'user-dashboard-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Host Application</h1>
      </header>
      <main>
        <UserDashboard />
      </main>
    </div>
  );
}

export default App;