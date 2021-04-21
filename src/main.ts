import * as core from '@actions/core'

export function greet(name: string) {
    return `Hello ${name}`
}

const nameInput = core.getInput("name")
core.info(greet(nameInput))
