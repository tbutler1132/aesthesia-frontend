

function Test() {

    interface Person {
        name: string,
        age: number
    }

    const greet = (person: Person) => {
        return "Hello" + person.name
    }

    return (
        <div>
            {greet({
                name: "Hey",
                age: 12
            })}
        </div>
    );
}

export default Test;
