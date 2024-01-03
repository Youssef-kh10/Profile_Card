const UserProfile = ({ name, description, imageUrl, age, mobilite, disponibilité, location, interests }) => {
    return (
        <> 
        <div style={{textAlign:"center", boxShadow:"5px 5px 10px 0px rgba(0, 0, 0, 0.5)", width:"500px", padding:"50px",marginLeft:"500px",borderRadius:"30px", marginTop:"50px"}}>
            <div className="profile-card" >
                <img src={imageUrl} alt="zizo" style={{height:"80px",width:"80px", borderRadius:"50px" }}/>
                <h2>{name}</h2>
                <p>Description: {description}</p>
            </div>
            <div>
                <p>Age: {age}</p>
                <p>Mobilite: {mobilite}</p>
                <p>Disponibilité: {disponibilité}</p>
                <p>Location: {location}</p>
                <ul style={{listStyle:"none"}}>
                    {interests && interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
            </div>
        </>
    );
};

export default UserProfile;
