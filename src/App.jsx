import useFetchData from "./useFetchData";
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
    const { data, loading, error } = useFetchData(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) {
        return <h2 className="loading">Loading Users...</h2>;
    }

    if (error) {
        return <h2 className="error">{error}</h2>;
    }

    return (
        <div className="app">
            <h1>Our Users</h1>
            <p className="subtitle">User Details from JSONPlaceholder API</p>

            <div className="user-container">
                {data.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default App;