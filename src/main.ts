import * as core from '@actions/core'

export function greet(name: string) {
    return `Hello ${name}`
}

Object.keys(process.env).forEach(key => {
    core.info(key + " = " + process.env[key]!)
})

const nameInput = core.getInput("name")
core.info(greet(nameInput))
