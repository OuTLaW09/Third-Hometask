function registerCustomer() {
    const lastName = prompt("Please enter your last name:");
    const firstName = prompt("Please enter your first name:");
    const email = prompt("Please enter your email address:");

    return `Last Name: ${lastName}, First Name: ${firstName}, Email: ${email}`;
}

const customerInfo = registerCustomer();
console.log(customerInfo);