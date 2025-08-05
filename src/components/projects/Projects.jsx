import React from 'react';
import './Projects.css'; // Custom CSS for styling

const Projects = () => {
  const cards = [
    { title: 'Card 1', content: 'This is the first card with some sample content.', image: 'https://via.placeholder.com/300x200?text=Card+1' },
    { title: 'Card 2', content: 'This is the second card with different content.', image: 'https://via.placeholder.com/300x200?text=Card+2' },
    { title: 'Card 3', content: 'This is the third card with unique content.', image: 'https://via.placeholder.com/300x200?text=Card+3' },
    { title: 'Card 4', content: 'This is the fourth card with sample content.', image: 'https://via.placeholder.com/300x200?text=Card+4' },
  ];

  // Group cards into sets of 3 (for structure, but we'll scroll all)
  const cardGroups = [];
  for (let i = 0; i < cards.length; i += 3) {
    cardGroups.push(cards.slice(i, i + 3));
  }

  return (
    <section className="card-carousel-section">
      <h2 className="text-center mb-4">Featured Cards</h2>
      <div className="carousel-wrapper">
        <div className="d-flex justify-content-center continuous-scroll">
          {cards.concat(cards).map((card, index) => ( // Duplicate cards for seamless looping
            <div className="carousel-card" key={index}>
              <img className="d-block w-100" src={card.image} alt={card.title} />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;