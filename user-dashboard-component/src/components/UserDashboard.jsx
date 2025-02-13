// src/components/UserDashboard.jsx
import * as React from 'react';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      this.setState({ users: data, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
    }

    if (error) {
      return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>{error}</div>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>User Dashboard</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px', 
          padding: '20px' 
        }}>
          {users.map(user => (
            <div key={user.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px', 
              backgroundColor: '#fff', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
            }}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
              <p>Website: {user.website}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserDashboard;