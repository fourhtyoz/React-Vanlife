import about_image from '/Users/nicklesydney/Desktop/Coding/JavaScript/Projects/React Router 6/challenge_1/public/assets/images/van2.jpg'

export default function About() {
    return (
        <div className="about--container">
            <img src={about_image} />
            <p className="about--container--header">Do not squezze in a sedan when you could relax in a van.</p>
            <p className="about--container--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo cum natus, necessitatibus nesciunt atque illum ut soluta ad dolor, quas libero reprehenderit reiciendis velit harum a aperiam qui blanditiis.</p>
            <div className="about--container--block">
                Your destination is waiting. 
                <br />
                Your van is ready.
                <br />
                <button className="about--container--block--button">Explore our vans</button>
            </div>
        </div>
    )
}