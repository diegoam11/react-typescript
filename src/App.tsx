import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

interface AppState {
  users: Array<User>,
  usersPremium: number  // by now
}

interface User {
  nick: string,
  level: number,
  avatar: string,
  description?: string
}

const INITIAL_STATE = [
  {
    nick: 'user12a',
    level: 15,
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Smokey',
    description: 'first user in the game'
  },
  {
    nick: 'alfonso213',
    level: 45,
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Boo'
  }
]


function App() {
  const [users, setUsers] = useState<AppState["users"]>([]);
  const [usersPremium, setUsersPremium] = useState<AppState["usersPremium"]>(0);
  useEffect(() => {
    setUsers(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <List users={users}></List>
      <Form></Form>
    </div>
  );
}

export default App;
