// Adding a hover effect to highlight skills dynamically and have them pop out to the person's view. 

document.querySelectorAll('.skills-section li').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#0d6efd';
        skill.style.color = '#fff';
        skill.style.transition = '0.3s';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#e9f5f9';
        skill.style.color = '#333';
    });
});

// Add scroll animation for experiences (slide in when in view if we get a lot of cool skills to include)
const experiences = document.querySelectorAll('.experience-box');

const observerOptions = {
    threshold: 0.8 // Trigger when all of the skill section is in view. This makes the information pop up more to the observer and makes them more engaged with what the experience you have :)
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in'); // Add the slide-in class
            observer.unobserve(entry.target); // Stop observing once the animation is triggered.
        }
    });
}, observerOptions);

experiences.forEach(experience => {
    observer.observe(experience);
});
