const App = () => {
    return (
        <div>
            <Tweet 
                name="Jimmy Neutron"
                username="jimmynew2000"
                date={new Date().toDateString()}
                message="Brain blast!!!"
            />
            <Tweet 
                name="Timmy Turner"
                username="fairlyoddguy"
                date={new Date().toDateString()}
                message="Cosmo and Wanda say hey!"
            />
            <Tweet 
                name="Spongebob Squarepants"
                username="garysdad1999"
                date={new Date().toDateString()}
                message="I'm ready I'm ready I'm ready"
            />
        </div>
    )
}