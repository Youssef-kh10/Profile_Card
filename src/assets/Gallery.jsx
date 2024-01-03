
import UserProfile from './UserProfile';

const Gallery = () => {

    const userData = [ 
        { 
      
          id: 1, 
      
          name: "Ali Dahmani", 
      
          description: "Full stack .Net/React developer", 
      
          imageUrl: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0', 
      
          age: "28 ans", 
      
          mobilite: "national", 
      
          disponibilité: "immédiate", 
      
          location: "Rabat, Maroc", 
      
          interests: ["Musique", "Voyage", "Lecture"] 
      
        }, 
      
        { 
      
          id: 2, 
      
          name: "Lina Al-Farsi", 
      
          description: "Mobile developer", 
      
          imageUrl: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0', 
      
          age: "32 ans", 
      
          mobilite: "international", 
      
          disponibilité: "1 mois", 
      
          location: "Dubaï, Émirats Arabes Unis", 
      
          interests: ["Technologie", "Cinéma", "Yoga"] 
      
        }, 
      
        { 
      
          id: 3, 
      
          name: "Youssef Amrani", 
      
          description: "Data scientist", 
      
          imageUrl: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0', 
      
          age: "30 ans", 
      
          mobilite: "national", 
      
          disponibilité: "immédiate", 
      
          location: "Casablance, Maroc", 
      
          interests: ["Programmation", "Jeux vidéo", "Voyage"] 
      
        }, 
      
        { 
      
          id: 4, 
      
          name: "Sara Khoury", 
      
          description: "Full stack .Net/React developer", 
      
          imageUrl: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0', 
      
          age: "26 ans", 
      
          mobilite: "international", 
      
          disponibilité: "3 mois", 
      
          location: "Meknes, Maroc", 
      
          interests: ["AI", "Robotique", "Lecture"] 
      
        }, 
      
        { 
      
          id: 5, 
      
          name: "Amal Salim", 
      
          description: "Full stack JEE/Angular developer", 
      
          imageUrl: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0', 
      
          age: "35 ans", 
      
          mobilite: "national", 
      
          disponibilité: "immédiate", 
      
          location: "Casablanca, Maroc", 
      
          interests: ["Musique", "Sports", "Technologie"] 
      
        } 
    ]

    return (
        <div>
            {userData.map((user, index) => (
                <UserProfile
                    key={index}
                    name={user.name}
                    description={user.description}
                    imageUrl={user.imageUrl}
                    age={user.age}
                    mobilite={user.mobilite}
                    disponibilité={user.disponibilité}
                    location={user.location}
                    interests={user.interests}
                    
                />
            ))}
        </div>
    );
};

export default Gallery;
