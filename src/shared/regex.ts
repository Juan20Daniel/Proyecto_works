export const expretions:Record<string, RegExp> = {
    email: /^[a-zA-Z0-9+%,=\._-]{1,64}@[a-zA-Z0-9\.-]{1,63}\.[a-zA-Z]{2,15}(\.[a-zA-Z]{2,5})?$/,
    password: /^.{8,}$/,
    typeWork: /^.{3,}$/,
    companyName: /^.{8,}$/,
    salary: /^.{8,}$/,
    schedule: /^.{8,}$/,
}