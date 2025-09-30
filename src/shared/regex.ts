export const expretions:Record<string, RegExp> = {
    logoCompany: /^.{3,}$/,
    email: /^[a-zA-Z0-9+%,=\._-]{1,64}@[a-zA-Z0-9\.-]{1,63}\.[a-zA-Z]{2,15}(\.[a-zA-Z]{2,5})?$/,
    password: /^.{8,}$/,
    typeWork: /^.{3,}$/,
    companyName: /^.{8,}$/,
    minimumWage: /^.{8,}$/,
    maximumWage: /^.{8,}$/,
    schedule: /^.{8,}$/,
    description: /^.{8,}$/,
    companyDesc: /^.{8,}$/,
    requirements: /^.{8,}$/,
    benefits: /^.{8,}$/,
}