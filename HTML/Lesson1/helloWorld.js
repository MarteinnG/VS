


const user1 = {
    name: 'Paul',
    age: 20,
    salary: 600000,
    job: 'Software Developer',
};

const user2 = {
    name: 'Lisa',
    age: 30,
    salary: 900000,
    job: 'Senior Software Developer',
};

const calcAvgForTwoPeople = (paul,lisa) => {
    const { salary: paulSalary, age: paulAge } = paul;
    const { salary: lisaSalary, age: lisaAge } = lisa;

    const avgSalary = ((user1.salary + user2.salary) / 2);
    const avgAge = ((user1.age + user2.age) / 2);

    return {
        avgAge: avgAge,
        avgSalary: avgSalary,
    };
};

const avgObject = calcAvgForTwoPeople(user1, user2);
console.log(avgObject);