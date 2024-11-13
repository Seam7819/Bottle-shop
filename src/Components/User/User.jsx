
const User = ({user}) => {
    console.log(user);
    return (
        <div>
            <h1>Name: {user.name}  </h1>
            <p>Email{user.email}</p>
        </div>
    );
};

export default User;