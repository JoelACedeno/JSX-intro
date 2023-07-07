function App() {
    return (
        <div>
            <Person 
                name="Joe"
                age={30}
                hobbies={["skateboarding", "swimming", "art"]}
            />
            <Person 
                name="Jake"
                age={27}
                hobbies={["skydiving", "rock climbing"]}
            />
            <Person 
                name="Jill"
                age={29}
                hobbies={["painting", "thrifting", "singing"]}
            />
        </div>
    );
}