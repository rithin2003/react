const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <div className="user-number">{user.id}</div>
            <h2>{user.name}</h2>
            <p><span>Username:</span> {user.username}</p>
            <p><span>Email:</span> {user.email}</p>
            <p><span>Phone:</span> {user.phone}</p>
            <p><span>Website:</span> {user.website}</p>
            <p><span>City:</span> {user.address.city}</p>
        </div>
    );
};

export default UserCard;