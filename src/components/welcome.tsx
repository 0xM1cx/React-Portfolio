type GreetUser = {
    name: string;
    age: number;
}

export const Greet = (user: GreetUser) => {
    return(
        <>
            <h1>
                Welcome {user.name}
            </h1>
            <p>To confirm you are now {user.age} years old</p>
        </>
    )
}

